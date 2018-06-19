<template>
  <div id="app">
    <Header :text="foo"></Header>
    <div>{{ bar }}</div>
  </div>
</template>

<script lang="ts">
  import App from './app-class';
  export default App;
</script>

<style lang="scss">
  #app {
    color: #56b983;
  }
</style>