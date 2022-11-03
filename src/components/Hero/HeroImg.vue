<template>
  <svg
    class="hero__img"
    width="632"
    height="631"
    viewBox="0 0 632 631"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      class="third-1"
      x="118.939"
      y="226.079"
      width="150"
      height="150"
      rx="20"
      transform="rotate(-45.5826 118.939 226.079)"
      fill="white"
    />

    <rect
      class="third-3"
      x="119.011"
      y="529.053"
      width="150"
      height="150"
      rx="20"
      transform="rotate(-47.1901 119.011 529.053)"
      fill="#FF5757"
    />

    <rect
      class="third-2"
      x="418.945"
      y="226.525"
      width="150"
      height="150"
      rx="20"
      transform="rotate(-45.8239 418.945 226.525)"
      fill="#49E9FB"
    />
    <rect
      class="second-left-2"
      y="300"
      width="150"
      height="150"
      rx="20"
      fill="#450B7C"
      fill-opacity="0.5"
    />
    <rect
      class="second-up-2"
      x="300"
      width="150"
      height="150"
      rx="20"
      fill="#450B7C"
    />
    <circle class="second-up-1" cx="375" cy="225" r="75" fill="#FF5757" />
    <circle class="second-left-1" cx="225" cy="375" r="75" fill="#49E9FB" />
    <rect
      class="first"
      x="299"
      y="449.996"
      width="150"
      height="150"
      rx="20"
      transform="rotate(-89.5835 299 449.996)"
      fill="#243448"
    />
  </svg>
</template>

<script>
import gsap from 'gsap';

export default {
  mounted() {
    let tl = gsap.timeline();

    tl.from('.first', {
      opacity: 0,
      scale: 0,
      duration: 0.5,
      delay: 2,
    })
      .from('.second-left-1', {
        opacity: 0,
        x: '150px',
        duration: 0.3,
      })
      .from(
        '.second-up-1',
        {
          opacity: 0,
          y: '150px',
          duration: 0.3,
        },
        '-=.4'
      )
      .from('.second-left-2', {
        opacity: 0,
        x: '300px',
        duration: 0.6,
      })
      .from(
        '.second-up-2',
        {
          opacity: 0,
          y: '300px',
          duration: 0.6,
        },
        '-=.8'
      )
      .from('.third-1', {
        opacity: 0,
        x: '150px',
        duration: 0.3,
      })
      .from(
        '.third-2',
        {
          opacity: 0,
          x: '-150px',
          duration: 0.3,
        },
        '-=.4'
      )
      .from(
        '.third-3',
        {
          opacity: 0,
          y: '-150px',
          duration: 0.3,
        },
        '-=.4'
      );
  },
};
</script>

<style lang="scss" scoped>
.hero__img {
  height: 45%;
  width: auto;
  margin-bottom: 2rem;

  @include respond(tab) {
    margin-bottom: 4rem;
  }

  @include respond(lap) {
    margin-bottom: 0;
    width: 45%;
    height: auto;
  }
}
</style>
