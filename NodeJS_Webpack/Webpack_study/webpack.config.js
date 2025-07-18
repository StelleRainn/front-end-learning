import * as path from 'node:path'
import { fileURLToPath } from 'node:url'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
  // entry：入口逻辑 JS 代码
  entry: path.resolve(__dirname, './src/login/index.js'),

  // output：输出选项
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'login/index.js',
    clean: true // 清除旧的输出目录
  },

  // plugins：插件，赋予webpack更多功能
  plugins: [
    // webpack 打包生成 html 文件
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/login.html'), // 模版 html
      filename: path.resolve(__dirname, './dist/login/login.html') // 最终输出文件 html
    })
  ],

  // loader：加载器，使webpack识别更多模块
  module: {
    rules: [
      {
        test: /\.css/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }

};