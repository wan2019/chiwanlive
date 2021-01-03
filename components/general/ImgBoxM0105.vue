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
    <a :href="item.href" target="_blank" rel="noopener noreferrer">
    <v-img
      :src="item.src"
      :alt="item.alt"
      :aspect-ratio="aspectRatio"
      class="imgBox__img"
      eager
    ></v-img>
    </a>
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
  background-color: #eee;
  padding: 1rem 0.75rem;
  width: 100%;
  cursor: pointer;
  // transition: 2s ease-out 2s;
  // transform: translate(-6%, -6%);
  transition: 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  &:hover {
    box-shadow: 15px 15px 0px var(--orange-color);
    transform: translate(-15px, -15px);
        // box-shadow: 15px 15px 0px var(--orange-color);
        
        
  }
  &__img {
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }
  &__text {
    margin-top: 0.25rem;
    font-size: 1rem;
  }
}
</style>
