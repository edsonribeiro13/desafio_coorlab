<template>
  <v-app id="app">
    <v-layout fill-height>
      <BestTransport/>
    </v-layout>
  </v-app>
</template>

<script>
import BestTransport from './components/BestTransport.vue'

export default {
  name: 'App',
  components: {
    BestTransport
  }
}
</script>

<style>
</style>
