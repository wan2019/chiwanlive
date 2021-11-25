<template>
  <section class="box">
    <v-row id="cooperation" class="cooperation" justify="center" align="center">
      <v-col cols="12">
        <br>
        <TitleBox title="精選合作"></TitleBox>
        <br>
      </v-col>
      <v-col v-for="(item, i) in list" cols="12" sm="4" md="4" :key="i"  class="test__red">
        <ImgBox :item="item"></ImgBox>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import ImgBox from '~/components/general/ImgBoxM0105'
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
          alt: '科技報橘',
          src: 'img/LiveWorks_16.png',
          text: ['科技報橘'],
          aosDelay: 1,
          href: 'https://www.youtube.com/watch?v=6BTyFrHIBIk'
        },
        {
          alt: '蝦皮購物',
          text: ['蝦皮購物'],
          src: 'img/LiveWorks_17.jpg',
          aosDelay: 2,
          href: 'https://www.youtube.com/watch?v=OlIFCuCkl1o'
        },
        {
          alt: '商業周刊',
          text: ['商業周刊'],
          src: 'img/LiveWorks_18.jpg',
          aosDelay: 3,
          href: 'https://www.facebook.com/bwnet.fans/videos/3430742300304487'
        },
        
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
.cooperation {
  padding-top: 50px;
  // height: 100%;
}
.text {
  &__center {
    text-align: center;
  }
}
.test__red {
  // border: 1px solid red;
  display: flex;
  // border: blue 1px solid;
  padding: 1.5rem;
  // align-items: center;
  // justify-content: center;
}
.box {
  min-height: 100vh;
  padding: 3rem;
  // background-color: var(--second-color);
  // margin: 1rem;
  // margin-bottom: 2rem;
}
</style>
