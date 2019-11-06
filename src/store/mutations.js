export default {
  setIsLogin(state, loginJudge) {
    state.loginJudge = loginJudge;
  },
  logout(state) {
    state.loginJudge = false;
  }
}
