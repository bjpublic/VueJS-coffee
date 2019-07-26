<template>
  <div class="sign-up-page">
    <h3>회원가입</h3>
    <signup-form @submit="onSubmit"/>
    <p>이미 가입하셨나요? <router-link :to="{ name: 'Signin' }">로그인 하러가기</router-link></p>
  </div>
</template>
<script>
import api from '@/api'
import SignupForm from '@/components/SignupForm'
export default {
  name: 'Signup',
  methods: {
    onSubmit (payload) {
      const { email, password, name } = payload
      api.post('/auth/signup', { name, email, password })
        .then(res => {
          alert('회원가입이 완료되었습니다.')
          this.$router.push({ name: 'Signin' })
        })
        .catch(err => {
          alert(err.response.data.msg)
        })
    }
  },
  components: {
    SignupForm
  }
}
</script>
