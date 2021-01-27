<template>
  <v-row id="profession">
    <v-col cols="12">
      <!-- <TitleBox title="電視台品質的專業直播" ></TitleBox> -->
    </v-col>
    <v-col v-for="(item, i) in list" cols="12" sm="6" md="4" :key="i"  class="test__red">
      <div class="imgBox">
        <v-img
          :src="item.src"
          :alt="item.alt"
          :aspect-ratio="6/4"
          class="imgBox__img"
          eager
        ></v-img>
        <h6
          v-for="(each ,k) in item.text"
          :key="k"
          class="imgBox__text"
        >{{each}}</h6>
      </div>
    </v-col>
    <v-col v-for="(item, i) in list2" cols="12" sm="6" md="6" :key="`list2${i}`"  class="test__red">
      <div class="imgBox">
        <v-img
          :src="item.src"
          :alt="item.alt"
          :aspect-ratio="6/4"
          class="imgBox__img"
          eager
        ></v-img>
        <h4
          v-for="(each ,k) in item.text"
          :key="k"
          class="imgBox__text"
        >{{each}}</h4>
      </div>
    </v-col>
    <!-- youtube 影片 -->
    <!-- <v-col cols="12" class="youtubeBox" justify="center" align="center"> -->
      
    <!-- </v-col> -->
    <div class="phone">
      <div class="phone__img"></div>
      <div class="phone__circle"></div>
      <div class="phone__circle2"></div>
      <div class="phone__circle3"></div>
    </div>
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
          src: 'img/sonyZ190_1.jpg',
          text: ['高品質影像','4K HDR、FULL HD', '廣播級攝影機']
        },
        {
          alt: '多機切換',
          src: 'img/multiview_2.jpg',
          text: ['多機切換','SDI、HDMI訊號', '多路導播機']
        },
        {
          alt: '專業收音',
          src: 'img/SoundMixer_3.jpg',
          text: ['專業收音','多軌混音器', '領夾式無線麥克風']
        },{
          alt: '攝影棚燈',
          src: 'img/Lighting_4.jpg',
          text: ['攝影棚燈','2800K-6500K', 'LED攝影棚燈']
        },{
          alt: '到府直播',
          src: 'img/PhotoStudio_7.jpg',
          text: ['到府直播','任何場地', '一秒搭建攝影棚']
        },{
          alt: '虛擬攝影棚',
          src: 'img/VirtualStudio_22.jpg',
          text: ['虛擬攝影棚','百變佈景', '直播節目不單調']
        }
      ],
      list2: [
        {
          alt: '即時字卡',
          src: 'img/LiveLogo_5.jpg',
          text: ['即時字卡','置入LOGO', '標題、贊助、影片']
        },{
          alt: '直播特效',
          src: 'img/specialEffect_6.gif',
          text: ['直播特效','獨家特效、動畫、音效']
        }
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
.phone {
  position: relative;
  height: 300px;
  width: 500px;
  background-color: black;
  border-radius: 40px;
  margin: 1rem;
  &__img {
    margin: 5px 0 5px 70px;
    height: 290px;
    width: 350px;
    background-color: yellow;
  }
  &__circle {
    position: absolute;
    right: 15px;
    top: 125px;
    background-color: orangered;
    border-radius: 50%;
    height: 50px;
    width: 50px;
  }
  &__circle2 {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    position: absolute;
    background-color: green;
    left: 24px;
    top: 183px;
  }
  &__circle3 {
    height: 64px;
    width: 7px;
    border-radius: 5px;
    position: absolute;
    background-color: green;
    left: 26px;
    top: 105px;
  }
}
.test__red {
  // border: 1px solid red;
  display: flex;
}
.imgBox {
  // border: 1px solid blue;
  background-color: #eee;
  padding: 1rem 0.75rem;
  width: 100%;
  &__img {
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }
  &__text {
    margin-top: 0.25rem;
    font-size: 1rem;
  }
}
.youtubeBox {
  background-color: #eee;
}
</style>
