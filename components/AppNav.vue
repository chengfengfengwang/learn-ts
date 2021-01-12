<template>
  <nav>
    <!-- router-link renders to an <a> tag
    
         Matching routes will be given the "router-link-active" class -->
    <router-link to="/" exact>Home</router-link>
    &nbsp;
    <router-link to="/form">Form</router-link>
    &nbsp;
    <router-link to="/counter">Counter</router-link>
    &nbsp;
    <router-link to="/clock">Clock</router-link>
    &nbsp;
    <router-link to="/chart">Chart</router-link>
  </nav>
</template>

<style lang="scss">
	$pink: #e83e8c;
  
  a {
		color: $pink;

    &:hover {
      color: $pink;
      opacity: 0.65;
      text-decoration: none;
    }

    &.router-link-active {
		  font-weight: bold;
	  }
	}
</style>

<script lang="ts">
  import * as Vue from 'vue';
  import { Component } from 'vue-property-decorator';

  @Component
  export default class AppNav extends Vue {};
</script>
