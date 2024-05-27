<template>
  <v-app dark class="container">
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
      首頁
    </NuxtLink>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 此頁面不存在',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  created() {
    this.$router.push({ path: `/` });
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
.container {
  text-align: center;
  padding-top: 2rem;
}
</style>
