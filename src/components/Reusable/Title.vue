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
    margin-bottom: 2rem;
    font-family: Comfortaa, cursive;
    font-size: 5rem;
    letter-spacing: 2px;
    color: $color-dark-two;

    // IF BROWSER SUPORT BACKGROUND-CLIP: TEXT
    @supports (-webkit-background-clip: text) {
      background-image: linear-gradient(
        to right,
        $color-dark-two,
        $color-purple
      );
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
    }
  }

  p {
    width: 60%;
    margin: 0 auto;
    font-size: 1.6rem;
    line-height: 1.6;
  }

  &::after {
    content: '';
    position: absolute;
    width: 10rem;
    height: 0.3rem;
    bottom: -3.5rem;
    border-radius: 0.3rem;
    background: $color-red;
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
