<template>
  <v-row id="contactUs" class="contactUsBox">
    <v-col cols="12" class="titleBox">
      <br>
      <TitleBox title="聯絡我們"></TitleBox>
    </v-col>
    <v-col cols="12" sm="6" md="6">
      <v-card class="fbCard">
        <iframe  frame src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fchichiwanwanlive%2F&amp;tabs=timeline&amp;width=340&amp;height=400&amp;small_header=true&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=false&amp;appId" width="340" height="400" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="6">
      <v-card class="infoCard">
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
      <img src="https://qr-official.line.me/sid/M/kqa0233a.png">
      <a href="https://lin.ee/fXMce4v"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/zh-Hant.png" alt="加入好友" height="36" border="0"></a>
      </v-card>
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
.contactUsBox {
  // background-color: var(--second-color);
}
.titleBox {
  // padding: 0;
}
.infoCard {
  background-color: #eee;
  padding: 1rem 2rem;
}
.fbCard {
  background-color: #eee;
  display: flex;
  justify-content: center;
}
</style>
