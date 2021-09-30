<template>
  <div class="hero">
    <img
      class="hero__bg"
      src="@/assets/img/hero-bg.png"
      alt="Beckground Image"
    />
    <div class="hero__container">
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

  background: url('../../assets/img/hero-pattern-bg.png'),
    linear-gradient(to right bottom, $color-blue, $color-purple, $color-dark);
  background-position: center;

  @include respond(lap) {
    background: none;
  }

  &__bg {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    display: none;

    @include respond(lap) {
      display: block;
    }
  }

  &__container {
    max-width: 120rem;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;

    @include respond(lap) {
      width: 90%;
      height: 90%;
      flex-direction: row;
      align-items: center;
    }

    @include respond(big) {
      width: 100%;
      height: 80%;
      justify-content: space-between;
    }
  }
}
</style>
