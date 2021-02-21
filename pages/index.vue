<template>
  <div>
    <LoadingLogo v-if="logoStatus" title="logoLoading"></LoadingLogo>
    <M0101 title="輪播封面"></M0101>
    <M0108 title="直播200場"></M0108>
    <M0102 title="電視台品質的專業直播"></M0102>
    <!-- <M0110 title="phone"></M0110> -->
    <!-- <v-row id="service" justify="center" align="center" class="video">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/0n-o9SeJ3u8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </v-row> -->
    <M0103 title="服務項目 未完成"></M0103>
    <M0104 title="直播優勢 （剩對齊）"></M0104>
    <M0105 title="精選合作 已完成"></M0105>
    <M0109 title="直播作品 剩btn跳轉（加繞圈動畫）"></M0109>
    <M0106 title="關於我們"></M0106>
    <M0107 title="聯絡我們"></M0107>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ImgBox from '../components/general/ImgBoxM0105'
import LoadingLogo from '../components/general/LoadingLogo'
import TitleBox from '~/components/general/TitleBox'
import M0101 from '../components/M01/M0101'
import M0102 from '../components/M01/M0102'
import M0103 from '../components/M01/M0103'
import M0104 from '../components/M01/M0104'
import M0105 from '../components/M01/M0105'
import M0106 from '../components/M01/M0106'
import M0107 from '../components/M01/M0107'
import M0108 from '../components/M01/M0108'
import M0109 from '../components/M01/M0109'
import M0110 from '../components/M01/M0110'

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
    M0108,
    M0109,
    M0110,
    LoadingLogo,
  },
  data() {
    return {
      logoStatus: true,
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
  mounted () {
    // this.logoStatus = true
    // setTimeout(() => {
    //   this.logoStatus = false
    // }, 3000)
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
.box {
  min-height: 100vh;
  // padding: 3rem;
  // background-color: var(--second-color);
  // margin: 1rem;
  // margin-bottom: 2rem;
}
</style>
