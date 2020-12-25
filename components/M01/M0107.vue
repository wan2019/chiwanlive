<template>
  <v-row id="contactUs" justify="center" align="center">
    <v-col cols="12">
      <br>
      <TitleBox title="聯絡我們"></TitleBox>
    </v-col>
    <v-col cols="12" sm="6" md="6">
      <p>
        新北市新店區(桃園以南酌收車馬費)
        <br>
        chichiwanwan0417@gmail.com​
        <br>
        0988 029 812
        <br>
        若未接電話煩請傳Line
        <br>
        直播結束立刻回電
        <br>
        <br>
        ＋LINE詢問報價
        @kqa0233a
      </p>
    </v-col>
    <v-col cols="12" sm="6" md="6">
      <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fchichiwanwanlive%2F&amp;tabs=timeline&amp;width=340&amp;height=500&amp;small_header=true&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=false&amp;appId" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </v-col>
    <!-- <v-col v-for="(item, i) in list" cols="6" sm="6" md="3" :key="i"  class="test__red">
      <ImgBox :item="item"></ImgBox>
    </v-col> -->
    
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
          alt: '活動直播－線下活動　線上直播　觀看人數倍數成長',
          src: 'photo/8.jpg'
        },
        {
          alt: '網路節目－低成本　高規格　直播節目就像經過後製',
          src: 'photo/9.jpg'
        },
        {
          alt: '視訊直播－遠端視訊　即時對話　全球來賓任你邀',
          src: 'photo/10.jpg'
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
