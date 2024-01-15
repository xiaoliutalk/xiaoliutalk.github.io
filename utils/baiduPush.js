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
const linksPerFile = 19;

if (DOMAIN) {
  main();
} else {
  console.log(chalk.red('请在运行此文件时指定一个你要进行百度推送的域名参数，例：node utils/baiduPush.js https://www.xiaoliutalk.cn'))
}



/**
 * 主体函数
 */
function main() {
  // 检查并创建 urls 目录（如果不存在）
  if (!fs.existsSync(urlsRootDir)) {
    fs.mkdirSync(urlsRootDir, { recursive: true });
  }
  let urlsFilePath = path.join(urlsRootDir, `urls_${currentUrlFileIndex}.txt`);
  fs.writeFileSync(urlsFilePath, DOMAIN);

  const files = readFileList(); // 读取所有md文件数据

  files.forEach(file => {
    const { data } = matter(fs.readFileSync(file.filePath, 'utf8'));

    if (data.permalink) {
      const link = `\r\n${DOMAIN}${data.permalink}`;
      console.log(link);
      fs.appendFileSync(urlsFilePath, link);

      linkCount++;
      if (linkCount % linksPerFile === 0) {
        currentUrlFileIndex++;
        urlsFilePath = path.join(urlsRootDir, `urls_${currentUrlFileIndex}.txt`);
        fs.writeFileSync(urlsFilePath, DOMAIN);
      }
    }
  })
}