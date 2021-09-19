<template>
  <div class="hero">
    <img
      class="hero__bg"
      src="@/assets/img/hero-bg.png"
      alt="Beckground Image"
    />
    <div class="hero__container flex-center-center">
      <HeroTitle @showModal="$emit('showModal')" />
      <HeroImg />
    </div>
  </div>
</template>

<script>
import HeroTitle from './HeroTitle';
import HeroImg from './HeroImg';

export default {
  components: { HeroImg, HeroTitle }
};
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100vh;

  &__bg {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
  }

  &__container {
    width: 120rem;
    height: 75%;
    margin: 0 auto;
  }
}
</style>
