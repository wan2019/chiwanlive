<template>
  <v-app dark>
    <LoadingLogo v-if="logoStatus"></LoadingLogo>
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
            <v-list-item-title>{{ item.title }}</v-list-item-title>
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
      <div class="app__iconLong" @click="doHome">
        <v-img
          max-width="7rem"
          :src="iconLong.src"
          :alt="iconLong.alt"
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
      <!-- <v-btn @click="showAnimation">展示動畫</v-btn> -->
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
      class="footer"
    >
      <span class="footer__span">&copy; Copyright © 2021 趣玩影像工作室 - All Rights Reserved.</span>
    </v-footer>
  </v-app>
</template>

<script>
import LoadingLogo from '~/components/general/LoadingLogo'

export default {
  components: {
    LoadingLogo,
  },
  mounted() {
    this.$nextTick(() => {
      // TODO: 禁用右鍵
      document.oncontextmenu = new Function("event.returnValue=false");
      // 禁用選擇
      document.onselectstart = new Function("event.returnValue=false");
    });
  },
  data () {
    return {
      logoStatus: true,
      clipped: true,
      drawer: false,
      fixed: false,
      options: { duration: 300, offset: 0, easing: "easeInOutCubic"},
      icon: {
        src: '/apple-touch-icon-precomposed.png',
        alt: 'logo'
      },
      iconLong: {
        src: '/LOGO/logoLong.png',
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
          title: '直播作品',
          to: '/portfolio',
          target: ''
        },
        {
          title: '攝影棚',
          to: '/studio',
          target: ''
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
      // TODO: Navigation Bar（導航欄）切換時的特殊邏輯
      if (this.$route.path === '/') { // 當前在主頁的時候會進入這裡
        if (item.target) {
          this.$vuetify.goTo(item.target)
        } else {
          // 從直播作品和攝影棚頁面會跳到這裡
          this.$router.push({ path: `${item.to}` })
        }
      } else {
        // 從作品集跳到其他頁時
        if (item.target) {
          // 正常情境時
          this.$router.push({ path: `/` });
          setTimeout(()=>{
            this.$vuetify.goTo(item.target)
          },300);
        } else {
          // 從直播作品和攝影棚頁面會跳到這裡
          this.$router.push({ path: `${item.to}` })
        }
      }
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
    },
    showAnimation () {
      this.logoStatus = true
      setTimeout(() => {
        this.logoStatus = false
      }, 3000)
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
    display: none;
    // border: 1px solid blue;
    cursor: pointer;
    @include pc {
      width: 100%;
      display: flex;
      justify-content: center;
      &Long {
        display: none;
      }
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
.footer {
  background-color: #1b1b1b;
  color: rgba(255, 255, 255, 0.6);
  justify-content: center;
}
</style>
