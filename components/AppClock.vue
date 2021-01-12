<template>
  <h3>{{hour}}:{{minute}}:{{second}} {{period}}</h3>
</template>

<style lang="scss" scoped>
  $white: #fff;

  h3 {
    color: $white;
  }
</style>

<script lang="ts">
  import * as Vue from 'vue';
  import { Component } from 'vue-property-decorator';

  @Component
  class AppClock extends Vue {
    private date: Date = new Date();
    private interval: number;

    public mounted (): void {
      this.interval = window.setInterval(() => {
        this.date = new Date();
      }, 1000);
    }

    // Clear the interval when switching routes
    public destroyed (): void {
      window.clearInterval(this.interval);
    }

    public get hour (): string {
      const hours = this.date.getHours();

      if (hours === 0) {
        return '12';
      } else if (hours < 10) {
        return `0${hours}`;
      } else if (hours > 12) {
        return `${hours - 12}`;
      } else {
        return `${hours}`;
      }
    }

    public get minute (): string {
      const minutes =  this.date.getMinutes();

      if (minutes < 10) {
        return `0${minutes}`;
      } else {
        return `${minutes}`;
      }
    }

    public get second (): string {
      const seconds = this.date.getSeconds();
      
      if (seconds < 10) {
        return `0${seconds}`;
      } else {
        return `${seconds}`;
      }
    }

    public get period (): string {
      const hours = this.date.getHours();

      if (hours < 12) {
        return 'AM';
      } else {
        return 'PM';
      }
    }
  }

  export default AppClock;
</script>
