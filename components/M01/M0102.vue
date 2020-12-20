<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <br>
      <TitleBox title="電視台品質的專業直播" ></TitleBox>
    </v-col>
    <v-col v-for="(item, i) in list" cols="6" sm="6" md="3" :key="i"  class="test__red">
      <ImgBox :item="item"></ImgBox>
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
        {
          alt: '高品質影像',
          src: 'photo/1.jpg'
        },
        {
          alt: '多機切換',
          src: 'photo/2.jpg'
        },
        {
          alt: '收音清晰',
          src: 'photo/3.jpg'
        },{
          alt: '攝影棚燈',
          src: 'photo/4.jpg'
        },{
          alt: '即時字卡',
          src: 'photo/5.jpg'
        },{
          alt: '直播特效',
          src: 'photo/6.gif'
        },{
          alt: '到府直播',
          src: 'photo/7.jpg'
        },{
          alt: '虛擬攝影棚',
          src: 'photo/22.jpg'
        }
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
