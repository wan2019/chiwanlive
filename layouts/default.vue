<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      disable-resize-watcher
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          @click="gotoTarget(item)"
          router
          
        >
          <v-list-item-action>
            <!-- <v-icon>{{ item.icon }}</v-icon> -->
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <!-- main -->
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      options: { duration: 300, offset: 0, easing: "easeInOutCubic"},
      items: [
         {
          title: '首頁',
          to: '/',
          target: '#top'
        },
        {
          title: '專業直播',
          to: '/',
          target: '#profession'
        },
        {
          title: '服務項目',
          to: '/',
          target: '#service'
        },
        {
          title: '直播優勢',
          to: '/',
          target: '#advantage'
        },
        {
          title: '精選合作',
          to: '/',
          target: '#cooperation'
        },
        {
          title: '關於我們',
          to: '/',
          target: '#aboutUs'
        },
        {
          title: '聯絡我們',
          to: '/',
          target: '#contactUs'
        }
      ],
      miniVariant: false,
      title: '趣玩影像'
    }
  },
  methods: {
    gotoTarget (item) {
      this.$vuetify.goTo(item.target, this.options)
      this.drawer = false
    }
  }
}
</script>
<style lang="scss" scoped>
.test {
  border: 1px solid red;
}
.theme--light.v-list-item--active:hover::before,
.theme--light.v-list-item--active::before {
  opacity: 0;
}
</style>
