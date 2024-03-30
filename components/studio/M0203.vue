<template>
<div>
  <section class="box">
    <v-row justify="center" align="center">
      <v-col v-for="(item, i) in list" cols="12" sm="4" md="4" :key="i"  class="test__red">
        <ImgBox :item="item"></ImgBox>
      </v-col>
      <TitleBox class="mainColor" style="font-size: 1.75rem;letter-spacing:0.1em;" title="攝影棚直播案例"></TitleBox>
      <v-col v-for="(item, i) in list5" cols="12" sm="4" md="4" :key="`list5${i}`"  class="imgBox__container">
        <ImgBox2 :item="item"></ImgBox2>
      </v-col>
      <v-col cols="12" align="center">
        <div class="portfolio__btn__container" data-aos="fade-right">
          <br />
          <v-btn x-large color="white--text" class="portfolio__btn" style="background-color:#FF573F" @click="changePage">
            更多作品
          </v-btn>
          <img class="portfolio__btn__finger" src="../../static/material/cursor_PNG88.png" alt="" srcset="">
        </div>
      </v-col>
    </v-row>
    <br>
    <br>
    <br>
  </section>
  <section class="infoBox">
    <br>
    <br>
    <br>
    <v-row justify="center" align="center" >
      <v-col cols="12" sm="6" md="6" align="center">
        <ImgBox :item="list2[0]"></ImgBox>
      </v-col>
      <v-col cols="12" sm="6" md="6" align="center">
        <h3>趣玩影像專屬直播棚</h3>
        <h3>直播洽詢 +LINE @kqa0233a</h3>
        ​<h3>  </h3>
        ​<h3>＊攝影棚不對外租借</h3>
      </v-col>
    </v-row>
  </section>
</div>
</template>

<script>
import ImgBox from '@/components/studio/M0203ImgBox.vue';
import ImgBox2 from '~/components/portfolio/ImgBox02';
import TitleBox from '~/components/portfolio/Title';

export default {
  name: '',
  components: {
    ImgBox,
    ImgBox2,
    TitleBox,
  },
  data() {
    return {
      list: [
        {
          alt: '攝影棚位置',
          text: ['位置', '​南京復興站7號出口', '走路3分鐘', '附近停車場多'],
          src: '/material/live1.png',
          href: '',
          width: 150,
          bottom: 0,
          aosDelay: 1,
        },
        {
          alt: '攝影棚設備',
          text: ['專業設備', '導播台、廣播級攝影機', '混音器、領夾麥克風', '50吋監看螢幕、LED棚燈', '500M/500M有線網路'],
          src: '/material/live2.png',
          href: '',
          width: 150,
          bottom: 0,
          aosDelay: 2,
        },
        {
          alt: '攝影棚環境',
          text: ['環境', '​39坪舒適空間', '休息室、化妝台', '可架設背板'],
          src: '/material/live3.png',
          href: '',
          width: 150,
          bottom: 0,
          aosDelay: 3,
        }
      ],
      list2: [
        {
          alt: '',
          src: '/LOGO/logoLong.png',
          href: '',
          width: 400,
          bottom: 0,
        },
      ],
      list5: [
        {
          alt: '鉅亨網',
          text: ['鉅亨網', '升息循環迎終局 總經外匯關鍵展望'],
          src: '/img/2024live10.jpg',
          aosDelay: 1,
          href: 'https://www.youtube.com/live/yQVARylN8QA?si=JZdWDNisQGVQzVeT'
        },
        {
          alt: 'Sisley Paris',
          text: ['Sisley Paris', '1滴奇蹟 睡出名媛金緻光'],
          src: '/img/2024live11.jpg',
          aosDelay: 2,
          href: 'https://fb.watch/nuvFpQt8OW/?mibextid=cr9u03'
        },
        {
          alt: '世界展望會',
          text: ['世界展望會', '飢餓三十走進台灣角落 看見偏鄉社工上山下海的日常'],
          src: '/img/2024live12.jpg',
          aosDelay: 3,
          href: 'https://www.facebook.com/WorldVisionTW/videos/647736393635983/'
        },
        {
          alt: '民報',
          text: ['民報', '2022選後政治情勢'],
          src: '/img/livestudio_1.jpg',
          aosDelay: 1,
          href: 'https://www.youtube.com/live/9FLva0pA1rk?feature=share'
        },
        {
          alt: 'Sisley Paris',
          text: ['Sisley Paris', '奢寵生日慶'],
          src: '/img/livestudio_2.jpeg',
          aosDelay: 2,
          href: 'https://www.facebook.com/watch/live/?ref=watch_permalink&v=5784415938254600'
        },
        {
          alt: '國泰綜合證券',
          text: ['國泰綜合證券', '2023全球投資展望線上論壇'],
          src: '/img/livestudio_3.jpeg',
          aosDelay: 3,
          href: 'https://www.youtube.com/live/EedcmL_r53A?feature=share'
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
  padding: 3rem 2rem;
}
.infoBox {
  background-color: #eee;
  padding: 0 3rem;
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

.imgBox {
  &__container {
    display: flex;
    padding: 1.5rem;
    padding-right: 3rem;
  }
}
</style>
