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
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
