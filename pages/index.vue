<template>
  <div>
    <M0101></M0101>
    <M0102></M0102>
    <br>
    <v-row id="service" justify="center" align="center" class="video">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/0n-o9SeJ3u8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </v-row>
    <M0103></M0103>
    <M0104></M0104>
    <M0105></M0105>
    
    <v-row >
    <v-col cols="12">
      <br>
      <TitleBox title="直播作品"></TitleBox>
    </v-col>
    <v-col v-for="(item, i) in list" cols="12" sm="4" md="4" :key="i"  class="test__red">
      <ImgBox :item="item"></ImgBox>
    </v-col>
    <!-- <v-col cols="12" class="btn__box">
      <v-btn class="btn" @click="doOther">更多作品</v-btn>
    </v-col> -->
    
  </v-row>
    <M0106></M0106>
    <M0107></M0107>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ImgBox from '../components/general/ImgBoxM0105'
import TitleBox from '~/components/general/TitleBox'
import M0101 from '../components/M01/M0101'
import M0102 from '../components/M01/M0102'
import M0103 from '../components/M01/M0103'
import M0104 from '../components/M01/M0104'
import M0105 from '../components/M01/M0105'
import M0106 from '../components/M01/M0106'
import M0107 from '../components/M01/M0107'

export default {
  scrollToTop: true,
  components: {
    Logo,
    ImgBox,
    M0101,
    M0102,
    M0103,
    M0104,
    M0105,
    M0106,
    M0107,
  },
  data() {
    return {
      list: [
        {
          alt: '2020 達梭系統臺灣用戶大會',
          text: ['2020 達梭系統臺灣用戶大會', '線下活動 線上直播'],
          src: 'img/livePortfolio_23.jpg',
          href: 'https://www.facebook.com/151776788178402/videos/671231023498013'
        },
        {
          alt: '聊聊大明星 ft.任賢齊',
          text: ['聊聊大明星 ft.任賢齊', '直播就像經過後製'],
          src: 'img/livePortfolio_24.jpg',
          href: 'https://www.youtube.com/watch?v=yJ9YKIOAs6M'
        },
        {
          alt: '蝦編射起來 到底誰最箭​',
          text: ['蝦編射起來 到底誰最箭​', '外景直播不受限'],
          src: 'img/livePortfolio_25.jpg',
          href: 'https://www.facebook.com/watch/live/?v=2896233803803971&ref=watch_permalink'
        }
      ]
    }
  },
  methods: {
    doOther () {
      this.$router.push({ path: `/portfolio` })
    }
  }
}
</script>
<style lang="scss" scoped>
.text {
  &__center {
    text-align: center;
  }
}
.test__red {
  // border: 1px red solid;
  display: flex;
}
.video {
  // background-color: var(--orange-color);
  background-color: #eee;
  padding: 1rem 0;
}
.btn__box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn {
  background-color: var(--orange-color)!important;
  color: white!important;
}
</style>
