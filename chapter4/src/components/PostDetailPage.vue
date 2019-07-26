<template>
  <div>
    현재 {{ postId }}번 게시글을 보고 있습니다.
    <router-link :to="{ name: 'PostDetailPage', params: { postId: 2 } }">
      2번 게시물로 이동
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'PostDetailPage',
    props: {
      postId: {
        type: String,
        required: true
      }
    },
    created () {
      console.log(`${this.$route.params.postId}번 게시글의 페이지가 로드되었습니다.`)
    },
    beforeRouteUpdate (to, from, next) {
      console.log('라우트 객체가 변경되었습니다.')
      // next 함수를 호출하지 않으면 다음 라우트로 이동하지 않는다.
      next()
    },
    watch: {
      '$route' (to, from) {
        console.log('라우트 객체가 변경되었습니다.')
      }
    }
  }
</script>
