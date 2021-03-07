<template>
  <div class="imgBox">
    <!-- <img
      class="VuetifyLogo grey lighten-2"
      :alt="item.alt"
      :src="item.src"
    > -->
    <!-- <v-img
      :src="item.src"
      :alt="item.alt"
      class="imgBox__img Logo"
      eager
    ></v-img> -->
    <v-img
      :src="item.src"
      :alt="item.alt"
      :aspect-ratio="aspectRatio"
      class="imgBox__img"
      eager
    ></v-img>
    <h6
      v-for="(each ,k) in item.text"
      :key="k"
      class="imgBox__text"
    >
    <v-icon v-if="k === 0" class="icon__sty mainColor">mdi-play-circle-outline</v-icon>
    {{each}}</h6>
    <!-- <v-img
        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
        aspect-ratio="1"
        class="grey lighten-2"
      > -->
    <!-- <p class="center imgBox__text">
      <v-icon class="icon__sty mainColor">mdi-play-circle-outline</v-icon>{{item.alt}}</p> -->
  </div>
</template>

<script>

export default {
  name: 'ImgBox',
  props: {
    item: [Object],
    aspectRatio: {
      type: [Number, String],
      default: 6/4,
    }
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
  // background-color: #eee;
  // padding: 1rem 0.75rem;
  width: 100%;
  &__img {
    // border-radius: 0.5rem;
    margin-bottom: 1rem;
  }
  &__text {
    z-index: 100;
    margin-top: 0.25rem;
    font-size: 1rem;
  }
}
</style>
