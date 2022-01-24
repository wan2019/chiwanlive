<template>
  <div  class="imgBox">
    <div data-aos="fade-right" :data-aos-delay="aosDelay">
      <v-img
        :src="item.src"
        :alt="item.alt"
        :aspect-ratio="aspectRatio"
        class="imgBox__img"
        height="225px"
        eager
      ></v-img>
      <template v-for="(each ,k) in item.text" >
        <h4 v-if="k === 0" :key="k" class="imgBox__text imgBox__title">
          {{each}}
        </h4>
        <h6 v-else :key="k" class="imgBox__text">{{each}}</h6>
      </template>
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
      return this.item.aosDelay*400
    }
  },
}
</script>

<style lang="scss" scoped>
.imgBox {
  width: 100%;
  &__img {
    margin-bottom: 1rem;
  }
  &__text {
    text-align: center;
    z-index: 100;
    margin-top: 0.25rem;
    font-size: 1.25rem;
  }
  &__title {
    font-size: 1.25rem;
    padding-bottom: 1rem;
  }
}
</style>
