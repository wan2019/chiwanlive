<template>
<div class="box__out">
<v-row class="box">
    <v-col cols="12" sm="12" md="6" class="box__left">
      <div data-aos="fade-right" data-aos-anchor-placement="center-bottom">
        <h1 class="box__left__title">電視台品質的專業直播</h1>
      </div>
      <div data-aos="fade-right" data-aos-anchor-placement="center-bottom">
        <div class="box__left__photo">
          <v-img src="material/Daco_2499475.png" width="550"></v-img>
        </div>
      </div>
    </v-col>
    <v-col cols="12" sm="12" md="6" class="box__right">
      <div data-aos="fade-right" data-aos-delay="300">
        <h1 class="box__right__title">每年直播場次 <span class="box__right__number">100</span><i class="mdi mdi-trending-up trending"></i></h1>
      </div>
    </v-col>
</v-row>
<div class="box__phone">
  <h1 class="box__phone__title">電視台品質的專業直播</h1>
  <div class="box__phone__img">
    <v-img src="material/Daco_2499475.png" width="100%"></v-img>
  </div>
  <h1 class="box__phone__title">每年直播場次</h1>
  <h1 class="box__phone__title"><span class="box__right__number">100</span><i class="mdi mdi-trending-up trending"></i></h1>
</div>
</div>
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
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  min-height: 100vh;
  @include phone {
      display: none;
    }
  &__left {
    background-color: var(--orange-color);
    text-align: center;
    padding-top: 200px;
    &__title {
      font-size: 3rem;
      color: white;
      letter-spacing:0.05em;
    }
    &__number {
      font-size: 5rem;
    }
    &__photo {
      float: right;
      margin-right: 2rem;
      margin-top: 7rem;
    }
  }
  &__right {
    text-align: center;
    padding-top: 350px;
    @include pc {
      padding-top: 2rem;
    }
    &__title {
      letter-spacing:0.05em;
      font-size: 3.5rem;
      color: var(--orange-color);
    }
    &__number {
      // color: yellow;
      font-size: 5rem;
    }
  }
  &__phone {
    display: none;
    @include phone {
      display: block;
      padding: 1rem;
      text-align: center;
      &__title {
        letter-spacing:0.05em;
      font-size: 2rem;
      color: var(--orange-color);
      }
      &__img {
        margin: 4rem 1rem;
      }
    }
  }
}
.trending {
  font-size: 100px;
}
</style>
