# Node.js基础

## Node.js简介

Node.js是一个基于Chrome V8引擎的JavaScript运行环境，允许在服务器端运行JavaScript代码。它使用事件驱动、非阻塞I/O模型，使其轻量且高效，适合构建可扩展的网络应用。

**Node.js和浏览器的区别**:
- **运行环境**: Node.js在服务器端运行，而浏览器在客户端运行。
- **API和模块**: Node.js提供了丰富的内置模块（如`fs`、`http`等），而浏览器提供了DOM操作、事件处理等API。都支持ECMAScript标准语法。

**使用Node.js**:

在终端中使用`node`命令运行JavaScript文件。

```bash
node app.js
```

## Node.js内置模块

### fs模块 - 文件系统操作

`fs`模块提供了文件系统相关的API，用于读取、写入、创建和删除文件等操作。

**基本用法**:

```js
// require函数加载fs模块
const fs = require('fs')

// 写入文件
fs.writeFile('01sample.txt', 'Hello, Node.JS' , err => {
  if (err) console.log(err)
  else console.log('Success')
})

// 读取文件
fs.readFile('01sample.txt', (err, data) => {
  if (err) console.log(err)
  // data 是 buffer 16进制数据流对象，转换成字符串
  else console.log(data.toString())
})
```

**重点**:
- `fs.writeFile()`: 异步写入文件
- `fs.readFile()`: 异步读取文件
- 读取的`data`是Buffer对象，需要使用`toString()`转换为字符串
- 使用回调函数处理错误和结果

### path模块 - 路径处理

`path`模块提供了处理文件路径的工具函数，帮助构建跨平台的文件路径。

**基本用法**:

```js
const fs = require('fs')
const path = require('path')

console.log(__dirname) // 当前文件所在目录的绝对路径

// 使用path.join()组合路径
fs.readFile(path.join(__dirname, '01sample.txt'), (err, data) => {
  if (err) console.log(err)
  else console.log(data.toString())
})
```

**重点**:
- `__dirname`: 当前文件所在目录的绝对路径
- `path.join()`: 将多个路径片段连接成一个完整的路径，自动处理路径分隔符
- 使用绝对路径可以避免相对路径带来的问题

### http模块 - 创建Web服务

`http`模块用于创建HTTP服务器和客户端，是构建Web应用的基础。

**基本用法**:

```js
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
```

**重点**:
- `http.createServer()`: 创建HTTP服务器
- `server.on('request', callback)`: 监听请求事件
- `res.setHeader()`: 设置响应头
- `res.end()`: 结束响应并发送数据
- `server.listen()`: 启动服务器并监听指定端口

### 实践案例 - 压缩HTML

使用Node.js读取HTML文件，去除换行符和回车符，然后写入新文件：

```js
const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, 'public/index.html'), (err, data) => {
  if (err) console.log(err)
  else {
    const htmlStr = data.toString()
    // 使用正则表达式去除回车符和换行符
    const newHtmlStr = htmlStr.replace(/[\r\n]/g, '')
    fs.writeFile(path.join(__dirname, 'dist/index.html'), newHtmlStr, err => {
      if (err) console.log(err)
      else console.log('Success')
    })
  }
})
```

## Node.js模块化

### 模块化概念

**Node.js模块**: 每个文件就是一个模块，独立作用域，按需加载，需使用特定语法导出导入。

### CommonJS标准语法

**导出模块**:

```js
// utils.js - 基于 CommonJS 标准语法，封装属性和方法并导出
const baseURL = 'http://hmajax.itheima.net'
const getArraySum = arr => arr.reduce((sum, item) => sum += item, 0)

module.exports = {
  url: baseURL,
  arraySum: getArraySum
}
```

**导入模块**:

```js
// index.js - 基于 CommonJS 标准语法，导入工具属性和方法使用
// 导入: require(模块名或者路径名)
// 内置模块直接写名字
const obj = require('./utils.js')
console.log(obj)

// 调用里面的方法
console.log(obj.arraySum([1,2,3]))
```

**语法总结**:
- **导出**: `module.exports = {}`
- **导入**: `require('模块名或路径')`

### 🌟ECMAScript标准语法

使用ECMAScript模块化需要在`package.json`中设置`"type": "module"`。

#### 默认导出导入

**默认导出**:

```js
// utils.js - 基于 ECMAScript 标准语法，封装属性和方法并，"默认"导出
const baseURL = 'http://hmajax.itheima.net'
const getArraySum = arr => arr.reduce((sum, item) => sum += item, 0)

export default {
  url: baseURL,
  arraySum: getArraySum
}
```

**默认导入**:

```js
// index.js - 基于 ECMAScript 标准语法，"默认"导入，工具属性和方法使用
// 导入: import 自定义变量名 from '模块名或路径'
import obj from './utils.js'

console.log(obj)
// 调用里面的方法
console.log(obj.arraySum([10, 20, 30]))
```

#### 命名导出导入

**命名导出**:

```js
// utils.js - 基于 ECMAScript 标准语法，封装属性和方法并"命名"导出
export const baseURL = 'http://hmajax.itheima.net'
export const getArraySum = arr => arr.reduce((sum, item) => sum += item, 0)
```

**命名导入**:

```js
// index.js - 基于 ECMAScript 标准语法，"命名"导入，工具属性和方法使用
// 导入: import { 同名变量 } from '模块名或路径'
import { baseURL, getArraySum } from './utils.js'

console.log(baseURL)
console.log(getArraySum)
console.log(getArraySum([1, 4, 7]))
```

#### 🌟对比总结

- **默认导出** 

```js
export default {...}
```

`{}`表示一个配置对象。比如，若`config`是一个配置对象，则可以使用语句`export default config`。

_p.s. 不要写错为 `export default { config }`_


- **默认导入**: 

```js
import 自定义变量名 from '模块名或路径' 
```


- **命名导出**: 

```js
export const value = 1
export const request = () => axios.get(...)
```

- **命名导入**: 

```js
import { 同名变量 } from '模块名或路径'
import { value, request as rq } from './utils.js'
```

## Node.js包管理

### 包的概念

**Node.js包**: 把模块文件、代码文件、其他资料聚合成一个文件夹。

**包的分类**:
- **项目包**: 编写项目需求和业务逻辑的文件夹
- **软件包**: 封装工具/方法的文件夹（一般用npm管理）
  - **本地软件包**: 封装属性/方法，在当前项目中使用，例如：dayjs，lodash
  - **全局软件包**: 封装工具/命令，在本机中使用，例如：nodemon

### 创建自定义包

**包结构示例**:

```
utils/
├── package.json    # 包的配置文件
├── index.js        # 包的入口文件
└── lib/
    ├── str.js      # 字符串工具模块
    └── arr.js      # 数组工具模块
```

**包的入口文件**:

```js
// utils/index.js - 工具包的唯一出口
// 作用：把所有工具模块方法集中起来，统一向外暴露

// 可以使用对象解构
const { checkPwd, checkUser } = require('./lib/str.js')
const { getArraySum } = require('./lib/arr.js')

module.exports = {
  checkUser,
  checkPwd,
  getArraySum
}
```

**使用自定义包**:

```js
// server.js - 导入 utils 软件包，使用里面封装的工具函数
// utils 已经是软件包，无需继续写到 /index.js，require 会自己寻找，或从 package.json 寻找入口
const {checkPwd, checkUser, getArraySum} = require('./utils')

console.log(checkPwd('1234567890'))
console.log(checkUser('123123123'))
console.log(getArraySum([1,2,3]))
```

### 🌟npm包管理

**常用npm命令**:
- `node xxx`: 执行js文件
- `npm init -y`: 初始化package.json
- `npm i 软件包名`: 下载本地软件包
- `npm i 软件包名 -g`: 下载全局软件包
- `npm uni 软件包名`: 删除软件包
- `npm i`: 安装所有依赖（根据package.json）

**使用第三方包**:

```js
// 1. 在当前文件夹下，使用命令 npm init -y 初始化清单文件，得到 package.json
// 2. 使用 npm i packageName 下载软件包，会同时生成 package-lock.json
// 3. 使用软件包
// p.s. npm命令的路径上，不要出现中文！

// 下载而来的包，也填入包名称即可
const dayjs = require('dayjs')
const nowDateStr = dayjs().format('YYYY-MM-DD')
console.log(nowDateStr)
```

**重点**:
- `package.json`: 项目配置文件，记录项目信息和依赖
- `package-lock.json`: 锁定依赖版本，确保团队开发一致性
- `node_modules`: 存放下载的依赖包
- 使用`npm i`可以根据`package.json`安装所有依赖