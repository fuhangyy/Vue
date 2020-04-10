import * as types from './mutations-types'

const mutations = {
  [types.SET_MUSICLIST](state, payload) {
    state.musicList = payload
  },
}

export default mutations