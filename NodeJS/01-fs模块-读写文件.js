// require函数加载fs模块
const fs = require('fs')

fs.writeFile('01sample.txt', 'Hello, Node.JS' , err => {
  if (err) console.log(err)
  else console.log('Success')
})

fs.readFile('01sample.txt', (err, data) => {
  if (err) console.log(err)

  // data 是 buffer 16进制数据流对象，转换成字符串
  else console.log(data.toString())
})