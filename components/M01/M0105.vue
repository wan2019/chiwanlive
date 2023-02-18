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
          alt: '科技報橘',
          src: 'img/live_1-1.jpg',
          text: ['科技報橘'],
          aosDelay: 1,
          href: 'https://www.facebook.com/TechOrange/videos/1112631522994212'
        },
        {
          alt: 'COMPUTEX',
          text: ['COMPUTEX'],
          src: 'img/live_1-2.jpg',
          aosDelay: 2,
          href: 'https://www.youtube.com/watch?v=dmUlO9VPqIg'
        },
        {
          alt: '關鍵評論網',
          text: ['關鍵評論網'],
          src: 'img/live_1-3.jpg',
          aosDelay: 3,
          href: 'https://www.facebook.com/TheNewsLens/videos/315156554159334'
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
