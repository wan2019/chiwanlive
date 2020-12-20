<template>
  <div class="titleBox">
    <div class="titleBox__imgBox">
      <img class="imgLogo" src="LOGO/onlyLogo.png" alt="logo">
    </div>
    <div>
      <h1 class="mainColor">{{title}}</h1>
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
  margin-bottom: 1rem;
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

</style>
