<template>
  <div class="card-columns" >
    <div class="card" v-for="item in results" :key="item.id">
      <img v-if="item.thumb" class="card-img-top" :src="item.thumb" :alt="item.title" @error="error(item)">
      <div class="card-body">
        <h5 class="card-title">{{item.name}}</h5>
        <p class="card-text" v-html="truncate(item.description || item.abstract, 50)"></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import VgResults from './vs-results-class';
  export default VgResults;
</script>

<style lang="scss" scoped>
  @import './vs-results.scss';
</style>