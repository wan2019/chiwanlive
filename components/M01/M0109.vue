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
        <div class="portfolio__btn__container">
          <v-btn color="white--text" class="portfolio__btn" style="background-color:#FF573F" @click="changePage">
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
          alt: '2020 達梭系統臺灣用戶大會',
          text: ['2020 達梭系統臺灣用戶大會', '線下活動 線上直播'],
          src: 'img/livePortfolio_23.jpg',
          aosDelay: 1,
          href: 'https://www.facebook.com/151776788178402/videos/671231023498013'
        },
        {
          alt: '聊聊大明星 ft.任賢齊',
          text: ['聊聊大明星 ft.任賢齊', '直播就像經過後製'],
          src: 'img/livePortfolio_24.jpg',
          aosDelay: 2,
          href: 'https://www.youtube.com/watch?v=yJ9YKIOAs6M'
        },
        {
          alt: '蝦編射起來 到底誰最箭​',
          text: ['蝦編射起來 到底誰最箭​', '外景直播不受限'],
          src: 'img/livePortfolio_25.jpg',
          aosDelay: 3,
          href: 'https://www.facebook.com/watch/live/?v=2896233803803971&ref=watch_permalink'
        }
      ]
    };
  },
  methods: {
    changePage () {
      console.log('change page');
      this.$router.push({ path: `/portfolio` })
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
      height: 40px;
      transform: rotate(-20deg) translateX(-22px) translateY(6px);
    }
  }
}
</style>
