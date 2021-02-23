<template lang="pug">
  .LoadingLogo
    //- img.testImg(src="LOGO/onlyLogo.png")
    .mainBox
      div.blueOne__out
        .blueOne
      //- div(data-aos="fade-right" :data-aos-delay="aosDelay_blueOne")
      //- div(data-aos="fade-right" :data-aos-delay="aosDelay_orangeOne")
      div
        .orangeOne
      //- div(data-aos="fade-up" :data-aos-delay="aosDelay_rightGroup")
      div
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
  width: 0;
  position: fixed;
  top: 0;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: LoadingLogo;
  animation-duration: 4s;
}
@keyframes LoadingLogo{
  0% {
    width: 100vw;
    opacity: 0.8;
  }
  77% {
    opacity: 0.8;
    width: 100vw;
    height: 100vh;
  }
  100% {
    opacity: 0;
    width: 100vw;
    height: 100vh;
  }
}
.mainBox {
  height: 0;
  width: 0;
  // border: 1px solid red;
  position: relative;
  overflow: hidden;
  animation: mainBox;
  animation-duration: 4s;
}
@keyframes mainBox{
  0% {
    height: 132px;
    width: 171px;
  }
  77% {
    height: 132px;
    width: 171px;
  }
  85% {
    width: 0;
    height: 0;
  }
  100% {
  }
}
.blueOne {
  height: 91px;
  width: 113px;
  border-radius: 11px;
  background-color: var(--blue-color);
  // border: 1px solid red;
  position: absolute;
  animation: blueOne;
  animation-duration: 1s;
}
@keyframes blueOne{
  from {
    left:-113px;
  }
  to {
    left:0;
  }
}
.orangeOne {
  height: 31px;
  width: 113px;
  border-radius: 5px;
  background-color: var(--orange-color);
  // border: 1px solid black;
  position: absolute;
  top: 98px;
  animation: orangeOne;
  animation-duration: 2s;
}
@keyframes orangeOne{
  0% {
    left:-113px;
  }
  50% {
    left:-113px;
  }
  100% {
    left:0;
  }
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
  animation: rightGroup;
  animation-duration: 3s;
}
@keyframes rightGroup{
  0% {
    top: 132px;
  }
  66% {
    top: 132px;
  }
  100% {
    top: 0;
  }
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
