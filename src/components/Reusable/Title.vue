<template>
  <div class="title">
    <h2>{{ title }}</h2>
    <p>
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  props: ['title', 'text']
};
</script>

<style lang="scss" scoped>
.title {
  position: relative;
  text-align: center;

  h2 {
    margin-bottom: 1.5rem;
    font-size: 3.5rem;
    color: $color-dark;

    @include respond(lap) {
      margin-bottom: 2rem;
      font-size: 5rem;
      letter-spacing: 2px;
    }

    @include respond(big) {
      font-size: 5.5rem;
    }
  }

  p {
    font-size: 1.6rem;
    line-height: 1.6;

    @include respond(lap) {
      width: 60%;
      margin: 0 auto;
    }
  }

  &::after {
    content: '';
    width: 10rem;
    height: 0.3rem;
    position: absolute;
    left: 50%;
    bottom: -2.5rem;
    transform: translateX(-50%);
    border-radius: 0.3rem;
    background: $color-red;

    @include respond(lap) {
      bottom: -3.5rem;
    }
  }
}
</style>
