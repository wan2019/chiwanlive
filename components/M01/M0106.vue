<template>
  <v-row id="aboutUs" class="aboutUsBox">
    <v-col cols="12">
      <br>
      <TitleBox title="關於我們"></TitleBox>
    </v-col>
    <v-col  cols="12" sm="4" md="4" class="test__red">
      <ImgBox :item="item1"></ImgBox>
      <!-- <v-img
        :src="item1.src"
        :alt="item1.alt"
        class="imgBox__img"
        eager
      ></v-img> -->
    </v-col>
    <v-col  cols="12" sm="4" md="4" class="test__red">
      <div class="infoCard">
        <p>
          我們是Chichi & Wanwan　ChiWanLIVE
          <br>
          直播就是我們的生活
          <br>
          熱愛直播的即時性
          <br>
          我們活在當下，做好每一個現在
          <br>
          導播資歷9年
          <br>
          電視台導播│新創媒體導播│直播平台導播
        </p>
        <h2 class="text__center">直播場次每年逾百場</h2>
      </div>
    </v-col>
    <v-col  cols="12" sm="4" md="4" class="test__red">
      <ImgBox :item="item2"></ImgBox>
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
      item1: {
        alt: '導播　ChiChi',
        src: 'img/Director_19.jpg',
        text: ['導播　ChiChi']
      },
      item2: {
        alt: '導播　WanWan',
        text: ['導播　WanWan'],
        src: 'img/floorDirector_20.jpg'
      },
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
.aboutUsBox {
  // background-color: var(--second-color);
  margin-bottom: 2rem;
  // padding: 1rem 2rem;
  // padding-top: 0;
  // padding-bottom: 2rem;
}
.infoCard {
  // background-color: var(--blue-color);
  background-color: #eee;
  padding: 1rem 0.75rem;
  width: 100%;
  &__out {
    padding: 0;
    display: flex;
    justify-content: center;
  }
}
.test__red {
  display: flex;
}
.imgBox {
  // display: flex;
  // justify-content: center;
  // background-color: var(--blue-color);
  // border: 3px solid var(--blue-color);
  &__img {
    max-width: 200px;
    max-height: 200px;
    border-radius: 1rem;
    overflow: hidden;
    height: 170px;
    width: 170px;
  }
}
</style>
