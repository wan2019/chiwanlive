<template>
  <div class="imgBox">
    <!-- 關於我們 -->
    <div data-aos="fade-right" :data-aos-delay="aosDelay" >
      <div class="imgBox__out">
      <div class="imgBox__container">
        <div style="width:400px">
          <v-img
            :src="item.src"
            :alt="item.alt"
            :aspect-ratio="aspectRatio"
            class="imgBox__img"
            eager
            contain
          ></v-img>
        </div>
      </div>
    <h6
      v-for="(each ,k) in item.text"
      :key="k"
      class="imgBox__text"
    >
    <v-icon v-if="k === 0" class="icon__sty mainColor">mdi-play-circle-outline</v-icon>
    {{each}}</h6>
  </div>
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
      default: 6/4,
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
  width: 100%;
  // border: 1px solid blue;
  &__out {
    // background-color: var(--yellow-color);
  }
  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
    background-color: var(--orange-color);
    // height: 250px;
  }
  &__img {
    // border-radius: 0.5rem;
    // margin-bottom: 1rem;
  }
  &__text {
    z-index: 100;
    // margin-top: 0.25rem;
    font-size: 1.5rem;
    text-align: center;
    padding: 1rem 1rem;
  }
}
</style>
