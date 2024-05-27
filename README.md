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
# 上版完成後需要重新設定網址位置 github 位置: https://github.com/wan2019/chiwanlive/settings/pages 
chiwanlive.com.tw
```

直接 run npm run serve 


For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

# 提示
FIXME: 為待修問題
TODO: 有時間可以修的問題，及寫特殊邏輯的地方
