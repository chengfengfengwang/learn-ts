<template>
  <section>
    <button class="btn btn-outline-light" @click="onIncrement">+</button>
    &nbsp;
    <button class="btn btn-outline-light" @click="onDecrement">-</button>
    &nbsp;
    <button class="btn btn-danger" @click="onReset">Reset</button>
    <h3>{{count}}</h3>
  </section>
</template>

<style lang="scss" scoped>
  $white: #f8f9fa;

  section {
    margin-top: 1rem;
  }

  button {
    width: 70px;
    font-weight: bold;

    &:nth-last-of-type(1) {
      font-weight: normal;
    }

    &:hover {
      cursor: pointer;
    }
  }

  h3 {
    margin-top: 1rem;
    color: $white;
  }
</style>

<script lang="ts">
  import * as Vue from 'vue';
  import { Component } from 'vue-property-decorator';

  @Component
  class AppCounter extends Vue {
    public count: number = 0;

    public onIncrement (): void {
      this.count++;
    }

    public onDecrement (): void {
      this.count--;
    }

    public onReset (): void {
      this.count = 0;
    }
  }

  export default AppCounter;
</script>
