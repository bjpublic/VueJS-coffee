<template>
  <div class="post-view-page">
    <post-view v-if="post" :post="post"/>
    <p v-else>게시글 불러오는 중...</p>
    <router-link :to="{ name: 'PostEditPage', params: { postId } }">수정</router-link>
    <button @click="onDelete">삭제</button>
    <router-link :to="{ name: 'PostListPage' }">목록</router-link>
    <comment-list v-if="post" :comments="post.comments"/>
    <comment-form @submit="onCommentSubmit"/>
  </div>
</template>
<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import PostView from '@/components/PostView'

import api from '@/api'

import CommentForm from '@/components/CommentForm'
import CommentList from '@/components/CommentList'

export default {
  name: 'PostViewPage',
  props: {
    postId: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters([
      'isAuthorized'
    ]),
    ...mapState([
      'post'
    ])
  },
  created () {
    this.fetchPost(this.postId)
      .catch(err => {
        alert(err.response.data.msg)
        this.$router.back()
      })
  },
  methods: {
    onCommentSubmit (comment) {
      if (!this.isAuthorized) {
        alert('로그인이 필요합니다!')
        this.$router.push({ name: 'Signin' })
      } else {
        this.createComment(comment)
          .then(() => {
            alert('댓글이 성공적으로 작성되었습니다.')
          })
          .catch(err => {
            alert(err.response.data.msg)
          })
      }
    },
    onDelete () {
      const {id} = this.post
      api.delete(`/posts/${id}`)
        .then(res => {
          alert('게시물이 성공적으로 삭제되었습니다.')
          this.$router.push({name: 'PostListPage'})
        })
        .catch(err => {
          if (err.response.status === 401) { // UnAuthorized
            alert('로그인이 필요합니다.')
            this.$router.push({name: 'Signin'})
          } else {
            alert(err.response.data.msg)
          }
        })
    },
    ...mapActions([
      'fetchPost',
      'createComment'
    ])
  },
  components: {
    PostView,
    CommentForm,
    CommentList
  }
}
</script>
