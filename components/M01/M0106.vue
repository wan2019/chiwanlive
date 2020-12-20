<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <br>
      <TitleBox title="關於我們"></TitleBox>
    </v-col>
    <v-col  cols="12" sm="12" md="3" class="test__red">
      <ImgBox :item="item1"></ImgBox>
    </v-col>
    <v-col  cols="12" sm="12" md="6" class="test__red">
      <div>
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
        <h2 class="text__center mainColor">直播場次每年逾300場</h2>
      </div>
    </v-col>
    <v-col  cols="12" sm="12" md="3" >
      <ImgBox :item="item2"></ImgBox>
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
      item1: {
        alt: '導播　ChiChi',
        src: 'photo/19.jpg'
      },
      item2: {
        alt: '導播　WanWan',
        src: 'photo/20.jpg'
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
.test__red {
  // border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
