version="$1"
test="$0"
env="stage"
branch="master"
echo "i am version $test"
if [ "$version" = "" ]
then
    echo "version can't be empty"
    exit
fi
echo "i am version $version"
echo "step 1. git checkout $branch"
git checkout $branch
# 下方為錯誤跳出的方法
if  [[ "$?" -ne "0" ]]
then
    echo "error"
    exit 1
fi
echo "step 2. git pull"
if  [[ "$?" -ne "0" ]]
then
    echo "error"
    exit 1
fi

echo "step 4. npm version $version"
npm version $version
if  [[ "$?" -ne "0" ]]
then
    echo "error"
    exit 1
fi
