<template>
  <section class="box">
    <v-row id="cooperation" class="cooperation" justify="center" align="center">
      <v-col cols="12">
        <br>
        <TitleBox title=""></TitleBox>
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
          alt: 'Sisley Paris',
          src: 'img/2024live1.jpg',
          text: ['Sisley Paris'],
          aosDelay: 1,
          href: 'https://fb.watch/pAjHUwF22C/?'
        },
        {
          alt: '科技報橘',
          text: ['科技報橘'],
          src: 'img/2024live2.jpg',
          aosDelay: 2,
          href: 'https://www.youtube.com/live/NRxvtIbw9M4?si=l98Vii6LCLV_BO3Y'
        },
        {
          alt: '關鍵評論網',
          text: ['關鍵評論網'],
          src: 'img/2024live3.jpg',
          aosDelay: 3,
          href: 'https://fb.watch/pAjs0pip5o/?'
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
