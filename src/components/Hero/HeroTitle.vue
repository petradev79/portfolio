<template>
  <div class="title">
    <h1 class="title__name title-down">
      Developing Beautiful Web Experiences
    </h1>
    <p class="title__skills title-down">
      Hello, I am Ivan Petrović
    </p>
    <Button
      class="btn--red title-down"
      text="Get In Touch"
      @btn-click="$emit('showModal')"
    />
  </div>
</template>

<script>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Button from '../Reusable/Button.vue';

export default {
  components: { Button },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.title-down', {
      stagger: 0.5,
      opacity: 0,
      x: '-100px',
      duration: 0.5,
      delay: 1
    });
  }
};
</script>

<style lang="scss" scoped>
.title {
  color: $color-white;
  text-align: center;

  @include respond(tab) {
    width: 60%;
    margin: 0 auto;
  }

  @include respond(lap) {
    width: 45%;
    margin: 0;
    text-align: left;
  }

  &__name {
    font-size: 3.5rem;
    letter-spacing: 2px;
    font-weight: bold;

    @include respond(tab) {
      font-size: 5.5rem;
    }

    @include respond(big) {
      font-size: 6.5rem;
    }
  }

  &__skills {
    margin: 2rem 0;
    font-size: 1.6rem;
    font-weight: bold;
    color: $color-blue;

    @include respond(tab) {
      margin: 3rem 0;
    }
  }
}
</style>
