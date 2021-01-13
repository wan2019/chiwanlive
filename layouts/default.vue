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
          
          @click="gotoTarget(item)"
          router
          
        >
        <!-- :to="item.to" -->
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
      class="app__bar"
    >
      <v-app-bar-nav-icon class="app__drawer" @click.stop="drawer = !drawer" />
      <div class="app__icon" @click="doHome">
        <v-img
          max-width="2.5rem"
          :src="icon.src"
          :alt="icon.alt"
        ></v-img>
      </div>
      <div class="app__info">
        <v-btn
          v-for="(item, i) in items"
          @click="gotoTarget(item)"
          :key="i"
          text
        >{{item.title}}</v-btn>
      </div>
      <!-- <v-spacer /> -->
    </v-app-bar>
    <!-- main -->
    <v-main>
      <!-- <v-container> -->
        <nuxt />
      <!-- </v-container> -->
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
      icon: {
        src: 'apple-touch-icon-precomposed.png',
        alt: 'logo'
      },
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
        },
        // {
        //   title: '作品集',
        //   to: '/portfolio',
        //   target: ''
        // }
      ],
      miniVariant: false,
      title: '趣玩影像'
    }
  },
  methods: {
     gotoTarget (item) {
      // TODO: 之後修正路由
      if (this.$route.path === '/') {
        // console.log('say yes');
        if (item.target) {
          this.$vuetify.goTo(item.target, this.options)
        } else {
          this.$router.push({ path: `${item.to}` })
        }
      } else {
        // console.log('say no');
        this.$router.push({ path: `/` })
        setTimeout(()=>{
          this.$vuetify.goTo(item.target, this.options)
        },500);
      }
      // this.$vuetify.goTo(item.target, this.options)
      if (this.drawer) {
        this.drawer = false
      }
    },
    async doHome () {
      if (this.$route.path === '/') {
        this.$vuetify.goTo('#top', this.options)
      } else {
        this.$router.push({ path: `/` })
      }
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
.app {
  &__bar {
    background-color: rgba(255, 255, 255, 0.9) !important;
  }
  &__drawer {
    display: none;
    @include pc {
      display: inline;
    }
  }
  &__icon {
    // border: 1px solid blue;
    cursor: pointer;
    @include pc {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
  &__info {
    display: flex;
    width: 100%;
    justify-content: center;
    color: #666666;
    // border: 1px solid red;
    @include pc {
      display: none;
    }
  }
}
</style>
