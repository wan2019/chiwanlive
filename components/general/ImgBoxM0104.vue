<template>
  <div class="imgBox">
    <!-- 直播優勢 -->
    <div data-aos="fade-right" :data-aos-delay="aosDelay" >
    <div class="imgBox__container">
      <div :style="`width:${item.width}px`">
        <v-img
          :src="item.src"
          :alt="item.alt"
          :aspect-ratio="aspectRatio"
          class="imgBox__img"
          :style="`margin-bottom:${item.bottom}px`"
          eager
          contain
        ></v-img>
      </div>
    </div>
    <div class="imgBox__textBox">
      <h6
        v-for="(each ,k) in item.text"
        :key="k"
        :class="{imgBox__text: true, imgBox__textFirst: k === 0}"
      >
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
  &__container {
    display: flex;
    // border: 1px solid blue;
    justify-content: center;
    align-items: center;
    height: 250px;
  }
  &__img {
    // border: 1px solid red;
  }
  &__textBox {
    // border: 1px solid red;
    max-width: 250px;
    margin: auto;
    // display: flex;
  }
  &__text {
    z-index: 100;
    margin-top: 0.25rem;
    font-size: 1.25rem;
  }
  &__textFirst {
    font-size: 1.5rem;
  }
}
.borderBox {
  // border: 1px solid blue;
}
</style>
