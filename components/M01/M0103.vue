<template>
<section class="box">
  <div class="box__item">
    <v-row id="service" class="service">
      <v-col cols="12">
        <br>
        <TitleBox title="服務項目"></TitleBox>
        <br>
        <br>
        <br>
      </v-col>
      <v-col v-for="(item, i) in list2" cols="12" sm="6" md="3" :key="`list2${i}`"  class="test__red">
        <ImgBox :item="item"></ImgBox>
      </v-col>
    </v-row>
  </div>
</section>
</template>

<script>
import ImgBox from '~/components/general/ImgBoxM0103'
import TitleBox from '~/components/general/TitleBox'

export default {
  name: '',
  components: {
    ImgBox,
    TitleBox
  },
  data() {
    return {
      list2: [
        {
          alt: '活動直播－線下活動　線上直播　觀看人數倍數成長',
          src: 'img/liveStream_8.jpg',
          text: ['網路直播 ','線下活動 線上直播', '直播節目就像經過後製'],
          aosDelay: 1,
        },
        {
          alt: '4G包直播 8張網卡聚合  外景直播不斷線',
          src: 'img/OutdoorLiveBroadcast_12.jpg',
          text: ['4G包直播','8張網卡聚合','外景直播不斷線'],
          aosDelay: 2,
        },
        {
          alt: '視訊直播 遠端視訊　即時對話　全球來賓任你邀',
          src: 'img/RemoteVideo_10.jpg',
          text: ['視訊直播','遠端視訊　即時對話','全球來賓任你邀'],
          aosDelay: 3,
        },
        {
          alt: '現場轉播 多機畫面 大螢幕現場LIVE',
          src: 'img/LiveBroadcast_11.jpg',
          text: ['現場轉播','多機畫面','大螢幕現場LIVE'],
          aosDelay: 4,
        }
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
.imgLogo {
  height: 1em;
  vertical-align:middle;
}
.text {
  &__center {
    text-align: center;
  }
}
.test__red {
  // border: 1px solid red;
  display: flex;
  // border: 1px solid green;
}
.box {
  position: relative;
  // min-height: 90vh;
  padding: 3rem;
  &__item {
    // border: 1px solid red;
    // background-color: green;
  }
}
.service {
  margin-bottom: 2rem;
}
</style>
