a<template>
  <transition name="fade">
    <div class="modal-overlay">
      <transition name="slide" appear>
        <div v-show="isModalVisible" class="modal">
          <div class="modal__content">
            <Title
              title="Get in Touch"
              text="Let's work together or share some thoughts!"
            />
            <div class="modal__contact-box">
              <div
                class="modal__contact"
                @click="redirect('https://linkedin.com/in/i-petrovic')"
              >
                <i class="fab fa-linkedin"></i>
                <span>Ivan Petrovic | LinkedIn</span>
              </div>

              <div
                class="modal__contact"
                @click="
                  redirect('https://github.com/petradev79?tab=repositories')
                "
              >
                <i class="fab fa-github"></i>
                <span>Ivan Petrovic | GitHub</span>
              </div>

              <div class="modal__contact" @click="copyEmail">
                <i class="far fa-envelope"></i>
                <span>{{ email }}</span>
                <input type="hidden" id="email" :value="email" />
              </div>
            </div>
          </div>

          <!-- <div class="modal__phone">
            <img src="@/assets/img/phone-model.png" alt="Phone Image" />
          </div> -->

          <div class="modal__close" @click="close">
            <!-- <i class="fas fa-times"></i> -->X
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import Title from '../Reusable/Title.vue';
export default {
  name: 'Modal',
  props: ['isModalVisible'],
  components: { Title },
  data() {
    return {
      email: 'petraivan1010@gmail.com'
    };
  },
  methods: {
    close() {
      this.$emit('close');
    },
    redirect(link, target = '_blank') {
      window.open(link, target);
    },
    copyEmail() {
      const email = document.getElementById('email');
      email.select();
      navigator.clipboard.writeText(email.value);
    }
  }
};
</script>

<style lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10rem 5rem;
  width: 100%;
  max-width: 50rem;
  height: 80vh;
  background: #ffffff;
  border-radius: 1rem;
  box-shadow: -2rem 2rem 2rem rgba(0, 0, 0, 0.3);

  &__content {
    // width: 80%;
    height: 100%;
    // border: 1px solid red;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__contact-box {
    // border: 1px solid red;
    margin-top: 5rem;
  }

  &__contact {
    // border: 1px solid red;
    margin-top: 3rem;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:active {
      transform: translateY(0.1rem);
    }

    i {
      font-size: 2.5rem;
    }

    .fa-linkedin {
      color: #0077b5;
    }

    .fa-github {
      color: #1e2733;
    }

    .fa-envelope {
      color: #ff5757;
    }

    span {
      margin-left: 2rem;
      font-size: 1.6rem;
      font-weight: bold;
    }
  }

  &__phone {
    position: absolute;
    right: 3rem;
    // right: -1rem;
    top: 5rem;
    // top: 0;
    height: calc(80vh - 10rem);
    // height: 100%;
    z-index: -1;

    img {
      height: 100%;
    }
  }

  &__close {
    position: absolute;
    left: 5rem;
    top: 5rem;
    color: #912222;
    font-size: 3rem;
  }
}
</style>
