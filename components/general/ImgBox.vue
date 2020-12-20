<template>
  <div class="imgBox">
    <!-- <img
      class="VuetifyLogo grey lighten-2"
      :alt="item.alt"
      :src="item.src"
    > -->
    <v-img
      :src="item.src"
      :alt="item.alt"
      class="imgBox__img VuetifyLogo"
    ></v-img>
    <!-- <v-img
        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
        aspect-ratio="1"
        class="grey lighten-2"
      > -->
    <p class="center imgBox__text">
      <v-icon class="icon__sty mainColor">mdi-play-circle-outline</v-icon>{{item.alt}}</p>
  </div>
</template>

<script>

export default {
  name: 'ImgBox',
  props: {
    item: [Object]
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.imgBox {
  // border: 1px solid blue;
  &__img {
    border-radius: 50%;
    // height: 200px;
    // width: 200px;
    max-height: 200px;
    max-width: 200px;
  }
  &__text {
    margin-top: 0.5rem;
    font-size: 1.125rem;
  }
  .icon__sty {
    font-size: 0.9em;
  }
}
.center {
  text-align: center;
}
.VuetifyLogo {
  overflow: hidden;
  height: 170px;
  width: 170px;
  transform: rotateY(180deg);
  animation: turn 2.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
