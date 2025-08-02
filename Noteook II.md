# 知识手册 第二辑

<details><summary>Vue</summary>

## Vue

### Vue 基础概念

#### 创建Vue实例

创建Vue实例需要四个步骤：
1. 准备容器
2. 引入包
3. 创建实例
4. 添加配置项 => 完成渲染

```javascript
// 创建Vue实例
const app = new Vue({
  // el: 配置选择器，指定Vue管理的是哪个盒子
  el: '#app',
  
  // data：提供数据
  data: {
    msg: 'Hello, Vue!',
    num: 123456
  }
})
```

#### 响应式特征

Vue的核心特性之一是响应式数据绑定：
- 数据改变，视图自动更新
- data中的数据，最终会被添加到实例上
- 访问数据：`实例.属性`，如 `app.msg`
- 修改数据：`实例.属性 = '值'`，如 `app.msg = 'hello'`

### Vue 模板语法

#### 插值表达式

插值表达式是Vue的一种模板语法，用于在模板中显示数据。

**语法**：`{{ 表达式 }}`

**注意点**：
1. 使用的数据要存在，被声明
2. 支持的是表达式，不能是语句（如if、for等）
3. 不能在标签属性中使用`{{}}`

```html
<div id="app">
  <p>{{nickname}}</p>
  <p>{{nickname.toUpperCase()}}</p>
  <p>{{nickname + ' how are you!'}}</p>
  <p>{{ age >= 18 ? '成年' : '未成年' }}</p>
  <p>{{friends.name + ' ' + friends.desc}}</p>
</div>
```

### Vue 指令

Vue指令是带有`v-`前缀的特殊属性，不同属性对应不同的功能。

#### v-html

动态设置元素的innerHTML。

**语法**：`v-html="表达式"`

```html
<div v-html="msg"></div>
```

```javascript
data: {
  msg: `<a href="https://apple.com.cn/" target="_blank">苹果官网</a>`
}
```

#### v-show 和 v-if

都可以控制元素的显示隐藏。

**语法**：`v-show="表达式"`、`v-if="表达式"`

**差异**：
- `v-show`：通过控制CSS属性`display: none`来隐藏元素
- `v-if`：控制DOM元素的创建与否
- `v-show`适合频繁切换的场景，`v-if`适合条件不经常改变的场景

```html
<div v-show="flag" v-html="msg"></div>
<div v-if="flag" v-html="msg"></div>
```

#### v-else 和 v-else-if

辅助`v-if`进行条件渲染。

**语法**：
- `v-if="表达式" + v-else`
- `v-if="表达式" + v-else-if="表达式" + v-else`

**注意**：`v-else`一定要配合`v-if`使用

```html
<p v-if="score >= 90">成绩评定A：奖励电脑一台</p>
<p v-else-if="score >= 70">成绩评定B：奖励周末郊游</p>
<p v-else-if="score >= 60">成绩评定C：奖励零食礼包</p>
<p v-else>成绩评定D：惩罚一周不能玩手机</p>
```

#### v-on 事件监听

注册事件：添加监听事件 + 事件处理逻辑。

**语法1**：`v-on:事件名="内联语句"`（可简写为`@事件名`）

```html
<button v-on:click="count--">-</button>
<button @click="count++">+</button>
```

**语法2**：`v-on:事件名="methods中的函数名"`

```html
<button @click="fn">控制显隐</button>
```

```javascript
methods: {
  fn() {
    // methods函数内的this指向Vue实例
    this.flag = !this.flag
  }
}
```

**调用传参**：可以在事件处理中传递参数

```html
<button @click="fn(5)">可乐5元</button>
<button @click="fn(10)">咖啡10元</button>
```

```javascript
methods: {
  fn(price) {
    this.money -= price;
  }
}
```

#### v-bind 属性绑定

动态设置HTML的标签属性。

**语法**：`v-bind:属性名="表达式"`（可简写为`:属性名="表达式"`）

```html
<img v-bind:src="url" v-bind:title="msg" alt="#">
<img :src="url" :title="msg" alt="#">
```

#### v-for 列表渲染

基于数据循环，多次渲染整个元素。

**语法**：`v-for="(item, index) in 数据"`
- `item`：当前遍历的元素
- `index`：当前遍历元素的索引（可选）

```html
<ul>
  <li v-for="(item, index) in list" :key="item.id">
    {{item}} - {{index}}
  </li>
</ul>
```

**v-for中的key**：
- 作用：给元素添加唯一标识，便于Vue进行列表项的正确排序和复用
- key的值只能是字符串或数字类型
- key的值必须具有唯一性
- 推荐使用id作为key，不推荐使用index

#### v-model 双向数据绑定

给表单元素使用，实现双向数据绑定。

**语法**：`v-model="变量"`

**作用**：
- 数据变化，视图自动更新
- 视图变化，数据自动更新
- 可以快速获取或设置表单元素内容

```html
<form>
  用户：<input type="text" v-model="username"> <br>
  密码：<input type="password" v-model="password"> <br>
  <button @click="login">登录</button>
  <button @click="reset">重置</button>
</form>
```

```javascript
data: {
  username: '',
  password: ''
},
methods: {
  login() {
    console.log(this.username, this.password);
  },
  reset() {
    this.username = '';
    this.password = '';
  }
}
```

### Vue 实例配置项

#### data 数据

提供组件的响应式数据。

```javascript
data: {
  msg: 'Hello Vue',
  count: 0,
  list: ['apple', 'banana', 'orange']
}
```

#### methods 方法

定义组件的方法，方法内的`this`指向Vue实例。

```javascript
methods: {
  handleClick() {
    // this指向Vue实例
    this.count++;
  },
  handleDelete(id) {
    this.list = this.list.filter(item => item.id !== id);
  }
}
```

### 综合案例技巧

#### 数组操作方法

1. **filter方法**：过滤数组，常用于删除功能
   ```javascript
   // 删除指定id的项目
   this.list = this.list.filter(item => item.id !== id)
   ```

2. **unshift方法**：在数组最前面添加元素
   ```javascript
   // 添加新项目到列表开头
   this.list.unshift({
     id: +new Date().getTime(),
     name: this.inputValue
   })
   ```

#### 表单验证技巧

使用`trim()`方法去除空格进行判空：

```javascript
if(this.single.trim() === "") {
  alert("请输入内容")
  return
}
```

#### 条件显示优化

使用`v-show`优化用户体验：

```html
<!-- 只有在有数据时才显示底部统计区域 -->
<footer v-show="list.length">
  <span>合计: <strong>{{ list.length }}</strong></span>
</footer>

<!-- 边界按钮的显示控制 -->
<button v-show="index > 0" @click="index--">上一页</button>
<button v-show="index < list.length - 1" @click="index++">下一页</button>
```

</details>