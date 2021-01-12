<template>
  <footer>
    <code>{{path}}</code>
  </footer>
</template>

<style lang="scss">
  html {
		min-height: 100%;
    postion: relative;
	}

  body {
    position: static !important;
  }
</style>

<style lang="scss" scoped>
  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    height: 60px;
    line-height: 60px;
  }
</style>

<script lang="ts">
  import * as Vue from 'vue';
  import { Component, Prop } from 'vue-property-decorator';

  @Component
  export default class AppFooter extends Vue {
    @Prop({ type: String, required: true })
    public path: string;
  };
</script>
