<template functional>
  <section class="column">
    <slot></slot>
  </section>
</template>

<style lang="scss" scoped>
  $column-sizes: (
    sm: 12,
    md: 10,
    lg: 8,
    xl: 8
  );

  $column-breakpoints: (
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px
  );

  @mixin column($sizes: $column-sizes, $breakpoints: $column-breakpoints) {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 100%;
    max-width: 100%;
    @each $breakpoint, $size in $sizes {
      @media (min-width: map-get($breakpoints, $breakpoint)) {
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: percentage($size / 12);
        max-width: percentage($size / 12);
      }
    }
  }

  .column {
    @include column();
  }
</style>
