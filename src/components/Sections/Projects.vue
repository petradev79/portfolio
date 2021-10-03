<template>
  <div class="projects">
    <div
      class="project"
      :class="project.id % 2 !== 0 ? 'reverse' : ''"
      v-for="project in projects"
      :key="project.id"
    >
      <div class="project__img">
        <img
          :src="require(`@/assets/img/project-${project.id}.png`)"
          :alt="project.name"
        />
      </div>
      <div class="project__title">
        <h4 class="test">{{ project.name }}</h4>
        <h3 class="test">{{ project.text }}</h3>
        <Button
          class="btn--purple test"
          text="view project"
          @click="redirect(project.urlPath)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Button from '../Reusable/Button.vue';

export default {
  components: { Button },
  data() {
    return {
      projects: [
        {
          id: 1,
          name: '5ramovies | it’s about movies',
          text: 'Find ratings and cast, watch trailers and more...',
          urlPath: 'https://5ramovies.netlify.app'
        },
        {
          id: 2,
          name: '5ramovies | it’s about movies',
          text: 'Find ratings and cast, watch trailers and more...',
          codePath: 'https://github.com/petradev79/5ramovies',
          urlPath: 'https://5ramovies.netlify.app'
        },
        {
          id: 3,
          name: '5ramovies | it’s about movies',
          text: 'Find ratings and cast, watch trailers and more...',
          codePath: 'https://github.com/petradev79/5ramovies',
          urlPath: 'https://5ramovies.netlify.app'
        }
      ]
    };
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    const projects = gsap.utils.toArray('.project');

    projects.forEach(project => {
      gsap.from(project, {
        scrollTrigger: {
          trigger: project,
          toggleActions: 'restart none none reset'
        },
        opacity: 0,
        scale: 0.7,
        duration: 0.5
      });
    });
  },
  methods: {
    redirect(link, target = '_blank') {
      window.open(link, target);
    }
  }
};
</script>

<style lang="scss" scoped>
.projects {
  margin-top: 7rem;

  @include respond(lap) {
    margin-top: 20rem;
  }
}

.project {
  text-align: center;
  margin-bottom: 5rem;

  @include respond(lap) {
    display: flex;
    align-items: center;
    margin-bottom: 10rem;
    text-align: right;
  }

  &__img {
    margin-bottom: 3rem;
    // transform: scale(1.1);
    transition: transform 0.3s;

    @include respond(lap) {
      margin-bottom: 0;
    }

    &:hover {
      // transform: scale(1);
      transform: scale(1.1);
    }

    img {
      width: 100%;
    }
  }

  &__title {
    flex-basis: 40%;
    z-index: 1;

    h4 {
      font-size: 1.6rem;
      color: $color-purple;

      @include respond(tab) {
        font-size: 2rem;
      }
    }

    h3 {
      font-size: 2.5rem;
      margin: 1.5rem 0;
      color: $color-dark;

      @include respond(tab) {
        font-size: 3.5rem;
      }

      @include respond(lap) {
        margin: 2rem 0;
        font-size: 4.5rem;
      }
    }
  }
}

.reverse {
  @include respond(lap) {
    flex-direction: row-reverse;
    text-align: left;
  }
}
</style>
