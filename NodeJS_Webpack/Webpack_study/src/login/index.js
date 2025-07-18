/**
 * 体验 webpack 打包过程
 * 1. 准备项目源码
 * 2. 准备 webpack 打包环境 (npm i webpack webpack-cli --save-dev)
 * 3. 运行自定义命令（npm run 自定义命令，如npm run build）
 */
import {checkPhone, checkCode} from '../utils/check.js'

console.log(checkPhone('12345678'))
console.log(checkCode('123456'))

/**
 * 目标2: 修改 webpack 打包出口入口
 * 1. 在项目根目录下新建 webpack.config.js 配置文件
 * 2. 在配置文件中，导出配置对象，配置入口，出口文件路径
 * 3. 重新打包观察
 */

/**
 * 目标3: 用户登录-长度判断案例
 * 1. 准备用户登录界面 login.html
 * 2. 编写核心JS代码 （就在index.js中）
 * 3. webpack 打包，然后在 html 中引入打包后的 JS
 */

document.querySelector('.btn').addEventListener('click', () => {
  const phone = document.querySelector('.login-form [name="mobile"]')
  const code = document.querySelector('.login-form [name="code"]')

  console.log(phone.value.length, code.value.length)

  // 注意check.js中，参数类型就是数值
  if (!checkPhone(phone.value)) {
    console.log('手机号长度必须为11位')
    return
  }

  if (!checkCode(code.value)) {
    console.log('验证码长度必须是6位')
    return
  }

  console.log('提交成功。')

})