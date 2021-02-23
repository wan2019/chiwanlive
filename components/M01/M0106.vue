<template>
<section class="box">
  <v-row id="aboutUs" class="aboutUsBox">
    <v-col cols="12">
      <br>
      <br>
      <TitleBox title="關於我們"></TitleBox>
      <br>
    </v-col>
    <v-col  cols="12" sm="12" md="4" class="test__red">
      <ImgBox :item="item1"></ImgBox>
    </v-col>
    <v-col  cols="12" sm="12" md="4" class="test__red">
        <div class="infoCard__out infoCard">
          <div data-aos="fade-right" :data-aos-delay="600" >
            <div class="infoCard__in">
              <h3>我們是Chichi & Wanwan　ChiWanLIVE</h3>
              <h3>直播就是我們的生活</h3>
              <h3>熱愛直播的即時性</h3>
              <h3>我們活在當下，做好每一個現在</h3>
              <h3>導播資歷9年</h3>
              <h3>電視台導播│新創媒體導播│直播平台導播</h3>
              <br>
              <h2 class="text__label text__center">直播場次每年逾百場</h2>
          </div>
        </div>
      </div>
    </v-col>
    <v-col  cols="12" sm="12" md="4" class="test__red">
      <ImgBox :item="item2"></ImgBox>
    </v-col>
  </v-row>
</section>
</template>

<script>
import ImgBox from '~/components/general/ImgBoxM0106'
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
        text: ['導播　ChiChi'],
        aosDelay: 1,
      },
      item2: {
        alt: '導播　WanWan',
        text: ['導播　WanWan'],
        src: 'img/floorDirector_20.jpg',
        aosDelay: 3,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  min-height: 100vh;
  // border: 1px solid red;
  padding: 3rem;
}
.aboutUsBox {
  margin-bottom: 2rem;
  // border: 1px solid blue;
  height: 100%;
}
.text {
  &__center {
    text-align: center;
  }
}
.infoCard {
  width: 100%;
  height: 100%;
  &__in {
    padding: 1rem 0.75rem;
    padding-top: 6rem;
  }
  &__out {
    padding: 0;
    display: flex;
    justify-content: center;
    position: relative;
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
h3 {
  letter-spacing: 0.05em;
  text-align: center;
}
.text__label {
  color: var(--orange-color);;
}
</style>
