<template>
  <v-row id="advantage" justify="center" align="center">
    <v-col cols="12">
      <br>
      <TitleBox title="直播優勢"></TitleBox>
    </v-col>
    <v-col v-for="(item, i) in list" cols="6" sm="6" md="3" :key="i"  class="test__red">
      <ImgBox :item="item"></ImgBox>
    </v-col>
    
  </v-row>
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
          src: 'photo/13.jpg'
        },
        {
          alt: '同時串流各大平台 一場直播同時串流數平台 FB、YouTube 、LINE Zoom、Cisco Webex GoToWebinar、Teams',
          src: 'photo/14.jpg'
        },
        {
          alt: '直播就是活動記錄 直播後的影片不需剪輯 即是完整的活動記錄 網路上回放再增觀看數',
          src: 'photo/15.jpg'
        },{
          alt: '現場轉播－多機畫面　大螢幕現場LIVE',
          src: 'photo/11.jpg'
        }
        // ,{
        //   alt: '4G包直播－機動性高　外景直播不受限',
        //   src: 'photo/12.jpg'
        // },
        // {
        //   alt: '直播特效',
        //   src: 'photo/6.gif'
        // },{
        //   alt: '到府直播',
        //   src: 'photo/7.jpg'
        // },{
        //   alt: '虛擬攝影棚',
        //   src: 'photo/22.jpg'
        // }
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
  align-items: center;
  justify-content: center;
}
</style>
