<template>
  <div class="titleBox">
    <div class="titleBox__imgBox">
      <!-- <img class="imgLogo" src="LOGO/onlyLogo.png" alt="logo"> -->
    </div>
    <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
      <h1 class="mainColor size">{{title}}</h1>
    </div>
  </div>
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
  display:flex;
  text-align: center;
  justify-content: center;
  margin-top: 1rem;
  &__imgBox {
    display:flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
  }
  .imgLogo {
    height: 2em;
  }
}
.size {
  font-size: 3rem;
}

</style>
