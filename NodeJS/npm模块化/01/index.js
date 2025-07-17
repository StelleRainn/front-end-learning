/**
 * 目标：基于 CommonJS 标准语法，导入工具属性和方法使用
 */
// 导入: require(模块名或者路径名)
// 内置模块直接写名字
const obj = require('./utils.js')
console.log(obj)

// 调用里面的方法
console.log(obj.arraySum([1,2,3]))