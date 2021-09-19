<template>
  <div class="hero-img">
    <img
      class="hero-img__main"
      src="@/assets/img/hero-img-main.png"
      alt="Main Image"
    />
    <img
      v-for="(img, i) in 4"
      :key="i"
      :class="`hero-img__cube hero-img__cube--${i}`"
      src="@/assets/img/hero-img-cube.png"
      alt="Cube Image"
    />
  </div>
</template>

<style lang="scss" scoped>
.hero-img {
  position: relative;

  &__main {
    width: 100%;
  }

  &__cube {
    position: absolute;
    width: 12%;
    animation: upAndDownCube 2s ease-in-out infinite alternate;

    &--3 {
      left: 36.5%;
      bottom: 35%;
    }

    &--2 {
      left: 26.5%;
      bottom: 43.5%;
      animation-delay: -1s;
    }

    &--1 {
      left: 46%;
      bottom: 43.5%;
      animation-delay: -2s;
    }

    &--0 {
      left: 36%;
      bottom: 52%;
      animation-delay: -3s;
    }
  }
}
</style>
