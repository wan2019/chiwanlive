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
          <h3 class="video__title">2020 PROMO</h3>
          <br>
          <div class="video-container" >
            <iframe  width="100%" src="https://www.youtube.com/embed/0n-o9SeJ3u8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="1" md="1"  class="" >
      </v-col>
      <v-col cols="12" sm="4" md="4" class="video__box">
        <div data-aos="fade-right">
          <h3 class="video__title">2019 PROMO</h3>
          <br>
          <div class="video-container">
            <iframe width="100%" src="https://www.youtube.com/embed/9scHMQ81cVw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
      <TitleBox title="電競轉播│多名玩家，遊戲對戰！串流各大直播平台" id="Gaming"></TitleBox>
      <v-col v-for="(item, i) in list5" cols="12" sm="4" md="4" :key="`list5${i}`"  class="imgBox__container">
        <ImgBox :item="item"></ImgBox>
      </v-col>
      <!--  -->

      <TitleBox title="賽事轉播│即時回放，球評解說！全場記錄精彩重播" id="Tournament"></TitleBox>
      <v-col v-for="(item, i) in list6" cols="12" sm="4" md="4" :key="`list6${i}`"  class="imgBox__container">
        <ImgBox :item="item"></ImgBox>
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
import ImgBox from '~/components/portfolio/ImgBox02'
import ImgBox1 from '~/components/portfolio/ImgBox1'
import TitleBox from '~/components/portfolio/TitleBox'

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
        {
          title: '電競轉播',
          target: 'Gaming'
        },
        {
          title: '賽事轉播',
          target: 'Tournament'
        }
      ],
      list: [
        {
          alt: '德麥法國萊思克盃',
          text: ['德麥法國萊思克盃', '2021國王派冠軍賽', '直播平台：YouTube'],
          src: '/portfolio/lescure2.jpg',
          aosDelay: 1,
          href: 'https://youtu.be/9oTLE7GKOQ8'
        },
        {
          alt: '東吳大學EMBA',
          text: ['東吳大學EMBA', '永續經營．獲利創益 ESG座談會', '直播平台：YouTube'],
          src: '/portfolio/ESG.jpg',
          aosDelay: 1,
          href: 'https://www.youtube.com/watch?v=VUCTRJ13h_0'
        },
        {
          alt: '頂福陵園',
          text: ['頂福陵園', '110年度中元法會', '直播平台：YouTube'],
          src: '/portfolio/dinfucem.jpg',
          aosDelay: 1,
          href: 'https://youtu.be/xjuW71YyMB8'
        },
        {
          alt: '蝦皮購物',
          text: ['蝦皮購物', '2020決戰蝦皮伸展台', '直播平台：Facebook、YouTube​、蝦皮APP'],
          src: '/portfolio/1shrimpStretchingPlatform.jpg',
          aosDelay: 1,
          href: 'https://youtu.be/YjhDtuWaMAA'
        },
        {
          alt: '商業周刊',
          text: ['商業周刊', 'BW Talks改變正發聲 外送經濟', '直播平台：Facebook'],
          src: '/portfolio/2businessWeekly.jpg',
          aosDelay: 2,
          href: 'https://www.facebook.com/watch/live/?v=2786575584957630&ref=watch_permalink'
        },
        {
          alt: '中華電信',
          text: ['中華電信', '5G沉浸式舞台 異地共感', '直播平台：Facebook、Instagram'],
          src: '/portfolio/3chunghwaTelecom.jpg',
          aosDelay: 3,
          href: 'https://www.facebook.com/watch/live/?v=399055964538315&ref=watch_permalink'
        },
        {
          alt: '2021總統盃黑客松',
          text: ['2021總統盃黑客松', '公民許願池暨線上記者會', '直播平台：Facebook'],
          src: '/portfolio/27Liveevent.jpg',
          aosDelay: 4,
          href: 'https://www.facebook.com/ndc.gov.tw/videos/292198282343891/'
        },
        {
          alt: '2021台灣文學',
          text: ['2021台灣文學', '數位遊戲腳本徵選頒獎典禮', '直播平台：Facebook、YouTube'],
          src: '/portfolio/28Liveevent.jpg',
          aosDelay: 5,
          href: 'https://www.facebook.com/138753722860020/videos/234732411804686'
        },
        {
          alt: '科技報橘',
          text: ['科技報橘', '2020 達梭系統台灣用戶大會', '直播平台：GoToWebinar'],
          src: '/img/livePortfolio_23.jpg',
          aosDelay: 1,
          href: 'https://www.facebook.com/151776788178402/videos/671231023498013'
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
          alt: '永和聲活圈',
          text: ['永和聲活圈力', '永和之快問快答', '直播平台：Facebook'],
          src: '/portfolio/pass.jpg',
          aosDelay: 3,
          href: 'https://www.facebook.com/ntpcyonghe/videos/700380928015676/'
        },
        {
          alt: '蝦皮娛樂線',
          text: ['蝦皮娛樂線', '百萬點擊保證！唱作OG炸裂開唱！', '直播平台：蝦皮APP'],
          src: '/portfolio/7shopeeEntertainmentLine.jpg',
          aosDelay: 1,
          href: 'https://www.youtube.com/watch?v=q5__nca3OlI'
        },
        {
          alt: 'The DoDo Men 嘟嘟人',
          text: ['The DoDo Men 嘟嘟人', '三十萬訂閱音樂會', '直播平台：YouTube'],
          src: '/portfolio/8universityWonderHome.jpeg',
          aosDelay: 2,
          href: 'https://youtu.be/uyv4cpD7ktA'
        },
        {
          alt: 'TechOrange 科技報橘',
          text: ['TechOrange 科技報橘', '打造高C/P值企業戰情室 智慧工廠單一套件妙方', '直播平台：GoToWebinar'],
          src: '/portfolio/10techOrange.jpg',
          aosDelay: 1,
          href: 'https://youtu.be/18JPPoi-yeU?t=509'
        },
        {
          alt: 'TechOrange 科技報橘',
          text: ['TechOrange 科技報橘', '2020 Intelligent Asia 亞洲工業4.0智造展', '直播平台：Facebook'],
          src: '/portfolio/11techOrange.jpg',
          aosDelay: 2,
          href: 'https://www.facebook.com/watch/live/?v=2689645967987749&ref=watch_permalink'
        },
        {
          alt: '御蓮齋',
          text: ['御蓮齋', '無添加料理小教室', '直播平台：Facebook'],
          src: '/portfolio/12yulianzhai.jpg',
          aosDelay: 3,
          href: 'https://www.facebook.com/watch/live/?v=945997742569198&ref=watch_permalink'
        },
        {
          alt: '​美味生活 HowLiving',
          text: ['​美味生活 HowLiving', '​StarChef 美味星廚生死鬥', '直播平台：Facebook、YouTube'],
          src: '/portfolio/13HowLiving.jpg',
          aosDelay: 1,
          href: 'https://youtu.be/VbWszTl-52M?t=1507'
        },
        {
          alt: '美味生活 HowLiving',
          text: ['美味生活 HowLiving', '​一秒變大廚', '直播平台：Facebook、YouTube'],
          src: '/portfolio/14HowLiving.jpg',
          aosDelay: 2,
          href: 'https://youtu.be/_fl5zho6cXo'
        },
        {
          alt: '美味生活 HowLiving',
          text: ['美味生活 HowLiving', '​大師愛烘焙', '直播平台：Facebook、YouTube'],
          src: '/portfolio/15HowLiving.jpg',
          aosDelay: 3,
          href: 'https://youtu.be/ta3oyO4fKHM'
        }
      ],
      // TODO: 網址連結
      list3: [
        {
          alt: '治平高中',
          text: ['治平高中', '2020聖誕演唱會'],
          src: '/portfolio/16highSchool.jpg',
          aosDelay: 1,
          href: ''
        },
        {
          alt: '大慶證券',
          text: ['大慶證券', '春酒午宴星光紅毯'],
          src: '/portfolio/17daqingSecurities.jpg',
          aosDelay: 2,
          href: ''
        },
        {
          alt: '啟蒙盃',
          text: ['啟蒙盃', '期貨交易競賽'],
          src: '/portfolio/18enlightenmentCup.jpg',
          aosDelay: 3,
          href: ''
        }
      ],
      list4: [
         {
          alt: 'VOGUE ',
          text: ['VOGUE ', '2021 Riveted Fashion', '直播平台：Facebook'],
          src: '/portfolio/vogue.jpg',
          aosDelay: 1,
          href: 'https://www.facebook.com/VogueTW/videos/228740602623290/'
        },
        {
          alt: 'GoStyle購世代',
          text: ['GoStyle購世代', '台way購物節5購讚', '直播平台：Facebook'],
          src: '/portfolio/gostyle.jpg',
          aosDelay: 2,
          href: 'https://www.facebook.com/Gostylelife/videos/427928042131299/'
        },
        {
          alt: '​Epson',
          text: ['​Epson', '聖誕節標籤應用大解密', '直播平台：Facebook'],
          src: '/portfolio/epson2.jpg',
          aosDelay: 3,
          href: 'https://www.facebook.com/epson.com.tw/videos/329616195380728/'
        },
         {
          alt: '蝦皮購物',
          text: ['蝦皮購物', '年貨節 Non-stop 12小時直播！', '直播平台：YouTube、蝦皮APP'],
          src: '/portfolio/19xiaopiShopping.jpg',
          aosDelay: 1,
          href: 'https://www.youtube.com/watch?v=gTP-_Vq0J_0'
        },
        {
          alt: 'udn買東西',
          text: ['udn買東西', '洗髮界綠寶石 艾瑪絲頭皮淨化液', '直播平台：Facebook'],
          src: '/portfolio/20udn.jpg',
          aosDelay: 2,
          href: 'https://www.youtube.com/watch?v=PF2CERY75CE&t=932s'
        },
        {
          alt: '​Sisley Paris',
          text: ['​Sisley Paris', '居家養成女神豐盈秀髮', '直播平台：Facebook'],
          src: '/portfolio/21​sisleyParis.jpg',
          aosDelay: 3,
          href: 'https://www.facebook.com/watch/live/?v=486044159250706&ref=watch_permalink'
        }
      ],
      list5: [
        {
          alt: '靈境殺戮',
          text: ['靈境殺戮', '最危險的直播 —— EOS', '直播平台：Facebook、YouTube'],
          src: '/portfolio/22spiritRealmKill.jpg',
          aosDelay: 1,
          href: 'https://fb.watch/4Q311SmsCN/'
        },
        {
          alt: 'RO仙境傳說：守護永恆的愛',
          text: ['RO仙境傳說：守護永恆的愛', '守護仙境傳說 盡情放粽直播', '直播平台：Facebook'],
          src: '/portfolio/23RORagnarok.jpg',
          aosDelay: 2,
          href: 'https://www.facebook.com/RO.ForeverLove/videos/281914759663089/'
        },
        {
          alt: '怪物彈珠EXPO',
          text: ['​怪物彈珠EXPO', '怪彈季·天界廣場', '​​直播平台：YouTube'],
          src: '/portfolio/24monsterMarbleEXPO.jpg',
          aosDelay: 3,
          href: 'https://www.youtube.com/watch?v=dHJZcaB-nAI&t=12897s'
        }
      ],
      list6: [
        {
          alt: '台灣地板滾球運動聯盟',
          text: ['台灣地板滾球運動聯盟', '亞太區地板滾球公開賽', '直播平台：Facebook、YouTube'],
          src: '/portfolio/25taiwanBowlingLeague.jpg',
          aosDelay: 1,
          href: 'https://fb.watch/4SM0gGEig_/'
        },
        {
          alt: '救國團',
          text: ['救國團', '全國幼獅青年盃三對三籃球鬥牛賽', '直播平台：Facebook'],
          src: '/portfolio/26nationalSalvationCorps.jpg',
          aosDelay: 2,
          href: 'https://fb.watch/4iXGB6GGam/'
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

</style>
