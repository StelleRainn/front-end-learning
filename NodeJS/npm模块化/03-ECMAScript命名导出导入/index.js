/**
 * 目标：基于 ECMAScript 标准语法，“命名”导入，工具属性和方法使用
 */

// 导入: import 变量名 from '模块名或路径'

import {baseURL, getArraySum} from './utils.js'

console.log(baseURL)
console.log(getArraySum)

console.log(getArraySum([1, 4, 7]))