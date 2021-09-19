<template>
  <div class="skills">
    <div class="skills__box">
      <div
        class="skill flex-center-center"
        :class="`skill--${i + 1}`"
        v-for="(skill, i) in skills"
        :key="skill.name"
      >
        <img
          :src="require('@/assets/img/skills/' + skill.img)"
          :alt="skill.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { name: 'HTML', img: 'html.png' },
        { name: 'CSS', img: 'css.png' },
        { name: 'SCSS', img: 'scss.png' },
        { name: 'JavaScript', img: 'js.png' },
        { name: 'Angular', img: 'angular.png' },
        { name: 'Vue', img: 'vue.png' },
        { name: 'React', img: 'react.png' },
        { name: 'Git', img: 'git.png' },
        { name: 'Figma', img: 'figma.png' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.skills {
  margin-top: 10rem;
  display: flex;
  justify-content: center;

  &__box {
    display: inline-grid;
    grid-template: repeat(6, 5rem) / repeat(5, 20rem);
    grid-gap: 2rem;
  }
}
.skill {
  background: $color-white;
  border-radius: 1rem;

  img {
    width: 50%;
  }

  &--1 {
    grid-row: 3 / span 2;
    grid-column: 3 / 4;
  }

  &--2 {
    grid-row: 1 / span 2;
    grid-column: 3 / 4;
  }

  &--3 {
    grid-row: 2 / span 2;
    grid-column: 2 / 3;
  }

  &--4 {
    grid-row: 5 / span 2;
    grid-column: 3 / 4;
  }

  &--5 {
    grid-row: 4 / span 2;
    grid-column: 4 / 5;
  }

  &--6 {
    grid-row: 3 / span 2;
    grid-column: 5 / 6;
  }

  &--7 {
    grid-row: 2 / span 2;
    grid-column: 4 / 5;
  }

  &--8 {
    grid-row: 4 / span 2;
    grid-column: 2 / 3;
  }

  &--9 {
    grid-row: 3 / span 2;
    grid-column: 1 / 2;
  }
}
</style>
