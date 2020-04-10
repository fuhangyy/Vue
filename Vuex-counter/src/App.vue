<template>
  <div id="app">
    <div class="counter">
      <div class="num">{{ count }}</div>
      <div class="btns">
        <button @click="increase">加</button>
        <button @click="decrease">减</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    },
    count1() {
      return this.$store.getters
    }
  },
  created() {
    console.log(this.count, this.count1)
  },
  methods: {
    increase() {
      this.$store.commit('increase', {
        count: this.count
      })
    },
    decrease() {
      this.$store.commit('decrease', {
        count: this.count
      })
    }
  }
}
</script>

<style>
  .counter {
    width: 260px;
    margin: 100px auto 0;
  }
  .num {
    width: 100%;
    height: 180px;
    line-height: 180px;
    text-align: center;
    background: #444;
    color: #fff;
    font-size: 60px;
  }
  .btns button {
    width: 50%;
    margin-top: 10px;
    height: 40px;
    border: 1px solid #444;
    background: #444;
    color: #fff;
    outline: none;
    cursor: pointer;
  }
  .btns button:first-child {
    border-right-color: #fff;
  }
</style>
