const mutations = {
  increase(state, payload) {
    state.count = payload.count + 1
  },
  decrease(state, payload) {
    state.count = payload.count - 1
  }
}

export default mutations