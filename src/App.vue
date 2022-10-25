<template>
  <div id="app">
    <BasicEdition />
  </div>
</template>

<script>
import BasicEdition from './components/BasicEdition.vue'
export default {
  name: 'App',
  components: {
    BasicEdition
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
