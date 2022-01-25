<template>
  <section class="box">
    <div class="carouselBox">
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
          <h2 class="center">直播攝影棚</h2>
          <br>
          <h2 class="center">專業設備│優質場地│高速網路│電視台品質</h2>
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
      list: [
        {
          alt: 'LOGO',
          src: '/LOGO/ChiWanLIVEstudio.jpg' // FIXME: 直播攝影棚上方的圖片
        }
      ],
      phoneList: [
        {
          alt: 'LOGO',
          src: '/LOGO/phone2.png' // FIXME: 直播攝影棚在手機模式的上方圖片 
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
      margin: 80px auto;
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
