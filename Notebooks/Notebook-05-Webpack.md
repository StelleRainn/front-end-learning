# Webpack基础

## Webpack概念

**Webpack**: 是一个现代JavaScript应用程序的**静态模块打包器**。它会递归地构建一个依赖关系图，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个bundle。

**核心概念**:
- **入口(Entry)**: 指示webpack应该使用哪个模块来作为构建其内部依赖图的开始
- **输出(Output)**: 告诉webpack在哪里输出它所创建的bundles，以及如何命名这些文件
- **加载器(Loader)**: 让webpack能够去处理那些非JavaScript文件
- **插件(Plugin)**: 用于执行范围更广的任务，如打包优化、资源管理和注入环境变量
- **模式(Mode)**: 通过选择development或production之中的一个，来设置mode参数

## Webpack基本使用

### 1. 安装和初始化

```bash
# 初始化项目
npm init -y

# 安装webpack和webpack-cli
npm i webpack webpack-cli --save-dev
```

### 2. 基本打包流程

**步骤**:
1. 准备项目源码
2. 准备webpack打包环境 (`npm i webpack webpack-cli --save-dev`)
3. 运行自定义命令 (`npm run build`)

**package.json配置**:

```json
{
  "scripts": {
    "build": "cross-env NODE_ENV=production webpack --mode production",
    "dev": "cross-env NODE_ENV=development webpack serve --open --mode development"
  }
}
```

## Webpack配置文件

### 🌟webpack.config.js基本结构

```js
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import webpack from 'webpack'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const config = {
  // 入口：指定打包的入口文件
  entry: path.resolve(__dirname, './src/login/index.js'),

  // 输出：指定打包后的文件输出位置和名称
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'login/index.js',
    clean: true // 清除旧的输出目录
  },

  // 插件：赋予webpack更多功能
  plugins: [
    // 自动生成HTML文件并引入打包后的资源
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/login.html'),
      filename: path.resolve(__dirname, './dist/login/login.html'),
      useCdn: process.env.NODE_ENV === 'production'
    }),

    // CSS提取器
    new MiniCssExtractPlugin({
      filename: './login/index.css'
    }),

    // 定义环境变量
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],

  // 加载器：使webpack识别更多模块类型
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [process.env.NODE_ENV === 'development' ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader']
      },
      {
        test: /\.less$/i,
        use: [
          process.env.NODE_ENV === 'development' ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset',
        generator: {
          filename: 'assets/[hash][ext][query]'
        }
      }
    ]
  },

  // 优化配置
  optimization: {
    minimizer: [
      '...', // 保留默认的minimizer
      new CssMinimizerPlugin() // CSS压缩
    ]
  },

  // 路径解析配置
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // 设置路径别名
    }
  }
}

// 根据环境配置不同选项
if (process.env.NODE_ENV === 'development') {
  config.devtool = 'inline-source-map' // 开发环境启用source-map
}

if (process.env.NODE_ENV === 'production') {
  // 生产环境配置外部扩展，防止某些包被打包
  config.externals = {
    'axios': 'axios',
    'bootstrap/dist/css/bootstrap.min.css': 'bootstrap'
  }
}

export default config
```

## 核心功能详解

### 1. HTML插件 (html-webpack-plugin)

**作用**: 自动生成HTML网页文件，并引入打包后的其他资源。

**安装**: `npm i html-webpack-plugin --save-dev`

**配置**:

```js
new HtmlWebpackPlugin({
  template: path.resolve(__dirname, './public/login.html'), // 模板HTML
  filename: path.resolve(__dirname, './dist/login/login.html'), // 输出文件
  useCdn: process.env.NODE_ENV === 'production' // 自定义属性
})
```

**HTML模板语法**:

```html
<!-- 条件判断CDN使用 -->
<% if (htmlWebpackPlugin.options.useCdn) { %>
<link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.3.7/css/bootstrap.min.css" rel="stylesheet">
<% } %>
```

### 2. CSS处理

#### 基础CSS打包

**所需loader**: `css-loader`、`style-loader`

```bash
npm i css-loader style-loader --save-dev
```

**配置**:

```js
{
  test: /\.css$/i,
  use: ['style-loader', 'css-loader']
}
```

**使用方式**:

```js
// 在JS中引入CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
```

#### CSS提取优化

**插件**: `mini-css-extract-plugin` - 将CSS代码提取到单独的CSS文件中

```bash
npm i mini-css-extract-plugin --save-dev
```

**配置**:

```js
// 插件配置
new MiniCssExtractPlugin({
  filename: './login/index.css'
})

// loader配置
{
  test: /\.css$/i,
  use: [MiniCssExtractPlugin.loader, 'css-loader']
}
```

#### CSS压缩

**插件**: `css-minimizer-webpack-plugin`

```bash
npm i css-minimizer-webpack-plugin --save-dev
```

**配置**:

```js
// 优化配置
optimization: {
  minimizer: [
    '...', // 保留默认minimizer
    new CssMinimizerPlugin()
  ]
}
```

### 3. Less处理

**所需依赖**: `less`、`less-loader`

```bash
npm i less less-loader --save-dev
```

**配置**:

```js
{
  test: /\.less$/i,
  use: [
    process.env.NODE_ENV === 'development' ? MiniCssExtractPlugin.loader : 'style-loader',
    'css-loader',
    'less-loader'
  ]
}
```

**使用**:

```js
import './index-demo.less'
```

### 4. 图片资源处理

**Webpack5内置资源模块**:

```js
{
  test: /\.(png|jpg|jpeg|gif)$/i,
  type: 'asset',
  generator: {
    filename: 'assets/[hash][ext][query]'
  }
}
```

**JS中引入图片**:

```js
// 本地图片需要import方式引入
import imgObj from './assets/logo.png'
const theImg = document.createElement('img')
theImg.src = imgObj
document.body.appendChild(theImg)
```

## 🌟开发环境配置

### webpack-dev-server

**作用**: 搭建开发服务器，提供**热更新**功能。

**安装**: `npm i webpack-dev-server --save-dev`

**特点**:
- 借助http模块创建8080默认Web服务
- 默认以public文件夹作为服务器根目录
- 打包代码存储在内存中，提高开发效率
- 支持热模块替换(HMR)

**配置命令**:

```json
{
  "scripts": {
    "dev": "cross-env NODE_ENV=development webpack serve --open --mode development"
  }
}
```

## 打包模式

### 两种模式对比

**development模式**:
- 调试代码，实时加载
- 模块热替换（快）
- 不压缩代码，便于调试

**production模式**:
- 压缩代码，资源优化
- 更轻量，适合部署
- 移除开发相关代码

### 环境区分配置

**cross-env工具**: 跨平台设置环境变量

```bash
npm i cross-env --save-dev
```

**package.json配置**:

```json
{
  "scripts": {
    "build": "cross-env NODE_ENV=production webpack --mode production",
    "dev": "cross-env NODE_ENV=development webpack serve --open --mode development"
  }
}
```

**webpack.config.js中使用**:

```js
// 根据环境选择不同的loader
use: [process.env.NODE_ENV === 'development' ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader']
```

## 高级功能

### 1. 环境变量注入

**DefinePlugin插件**: 向前端代码注入环境变量

```js
new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
})
```

**前端代码使用**:

```js
if (process.env.NODE_ENV === 'production') {
  console.log = function () {} // 生产环境禁用console.log
}

console.log('处于开发环境，log可用')
```

### 2. Source Map调试

**作用**: 解决打包后代码调试困难的问题，建立源代码与打包代码的映射关系。

**配置** (仅开发环境):

```js
if (process.env.NODE_ENV === 'development') {
  config.devtool = 'inline-source-map'
}
```

### 3. 路径别名

**作用**: 简化模块引入路径，使用绝对路径。

**配置**:

```js
resolve: {
  alias: {
    '@': path.resolve(__dirname, 'src')
  }
}
```

**使用**:

```js
// 原来的相对路径
import myAxios from '../utils/request.js'

// 使用别名后的绝对路径
import secAxios from '@/utils/request.js'
```

### 4. CDN优化

**externals配置**: 防止某些import的包被打包，改用CDN加载。

**webpack.config.js配置**:

```js
if (process.env.NODE_ENV === 'production') {
  config.externals = {
    // key: 代码中import from后面的模块标识字符串
    // value: 替换在原地的变量名（要和CDN暴露在全局的变量名一致）
    'axios': 'axios',
    'bootstrap/dist/css/bootstrap.min.css': 'bootstrap'
  }
}
```

**HTML模板配置**:

```html
<% if (htmlWebpackPlugin.options.useCdn) { %>
<link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.3.7/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.bootcdn.net/ajax/libs/axios/1.10.0/axios.min.js"></script>
<% } %>
```

## 重要概念总结

### Loader vs Plugin

**Loader (加载器)**:
- 用于转换某些类型的模块
- 在模块加载时进行预处理
- 例如：css-loader、less-loader、style-loader
- 配置在`module.rules`中

**Plugin (插件)**:
- 执行范围更广的任务
- 可以访问webpack的完整编译生命周期
- 例如：HtmlWebpackPlugin、MiniCssExtractPlugin
- 配置在`plugins`数组中

### 开发vs生产环境策略

**开发环境**:
- 使用style-loader内嵌CSS到JS中，热替换更快
- 启用source-map便于调试
- 不压缩代码
- 使用本地依赖包

**生产环境**:
- 提取CSS到单独文件，利于浏览器缓存
- 压缩所有资源
- 移除调试代码
- 使用CDN加载第三方库

### 常见问题解决

1. **style-loader和MiniCssExtractPlugin.loader不能混用**
   - 开发环境用style-loader（热更新快）
   - 生产环境用MiniCssExtractPlugin.loader（提取CSS文件）

2. **图片引入方式**
   - 本地图片：必须用import方式
   - 网络图片：可以直接使用URL字符串

3. **路径问题**
   - 使用path.resolve()确保路径正确
   - 设置别名简化引入路径

4. **环境变量**
   - 使用cross-env确保跨平台兼容
   - 通过DefinePlugin注入到前端代码