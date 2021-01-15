<template>
<v-row class="box">
    <v-col cols="12" sm="6" md="6" class="box__left">
      <h1 class="box__left__title">導播資歷 <span class="box__left__number">10</span> 年</h1>
    </v-col>
    <v-col cols="12" sm="6" md="6" class="box__right">
      456
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
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  min-height: 100vh;
  border: 1px solid yellow;
  &__left {
    background-color: var(--orange-color);
    text-align: center;
    padding-top: 200px;
    &__title {
      font-size: 3rem;
      color: white;
    }
    &__number {
      // color: yellow;
      font-size: 5rem;
    }
  }
  &__right {
    // background-color: gold;
  }
}
</style>
