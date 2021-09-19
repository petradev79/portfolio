<template>
  <div class="title">
    <h1 class="title__name">
      <span>Petrovic</span><br />
      <span>Ivan</span>
    </h1>
    <span class="title__lines"></span>
    <div class="title__skills">front end developer / <br />web designer</div>
    <Button text="Get In Touch" @btn-click="$emit('showModal')" />
  </div>
</template>

<script>
import Button from '../Reusable/Button.vue';
export default {
  components: { Button }
};
</script>

<style lang="scss" scoped>
.title {
  color: $color-white;

  &__name {
    font-size: 10rem;
    letter-spacing: 2px;
    font-family: Comfortaa, cursive;
  }

  &__lines {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 20px;
      left: 50px;
    }

    &,
    &::after {
      display: inline-block;
      width: 100px;
      height: 5px;
      border-radius: 0.5rem;
      background: linear-gradient(to right, $color-purple, $color-red);
    }
  }

  &__skills {
    margin: 4rem 0;
    font-size: 2rem;
    letter-spacing: 2px;
  }
}
</style>
