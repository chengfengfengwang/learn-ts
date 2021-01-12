<template functional>
  <main class="container">
    <slot></slot>
  </main>
</template>


<style lang="scss" scoped>
  $container-padding: 15px;

  $container-max-widths: (
    sm: 540px,
    md: 720px,
    lg: 960px,
    xl: 1140px
  );

  $container-breakpoints: (
    xs: 0,
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px
  );

  @mixin container($max-widths: $container-max-widths, $breakpoints: $container-breakpoints) {
    width: 100%;
    padding-right: $container-padding;
    padding-left: $container-padding;
    margin-right: auto;
    margin-left: auto;
    @each $breakpoint, $max-width in $max-widths {
      @media (min-width: map-get($breakpoints, $breakpoint)) {
        max-width: $max-width;
      }
    }
  }

  .container {
    @include container();
    text-align: center;
		margin-bottom: 60px;
  }
</style>
