import * as path from 'node:path'
import { fileURLToPath } from 'node:url'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import webpack from 'webpack'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
// const webpack = require('webpack')


const config = {
  // 打包模式
  // mode: 'development',

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
    }),

    // css 提取器
    // 可以指定相对路径
    new MiniCssExtractPlugin({
      filename: './login/index.css'
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV' : JSON.stringify(process.env.NODE_ENV)
    })



  ],

  // loader：加载器，使webpack识别更多模块
  module: {
    rules: [
      {
        test: /\.css/i,
        // use: ['style-loader', 'css-loader']
        // style-loader 和 miniCssExtractLoader.loader 不能混用
        use: [process.env.NODE_ENV === 'development' ? MiniCssExtractPlugin.loader : 'style-loader'
          , 'css-loader']
      },

      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          process.env.NODE_ENV === 'development' ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'less-loader',
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

  // 优化
  optimization: {
    minimizer : [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
      `...`,
      new CssMinimizerPlugin(),
    ]
  }

};


// 在导出之前做判断，如果是开发环境下，则启用 sourcemap 选项以准确定位报错信息
// module.export = {
// ...
// devtool: 'inline-source-map'
// }
if (process.env.NODE_ENV === 'development') {
  config.devtool =  'inline-source-map'
}


// 导出配置对象
export default config