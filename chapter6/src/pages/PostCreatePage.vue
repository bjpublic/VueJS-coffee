<template>
  <div class="post-create-page">
    <h1>게시물 작성하기</h1>
    <post-create-form @submit="onSubmit"/>
  </div>
</template>

<script>
import api from '@/api'
import PostCreateForm from '@/components/PostCreateForm'

export default {
  name: 'PostCreatePage',
  components: { PostCreateForm },
  methods: {
    onSubmit (payload) {
      const { title, contents } = payload
      api.post('/posts', { title, contents })
        .then(res => {
          alert('게시물이 성공적으로 작성되었습니다.')
          this.$router.push({
            name: 'PostViewPage',
            params: { postId: res.data.id.toString() }
          })
        })
        .catch(err => {
          if (err.response.status === 401) { // UnAuthorized
            alert('로그인이 필요합니다.')
            this.$router.push({ name: 'Signin' })
          } else {
            alert(err.response.data.msg)
          }
        })
    }
  }
}
</script>
