<template>
  <div class="app-header">
    <h1>VueJS Community</h1>
    <div v-if="isAuthorized">
      <strong>
        <button @click="toggle">{{ me.name }}님 환영합니다.
          <i v-if="!isActive" class="fas fa-sort-down"></i>
          <i v-else class="fas fa-sort-up"></i>
        </button>
      </strong>
      <ul v-if="isActive">
        <li><button @click="onClickSignout">로그아웃</button></li>
      </ul>
    </div>
    <div v-else>
      <router-link :to="{ name: 'Signin' }">로그인</router-link>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'AppHeader',
  data () {
    return {
      isActive: false
    }
  },
  computed: {
    ...mapState([ 'me' ]),
    ...mapGetters([ 'isAuthorized' ])
  },
  methods: {
    toggle () {
      this.isActive = !this.isActive
    },
    onClickSignout () {
      this.signout()
      alert('로그아웃 되었습니다.')
      this.isActive = false
      this.$router.push({ name: 'PostListPage' })
    },
    ...mapActions([ 'signout' ])
  }
}
</script>
