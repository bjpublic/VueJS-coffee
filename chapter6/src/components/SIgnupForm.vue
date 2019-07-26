<template>
  <form @submit.prevent="submit">
    <fieldset>
      <input v-model="name"
             type="text"
             placeholder="이름을 입력해주세요."/>
      <input v-model="email"
             type="text"
             placeholder="이메일을 입력해주세요."/>
      <input type="password"
             v-model="password"
             placeholder="비밀번호를 입력해주세요."/>
      <input type="password"
             v-model="passwordConfirm"
             placeholder="비밀번호를 다시 입력해주세요." />
      <button type="submit">회원가입</button>
    </fieldset>
  </form>
</template>
<script>
export default {
  name: 'SignupForm',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      passwordConfirm: ''
    }
  },
  methods: {
    submit () {
      const { name, email, password, passwordConfirm } = this
      if (password !== passwordConfirm) {
        return false
      }
      this.$emit('submit', { name, email, password })
    }
  }
}
</script>
