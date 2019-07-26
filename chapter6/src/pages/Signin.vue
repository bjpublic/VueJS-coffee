<template>
<div class="sign-in-page">
  <h3>로그인</h3>
  <signin-form @submit="onSubmit"/>
  <p>회원이 아니신가요? <router-link :to="{ name: 'Signup' }">회원가입 하러가기</router-link></p>
</div>
</template>

<script>
import SigninForm from '@/components/SigninForm'
import { mapActions } from 'vuex'

export default {
  name: 'Signin',
  methods: {
    onSubmit (payload) {
      this.signin(payload).then(res => {
        alert('로그인 되었습니다.')
        this.$router.push({ name: 'PostListPage' })
      }).catch(err => {
        alert(err.response.data.msg)
      })
    },
    ...mapActions([ 'signin' ])
  },
  components: {
    SigninForm
  }
}
</script>
