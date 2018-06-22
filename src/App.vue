<template>
  <div id="app">
    <b-navbar toggleable="md" type="light" variant="light">
      <!-- <b-navbar-toggle target="nav_collapse"></b-navbar-toggle> -->
      <b-navbar-brand href="#">Zerch</b-navbar-brand>
    </b-navbar>
    <div class="container-fluid">
      <div class="row mx-auto">
        <!-- Search input section -->
        <section class="col-sm-12 pt-3 px-0">
          <vs-input @search="onSearch"></vs-input>
        </section>
        <!-- Results section -->
        <section class="results">
          <vs-results :data="results"></vs-results>
        </section>
      </div>
     </div>
  </div>
</template>

<script lang="ts">
  import App from './app-class';
  export default App;
</script>

<style lang="scss">
  nav {
    border-bottom: 1px solid #ced4da;
  }
  .results {
    max-width: 100%;
  }
</style>