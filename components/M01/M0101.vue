<template>
  <section class="box">
    <div>
      <!-- TODO: 寬度要再修改 -->
      <v-carousel
      id="top"
      cycle
      width="425"
      hide-delimiters
      :show-arrows="false"
    >
        <v-carousel-item
          v-for="(item,i) in list"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </div>
    <div class="box__textBox">
      <div class="text__container">
        <div data-aos="fade-right" data-aos-duration="1000">
          <!-- <h2 class="center">直播就是我們的生活</h2> -->
          <!-- <h2 class="center">熱愛直播的即時性</h2> -->
          <!-- <h2 class="center">我們活在當下，做好每一個現在</h2> -->
          <h2 class="center">活動直播│電商直播│直播節目│電競轉播│賽事轉播│4G包直播</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      // TODO: 改名
      list: [
        {
          alt: 'LOGO',
          src: 'LOGO/fb__1.jpg'
        },
        // {
        //   alt: '直播現場',
        //   src: 'img/onAir_1.jpg'
        // },
        // {
        //   alt: '直播現場',
        //   src: 'img/onAir_2.jpg'
        // },
        // {
        //   alt: '直播現場',
        //   src: 'img/onAir_3.jpg'
        // },
      ]
    };
  },
  computed: {
  }
};
</script>

<style lang="scss" scoped>
.box {
  min-height: 90vh;
  &__textBox{
    display: flex;
    .text__container {
      margin: 100px auto;
    }
  }
}
.center {
  text-align: center;
}
</style>
