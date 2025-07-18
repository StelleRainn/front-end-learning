/**
 * 目标：基于 ECMAScript 标准语法，“默认”导入，工具属性和方法使用
 */

// 导入: import 变量名 from '模块名或路径'

import obj from './utils.js'

console.log(obj)

// 调用里面的方法
console.log(obj.arraySum([10, 20, 30]))