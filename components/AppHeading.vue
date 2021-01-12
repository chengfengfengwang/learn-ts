<template>
  <header>
    <!-- You can use a regular class attribute and bound class attribute together -->
    <h1 class="display-4" :class="{hello: isHello, 'good-bye': isGoodBye}">{{message}}</h1>
    <p class="lead">Click the heading...</p>
  </header>
</template>

<style lang="scss" scoped>
  $blue: #17a2b8;
  $orange: #ffc107;
  $white: #f8f9fa;

  h1 {
    cursor: pointer;

    &.hello {
      color: $blue;
    }

    &.good-bye {
      color: $orange;
    }
  }

  p {
    color: $white;
  }
</style>

<script lang="ts">
  import * as Vue from 'vue';
  import { Component, Prop } from 'vue-property-decorator';

  @Component
  class AppHeading extends Vue {
    @Prop({ type: String, required: true })
    public message: string;

    // Use the get accessor for computed properties
    public get isHello (): boolean {
      return this.message === 'Hello World';
    }

    public get isGoodBye (): boolean {
      return this.message === 'Good Bye World';
    }
  }

  export default AppHeading;
</script>
