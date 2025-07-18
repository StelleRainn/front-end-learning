import * as path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
  entry: path.resolve(__dirname, './src/login/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'login/index.js',
    // clean: true // 清除旧的输出目录
  },
};