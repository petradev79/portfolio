<template>
  <div class="skills">
    <div class="skills__box">
      <div
        class="skill"
        :class="`skill--${i + 1}`"
        v-for="(skill, i) in skills"
        :key="skill.name"
      >
        {{ skill.name }}
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
  data() {
    return {
      skills: [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'SCSS' },
        { name: 'JavaScript' },
        { name: 'Angular' },
        { name: 'Vue' },
        { name: 'React' },
        { name: 'Git' },
        { name: 'Figma' }
      ]
    };
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.skills',
        toggleActions: 'restart none none reset'
      }
    });

    tl.from('.skill', {
      stagger: 0.3,
      opacity: 0,
      duration: 0.7
    }).from('.skills-watermark', {
      opacity: 0,
      duration: 0.5
    });
  }
};
</script>

<style lang="scss" scoped>
.skills {
  margin-top: 7rem;
  display: flex;
  justify-content: center;

  @include respond(lap) {
    margin-top: 20rem;
  }

  &__box {
    width: 100%;
    display: inline-grid;
    grid-template: repeat(5, 5rem) / repeat(6, 1fr);
    grid-gap: 1rem;

    @include respond(lap) {
      width: auto;
      grid-template: repeat(6, 5rem) / repeat(5, 20rem);
      grid-gap: 2rem;
    }
  }
}

.skill {
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $color-purple;
  background: $color-white;
  border-radius: 1rem;
  box-shadow: 1rem 1rem 1rem 0 rgba($color-black, 0.3);
  // animation: skillsShadow 2s ease-in-out infinite alternate;

  @include respond(lap) {
    font-size: 1.4rem;
  }

  &--1 {
    grid-row: 3 / 4;
    grid-column: 3 / span 2;

    @include respond(lap) {
      grid-row: 3 / span 2;
      grid-column: 3 / 4;
    }
  }

  &--2 {
    grid-row: 3 / 4;
    grid-column: 5 / span 2;
    // animation-delay: -1s;

    @include respond(lap) {
      grid-row: 1 / span 2;
      grid-column: 3 / 4;
    }
  }

  &--3 {
    grid-row: 4 / 5;
    grid-column: 4 / span 2;

    @include respond(lap) {
      grid-row: 2 / span 2;
      grid-column: 2 / 3;
    }
  }

  &--4 {
    grid-row: 3 / 4;
    grid-column: 1 / span 2;
    // animation-delay: -2s;

    @include respond(lap) {
      grid-row: 5 / span 2;
      grid-column: 3 / 4;
    }
  }

  &--5 {
    grid-row: 2 / 3;
    grid-column: 2 / span 2;

    @include respond(lap) {
      grid-row: 4 / span 2;
      grid-column: 4 / 5;
    }
  }

  &--6 {
    grid-row: 1 / 2;
    grid-column: 3 / span 2;

    // animation-delay: -1s;

    @include respond(lap) {
      grid-row: 3 / span 2;
      grid-column: 5 / 6;
    }
  }

  &--7 {
    grid-row: 2 / 3;
    grid-column: 4 / span 2;
    // animation-delay: -2s;

    @include respond(lap) {
      grid-row: 2 / span 2;
      grid-column: 4 / 5;
    }
  }

  &--8 {
    grid-row: 4 / 5;
    grid-column: 2 / span 2;
    // animation-delay: -1s;

    @include respond(lap) {
      grid-row: 4 / span 2;
      grid-column: 2 / 3;
    }
  }

  &--9 {
    grid-row: 5 / 6;
    grid-column: 3 / span 2;
    // animation-delay: -2s;

    @include respond(lap) {
      grid-row: 3 / span 2;
      grid-column: 1 / 2;
    }
  }
}
</style>
