export default {
  isAuthorized (state) {
    return state.accessToken.length > 0 && !!state.me
  }
}
