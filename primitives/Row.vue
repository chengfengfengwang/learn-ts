<template functional>
  <section class="row">
    <slot></slot>
  </section>
</template>

<style lang="scss" scoped>
  @mixin row() {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }

  .row {
    @include row();
    margin-top: 1rem;
    justify-content: center;
  }
</style>
