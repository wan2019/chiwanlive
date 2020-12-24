# chiwanlive

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate

# test others
$ 
# 切換分支，並上版
$ cd dist
$ git checkout master
$ git checkout gh-pages
$ git add -f dist
$ git commit -m 'create vue prj'
$ git subtree push --prefix dist origin gh-pages （加入一個）
$ test 2
# .sh 執行腳本
sh ./deploy.sh
// "build:gh-pages": "DEPLOY_ENV=GH_PAGES nuxt build",
    // "generate:gh-pages": "DEPLOY_ENV=GH_PAGES nuxt generate",
    // "deploy": "push-dir --dir=dist --branch=gh-pages --cleanup"


```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
