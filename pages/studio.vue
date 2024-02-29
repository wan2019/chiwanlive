<template>
  <div>
    <!-- 攝影頁 -->
    <M0201 />
    <M0203 />
  </div>
</template>

<script>
import M0201 from '@/components/studio/M0201';
import M0203 from '@/components/studio/M0203';

export default {
  scrollToTop: true,
  components: {
    M0201,
    M0203,
  },
}
</script>