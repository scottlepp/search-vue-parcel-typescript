<template>
  <b-form inline class="d-flex justify-content-center">
    <!-- Bug in bootstrap-vue - need div around input or button disappears -->
    <div class="col-md-6 col-8 pl-0">
      <b-input v-model="term" class="w-100 mr-sm-2" type="text" placeholder="Enter Search Term"/>
    </div>
    <b-button class="my-2 my-sm-0" @click="search()">Search</b-button>
  </b-form>
</template>

<script lang="ts">
  import { Component, Vue, Provide } from 'vue-property-decorator'

  @Component
  export default class VsInput extends Vue {

    @Provide()
    term = '';

    search() {
      this.$emit('search', this.term);
    }
  }
</script>
