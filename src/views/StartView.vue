<script>
import { RouterLink } from 'vue-router';
import modeButton from '../components/modeButton.vue'

export default {
  components: {
    modeButton,
  }
}
</script>

<template>
  <div :class="this.$store.state.isDark ? 'dark' : ''">
    <div class="container">
      <i class="fa-solid fa-x text-8xl text-slate-700"></i>
      <i class="fa-regular fa-circle text-8xl text-slate-700"></i>
    </div>
    <div class="container my-5">
      <router-link to="GameView" class="block text-center text-white text-3xl font-semibold bg-blue-600 rounded-md py-2 active:bg-blue-400">
        Start
      </router-link>
    </div>
  </div>
</template>