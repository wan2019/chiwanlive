<template>
<section class="box">
  <v-row id="profession">
    <v-col cols="12">
      <!-- <TitleBox title="電視台品質的專業直播" ></TitleBox> -->
    </v-col>
    <v-col v-for="(item, i) in list" cols="12" sm="6" md="4" :key="i"  class="">
      <div class="imgBox" data-aos="fade-right" data-aos-anchor-placement="center-bottom" :data-aos-delay="i*300">
        <v-hover v-slot="{ hover }">
          <v-card class="mx-auto" color="grey lighten-4" width="600">
            <v-img
              :src="item.src"
              :alt="item.alt"
              :aspect-ratio="6/4"
              eager
              height="225px">
              <div v-if="!hover" class="card__title">
                <h4>{{item.alt}}</h4>
              </div>
              <v-expand-transition>
                  <div v-if="hover" class="transition-fast-in-fast-out black  darken-2 v-card--reveal white--text">
                    <div>
                      <h6 v-for="(item, idx) in item.text" :key="idx">{{item}}</h6>
                    </div>
                  </div>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
      </div>
    </v-col>
  </v-row>
</section>
</template>

<script>
import TitleBox from '~/components/general/TitleBox'

export default {
  name: '',
  components: {
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
          src: 'img/mixer.jpg',
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
          alt: '專屬直播棚',
          src: 'img/ChiWanLIVEstudio1.jpg',
          text: ['直播攝影棚','專業技術、設備、場景', '一次擁有']
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
#profession {
  padding-top: 3rem;
}
.box {
  position: relative;
  min-height: 100vh;
  padding: 3rem;
}
.imgBox {
  background-color: #eee;
  width: 100%;
  &__text {
    margin-top: 0.25rem;
    font-size: 1rem;
  }
}
.youtubeBox {
  background-color: #eee;
}

.title__text {
  color: white;
  padding-top: 3rem;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.7;
  position: absolute;
  width: 100%;
  cursor: pointer;
  font-size: 2rem;
  height: 100%;
  div {
    padding: 40px;
  }
  h6 {
    margin: 15px;
  }
}
.card {
  &__title {
    height: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  }
}
</style>
