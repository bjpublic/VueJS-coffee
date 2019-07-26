<template>
  <div class="post-edit-page">
    <h1>게시물 수정</h1>
    <post-edit-form v-if="post"
                    :post="post"
                    @submit="onSubmit" />
    <p v-else>게시물 불러오는 중...</p>
  </div>
</template>

<script>
import PostEditForm from '@/components/PostEditForm'
import api from '@/api'
import { mapState } from 'vuex'

export default {
  name: 'PostEditPage',
  components: { PostEditForm },
  props: {
    postId: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState([ 'post' ])
  },
  methods: {
    onSubmit (payload) {
      const { title, contents } = payload
      api.put(`/posts/${this.postId}`, { title, contents })
        .then(res => {
          alert('게시물이 성공적으로 수정되었습니다.')
          this.$router.push({
            name: 'PostViewPage',
            params: { postId: res.data.id.toString() }
          })
        })
        .catch(err => {
          if (err.response.status === 401) { // UnAuthorized
            alert('로그인이 필요합니다.')
            this.$router.push({ name: 'Signin' })
          } else if (err.response.status === 403) { // 남의 게시물 수정 시도
            alert(err.response.data.msg)
            this.$router.back()
          } else {
            alert(err.response.data.msg)
          }
        })
    }
  }
}
</script>
