# chiwanlive

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn serve

# build for production and launch server
$ yarn build // 打包出來的是 dist （會配合 yarn star 才可以起起來的）
$ yarn start

# generate static project
$ yarn generate
$ yarn generate:gh-pages （加入路徑）

# test others

# 切換分支，並上版
$ cd dist
$ git checkout master
$ git checkout gh-pages
$ git add -f dist
$ git commit -m 'create vue prj'
$ git subtree push --prefix dist origin gh-pages （加入一個）

# .sh 執行腳本（直接部署）
sh ./deploy.sh

# 順便推送 git push 把code 推到 master
git push

# 上版完成後需要重新設定網址位置 github 位置: https://github.com/wan2019/chiwanlive/settings/pages
chiwanlive.com.tw
```

直接 run npm run serve 


For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

# 提示
FIXME: 為待修問題
TODO: 有時間可以修的問題，及寫特殊邏輯的地方

## 檔案樹結構圖
```
📦chiwanlive
 ┣ 📂assets
 ┃ ┗ 📜variables.scss（css預設值）
 ┣ 📂components（組件頁面）
 ┃ ┣ 📂M01（首頁頁面）
 ┃ ┃ ┣ 📜M0101.vue（輪播封面）
 ┃ ┃ ┣ 📜M0102.vue（電視台品質的專業直播）
 ┃ ┃ ┣ 📜M0103.vue（服務項目）
 ┃ ┃ ┣ 📜M0104.vue(直播優勢)
 ┃ ┃ ┣ 📜M0105.vue（作品集 精選合作）
 ┃ ┃ ┣ 📜M0106.vue（關於我們）
 ┃ ┃ ┣ 📜M0107.vue（地址 聯絡資訊）
 ┃ ┃ ┣ 📜M0108.vue（電視台品質的專業直播）
 ┃ ┃ ┣ 📜M0109.vue（直播作品）
 ┃ ┃ ┗ 📜M0110.vue（phone 手機ui 畫面）
 ┃ ┣ 📂general（每個的照片組件微調）
 ┃ ┃ ┣ 📜IframeBox.vue
 ┃ ┃ ┣ 📜ImgBox.vue
 ┃ ┃ ┣ 📜ImgBoxM0103.vue
 ┃ ┃ ┣ 📜ImgBoxM0104.vue
 ┃ ┃ ┣ 📜ImgBoxM0105.vue
 ┃ ┃ ┣ 📜ImgBoxM0106.vue
 ┃ ┃ ┣ 📜ImgBoxM0109.vue
 ┃ ┃ ┣ 📜ImgBoxM0110.vue
 ┃ ┃ ┣ 📜LoadingLogo.vue
 ┃ ┃ ┗ 📜TitleBox.vue
 ┃ ┣ 📂portfolio（專門給作品頁面的組件）
 ┃ ┃ ┣ 📜ImgBox02.vue
 ┃ ┃ ┣ 📜ImgBox1.vue
 ┃ ┃ ┗ 📜Title.vue
 ┃ ┣ 📜Logo.vue
 ┃ ┣ 📜README.md
 ┃ ┗ 📜VuetifyLogo.vue
 ┣ 📂forShTest
 ┃ ┗ 📜testSh.sh
 ┣ 📂layouts
 ┃ ┣ 📜README.md
 ┃ ┣ 📜default.vue
 ┃ ┗ 📜error.vue
 ┣ 📂middleware
 ┃ ┗ 📜README.md
 ┣ 📂pages（進入頁面）
 ┃ ┣ 📜README.md
 ┃ ┣ 📜index.vue
 ┃ ┗ 📜portfolio.vue
 ┣ 📂plugins
 ┃ ┣ 📜README.md
 ┃ ┗ 📜aos.js
 ┣ 📂static（靜態檔案）
 ┃ ┣ 📂img（照片）
 ┃ ┣ 📂material（綜合素材）
 ┃ ┣ 📂portfolio（作品頁面的照片）
 ┣ 📜README.md
 ┣ 📜deploy.sh（推送code的腳本）
 ```