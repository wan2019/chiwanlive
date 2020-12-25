<template>
  <v-carousel
    id="top"
    cycle
    height="400"
    hide-delimiters
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(item, i) in list"
      :key="i"
    >
      <v-sheet
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">
            <v-img
              :src="item.src"
              :alt="item.alt"
              class="imgBox"
              eager
            ></v-img>
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
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
      list: [
        {
          alt: '科技報橘',
          src: 'LOGO/fb__1.jpg'
        },
        {
          alt: '科技報橘',
          src: 'LOGO/fb__2.jpg'
        },
        {
          alt: '蝦皮購物',
          src: 'LOGO/fb__3.jpg'
        },
        {
          alt: '商業周刊',
          src: 'LOGO/fb__4.jpg'
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
</style>
