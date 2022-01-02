<template>
<section class="box">
  <v-row id="contactUs" class="contactUsBox">
    <v-col cols="12" class="titleBox">
      <br>
      <div class="img__box">
        <v-img
          max-width="300px"
          src="LOGO/logoText.png">
        </v-img>
      </div>
    </v-col>
    <v-col cols="12" sm="4" md="4">
      <div class="infoCard">
        <p>
        新北市新店區
        <br>
        Tel -  0988 029 812 (13:30-21:00)
        <br>
        Mail - chichiwanwan0417@gmail.com​
        <br>
        ＋LINE詢問報價
        @kqa0233a
      </p>
       </div>
    </v-col>
    <v-col cols="12" sm="4" md="4">
      <div class="fbCard">
        <iframe  frame :src="`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fchichiwanwanlive%2F&amp;tabs=timeline&amp;width=340&amp;height=${fbHight}&amp;small_header=true&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=false&amp;appId`" width="340" :height="fbHight" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    </v-col>
    <v-col cols="12" sm="4" md="4">
      <div class="lineQrCard">
        <img src="https://qr-official.line.me/sid/M/kqa0233a.png">
        <a href="https://lin.ee/fXMce4v"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/zh-Hant.png" alt="加入好友" height="36" border="0"></a>
      </div>
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
      fbHight: 180,
      list: [
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  padding: 2rem;
  background-color: var(--orange-color);
}
.text {
  &__center {
    text-align: center;
  }
}
.contactUsBox {
  padding-bottom: 100px;
}
.titleBox {
  // padding: 0;
}
.fbCard {
  // padding-right: 150px;
  height: 100%;
  // border: 1px red solid;
  display: flex;
  justify-content: center;
}
.infoCard {
  height: 100%;
  font-size: 1.25rem;
  // color: rgba(255, 255, 255, 0.6);
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.lineQrCard {
  height: 100%;
}
.img__box {
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
