#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 遍历urls_*.txt文件并进行百度链接推送
for file in urls_*.txt; do
  if [ -f "$file" ]; then
    curl -H 'Content-Type:text/plain' --data-binary @"$file" "http://data.zz.baidu.com/urls?site=https://www.xiaoliutalk.cn&token=71CTW2Da5BloeaeX"
    rm -f "$file" # 删除已推送的文件（这里使用-f选项而非-rf，因为不需要递归删除）
  fi
done