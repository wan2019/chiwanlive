<template>
  <section class="box">
    <v-row id="portfolio" class="portfolio" justify="center" align="center">
      <v-col cols="12" >
        <h1 class="mainColor size" >直播作品</h1>
        <br>
        <h2 class="secondColor">活動直播│電商直播│4G包直播│直播節目│電競轉播│賽事轉播│現場轉播</h2>
      </v-col>
      <!-- 影片檔 -->
      <v-col cols="12" sm="6" md="6"  class="video__box" >
        <h3 class="video__title">2020 PROMO</h3>
        <br>
        <div class="video-container" >
          <iframe  width="100%" src="https://www.youtube.com/embed/0n-o9SeJ3u8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="6" class="video__box">
        <h3 class="video__title">2019 PROMO</h3>
        <br>
        <div class="video-container">
          <iframe class="resize" width="100%" src="https://www.youtube.com/embed/Uc2SR--kDo8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </v-col>
      <br>
      <hr size="8px" align="center" width="100%" color="#dedede">
      <!-- 影片檔 end-->
      <v-col cols="12" >
        <br>
        <br>
        <br>
        <h2 class="secondColor">活動直播│線下活動，線上直播！觀看人數倍數成長</h2>
        <br><br>
      </v-col>
      <v-col v-for="(item, i) in list" cols="12" sm="4" md="4" :key="i"  class="imgBox__container">
        <ImgBox :item="item"></ImgBox>
      </v-col>
      
      <v-col cols="12" align="center">
      </v-col>
    </v-row>
  </section>
  <!-- <v-row id="portfolio">
    <v-col class="text-center">
      
    </v-col>
    活動直播│線下活動，線上直播！觀看人數倍數成長
  </v-row> -->
</template>

<script>
import IframeBox from '~/components/general/IframeBox'
import ImgBox from '~/components/general/ImgBoxM0109'
import TitleBox from '~/components/general/TitleBox'

export default {
  name: '',
  components: {
    ImgBox,
    TitleBox
  },
  data () {
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
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  min-height: 100vh;
  padding: 3rem;
}
.size {
  font-size: 3rem;
  letter-spacing:0.05em;
}
.imgBox {
  &__container {
    display: flex;
    padding: 1.5rem;
  }
}

/*=============影片=======================*/
.video {
  &__box {
    padding: 50px;
  }
  &__title {
    font-size: 1.5rem;
    letter-spacing:0.05em;
  }
}

.video-container {

position: relative;

padding-bottom: 56.25%;

padding-top: 30px;

height: 0;

overflow: hidden;

}
.video-container iframe, .video-container object, .video-container embed {

position: absolute;

top: 0;left: 0;

width: 100%;

height: 100%;}

@media (max-width:767px){
    img.photo{margin: 0;width: 100%;} 
    #no1 {width: 90%;}
    
    
}

</style>
