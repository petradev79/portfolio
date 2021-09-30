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

  h2 {
    margin-bottom: 1.5rem;
    font-size: 3.5rem;
    color: $color-dark;

    @include respond(lap) {
      margin-bottom: 2rem;
      font-size: 5rem;
      letter-spacing: 2px;
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
    position: absolute;
    width: 10rem;
    height: 0.3rem;
    bottom: -2.5rem;
    border-radius: 0.3rem;
    background: $color-red;

    @include respond(lap) {
      bottom: -3.5rem;
    }
  }

  &--center {
    text-align: center;

    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
