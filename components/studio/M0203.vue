<template>
  <section class="box">
    <v-row justify="center" align="center">
      <v-col v-for="(item, i) in list" cols="12" sm="4" md="4" :key="i"  class="test__red">
        <ImgBox :item="item"></ImgBox>
      </v-col>
      <v-col cols="12" align="center">
        <div class="portfolio__btn__container" data-aos="fade-right">
          <v-btn x-large color="white--text" class="portfolio__btn" style="background-color:#FF573F" @click="changePage">
            作品集
          </v-btn>
          <img class="portfolio__btn__finger" src="../../static/material/cursor_PNG88.png" alt="" srcset="">
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="6" md="6" align="center">
        <ImgBox :item="list2[0]"></ImgBox>
      </v-col>
      <v-col cols="12" sm="6" md="6" align="center">
        <!-- FIXME: 直播洽詢 -->
        <h3>趣玩影像專屬直播棚</h3>
        <h3>開幕期間不需場地費</h3>
        <h3>直播洽詢 +LINE @kqa0233a</h3>
        ​<h3>  </h3>
        ​<h3>＊攝影棚不對外租借</h3>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import ImgBox from '@/components/studio/M0203ImgBox.vue';

export default {
  name: '',
  components: {
    ImgBox,
  },
  data() {
    return {
      list: [ // FIXME: 攝影機 - 作品集頁
        {
          alt: '攝影棚位置',
          text: ['位置', '​南京復興站7號出口', '走路3分鐘', '停車場林立'],
          src: 'material/live1.png',
          href: '',
          width: 150,
          bottom: 0,
          aosDelay: 1,
        },
        {
          alt: '攝影棚設備',
          text: ['專業設備', '導播台、廣播級攝影機', '混音器、領夾麥克風', '監看螢幕、LED棚燈'],
          src: 'material/live2.png',
          href: '',
          width: 150,
          bottom: 0,
          aosDelay: 2,
        },
        {
          alt: '攝影棚環境',
          text: ['環境', '​39坪舒適空間', '化妝間、休息室', '可架設背板'],
          src: 'material/live3.png',
          href: '',
          width: 150,
          bottom: 0,
          aosDelay: 3,
        }
      ],
      list2: [
        {
          alt: '',
          src: 'LOGO/logoLong.png', // FIXME: logo圖片
          href: '',
          width: 400,
          bottom: 0,
        },
      ],
    };
  },
  methods: {
    changePage () {
      console.log('url', `${window.location.protocol}//${window.location.host}`);
      const url = 'https://chiwanlive.com.tw/portfolio'
      window.open(url)
    }
  }
};
</script>

<style lang="scss" scoped>
.text {
  &__center {
    text-align: center;
  }
}
.test__red {
  display: flex;
  padding: 1.5rem;
}
.box {
  min-height: 100vh;
  padding: 3rem;
}
.portfolio {
  &__btn {
    cursor: pointer;
    &__container {
      position: relative;
    }
    &__finger {
      position: absolute;
      height: 60px;
      transform: rotate(-20deg) translateX(-32px) translateY(16px);
    }
  }
}
</style>
