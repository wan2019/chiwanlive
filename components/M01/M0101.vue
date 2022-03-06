<template>
  <section class="box">
    <div class="carouselBox">
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
    <div class="carouselBox__phone">
      <v-img
        :src="phoneList[0].src"
        :alt="phoneList[0].alt"
        class="carouselBox__phone__img"
        eager
      ></v-img>
    </div>
    <div class="box__textBox">
      <div class="text__container">
        <div data-aos="fade-right" data-aos-duration="1000">
          <h2 class="center">活動直播│電商直播│直播節目│電競轉播│賽事轉播│4G包直播│直播攝影棚</h2>
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
          src: '/LOGO/fb__1.jpg'
        }
      ],
      phoneList: [
        {
          alt: 'LOGO',
          src: '/LOGO/phone2.png'
        }
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
.carouselBox {
  @include phone {
    display: none;
  }
  &__phone {
    display: none;
    @include phone {
      display: inline;
    }
  }
}
</style>
