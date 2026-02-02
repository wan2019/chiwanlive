<template>
  <section class="box">
    <v-row id="portfolio" class="portfolio" justify="center" align="center">
      <v-col cols="12" >
        <div data-aos="fade-right">
          <div style="text-align: center;">
            <h1 class="mainColor size" >直播作品</h1>
          </div>
          <br>
          <br>
          <div style="text-align: center;">
            <h2 class="mainColor" style="font-size: 1.8em;">
              <span v-for="(each, index) in titles" :key="index"> 
                <span v-if="index !== 0">│</span>
                <span class="title__style" @click="gotoTarget(each.target)">{{each.title}}</span>
              </span>
            </h2>
          </div>
          <br>
          <br>
        </div>
      </v-col>

      <TitleBox title="活動直播│線下活動，線上直播！觀看人數倍數成長" id="live" style="margin-top: 1rem;"></TitleBox>
      <v-col v-for="(item, i) in list0" cols="12" sm="4" md="4" :key="`list0${i}`"  class="imgBox__container">
        <ImgBox :item="item"></ImgBox>
      </v-col>

      <!--  -->
      <TitleBox title="直播節目│低成本、高規格！直播節目就像經過後製" id="liveShow"></TitleBox>
      <v-col v-for="(item, i) in list2" cols="12" sm="4" md="4" :key="`list2${i}`"  class="imgBox__container">
        <ImgBox :item="item"></ImgBox>
      </v-col>
      <!--  -->
      <TitleBox title="錄影轉播│多機錄影，大小框！大螢幕轉播" id="liveBroadcast"></TitleBox>
      <v-col v-for="(item, i) in list3" cols="12" sm="4" md="4" :key="`list3${i}`"  class="imgBox__container">
        <ImgBox1 :item="item"></ImgBox1>
      </v-col>
      <!--  -->
      <TitleBox title="4G包直播│​機動性高！外景直播不受限" id="packageLive"></TitleBox>
      <v-col v-for="(item, i) in list5" cols="12" sm="4" md="4" :key="`list5${i}`"  class="imgBox__container">
        <ImgBox :item="item"></ImgBox>
      </v-col>

      <!-- 按鈕 -->
      <v-col cols="12" align="center">
        <div class="portfolio__btn__container" data-aos="fade-right">
          <br />
          <br />
          <v-btn x-large color="white--text" class="portfolio__btn" style="background-color:#FF573F" @click="changePage">
            歷年直播作品
          </v-btn>
          <img class="portfolio__btn__finger" src="@/static/material/cursor_PNG88.png" alt="" srcset="">
        </div>
      </v-col>

      <!-- video -->
      <TitleBox title="" id=""></TitleBox>
      <v-col cols="12" sm="4" md="4"  class="video__box" >
        <div data-aos="fade-right">
          <div class="video-container" >
            <iframe  width="100%" src="https://www.youtube.com/embed/_yfs5VE1wTw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="1" md="1"  class="" >
      </v-col>
      <v-col cols="12" sm="4" md="4" class="video__box">
        <div data-aos="fade-right">
          <div class="video-container">
            <iframe width="100%" src="https://www.youtube.com/embed/0n-o9SeJ3u8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <!-- <iframe class="resize" width="100%" src="https://www.youtube.com/embed/Uc2SR--kDo8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
          </div>
        </div>
      </v-col>
      <v-col cols="12" class="h70"></v-col>

    </v-row>
  </section>
</template>

<script>
import IframeBox from '~/components/general/IframeBox'
import ImgBox from '~/components/portfolio/ImgBox02'
import ImgBox1 from '~/components/portfolio/ImgBox1'
import TitleBox from '~/components/portfolio/Title'

export default {
  name: '',
  components: {
    ImgBox,
    ImgBox1,
    TitleBox
  },
  methods: {
    gotoTarget (target) {
      console.log('target', target);
      this.$vuetify.goTo(`#${target}`)
    },
    changePage () {
      const url = 'https://www.facebook.com/chichiwanwanlive';
      window.open(url)
    }
  },
  data () {
    return {
      titles: [
        {
          title: '活動直播',
          target: 'live'
        },
        {
          title: '直播節目',
          target: 'liveShow'
        },
        {
          title: '錄影轉播',
          target: 'liveBroadcast'
        },
        {
          title: '4G包直播',
          target: 'packageLive'
        },
      
      ],
      list0: [
        {
          alt: '2030教育AI年會',
          text: ['2030教育AI年會', '三機直播|簡報大小框|無線圖傳'],
          src: '/img/2024live5.jpg',
          aosDelay: 1,
          href: 'https://www.youtube.com/live/1d4NVjezAew?si=GSoH9RcJzUnJLIJj'
        },
        {
          alt: 'CEDAW 審查會議',
          text: ['CEDAW 審查會議', '四機直播|中英頻道|即時字幕|手語框'],
          src: '/img/liveevent_2_CEDAW.jpg',
          aosDelay: 2,
          href: 'https://www.youtube.com/watch?v=dj9cnZlO6Xo'
        },
        {
          alt: 'VOGUE 臺北時裝週國際論壇',
          text: ['VOGUE 臺北時裝週國際論壇', '雙機直播|視訊連線|簡報大小框'],
          src: '/img/liveevent_3.jpg',
          aosDelay: 3,
          href: 'https://www.youtube.com/watch?v=CLIeDYXsvUA'
        },
        {
          alt: '新北國王 成軍記者會',
          text: ['新北國王 成軍記者會', '三機直播|無線圖傳|雙平台直播'],
          src: '/img/pressConferenceLive.jpeg',
          aosDelay: 1,
          href: 'https://www.youtube.com/watch?v=ow59e0TGRBQ'
        },
        {
          alt: '商業周刊 BW Talks改變正發聲',
          text: ['商業周刊 BW Talks改變正發聲', '四機直播|多平台直播|直播特效'],
          src: '/portfolio/2businessWeekly.jpg',
          aosDelay: 2,
          href: 'https://youtu.be/HQPCibOuvkY?si=Q23fLZfcKmIzR26u'
        },
        {
          alt: '決戰蝦皮伸展台',
          text: ['決戰蝦皮伸展台', '五機直播|多平台直播'],
          src: '/portfolio/1shrimpStretchingPlatform.jpg',
          aosDelay: 3,
          href: 'https://youtu.be/YjhDtuWaMAA'
        },
        {
          alt: 'Anue鉅亨 投資視野無邊界',
          text: ['Anue鉅亨 投資視野無邊界', '雙機直播|簡報大小框'],
          src: '/img/2026live5.jpg',
          aosDelay: 1,
          href: 'https://www.youtube.com/live/q7moHHiN0uQ?si=sriu8pxtObAnq3uE'
        },
        {
          alt: '綠色奧斯卡頒獎典禮',
          text: ['綠色奧斯卡頒獎典禮', '雙機直播|鏡面設計|無線圖傳'],
          src: '/img/2026live3.jpg',
          aosDelay: 2,
          href: 'https://www.youtube.com/live/obWg3LzEAeA?si=E6sNiHa7wQ9nC8Vr'
        },
        {
          alt: '亞洲地區信用補充機構聯盟年會',
          text: ['亞洲地區信用補充機構聯盟年會', '雙機直播|簡報大小框|螢幕轉播'],
          src: '/img/2026live4.jpg',
          aosDelay: 3,
          href: 'https://www.youtube.com/live/TtkEOsj41lQ?si=T6qKI_Qmq26ajvL4'
        },
      ],
      list5: [
        {
          alt: '蝦皮購物 蝦編遊樂園約會',
          text: ['蝦皮購物 蝦編遊樂園約會', '雙機直播|4G包直播|直播特效'],
          src: '/portfolio/4amusementPark.jpg',
          aosDelay: 1,
          href: 'https://www.youtube.com/watch?v=hbHz56JtvhA&t=2512s'
        },
        {
          alt: '科技報橘 電子量測論壇',
          text: ['科技報橘 電子量測論壇', '單機直播|4G包直播'],
          src: '/img/2024live9.jpg',
          aosDelay: 2,
          href: ''
        },
        {
          alt: '佳宜好朋友 開箱運動博覽會',
          text: ['佳宜好朋友 開箱運動博覽會', '雙機直播|4G包直播|直播特效'],
          src: '/portfolio/6sportsExpo.jpg',
          aosDelay: 3,
          href: 'https://youtu.be/0dLonm0hmPM?si=mM2A7zigV_c9lnph'
        }
      ],
      list2: [
        {
          alt: 'COMPUTEX CPX ON AIR',
          text: ['COMPUTEX CPX ON AIR', '雙機直播|鏡面設計|簡報大小框'],
          src: '/img/2024live7.jpg',
          aosDelay: 1,
          href: 'https://www.youtube.com/live/C0B7Z5q6KFU?si=GCg8jm60tJyWTY-g'
        },
        {
          alt: '德麥法國萊思克盃',
          text: ['德麥法國萊思克盃', '四機直播|8+1框|無線圖傳'],
          src: '/img/liveshow_3.jpg',
          aosDelay: 2,
          href: 'https://www.youtube.com/live/YVXQPA8M9OE?feature=share'
        },
        {
          alt: '國際大風吹',
          text: ['國際大風吹', '三機直播|視訊連線|簡報大小框'],
          src: '/img/2026live2.jpg',
          aosDelay: 3,
          href: 'https://www.youtube.com/live/gP7V-oLVi5k?si=_hcz4RjLYavs0iO6'
        },

      ],
      // 網址連結
      list3: [
        {
          alt: '中磊電子 Sercomm New Year Party',
          text: ['中磊電子 Sercomm New Year Party', '三機直播|視訊連線|無線圖傳'],
          src: '/img/PD_1.jpg',
          aosDelay: 1,
          href: ''
        },
        {
          alt: 'KIRE 2026演唱會',
          text: ['KIRE 2026演唱會', '雙機錄影轉播|無線圖傳'],
          src: '/img/2026live6.jpg',
          aosDelay: 2,
          href: ''
        },
        {
          alt: '治平高中 聖誕演唱會',
          text: ['治平高中 聖誕演唱會', '四機轉播|無線圖傳'],
          src: '/portfolio/16highSchool.jpg',
          aosDelay: 3,
          href: ''
        }
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  min-height: 100vh;
  padding: 3rem;
  @include phone {
    padding: 1rem ;
  }
}
.size {
  font-size: 3rem;
  letter-spacing:0.05em;
}
.imgBox {
  &__container {
    display: flex;
    padding: 1.5rem;
    padding-right: 3rem;
  }
}
.title__style {
  cursor: pointer;
  &:hover {
    color: blue;
  }
}


/*=============影片=======================*/
.video {
  &__box {
    // padding: 50px;
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

.h70 {
  height: 70px;
}

</style>
