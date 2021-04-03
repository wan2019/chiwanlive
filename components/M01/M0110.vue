<template>
<v-row>
  <div class="text__box">
    <div class="dialog-left"></div>
    <div class="phone">
      <div class="phone__img">
          <v-img
            :src="item1.src"
            :alt="item1.alt"
            class="imgBox__img img__gif"
            eager
            contain
          ></v-img>
      </div>
      <div class="phone__circle"></div>
      <div class="phone__circle2"></div>
      <div class="phone__circle3"></div>
    </div>
    <div class="img__two">
      <div class="img__two__in">
            <v-img
              :src="item2.src"
              :alt="item2.alt"
              class="imgBox__img"
              eager
              contain
            ></v-img>
      </div>
    </div>
    <div class="textBox__one" data-aos="fade-right" data-aos-anchor-placement="center-bottom">
      <h4 class="textBox__style textBox__title">即時字卡</h4>
      <h6 class="textBox__style" style="font-size:1.25rem">置入LOGO 、標題、贊助、影片</h6>
    </div>
    <div class="textBox__two" data-aos="fade-right" data-aos-anchor-placement="center-bottom">
      <h4 class="textBox__style textBox__title">直播特效</h4>
      <h6 class="textBox__style" style="font-size:1.25rem">獨家特效、動畫、音效</h6>
    </div>
  </div>
</v-row>
</template>

<script>

export default {
  name: '',
  data() {
    return {
      item1: {
        alt: '導播　ChiChi',
        src: 'img/specialEffect_6.gif',
        text: ['導播　ChiChi'],
        aosDelay: 1,
      },
      item2: {
        alt: '導播　ChiChi',
        src: 'material/emoticons.png',
        text: ['導播　ChiChi'],
        aosDelay: 1,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.row {
  // 覆蓋原本的 vuetify 的內容
  margin-left: 0;
  margin-right: 0;
}
.v-application p {
  margin-bottom: 5px;
}
.text__box {
  min-height: 100vh;
  width: 100vw;
  position: relative;
}
.phone {
  position: relative;
  height: 295px;
  width: 650px;
  background-color: black;
  border-radius: 40px;
  box-sizing: border-box;
  border: 1px solid black;
  margin: 100px 0 0 20%;
  &__img {
    margin: 5px 0 5px 70px;
    height: 280px;
    width: 500px;
    // border: 1px solid red;
    overflow: hidden;
    // background-color: yellow;
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
    background-color: white;
    left: 24px;
    top: 183px;
  }
  &__circle3 {
    height: 64px;
    width: 7px;
    border-radius: 5px;
    position: absolute;
    background-color: white;
    left: 26px;
    top: 105px;
  }
}
.dialog-left {
    position: absolute;
    top: 0;
    right: 0;
    background-color: orangered;
    height: 100vh;
    width: 50vw;
}
.dialog-left::before {
  border-color: transparent orangered orangered transparent;
  border-style: solid;
  border-width: 50vh 120px;
  /* 必須指定，才能顯示內容 */
  content: "";
  height: 0px;
  width: 0px;
  /* 必須指定，否則會變梯形 */
  position: absolute;
  top: 0px;
  left: -240px;
}

.textBox {
  &__style {
    color: white;
  }
  &__title {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
  }
  &__one {
    margin-bottom: 2rem;
    margin-top: 3rem;
    padding-left: 50%;
    position: relative;
    z-index: 1;
  }
  &__two {
    padding-left: 60%;
    position: relative;
    z-index: 1;
  }
}
.img {
  &__two {
    width: 300px;
    position: relative;
    &__in {
      position: absolute;
      width: 270px;
      left: 30%;
      top: -100px;
      transform: rotate(-20deg);
    }
  }
  &__gif {
    transform:scale(1.05,1.05);
  }
}
</style>
