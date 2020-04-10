<template>
  <div id="app">
    <div class="search">
      <input type="text">
      <button class="btn" @click="searchList">搜索</button>
    </div>
    <div class="main">
      <div>
        <p>默认使用state中的值</p>
        <ul class="list">
          <li v-for="music in musicList" :key="music.id">
            <span>{{ music.song }}</span>
            <span>{{ music.author }}</span>
          </li>
        </ul>
      </div>
      <div>
        <p>使用getters中过滤的值</p>
        <ul class="list">
          <li v-for="music in filterMusicList" :key="music.id">
            <span class="hot" v-if="music.tag">{{ music.tag }}</span>
            <span>{{ music.song }}</span>
            <span>{{ music.author }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState({ musicList: 'musicList' }),
    ...mapGetters([ 'filterMusicList' ])
  },
  methods: {
    ...mapActions(['getMusicList']),
    searchList() {
      this.getMusicList()
    }
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  #app {
    width: 400px;
    margin: 100px auto;
  }
  .search {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    padding: 0 6px;
    height: 40px;
    background: #333;
    border-radius: 6px;
  }

  .search input {
    flex: 1;
    margin: 0 5px;
    line-height: 18px;
    border: 0;
    outline: none;
    background: #333;
    color: #fff;
    font-size: 14px;
  }
  .search button {
    width: 60px;
    flex: 0 0 60px;
    background: none;
    outline: none;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
  }
  .main {
    display: flex;
    justify-content: space-between;
  }
  .main p {
    margin-bottom: 20px;
  }
  .main .hot {
    color: #f00;
    font-size: 12px;
  }
  .main span {
    margin-right: 10px;
  }
  ul li {
    display: flex;
    padding: 5px 0;
  }
</style>
