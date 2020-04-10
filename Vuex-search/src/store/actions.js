import * as types from './mutations-types'

const MUSIC_LIST = [
  { id: 0, song: '麻雀', author: '李荣浩' },
  { id: 1, song: '外婆的话', author: '不才' },
  { id: 2, song: '凉城', author: '任然' },
  { id: 3, song: '青花', author: '周传雄' },
  { id: 4, song: '潮湿的心', author: '南风' },
  { id: 5, song: '如烟', author: '五月天' },
  { id: 6, song: '叶问宗师', author: '交通国' },
  { id: 7, song: '芒种', author: '音阙诗听' },
  { id: 8, song: '告白之夜', author: '麦子是麦子' },
  { id: 9, song: 'Let Her Go', author: 'Passenger' },
]

export const getMusicList = function ({ commit }) {
  setTimeout(function () {
    const musicList = MUSIC_LIST
    commit(types.SET_MUSICLIST, musicList)
  }, 3000)
}