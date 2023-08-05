<script>
export default {
  name: 'Square',
  data: function() {
    return {
      isClicked: false,
    }
  },
  props: {
    index: String
  },
  methods: {
    handleClick: function() {
      this.$store.commit('changeTurn')
      this.isClicked = !this.isClicked

      let playerInput

      if(this.$store.state.isXturn){
        playerInput = 'x'
      }
      else {
        playerInput = 'o'
      }

      this.$store.state.inputArray[this.index] = playerInput

      this.$store.commit('checkWin')
      this.$store.commit('checkDraw')

      this.stopGame()
    },
    stopGame: function() {
      if (this.$store.state.endGame) {
        this.$store.commit('stopGame')
      }
    }
  },
}
</script>

<template>
  <div class="container my-2 w-20 h-20" :class="this.$store.state.isDark ? 'dark' : ''">
    <button class="btn w-full h-full dark:bg-slate-700 border-2 border-blue-700 rounded-md" @click.once="handleClick">
      <div v-if="isClicked">
        <i v-once :class="this.$store.state.isXturn ? 'fa-solid fa-x text-4xl text-slate-700 dark:text-white' : 'fa-regular fa-circle text-4xl text-slate-700 dark:text-white'"></i>
      </div>
    </button>
  </div>
</template>