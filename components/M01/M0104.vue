<template>
<section class="box">
  <div class="triangle3"></div>
  <v-row id="advantage" class="advantage" >
    <v-col cols="12">
      <br>
      <TitleBox title="直播優勢"></TitleBox>
    </v-col>
    <v-col v-for="(item, i) in list" cols="12" sm="4" md="4" :key="i"  class="test__red">
      <ImgBox :item="item"></ImgBox>
    </v-col>
  </v-row>
</section>
</template>

<script>
import ImgBox from '~/components/general/ImgBox'
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
          alt: '線下活動 線上互動 活動直播線上線下兩者兼顧 增加品牌、產品、資訊曝光',
          text: ['線下活動 線上互動 ', '活動直播 線上線下兩者兼顧', '增加品牌、產品、資訊曝光'],
          src: 'img/Live_13.JPG',
          href: ''
        },
        {
          alt: '同時串流各大平台 一場直播同時串流數平台 FB、YouTube 、LINE Zoom、Cisco Webex GoToWebinar、Teams',
          text: ['同時串流各大平台', '一場直播同時串流數平台', 'FB、YouTube 、LINE','Zoom、Cisco Webex','GoToWebinar、Teams'],
          src: 'img/liveStream_14.jpg',
          href: ''
        },
        {
          alt: '直播就是活動記錄 直播後的影片不需剪輯 即是完整的活動記錄 網路上回放再增觀看數',
          text: ['直播就是活動記錄', '直播後的影片不需後製', '即是完整活動記錄', '網路上回放再增觀看數'],
          src: 'img/ActivityRecord_15.jpg',
          href: ''
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
}
.advantage {
  // background-color: var(--second-color);
  margin-bottom: 2rem;
}
.box {
  position: relative;
  min-height: 100vh;
  border: 1px solid blue;
  padding: 3rem;
}
.triangle3 {
  position: absolute;
  top: 0;
  right: 0;
  border-color: orangered orangered transparent transparent;
  border-style: solid solid solid solid;
 
    /* 設定邊框（上、下；左、右）大小相同的數值，可拼湊出任意形狀的三角形 */
    border-width: 45px 100px; 
 
    /* 設定 width、height 可更好理解原理 */
    height: 0px; 
    width: 0px; 
}

</style>
