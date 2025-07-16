/*
 * 使用path.join()函数，配合__dirname组成目标文件的绝对路径
 */

const fs = require('fs')
const path = require('path')

console.log(__dirname) // Output: /Users/rainn/Desktop/front-end-learning/NodeJS

fs.readFile(path.join(__dirname, '01sample.txt'), (err, data) => {
  if (err) console.log(err)
  else console.log(data.toString())
})