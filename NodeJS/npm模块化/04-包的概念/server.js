/**
 * 目标：导入 utils 软件包，使用里面封装的工具函数
 */

// utils 已经是软件包，无需继续写到 /index.js，require 会自己寻找，或从 package.json 寻找入口
const {checkPwd, checkUser, getArraySum} = require('./utils')

console.log(checkPwd('1234567890'))
console.log(checkUser('123123123'))
console.log(getArraySum([1,2,3]))