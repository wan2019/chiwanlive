<template>
  <v-row id="cooperation" class="cooperation" justify="center" align="center">
    <v-col cols="12">
      <br>
      <TitleBox title="精選合作"></TitleBox>
    </v-col>
    <v-col v-for="(item, i) in list" cols="12" sm="4" md="4" :key="i"  class="test__red">
      <ImgBox :item="item"></ImgBox>
    </v-col>
    
  </v-row>
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
          href: 'https://www.facebook.com/TechOrange/videos/212676336655250'
        },
        {
          alt: '蝦皮購物',
          text: ['蝦皮購物'],
          src: 'img/LiveWorks_17.jpg',
          href: 'https://www.youtube.com/watch?v=OlIFCuCkl1o'
        },
        {
          alt: '商業周刊',
          text: ['商業周刊'],
          src: 'img/LiveWorks_18.jpg',
          href: 'https://www.facebook.com/bwnet.fans/videos/3430742300304487'
        },
        
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
  // align-items: center;
  // justify-content: center;
}
.cooperation {
  // background-color: var(--second-color);
  // margin: 1rem;
  // margin-bottom: 2rem;
}
</style>
