<script>
import { RouterLink, RouterView } from 'vue-router'
import modeButton from './components/modeButton.vue'

export default {
  components: {
    modeButton,
  },
}
</script>

<template>
  <RouterView />
  <div class="container">
    <modeButton />
  </div>
</template>