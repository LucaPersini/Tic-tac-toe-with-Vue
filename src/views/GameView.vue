<script>
import Board from '../components/Board.vue'

export default {
  name: 'GameView',
  components: {
    Board
  },
  data: function() {
    return {
      componentKey: 0
    }
  },
  methods: {
    restartGame: function() {
      this.$store.state.endGame = false
      this.$store.state.isXturn = false

      this.$store.state.inputArray.length = 0

      this.forceRenderer()
    },
    forceRenderer() {
      this.componentKey += 1
    }
  }
}
</script>

<template>
  <div class="container" :class="this.$store.state.isDark ? 'dark' : ''">
    <div class="container my-7">
      <Board :key="componentKey"/>
      <div v-if="!this.$store.state.endGame" class="container">
        <p v-if="!this.$store.state.isXturn" class="text-center text-xl text-gray-900 dark:text-white">{{ "It's X's turn" }}</p>
        <p v-else="this.$store.state.isXturn" class="text-center text-xl text-gray-900 dark:text-white">{{ "It's O's turn" }}</p>
      </div>
      <div v-else-if="this.$store.state.endGame" class="container">
        <p class="text-center text-xl text-gray-900 dark:text-white">{{ this.$store.state.endGameMsg }}</p>
      </div>
    </div>
    <div class="container w-fit m-auto">
      <button @click="restartGame" class="bg-blue-600 text-white py-1 px-3 text-xl rounded-md">Restart</button>
    </div>
  </div>
</template>