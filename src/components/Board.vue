<script>
import Square from './Square.vue'

export default {
  name: 'Board',
  components: {
    Square
  },
}
</script>

<template>
  <div class="container grid grid-cols-3 gap-2 my-5">
    <div class="container">
      <Square index="0"/>
      <Square index="3"/>
      <Square index="6"/>
    </div>
    <div class="container">
      <Square index="1"/>
      <Square index="4"/>
      <Square index="7"/>
    </div>
    <div class="container">
      <Square index="2"/>
      <Square index="5"/>
      <Square index="8"/>
    </div>
  </div>
</template>