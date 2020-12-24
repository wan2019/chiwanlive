#//deploy.sh
#!/usr/bin/env sh
# 當發生錯誤時終止腳本運行
set -e
# 打包
# yarn build
# yarn generate
# // 打包靜態資源的是在 docs 目錄
# 移動至到打包後的dist目錄 
# cd dist
cd docs
git init
# //因為dist資料夾預設是被ignore的，因此在進入dist資料夾後初始化git
git add -A
git commit -m 'deploy'
# 部署到 https://github.com/chou0728/eric-project.git 分支為 gh-pages
# https://github.com/wan2019/chiwanlive.git
git push -f https://github.com/wan2019/chiwanlive.git master:gh-pages
#//將dist資料夾中的內容推送至遠端eric-project的gh-pages分支中，並強制無條件將舊有的內容取代成目前的內容（指令 git push -f)
cd -
