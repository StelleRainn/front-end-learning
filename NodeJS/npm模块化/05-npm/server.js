/**
 * 1. 在当前文件夹下，使用命令 npm init -y 初始化清单文件，得到 package.json
 * 2. 使用 npm -i packageName 下载软件包，会同时生成 package-lock.json
 * 3. 使用软件包
 * p.s. npm命令的路径上，不要出现中文！
 */

// 下载而来的包，也填入包名称即可
const dayjs = require('dayjs')
const nowDateStr = dayjs().format('YYYY-MM-DD')
console.log(nowDateStr)

