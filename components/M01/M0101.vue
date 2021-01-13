<template>
  <!-- <v-carousel
    id="top"
    cycle
    height="400"
    hide-delimiters
    show-arrows-on-hover
    class="carousel__box"
  >
    <v-carousel-item
      v-for="(item, i) in list"
      :key="i"
    >
      <v-sheet
        height="100%"
        class="test__sheet"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3 img__box" >
            <v-img
              :src="item.src"
              :alt="item.alt"
              class="imgBox"
              :aspect-ratio="16/5"
              eager
            ></v-img>
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel> -->
  <div class="box">
    <v-carousel
    id="top"
    cycle
    height="275"
    hide-delimiters
    show-arrows-on-hover
  >
      <v-carousel-item
        v-for="(item,i) in list"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
      // TODO: 改名
      list: [
        {
          alt: 'LOGO',
          src: 'LOGO/fb__1.jpg'
        },
        {
          alt: '直播現場',
          src: 'img/onAir_1.jpg'
        },
        {
          alt: '直播現場',
          src: 'img/onAir_2.jpg'
        },
        {
          alt: '直播現場',
          src: 'img/onAir_3.jpg'
        },
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
.imgBox {
  height: 100%;
}
.img__box {
  width: 90%;
}
.carousel__box {
  background-color: green;
}
.test__sheet {
  background-color: gold;
}
.box {
  padding: 1rem;
  background-color: #eee;
}
</style>
