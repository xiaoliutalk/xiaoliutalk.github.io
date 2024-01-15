/**
 * 生成百度链接推送文件
 */
const fs = require('fs');
const path = require('path');
const chalk = require('chalk')
const matter = require('gray-matter'); // FrontMatter解析器 https://github.com/jonschlinkert/gray-matter
const readFileList = require('./modules/readFileList');
const urlsRootDir = path.join(__dirname, '..', 'urls')
const DOMAIN = process.argv.splice(2)[0]; // 获取命令行传入的参数

let linkCount = 0;
let currentUrlFileIndex = 1;
const linksPerFile = 10;

if (DOMAIN) {
  main();
} else {
  console.log(chalk.red('请在运行此文件时指定一个你要进行百度推送的域名参数，例：node utils/baiduPush.js https://www.xiaoliutalk.cn'))
}

/**
 * 主体函数
 */
function main() {
  // 检查并创建 urls 目录
  if (!fs.existsSync(urlsRootDir)) {
    fs.mkdirSync(urlsRootDir, { recursive: true });
  }

  let currentUrlsFilePath = path.join(urlsRootDir, `urls_${currentUrlFileIndex}.txt`);
  let linkCountInCurrentFile = 0;

  const files = readFileList(); // 读取所有md文件数据

  files.forEach(file => {
    const { data } = matter(fs.readFileSync(file.filePath, 'utf8'));

    if (data.permalink) {
      const link = `${DOMAIN}${data.permalink}`;

      console.log(link);

      if (linkCountInCurrentFile === 0) {
        fs.writeFileSync(currentUrlsFilePath, '');

        // 如果有链接才增加计数
        linkCount++;
      }

      fs.appendFileSync(currentUrlsFilePath, link);
      linkCountInCurrentFile++;

      if (linkCountInCurrentFile === linksPerFile || file === files[files.length - 1]) {
        // 创建或切换到新的URLs文件
        currentUrlFileIndex++;
        currentUrlsFilePath = path.join(urlsRootDir, `urls_${currentUrlFileIndex}.txt`);

        // 重置当前文件内的链接计数
        linkCountInCurrentFile = 0;
      } else {
        // 在非最后一行链接后面添加换行符
        fs.appendFileSync(currentUrlsFilePath, '\r\n');
      }
    }
  });
}