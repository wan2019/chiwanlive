<template>
  <section class="box">
    <v-row id="portfolio" class="portfolio" justify="center" align="center">
      <v-col cols="12" >
        <div data-aos="fade-right">
          <h1 class="mainColor size" >直播作品</h1>
          <h2>
            <span v-for="(each, index) in titles" :key="index"> 
              <span v-if="index !== 0">│</span>
              <span class="title__style" @click="gotoTarget(each.target)">{{each.title}}</span>
            </span>
          </h2>
          <br>
          <br>
        </div>
      </v-col>
      <!-- 影片檔 -->
      <v-col cols="12" sm="4" md="4"  class="video__box" >
        <div data-aos="fade-right">
          <h3 class="video__title">2021 PROMO</h3>
          <br>
          <div class="video-container" >
            <iframe  width="100%" src="https://www.youtube.com/embed/_yfs5VE1wTw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="1" md="1"  class="" >
      </v-col>
      <v-col cols="12" sm="4" md="4" class="video__box">
        <div data-aos="fade-right">
          <h3 class="video__title">2020 PROMO</h3>
          <br>
          <div class="video-container">
            <iframe width="100%" src="https://www.youtube.com/embed/0n-o9SeJ3u8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <!-- <iframe class="resize" width="100%" src="https://www.youtube.com/embed/Uc2SR--kDo8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
          </div>
        </div>
      </v-col>
      <!-- <hr size="8px" align="center" width="100%" color="#dedede"> -->
      <!-- 影片檔 end-->
      <TitleBox title="活動直播│線下活動，線上直播！觀看人數倍數成長" id="live"></TitleBox>
      <v-col v-for="(item, i) in list" cols="12" sm="4" md="4" :key="i"  class="imgBox__container">
        <ImgBox :item="item"></ImgBox>
      </v-col>
       <TitleBox title="電商直播│限時促銷，流量變現！直播導購銷量驚人" id="E-commerce"></TitleBox>
      <v-col v-for="(item, i) in list4" cols="12" sm="4" md="4" :key="`list4${i}`"  class="imgBox__container">
        <ImgBox :item="item"></ImgBox>
      </v-col>
  
      <!--  -->
      <TitleBox title="直播節目│低成本、高規格！直播節目就像經過後製" id="liveShow"></TitleBox>
      <v-col v-for="(item, i) in list2" cols="12" sm="4" md="4" :key="`list2${i}`"  class="imgBox__container">
        <ImgBox :item="item"></ImgBox>
      </v-col>
      <!--  -->
      <TitleBox title="現場轉播│多機畫面，大小框！大螢幕轉播" id="liveBroadcast"></TitleBox>
      <v-col v-for="(item, i) in list3" cols="12" sm="4" md="4" :key="`list3${i}`"  class="imgBox__container">
        <ImgBox1 :item="item"></ImgBox1>
      </v-col>
      <!--  -->
      <TitleBox title="4G包直播│​機動性高！外景直播不受限" id="packageLive"></TitleBox>
      <v-col v-for="(item, i) in list1" cols="12" sm="4" md="4" :key="`list1${i}`"  class="imgBox__container">
        <ImgBox :item="item"></ImgBox>
      </v-col>
      <!--  -->
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
          title: '電商直播',
          target: 'E-commerce'
        },
        {
          title: '直播節目',
          target: 'liveShow'
        },
        {
          title: '現場轉播',
          target: 'liveBroadcast'
        },
         {
          title: '4G包直播',
          target: 'packageLive'
        },
      
      ],
      list: [
        {
          alt: '國泰世華銀行',
          text: ['國泰世華銀行', '2023全球投資趨勢論壇'],
          src: '/img/liveevent_1.jpg',
          aosDelay: 1,
          href: 'https://www.youtube.com/watch?v=cBJy-MzxlIU'
        },
        {
          alt: '2022 CEDAW',
          text: ['2022 CEDAW', '第四次國家報告國際審查會議(中英頻道)'],
          src: '/img/liveevent_2_CEDAW.jpg',
          aosDelay: 2,
          href: 'https://www.youtube.com/watch?v=dj9cnZlO6Xo'
        },
        {
          alt: 'VOGUE',
          text: ['VOGUE', '2022臺北時裝週國際時尚論壇'],
          src: '/img/liveevent_3.jpg',
          aosDelay: 3,
          href: 'https://www.youtube.com/watch?v=CLIeDYXsvUA'
        },
        {
          alt: '臺北市職業籃球員職業工會',
          text: ['臺北市職業籃球員職業工會', '成立記者會'],
          src: '/img/liveevent_6.jpeg',
          aosDelay: 1,
          href: 'https://www.youtube.com/watch?v=_BVFxkr4b_8'
        },
        {
          alt: '仙女姐姐來我家 ',
          text: ['仙女姐姐來我家 ', '首映記者會'],
          src: '/img/liveevent_4.jpg',
          aosDelay: 2,
          href: 'https://www.youtube.com/watch?v=0TiZlG9pxZs'
        },
        {
          alt: '新北國王',
          text: ['新北國王', '新北市政府冠名合作暨新北國王成軍記者會'],
          src: '/img/pressConferenceLive.jpeg',
          aosDelay: 3,
          href: 'https://www.youtube.com/watch?v=ow59e0TGRBQ'
        },
        {
          alt: 'SEMI',
          text: ['SEMI', '台灣國際智慧能源週論壇(中英頻道)'],
          src: '/img/liveevent_5.jpg',
          aosDelay: 1,
          href: 'https://www.facebook.com/SEMITaiwan/videos/490135336360319/'
        },
        {
          alt: '商業周刊',
          text: ['商業周刊', 'BW Talks改變正發聲 外送經濟'],
          src: '/portfolio/2businessWeekly.jpg',
          aosDelay: 2,
          href: 'https://www.facebook.com/watch/live/?v=2786575584957630&ref=watch_permalink'
        },
        {
          alt: '蝦皮購物',
          text: ['蝦皮購物', '2020決戰蝦皮伸展台'],
          src: '/portfolio/1shrimpStretchingPlatform.jpg',
          aosDelay: 3,
          href: 'https://youtu.be/YjhDtuWaMAA'
        },
      ],
      list1: [
        {
          alt: '蝦皮購物',
          text: ['蝦皮購物', '你脫單了嗎？蝦編遊樂園約會', '直播平台：蝦皮APP'],
          src: '/portfolio/4amusementPark.jpg',
          aosDelay: 1,
          href: 'https://www.youtube.com/watch?v=hbHz56JtvhA&t=2512s'
        },
        {
          alt: '聊聊大明星',
          text: ['聊聊大明星', '大明星咖啡廳！鬼關一日打工仔報到！', '直播平台：Facebook、蝦皮APP'],
          src: '/portfolio/5chat.jpg',
          aosDelay: 2,
          href: 'https://www.youtube.com/watch?v=30CS8v2D0n8'
        },
        {
          alt: '佳宜好朋友',
          text: ['佳宜好朋友', '撼動未來！開箱運動博覽會', '直播平台：Facebook、蝦皮APP'],
          src: '/portfolio/6sportsExpo.jpg',
          aosDelay: 3,
          href: 'https://www.facebook.com/watch/live/?v=610314789669789&ref=watch_permalink'
        }
      ],
      list2: [
        {
          alt: '關鍵評論網',
          text: ['關鍵評論網', '2022永豐DAWHO之夜'],
          src: '/img/liveshow_1.jpg',
          aosDelay: 1,
          href: 'https://www.facebook.com/TheNewsLens/videos/1727099380994771/'
        },
        {
          alt: 'Anue鉅亨',
          text: ['Anue鉅亨', '備戰通膨巨獸來襲！遠銀外匯總經全攻略'],
          src: '/img/liveshow_2.jpg',
          aosDelay: 2,
          href: 'https://www.youtube.com/live/qvsPmyc0Jr4?feature=share'
        },
        {
          alt: 'TechOrange 科技報橘',
          text: ['TechOrange 科技報橘', '行銷5.0時代 解密MarTech數位經濟浪潮'],
          src: '/img/liveshow_4.jpeg',
          aosDelay: 3,
          href: 'https://www.facebook.com/watch/live/?ref=watch_permalink&v=551295106501340'
        },
        {
          alt: '德麥法國萊思克盃',
          text: ['德麥法國萊思克盃', '2022烘焙職人冠軍賽'],
          src: '/img/liveshow_3.jpg',
          aosDelay: 1,
          href: 'https://www.youtube.com/live/YVXQPA8M9OE?feature=share'
        },
        {
          alt: 'The DoDo Men 嘟嘟人',
          text: ['The DoDo Men 嘟嘟人', '三十萬訂閱音樂會'],
          src: '/portfolio/8universityWonderHome.jpeg',
          aosDelay: 2,
          href: 'https://youtu.be/uyv4cpD7ktA'
        },
        {
          alt: '永和聲活圈',
          text: ['永和聲活圈', '永和之快問快答'],
          src: '/portfolio/pass.jpg',
          aosDelay: 3,
          href: 'https://www.facebook.com/ntpcyonghe/videos/700380928015676/'
        },

        
      ],
      // TODO: 網址連結
      list3: [
        {
          alt: '中磊電子',
          text: ['中磊電子', '2023 Sercomm New Year Party'],
          src: '/img/PD_1.jpg',
          aosDelay: 1,
          href: ''
        },
        {
          alt: 'CISCO',
          text: ['CISCO', 'Engage Taipei ALL IN'],
          src: '/img/PD_2.jpg',
          aosDelay: 2,
          href: ''
        },
        {
          alt: '治平高中',
          text: ['治平高中', '2020聖誕演唱會'],
          src: '/portfolio/16highSchool.jpg',
          aosDelay: 3,
          href: ''
        }
      ],
      list4: [
        {
          alt: 'VOGUE ',
          text: ['VOGUE ', 'DARPHIN女力直播對談'],
          src: '/img/liveshop_1.jpg',
          aosDelay: 1,
          href: 'https://www.facebook.com/VogueTW/videos/2241448406014364'
        },
        {
          alt: 'Sisley Paris',
          text: ['Sisley Paris', '1分鐘瞬效拋光！女神奢燦肌瞬間get！'],
          src: '/img/liveshop_2.jpg',
          aosDelay: 2,
          href: 'https://www.facebook.com/SisleyParisTaiwan/videos/1111467402820278'
        },
        {
          alt: '​Epson',
          text: ['​Epson', '遠端列印生活辦公神隊友'],
          src: '/img/liveshop_3.jpg',
          aosDelay: 3,
          href: 'https://www.facebook.com/3c.sunfar/videos/5758109310879023'
        },
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

</style>
