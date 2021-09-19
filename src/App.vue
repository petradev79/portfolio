<template>
  <Modal
    :isModalVisible="isModalVisible"
    v-show="isModalVisible"
    @close="closeModal"
  />
  <Hero @showModal="showModal" />
  <section class="section-skills">
    <div class="container">
      <Title
        class="title--center"
        title="Tools and Skills"
        text="Being a person always willing to learn new skills and techniques I enjoy being challenged and improving my knowledge!"
      />
      <Skills />
    </div>
  </section>

  <section class="section-about">
    <div class="container">
      <Title
        class="title--center"
        title="About Me"
        text="I have a passion for coffee, design and develop things. My recipe for success - love what you do, always learn new things and never stop practice!"
      />
      <About />
    </div>
  </section>
</template>

<script>
import Modal from './components/Reusable/Modal';
import Hero from './components/Hero/Hero';
import Title from './components/Reusable/Title';
import Skills from './components/Sections/Skills';
import About from './components/Sections/About';

export default {
  name: 'App',
  components: { Modal, Hero, Title, Skills, About },
  data() {
    return {
      isModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
      document.body.classList.add('modal-open');
    },
    closeModal() {
      this.isModalVisible = false;
      document.body.classList.remove('modal-open');
    }
  }
};
</script>

<style lang="scss">
section {
  padding: 10rem 0;

  p {
    font-size: 1.4rem;
    line-height: 1.5;
  }
}

.section-skills {
  background: linear-gradient(
    to bottom,
    $color-white 30%,
    $color-blue-light,
    $color-blue-light,
    $color-white
  );
}
</style>
