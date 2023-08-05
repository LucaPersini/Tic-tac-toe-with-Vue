<script>
export default {
  name: 'modeButton',
  methods: {
    changeMode: function() {
      this.$store.commit('changeMode')

      const body = document.querySelector('body')

      if(this.$store.state.isDark) {
        body.style = 'background-color: #111827'
      }
      else {
        body.style = 'background-color: white'
      }
    }
  }
}
</script>

<template>
  <div class="container w-fit absolute top-10 right-10">
    <button @click="changeMode">
      <i :class="this.$store.state.isDark ? 'fa-solid fa-moon text-3xl text-white' : 'fa-solid fa-sun text-3xl text-gray-900'"></i>
    </button>
  </div>
</template>