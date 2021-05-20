<template>
  <v-col cols="12" class="titleBox" >
    <div data-aos="fade-right">
      <hr class="hrStyle" size="8px" align="center" width="100%" color="#dedede">
      <h2 class="titleBox__text">{{title}}</h2>
    </div>
  </v-col>
  
</template>

<script>

export default {
  name: 'TitleBox',
  props: {
    title: [String],
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.titleBox {
  margin-top: 100px;
  @include phone {
      margin: 30px;
    }
  &__text {
    margin: 100px 0 50px 0;
    @include phone {
      margin: 0;
    }
  }
}
.hrStyle {
  @include phone {
      display: none;
    }
}
</style>
