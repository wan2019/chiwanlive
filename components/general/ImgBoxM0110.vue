<template>
  <div class="imgBox">
    <!-- 精選合作 -->
    <div data-aos="fade-right" :data-aos-delay="aosDelay" >
    <a :href="item.href" target="_blank" rel="noopener noreferrer">
    <v-img
      :src="item.src"
      :alt="item.alt"
      :aspect-ratio="aspectRatio"
      class="imgBox__img"
      eager
    ></v-img>
    </a>
    <br>
    <h6
      v-for="(each ,k) in item.text"
      :key="k"
      class="imgBox__text"
    >
    <v-icon v-if="k%2 === 0" class="icon__sty mainColor">mdi-play-circle-outline</v-icon>
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
  </div>
</template>

<script>

export default {
  name: 'ImgBox',
  props: {
    item: [Object],
    aspectRatio: {
      type: [Number, String],
      default: 1.78,
    }
  },
  computed: {
    aosDelay() {
      return this.item.aosDelay*300
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
  cursor: pointer;
  // transition: 2s ease-out 2s;
  // transform: translate(-6%, -6%);
  // box-shadow: 15px 15px 0px var(--orange-color);
  // transition: 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &__img {
    // transition: 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    // box-shadow: 20px 20px 0px var(--orange-color);
  }
  &__text {
    margin-top: 0.25rem;
    font-size: 1rem;
    // text-align: center;
  }
}
</style>
