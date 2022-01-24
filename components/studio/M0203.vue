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
        <h3>直播洽詢+LINE XXXX</h3>
        <h3>*直播攝影XXXXX</h3>
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
          alt: '線下活動 線上互動 活動直播線上線下兩者兼顧 增加品牌、產品、資訊曝光',
          text: ['線下活動 線上互動 ', '活動直播', '線上線下兩者兼顧', '增加品牌、產品、資訊曝光'],
          src: 'material/macbookAir.png',
          href: '',
          width: 200,
          bottom: 0,
          aosDelay: 1,
        },
        {
          alt: '同時串流各大平台 一場直播同時串流數平台 FB、YouTube 、LINE Zoom、Webex、Google Meet、Teams',
          text: ['同時串流各大平台', '一場直播同時串流數平台', 'FB、YouTube 、LINE 、Zoom', 'Webex、Google Meet、Teams'],
          src: 'material/macbookAir.png',
          href: '',
          width: 200,
          bottom: 0,
          aosDelay: 2,
        },
        {
          alt: '直播就是活動記錄 直播後的影片不需剪輯 即是完整的活動記錄 網路上回放再增觀看數',
          text: ['直播就是活動記錄', '直播後的影片不需後製', '即是完整活動記錄', '網路上回放再增觀看數'],
          src: 'material/macbookAir.png',
          href: '',
          width: 200,
          bottom: 0,
          aosDelay: 3,
        }
      ],
      list2: [
        {
          alt: '',
          src: 'LOGO/logoLong.png', // FIXME: logo圖片
          href: '',
          width: 200,
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
