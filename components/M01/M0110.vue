<template>
<v-row>
<!-- <section class="box"> -->
  <div class="phone">
    <div class="phone__img"></div>
    <div class="phone__circle"></div>
    <div class="phone__circle2"></div>
    <div class="phone__circle3"></div>
  </div>
<!-- </section> -->
</v-row>
</template>

<script>

export default {
  name: '',
  data() {
    return {
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
</style>
