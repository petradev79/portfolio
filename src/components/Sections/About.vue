<template>
  <div class="about">
    <div class="about__text">
      <p>
        Hi there, my name is Ivan developer and designer from Serbia, currently
        working as a freelancer.
      </p>
      <p>
        My passion to design and develop things comes from my affinity for
        details and noticing things around. Alexander McQueen said there is no
        better designer than nature.
      </p>
      <p>
        Research shows that around 51 percent of the global mobile users
        currently access the internet via only their smartphone. I make dinamic
        apps and website pages perfect regardless of the screen size.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  margin-top: 10rem;
  display: flex;
  // border: 1px solid red;

  &__text {
    width: 35%;
    padding: 2rem 3rem;
    border-radius: 1rem;
    background: linear-gradient(
      to left,
      $color-blue-light 0%,
      $color-blue-light 70%,
      transparent 70%
    );

    text-align: justify;

    // background: linear-gradient(to right, #fff, lighten(#49e9fb, 32%));

    p {
      margin: 1rem 0;
    }
  }
}
</style>
