const http = require('http')
const server = http.createServer()

// 监听request请求事件，设置响应头和响应体
server.on('request', (req, res) => {
  // 设置响应头-内容类型-普通文本以及中文编码格式
  res.setHeader('Content-Type', 'text/plain;charset=utf-8')
  res.end('Hello, Welcome to use Web 欢迎使用Nodejs服务')
})

// 配置端口号码并启动Web服务
server.listen(3000, () => {
  console.log('Web server started successfully.')
})

