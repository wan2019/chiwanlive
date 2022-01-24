<template>
  <div class="imgBox">
    <div data-aos="fade-right" :data-aos-delay="aosDelay">
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
        <template v-for="(each ,k) in item.text" >
          <h6 v-if="k === 0" :key="k" class="imgBox__text imgBox__title">
            {{each}}
          </h6>
          <h6 v-else :key="k" class="imgBox__text">{{each}}</h6>
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
    justify-content: center;
    align-items: center;
    height: 250px;
  }
  &__textBox {
    margin: auto;
  }
  &__text {
    z-index: 100;
    margin-top: 0.25rem;
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
    font-size: 1.25rem;
  }
  &__title {
    font-size: 1.5rem;
    padding-bottom: 1rem;
  }
}
</style>
