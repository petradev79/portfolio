<template>
  <Modal
    :isModalVisible="isModalVisible"
    v-show="isModalVisible"
    @close="closeModal"
  />

  <Hero @showModal="showModal" />

  <section class="section-about">
    <div class="container">
      <Title
        class="title--center title-about"
        title="About my Work"
        text="Hello, my name is Ivan Petrović Frontend Developer and Web Designer from Serbia, currently working as a freelancer."
      />
      <About />
    </div>
  </section>

  <section class="section-skills">
    <div class="skills-watermark">
      <svg
        viewBox="0 0 2132 462"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M281.9 370L281 226.45L212.6 341.65H165.8L97.4 231.4V370H0.650002V55H87.95L190.55 222.85L290.45 55H377.75L378.65 370H281.9ZM700.896 123.85L599.646 374.95C586.746 407.05 570.696 429.55 551.496 442.45C532.296 455.35 508.746 461.8 480.846 461.8C467.046 461.8 453.096 459.7 438.996 455.5C425.196 451.6 414.246 446.35 406.146 439.75L439.896 370C444.996 373.9 450.696 377.05 456.996 379.45C463.596 381.85 469.896 383.05 475.896 383.05C486.996 383.05 495.396 379.75 501.096 373.15L397.596 123.85H501.996L552.846 255.7L604.596 123.85H700.896ZM971.957 377.2C945.857 377.2 920.357 374.35 895.457 368.65C870.857 362.65 850.607 354.7 834.707 344.8L868.907 267.4C883.907 276.1 900.707 283.15 919.307 288.55C937.907 293.65 955.757 296.2 972.857 296.2C987.557 296.2 998.057 294.85 1004.36 292.15C1010.66 289.15 1013.81 284.8 1013.81 279.1C1013.81 272.5 1009.61 267.55 1001.21 264.25C993.107 260.95 979.607 257.35 960.707 253.45C936.407 248.35 916.157 242.95 899.957 237.25C883.757 231.25 869.657 221.65 857.657 208.45C845.657 194.95 839.657 176.8 839.657 154C839.657 134.2 845.207 116.2 856.307 100C867.407 83.8 883.907 71.05 905.807 61.75C928.007 52.45 954.857 47.8 986.357 47.8C1007.96 47.8 1029.11 50.2 1049.81 55C1070.81 59.5 1089.26 66.25 1105.16 75.25L1073.21 152.2C1042.31 136.6 1013.06 128.8 985.457 128.8C958.157 128.8 944.507 135.4 944.507 148.6C944.507 154.9 948.557 159.7 956.657 163C964.757 166 978.107 169.3 996.707 172.9C1020.71 177.4 1040.96 182.65 1057.46 188.65C1073.96 194.35 1088.21 203.8 1100.21 217C1112.51 230.2 1118.66 248.2 1118.66 271C1118.66 290.8 1113.11 308.8 1102.01 325C1090.91 340.9 1074.26 353.65 1052.06 363.25C1030.16 372.55 1003.46 377.2 971.957 377.2ZM1265.01 294.4L1248.81 311.95V370H1147.11V36.1H1248.81V195.4L1319.46 123.85H1439.61L1337.91 230.5L1447.71 370H1324.86L1265.01 294.4ZM1467.91 123.85H1569.61V370H1467.91V123.85ZM1518.76 104.05C1500.46 104.05 1485.61 99.25 1474.21 89.65C1463.11 79.75 1457.56 67.3 1457.56 52.3C1457.56 37.3 1463.11 25 1474.21 15.4C1485.61 5.49998 1500.46 0.549982 1518.76 0.549982C1537.36 0.549982 1552.21 5.19998 1563.31 14.5C1574.41 23.8 1579.96 35.8 1579.96 50.5C1579.96 66.1 1574.41 79 1563.31 89.2C1552.21 99.1 1537.36 104.05 1518.76 104.05ZM1614.69 36.1H1716.39V370H1614.69V36.1ZM1761.46 36.1H1863.16V370H1761.46V36.1ZM2004.54 374.5C1983.54 374.5 1962.84 372.25 1942.44 367.75C1922.04 363.25 1905.54 357.4 1892.94 350.2L1920.84 283.15C1932.24 290.05 1945.74 295.45 1961.34 299.35C1976.94 303.25 1992.09 305.2 2006.79 305.2C2018.49 305.2 2026.59 304.3 2031.09 302.5C2035.89 300.4 2038.29 297.4 2038.29 293.5C2038.29 289.6 2035.29 286.9 2029.29 285.4C2023.59 283.9 2014.14 282.4 2000.94 280.9C1980.84 278.5 1963.74 275.5 1949.64 271.9C1935.54 268 1923.09 260.65 1912.29 249.85C1901.79 239.05 1896.54 223.6 1896.54 203.5C1896.54 187.6 1901.34 173.35 1910.94 160.75C1920.54 148.15 1934.79 138.1 1953.69 130.6C1972.89 123.1 1995.84 119.35 2022.54 119.35C2041.14 119.35 2059.29 121.15 2076.99 124.75C2094.99 128.05 2110.29 133 2122.89 139.6L2094.99 206.65C2073.39 194.65 2049.69 188.65 2023.89 188.65C2001.69 188.65 1990.59 192.55 1990.59 200.35C1990.59 204.25 1993.59 207.1 1999.59 208.9C2005.59 210.4 2015.04 211.9 2027.94 213.4C2048.04 215.8 2064.99 218.95 2078.79 222.85C2092.89 226.75 2105.19 234.1 2115.69 244.9C2126.49 255.7 2131.89 271.15 2131.89 291.25C2131.89 306.55 2127.09 320.5 2117.49 333.1C2107.89 345.7 2093.49 355.75 2074.29 363.25C2055.09 370.75 2031.84 374.5 2004.54 374.5Z"
          fill="#450b7c"
          fill-opacity="0.05"
        />
      </svg>
    </div>
    <div class="container">
      <Title
        class="title--center title-skills"
        title="About my Skills"
        text="Being a person always willing to learn new skills and techniques I enjoy being challenged and improving my knowledge!"
      />
      <Skills />
    </div>
  </section>

  <div style="height: 100rem">
    <h3>
      I have a passion for coffee, design and develop things. My recipe for
      success - love what you do, always learn new things and never stop
      practice!
    </h3>
  </div>
</template>

<script>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Modal from './components/Reusable/Modal';
import Hero from './components/Hero/Hero';
import Title from './components/Reusable/Title';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';

export default {
  name: 'App',
  components: { Modal, Hero, Title, About, Skills },
  data() {
    return {
      isModalVisible: false
    };
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.title-about', {
      scrollTrigger: {
        trigger: '.title-about',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      scale: 0.8,
      duration: 1
    });

    gsap.from('.title-skills', {
      scrollTrigger: {
        trigger: '.title-skills',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      scale: 0.8,
      duration: 1
    });
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
  padding: 5rem 0;

  @include respond(lap) {
    padding: 10rem 0;
  }
}

.section-about {
  background: linear-gradient(
    to bottom,
    $color-white,
    lighten($color-blue, 34%)
  );
}

.section-skills {
  position: relative;
  background: lighten($color-blue, 34%);
  overflow: hidden;
  z-index: 1;

  .skills-watermark {
    position: absolute;
    width: 130%;
    left: -15%;
    top: 10%;
    z-index: -1;
    opacity: 0;

    @include respond(lap) {
      opacity: 1;
    }
  }
}
</style>
