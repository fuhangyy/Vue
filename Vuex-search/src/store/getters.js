export const filterMusicList = function (state) {
  const filterMusicList = state.musicList
    filterMusicList.forEach(item => {
      if ([0, 3, 5].indexOf(item.id) !== -1) {
        item['tag'] = '热门'
      }
    })
    
  return filterMusicList
}