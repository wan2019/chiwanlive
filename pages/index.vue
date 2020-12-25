<template>
  <div>
    <M0101></M0101>
    <M0102></M0102>
    <M0103></M0103>
    <M0104></M0104>
    <M0105></M0105>
    <M0106></M0106>
    <M0107></M0107>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ImgBox from '../components/general/ImgBox'
import M0101 from '../components/M01/M0101'
import M0102 from '../components/M01/M0102'
import M0103 from '../components/M01/M0103'
import M0104 from '../components/M01/M0104'
import M0105 from '../components/M01/M0105'
import M0106 from '../components/M01/M0106'
import M0107 from '../components/M01/M0107'

export default {
  components: {
    Logo,
    ImgBox,
    M0101,
    M0102,
    M0103,
    M0104,
    M0105,
    M0106,
    M0107,
  },
  data() {
    return {
    }
  },
}
</script>
<style lang="scss" scoped>
.text {
  &__center {
    text-align: center;
  }
}
.test__red {
  border: 1px red solid;
}

</style>
