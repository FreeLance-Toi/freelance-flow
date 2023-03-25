<template>
  <div class="home">
    <section class="home__hero"></section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView'
})
</script>

<style lang="sass">
@use "../assets/css/book"
.home
  height: 200vh
  
  &__hero
    height: 50vh
    background-color: book.$primary
</style>
