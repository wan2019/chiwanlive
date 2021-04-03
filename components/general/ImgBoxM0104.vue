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
      <!-- <h6
        v-for="(each ,k) in item.text"
        :key="k"
        :class="{imgBox__text: true, imgBox__textFirst: k === 0}"
      >
      {{each}}</h6> -->
      <template v-for="(each ,k) in item.text" >
        <h4 v-if="k === 0" :key="k" class="imgBox__text imgBox__title">
          <!-- <v-icon class="icon__sty mainColor">mdi-play-circle-outline</v-icon> -->
          {{each}}
        </h4>
        <h4 v-else :key="k" class="imgBox__text">{{each}}</h4>
      </template>
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
    margin: auto;
    // display: flex;
  }
  &__text {
    z-index: 100;
    margin-top: 0.25rem;
    // font-size: 1.25rem;
    font-size: 1.5rem;
  }
  &__textFirst {
    font-size: 1.5rem;
  }
}
h6 {
  font-size: 16px;
}
.imgBox {
  &__text {
    text-align: center;
    z-index: 100;
    margin-top: 0.25rem;
    // font-size: 1rem;
    font-size: 1.5rem;
  }
  &__title {
    font-size: 1.5rem;
    padding-bottom: 1rem;
  }
}
</style>
