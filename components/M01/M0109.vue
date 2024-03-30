<template>
  <section class="box">
    <v-row id="cooperation" class="cooperation" justify="center" align="center">
      <v-col cols="12">
        <br>
        <TitleBox title="直播作品"></TitleBox>
        <br>
      </v-col>
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
  </section>
</template>

<script>
import ImgBox from '~/components/general/ImgBoxM0109'
import TitleBox from '~/components/general/TitleBox'

export default {
  name: '',
  components: {
    ImgBox,
    TitleBox
  },
  data() {
    return {
      list: [
        {
          alt: 'HYUNDAI新車上市發表會',
          text: ['HYUNDAI新車上市發表會', '線下活動 線上直播'],
          src: 'img/live1_HYUNDAI.jpg',
          aosDelay: 1,
          href: 'https://www.youtube.com/watch?v=CP5tRulF2k8'
        },
        {
          alt: '聊聊大明星 ft.任賢齊',
          text: ['聊聊大明星 ft.任賢齊', '直播就像經過後製'],
          src: 'img/livePortfolio_24.jpg',
          aosDelay: 2,
          href: 'https://www.facebook.com/ShopeeTW/videos/306260070529351'
        },
        {
          alt: '2024全球投資趨勢論壇​',
          text: ['2024全球投資趨勢論壇​', '現場遠端雙向互動'],
          src: 'img/2024live4.jpg',
          aosDelay: 3,
          href: 'https://www.youtube.com/live/FjoZCPjeCB8?si=6VMVpqa845X-9xQW'
        }
      ]
    };
  },
  methods: {
    changePage () {
      // 另開文件
      console.log('url', `${window.location.protocol}//${window.location.host}`);
      // const url = `${window.location.protocol}//${window.location.host}https://chiwanlive.com.tw/portfolio`
      const url = 'https://chiwanlive.com.tw/portfolio'
      window.open(url)
    }
  }
};
</script>

<style lang="scss" scoped>
.cooperation {
  padding-top: 50px;
  // height: 100%;
}
.text {
  &__center {
    text-align: center;
  }
}
.test__red {
  display: flex;
  // border: blue 1px solid;
  padding: 1.5rem;
  // align-items: center;
  // justify-content: center;
}
.box {
  min-height: 100vh;
  padding: 3rem;
  background-color: #eee;
  // background-color: var(--second-color);
  // margin: 1rem;
  // margin-bottom: 2rem;
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
