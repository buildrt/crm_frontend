export default {
  loginJudgeChange(state) {
    state.loginJudge = !state.loginJudge;
  },
  loginTrue(state) {
    state.loginJudge = true;
  },
  logout(state) {
    state.loginJudge = false;
  }
}
