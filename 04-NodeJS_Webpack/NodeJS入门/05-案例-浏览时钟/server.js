const fs = require('fs')
const http = require('http')
const path = require('path')

// 创建 Web 服务
const server = http.createServer()

server.on('request', (req, res) => {
  // 使用 req.url 获取请求资源的路径
  // 之后读取 index.html 的内容返回请求方
  if (req.url === '/index.html') {
    fs.readFile(path.join(__dirname, 'dist/index.html'), (err, data) => {
      if (err) console.log(err)
      else {
        // 设置响应内容类型-html超文本字符串，让浏览器可以解析
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.end(data.toString())
      }
    })
  } else {
    // 其它路径返回不存在提示
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end('访问路径不存在')
  }
})

server.listen(8080, () => {
  console.log('Web server started successfully.')
})