<template lang="pug">
  .LoadingLogo
    //- img.testImg(src="LOGO/onlyLogo.png")
    .mainBox
      div(data-aos="zoom-in-right" :data-aos-once="false" :data-aos-delay="aosDelay_blueOne")
        .blueOne
      div(data-aos="fade-right" :data-aos-delay="aosDelay_orangeOne")
        .orangeOne
      div(data-aos="fade-up" :data-aos-delay="aosDelay_rightGroup")
        .rightGroup
          .yellowOne
          .yellowOne
          .greenOne
          .greenOne
</template>

<script>
export default {
  name: 'LoadingLogo',
  data() {
    return {
      aosDelay_blueOne: 500,
      aosDelay_orangeOne: 1000,
      aosDelay_rightGroup: 1500,
    }
  }
}
</script>

<style lang="scss" scoped>
.LoadingLogo {
  background-color: white;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mainBox {
  height: 132px;
  width: 171px;
  // border: 1px solid red;
  position: relative;
  overflow: hidden;
}
.blueOne {
  height: 91px;
  width: 113px;
  border-radius: 11px;
  background-color: var(--blue-color);
  // border: 1px solid red;
  position: absolute;
}
.orangeOne {
  height: 31px;
  width: 113px;
  border-radius: 5px;
  background-color: var(--orange-color);
  // border: 1px solid black;
  position: absolute;
  top: 98px
}
.rightGroup {
  height: 131px;
  width:  47px;
  // border: 1px solid red;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.yellowOne {
  background-color: var(--yellow-color);
  // border: 1px solid black;
  // margin: 0 10px;
  height: 90px;
  width: 20px;
  // margin: 0 10px;
}
.greenOne {
  // border: 1px solid black;
  background-color: var(--green-color);
  height: 33px;
  width: 20px;
  margin-top: 4px;
}
.other {
  background-color: var(--yellow-color);
  background-color: var(--green-color);
}
.testImg {
  position: absolute;
  width: 200px;
  // background-color: rgba(0,0,300,.5)
}
</style>
