<template>
<section class="box">
  <div class="box__item">
    <v-row id="service" class="service">
      <v-col v-for="(item, i) in list2" cols="12" sm="6" md="4" :key="`list2${i}`"  class="test__red">
        <ImgBox :item="item"></ImgBox>
      </v-col>
    </v-row>
  </div>
</section>
</template>

<script>
import ImgBox from '@/components/studio/M0202ImgBox.vue'

export default {
  name: '',
  components: {
    ImgBox,
  },
  data() {
    return {
      list2: [ // FIXME: 攝影圖片
        {
          alt: '攝影棚場景1',
          src: 'img/Livephoto1.jpg',
          text: ['雙人訪談'],
          aosDelay: 1,
        },
        {
          alt: '攝影棚場景2',
          src: 'img/Livephoto2.jpg',
          text: ['節目'],
          aosDelay: 2,
        },
        {
          alt: '攝影棚場景3',
          src: 'img/Livephoto3.jpg',
          text: ['綠幕'],
          aosDelay: 3,
        },
        {
          alt: '攝影棚場景4',
          src: 'img/Livephoto4.jpg',
          text: ['四人訪談'],
          aosDelay: 4,
        },
        {
          alt: '攝影棚場景5',
          src: 'img/Livephoto5.jpg',
          text: ['電商'],
          aosDelay: 5,
        },
        {
          alt: '攝影棚場景6',
          src: 'img/Livephoto6.jpg',
          text: ['廚房'],
          aosDelay: 6,
        }
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
.imgLogo {
  height: 1em;
  vertical-align:middle;
}
.text {
  &__center {
    text-align: center;
  }
}
.test__red {
  display: flex;
}
.box {
  position: relative;
  padding: 3rem;
}
.service {
  margin-bottom: 2rem;
}
</style>
