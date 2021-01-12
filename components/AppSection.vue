<template>
  <Row>
    <Column>
      <transition>
        <router-view />
      </transition>
    </Column>
  </Row>
</template>

<style lang="scss" scoped>
  .v-enter-active {
    animation: fade-in 600ms;
  }

  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
</style>

<script lang="ts">
  import * as Vue from 'vue';
  import { Component } from 'vue-property-decorator';

  import * as Row from '../primitives/Row';
  import * as Column from '../primitives/Column';

  const components = { Row, Column };

  @Component({ components })
  export default class AppSection extends Vue {}
</script>
