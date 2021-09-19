<template>
  <button class="btn" @click="onClick">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: ['text'],
  methods: {
    onClick() {
      this.$emit('btn-click');
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  position: relative;
  padding: 1.5rem 4rem;
  font-family: inherit;
  font-size: 1.4rem;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: $color-white;
  background: linear-gradient(to right, $color-purple, $color-red);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: $color-purple;
    border-radius: 0.5rem;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.25s ease-in;
    z-index: -1;
  }

  &:hover::after {
    transform: scaleX(1);
  }
}
</style>
