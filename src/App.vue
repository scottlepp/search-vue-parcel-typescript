<template>
  <div id="app">
    <b-navbar toggleable="md" type="light" variant="light">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">Zerch</b-navbar-brand>
    </b-navbar>
    <div class="container-fluid">
      <div class="row mx-auto">
        <!-- Search input section -->
        <section class="col-sm-12 pt-3 px-0">
          <b-form inline class="d-flex justify-content-center">
            <!-- Bug in bootstrap-vue - need div around input or button disappears -->
            <div class="col-md-6 col-8 pl-0">
              <b-input class="w-100 mr-sm-2" type="text" placeholder="Enter Search Term"/>
            </div>
            <b-button class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-form>
        </section>
        <!-- Results section -->
        <section class="results">
          <div class="card-columns">
            <div class="card">
              <img class="card-img-top" src="https://dummyimage.com/mediumrectangle/222222/eeeeee" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Card title that wraps to a new line</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
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

  @import "../node_modules/bootstrap/scss/bootstrap";

  .results {
    .card-columns {
      @include media-breakpoint-only(xl) {
        column-count: 5;
      }
      @include media-breakpoint-only(lg) {
        column-count: 4;
      }
      @include media-breakpoint-only(md) {
        column-count: 3;
      }
      @include media-breakpoint-only(sm) {
        column-count: 2;
      }
    }
  }
</style>