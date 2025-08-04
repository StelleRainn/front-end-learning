# 知识手册 第二辑

<details><summary>Vue</summary>

## Vue

### Vue 基础概念

#### 创建Vue实例

**概念**：Vue实例是Vue应用的根实例，通过new Vue()创建，它将数据和DOM进行绑定，实现响应式的数据驱动视图更新。

**创建步骤**：
1. 准备HTML容器
2. 引入Vue.js库
3. 创建Vue实例
4. 添加配置项完成渲染

**模板代码**：
```html
<!-- 1. 准备容器 -->
<div id="app">
  <!-- Vue管理的区域 -->
</div>

<!-- 2. 引入Vue库 -->
<script src="./vue.js"></script>
```

```javascript
// 3. 创建Vue实例
const app = new Vue({
  // 4. 配置选项
  el: '选择器',           // 指定Vue管理的DOM元素
  data: {                // 响应式数据
    属性名: 初始值
  },
  methods: {             // 方法定义
    方法名() {
      // 方法体
    }
  },
  computed: {            // 计算属性
    计算属性名() {
      return 计算结果;
    }
  },
  watch: {               // 侦听器
    被侦听属性(newVal, oldVal) {
      // 处理逻辑
    }
  }
});
```

**基础示例**：
```javascript
// 创建Vue实例
const app = new Vue({
  // el: 配置选择器，指定Vue管理的是哪个盒子
  el: '#app',
  
  // data：提供数据
  data: {
    msg: 'Hello, Vue!',
    num: 123456,
    isVisible: true
  },
  
  // methods：定义方法
  methods: {
    handleClick() {
      this.isVisible = !this.isVisible;
    }
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

**概念**：插值表达式是Vue的核心模板语法，使用双大括号`{{ }}`将Vue实例中的数据渲染到HTML模板中，实现数据的动态显示。

**模板语法**：
```html
<!-- 基础语法 -->
{{ 数据属性 }}

<!-- 表达式计算 -->
{{ 数学表达式 }}
{{ 字符串拼接 }}
{{ 三元运算符 }}
{{ 方法调用 }}

<!-- 对象属性访问 -->
{{ 对象.属性 }}
{{ 数组[索引] }}
```

**使用规则**：
1. 使用的数据必须在data中声明
2. 支持JavaScript表达式，不支持语句（如if、for、while等）
3. 不能在HTML属性中使用（需要用v-bind）
4. 每个插值表达式只能包含单个表达式

**基础示例**：
```html
<div id="app">
  <!-- 简单数据显示 -->
  <p>{{ nickname }}</p>
  
  <!-- 方法调用 -->
  <p>{{ nickname.toUpperCase() }}</p>
  
  <!-- 字符串拼接 -->
  <p>{{ nickname + ' how are you!' }}</p>
  
  <!-- 三元运算符 -->
  <p>{{ age >= 18 ? '成年' : '未成年' }}</p>
  
  <!-- 对象属性访问 -->
  <p>{{ friends.name + ' ' + friends.desc }}</p>
  
  <!-- 数学运算 -->
  <p>{{ price * quantity }}</p>
  
  <!-- 数组访问 -->
  <p>{{ list[0] }}</p>
</div>
```

```javascript
data: {
  nickname: 'Vue',
  age: 20,
  friends: {
    name: '小明',
    desc: '我的好朋友'
  },
  price: 10,
  quantity: 3,
  list: ['苹果', '香蕉', '橙子']
}
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

**概念**：v-on指令用于监听DOM事件，当事件触发时执行相应的JavaScript代码或调用方法。

**模板语法**：
```html
<!-- 基础语法 -->
<button v-on:事件名="处理逻辑">按钮</button>

<!-- 简写语法 -->
<button @事件名="处理逻辑">按钮</button>

<!-- 内联语句 -->
<button @click="变量++">按钮</button>

<!-- 调用方法 -->
<button @click="方法名">按钮</button>

<!-- 调用方法并传参 -->
<button @click="方法名(参数)">按钮</button>
```

**语法1 - 内联语句**：直接在模板中编写简单的JavaScript表达式

```html
<button v-on:click="count--">-</button>
<button @click="count++">+</button>
<button @click="flag = !flag">切换</button>
```

**语法2 - 调用方法**：调用methods中定义的方法

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

**语法3 - 调用传参**：在事件处理中传递参数

```html
<button @click="fn(5)">可乐5元</button>
<button @click="fn(10)">咖啡10元</button>
<button @click="handleDelete(item.id)">删除</button>
```

```javascript
methods: {
  fn(price) {
    this.money -= price;
  },
  handleDelete(id) {
    this.list = this.list.filter(item => item.id !== id);
  }
}
```

#### v-bind 属性绑定

**概念**：v-bind指令用于动态绑定HTML属性，可以将Vue实例的数据绑定到元素的属性上，实现属性值的动态更新。

**模板语法**：
```html
<!-- 基础语法 -->
<元素 v-bind:属性名="表达式"></元素>

<!-- 简写语法 -->
<元素 :属性名="表达式"></元素>

<!-- 常用属性绑定 -->
<img :src="图片路径变量">
<a :href="链接变量">链接</a>
<div :id="id变量"></div>
<input :value="值变量">
<button :disabled="布尔变量">按钮</button>
```

**基础示例**：
```html
<img v-bind:src="url" v-bind:title="msg" alt="#">
<img :src="url" :title="msg" alt="#">
<a :href="link">{{ linkText }}</a>
<input :placeholder="placeholderText">
```

```javascript
data: {
  url: 'https://example.com/image.jpg',
  msg: '这是一张图片',
  link: 'https://vue.js.org',
  linkText: 'Vue官网',
  placeholderText: '请输入内容'
}
```

#### v-for 列表渲染

**概念**：v-for指令用于基于数组、对象或数字进行循环渲染，可以将数据列表渲染为DOM元素列表。

**模板语法**：
```html
<!-- 遍历数组 -->
<li v-for="(item, index) in 数组" :key="唯一标识">
  {{ item }} - {{ index }}
</li>

<!-- 遍历对象 -->
<li v-for="(value, key, index) in 对象" :key="key">
  {{ key }}: {{ value }} - {{ index }}
</li>

<!-- 遍历数字 -->
<li v-for="n in 数字" :key="n">
  {{ n }}
</li>
```

**参数说明**：
- `item`：当前遍历的元素值
- `index`：当前遍历元素的索引（可选）
- `value`：对象的属性值
- `key`：对象的属性名
- `n`：数字遍历时的当前数字

**数组遍历示例**：
```html
<ul>
  <!-- 简单数组 -->
  <li v-for="(fruit, index) in fruits" :key="index">
    {{ index + 1 }}. {{ fruit }}
  </li>
  
  <!-- 对象数组 -->
  <li v-for="(item, index) in list" :key="item.id">
    {{ item.name }} - {{ item.price }}元
  </li>
</ul>
```

```javascript
data: {
  fruits: ['苹果', '香蕉', '橙子'],
  list: [
    { id: 1, name: '苹果', price: 5 },
    { id: 2, name: '香蕉', price: 3 },
    { id: 3, name: '橙子', price: 4 }
  ]
}
```

**v-for中的key属性**：

**概念**：key是Vue用于跟踪列表项变化的特殊属性，帮助Vue高效地更新虚拟DOM。

**重要性**：
- 给元素添加唯一标识，便于Vue进行列表项的正确排序和复用
- 提高列表渲染性能，避免不必要的DOM操作
- 确保组件状态的正确维护

**使用规则**：
- key的值只能是字符串或数字类型
- key的值必须具有唯一性
- 推荐使用数据的id作为key
- 不推荐使用index作为key（会导致性能问题）

```html
<!-- 推荐：使用唯一id -->
<li v-for="item in list" :key="item.id">{{ item.name }}</li>

<!-- 不推荐：使用index -->
<li v-for="(item, index) in list" :key="index">{{ item.name }}</li>
```

#### v-model 双向数据绑定

**概念**：v-model是Vue提供的双向数据绑定指令，专门用于表单元素，实现数据与视图的同步更新。

**模板语法**：
```html
<!-- 基础语法 -->
<input v-model="变量名">

<!-- 不同表单元素的使用 -->
<input type="text" v-model="文本变量">
<input type="checkbox" v-model="布尔变量">
<input type="radio" v-model="选择变量">
<select v-model="选项变量">
<textarea v-model="文本变量"></textarea>
```

**作用**：
- 数据变化，视图自动更新
- 视图变化，数据自动更新
- 可以快速获取或设置表单元素内容

**基础示例**：
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

**应用于其他表单元素**：

```html
<!-- 复选框 -->
是否单身：<input type="checkbox" v-model="isSingle">

<!-- 单选框 -->
性别: 
<input type="radio" name="gender" value="1" v-model="gender">男
<input type="radio" name="gender" value="0" v-model="gender">女

<!-- 下拉选择 -->
所在城市:
<select v-model="cityID">
  <option value="101">北京</option>
  <option value="102">上海</option>
  <option value="103">成都</option>
</select>

<!-- 文本域 -->
自我描述：<textarea v-model="desc"></textarea>
```

```javascript
data: {
  isSingle: true,
  gender: '1',
  cityID: '102',
  desc: 'Hello'
}
```

### Vue 指令修饰符

**概念**：指令修饰符是Vue指令的扩展功能，用于增强指令的行为，通过在指令后添加`.修饰符`的方式使用。

#### 按键修饰符

**模板语法**：
```html
<!-- 监听特定按键事件 -->
<input @keyup.按键名="处理函数">
<input @keydown.按键名="处理函数">
```

**常用按键修饰符**：
- `.enter` - 回车键
- `.tab` - Tab键
- `.delete` - 删除键
- `.esc` - Esc键
- `.space` - 空格键
- `.up/.down/.left/.right` - 方向键

**示例**：
```html
<input @keyup.enter="fn" v-model="username">
```

```javascript
methods: {
  fn() {
    console.log(this.username);
  }
}
```

#### 事件修饰符

**模板语法**：
```html
<!-- 阻止事件冒泡 -->
<button @click.stop="处理函数">按钮</button>

<!-- 阻止默认行为 -->
<a @click.prevent="处理函数">链接</a>

<!-- 链式调用 -->
<button @click.stop.prevent="处理函数">按钮</button>
```

**常用事件修饰符**：
- `.stop` - 阻止事件冒泡
- `.prevent` - 阻止默认行为
- `.capture` - 添加事件监听器时使用事件捕获模式
- `.self` - 只当在 event.target 是当前元素自身时触发处理函数
- `.once` - 事件只触发一次

#### v-model修饰符

**模板语法**：
```html
<!-- 去除首尾空格 -->
<input v-model.trim="变量名">

<!-- 转换为数字类型 -->
<input v-model.number="变量名">

<!-- 懒更新（失去焦点时更新） -->
<input v-model.lazy="变量名">
```

**示例**：
```html
姓名：<input v-model.trim="username">
年龄：<input v-model.number="age">
```

### v-bind 样式控制

**概念**：v-bind不仅可以绑定普通属性，还可以专门用于动态控制元素的class和style，实现样式的动态切换。

#### 控制class类名

**模板语法**：
```html
<!-- 对象语法：根据布尔值控制类名 -->
<div :class="{ 类名1: 布尔值1, 类名2: 布尔值2 }"></div>

<!-- 数组语法：批量添加类名 -->
<div :class="['类名1', '类名2', 条件 ? '类名3' : '']"></div>

<!-- 混合使用 -->
<div :class="[基础类名, { 动态类名: 条件 }]"></div>
```

**对象语法示例**：
```html
<div :class="{ active: isActive, disabled: isDisabled }">内容</div>
```

```javascript
data: {
  isActive: true,
  isDisabled: false
}
// 渲染结果：<div class="active">内容</div>
```

**数组语法示例**：
```html
<div :class="['box', 'container', isActive ? 'active' : '']">内容</div>
```

#### 控制style样式

**模板语法**：
```html
<!-- 对象语法：动态设置内联样式 -->
<div :style="{ CSS属性名: '值', CSS属性名: 变量 }"></div>

<!-- 数组语法：应用多个样式对象 -->
<div :style="[样式对象1, 样式对象2]"></div>
```

**示例**：
```html
<div :style="{ width: '300px', height: '300px', backgroundColor: 'darkcyan' }"></div>
<div :style="{ width: percent + '%' }">进度条</div>
```

```javascript
data: {
  percent: 50
}
```

### 计算属性 computed

**概念**：计算属性是基于现有数据计算出来的新属性，具有缓存特性，只有当依赖的数据发生变化时才会重新计算。

**模板语法**：
```javascript
computed: {
  计算属性名() {
    // 基于现有数据的计算逻辑
    return 计算结果;
  }
}
```

**基础示例**：
```javascript
computed: {
  totalCount() {
    // 计算礼物总数
    return this.list.reduce((prev, curr) => prev + curr.num, 0);
  }
}
```

```html
<p>礼物总数：{{ totalCount }} 个</p>
```

#### 计算属性 vs 方法

**计算属性特点**：
- 基于响应式依赖进行缓存
- 只有相关响应式依赖发生改变时才会重新求值
- 多次访问会立即返回之前的计算结果
- 作为属性使用：`{{ 计算属性名 }}`

**方法特点**：
- 每次调用都会重新执行
- 没有缓存机制
- 作为方法调用：`{{ 方法名() }}`

**对比示例**：
```javascript
// 计算属性 - 有缓存
computed: {
  totalCount() {
    console.log('计算属性执行'); // 只打印一次
    return this.list.reduce((sum, item) => sum + item.num, 0);
  }
},
// 方法 - 无缓存
methods: {
  totalCountFn() {
    console.log('方法执行'); // 每次调用都打印
    return this.list.reduce((acc, item) => acc + item.num, 0);
  }
}
```

#### 计算属性完整写法

**模板语法**：
```javascript
computed: {
  计算属性名: {
    // 获取值时调用
    get() {
      return 计算结果;
    },
    // 设置值时调用
    set(newValue) {
      // 处理设置逻辑
    }
  }
}
```

**示例**：
```javascript
computed: {
  fullName: {
    get() {
      return this.firstName + this.lastName;
    },
    set(val) {
      this.firstName = val.slice(0, 1);
      this.lastName = val.slice(1);
    }
  }
}
```

### 侦听器 watch

**概念**：侦听器用于观察和响应Vue实例上数据的变化，当被侦听的数据发生变化时，会执行相应的回调函数。

#### 简单写法

**模板语法**：
```javascript
watch: {
  // 侦听根级别属性
  属性名(newVal, oldVal) {
    // 处理逻辑
  },
  // 侦听对象中的属性（需要加引号）
  'obj.属性名'(newVal, oldVal) {
    // 处理逻辑
  }
}
```

**示例**：
```javascript
watch: {
  'obj.words'(newVal) {
    // 防抖处理
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(async () => {
      const res = await axios({
        url: 'https://api.example.com/translate',
        params: { words: newVal }
      });
      this.result = res.data.data;
    }, 300);
  }
}
```

#### 完整写法

**模板语法**：
```javascript
watch: {
  属性名: {
    deep: true,      // 深度监听
    immediate: true, // 立即执行
    handler(newVal, oldVal) {
      // 处理逻辑
    }
  }
}
```

**配置选项**：
- `deep: true` - 深度监听，监听对象内部值的变化
- `immediate: true` - 立即执行一次handler
- `handler` - 具体的处理函数

**示例**：
```javascript
watch: {
  obj: {
    deep: true,
    immediate: true,
    handler(newVal) {
      // 只要obj中任意属性发生变化都会触发
      localStorage.setItem('data', JSON.stringify(newVal));
    }
  }
}
```

### Vue 实例配置项

#### data 数据

**概念**：data选项用于声明组件的响应式数据，Vue会将data中的属性转换为响应式属性。

**模板语法**：
```javascript
data: {
  属性名: 初始值,
  对象属性: {},
  数组属性: []
}
```

**示例**：
```javascript
data: {
  msg: 'Hello Vue',
  count: 0,
  user: {
    name: '张三',
    age: 18
  },
  list: ['apple', 'banana', 'orange']
}
```

#### methods 方法

**概念**：methods选项用于定义组件的方法，方法内的`this`自动绑定到Vue实例。

**模板语法**：
```javascript
methods: {
  方法名(参数1, 参数2) {
    // 方法体
    // this指向Vue实例
    return 返回值; // 可选
  }
}
```

**示例**：
```javascript
methods: {
  handleClick() {
    // this指向Vue实例
    this.count++;
  },
  handleDelete(id) {
    this.list = this.list.filter(item => item.id !== id);
  },
  async fetchData() {
    const res = await axios.get('/api/data');
    this.data = res.data;
  }
}
```

#### computed 计算属性

**概念**：computed选项用于定义计算属性，基于现有数据计算出新的属性值。

**模板语法**：
```javascript
computed: {
  计算属性名() {
    return 基于data的计算结果;
  }
}
```

#### watch 侦听器

**概念**：watch选项用于侦听数据变化，当数据发生变化时执行相应的回调函数。

**模板语法**：
```javascript
watch: {
  被侦听的属性名(newVal, oldVal) {
    // 变化时的处理逻辑
  }
}
```

### 综合案例技巧

#### 数组操作方法

**模板方法**：
```javascript
// 常用数组方法模板
array.filter(item => 条件)     // 过滤数组
array.map(item => 新值)        // 转换数组
array.reduce((acc, item) => acc + item.属性, 初始值)  // 累计计算
array.find(item => 条件)       // 查找元素
array.push(新元素)             // 末尾添加
array.unshift(新元素)          // 开头添加
array.splice(索引, 删除数量, 新元素)  // 插入/删除
```

**实用示例**：

1. **filter方法**：过滤数组，常用于删除功能
   ```javascript
   // 删除指定id的项目
   this.list = this.list.filter(item => item.id !== id)
   
   // 筛选已选中的项目
   this.selectedItems = this.list.filter(item => item.isChecked)
   ```

2. **unshift方法**：在数组最前面添加元素
   ```javascript
   // 添加新项目到列表开头
   this.list.unshift({
     id: +new Date(),
     name: this.inputValue,
     createTime: new Date().toLocaleString()
   })
   ```

3. **reduce方法**：累计计算，常用于统计
   ```javascript
   // 计算总价
   this.totalPrice = this.list.reduce((sum, item) => sum + item.price * item.num, 0)
   
   // 计算总数量
   this.totalCount = this.list.reduce((sum, item) => sum + item.num, 0)
   ```

#### 表单验证技巧

**模板方法**：
```javascript
// 表单验证模板
if (输入值.trim() === '') {
  alert('请输入内容');
  return;
}

if (typeof 数值 !== 'number') {
  alert('请输入正确的数字');
  return;
}
```

**实用示例**：
```javascript
// 综合验证示例
add() {
  // 去除空格验证
  if (this.subject.trim() === '') {
    alert('请输入科目');
    return;
  }
  
  // 数字类型验证
  if (typeof this.score !== 'number') {
    alert('请输入正确成绩');
    return;
  }
  
  // 数值范围验证
  if (this.score < 0 || this.score > 100) {
    alert('成绩应在0-100之间');
    return;
  }
  
  // 验证通过，执行添加逻辑
  this.list.unshift({
    id: +new Date(),
    subject: this.subject,
    score: this.score
  });
  
  // 重置表单
  this.subject = '';
  this.score = '';
}
```

#### 条件显示优化

**模板方法**：
```html
<!-- 条件渲染模板 -->
<div v-if="条件">条件为真时显示</div>
<div v-else>条件为假时显示</div>

<div v-show="条件">频繁切换时使用</div>

<!-- 列表为空时的处理 -->
<div v-if="list.length > 0">
  <!-- 有数据时的内容 -->
</div>
<div v-else>
  <!-- 空状态提示 -->
</div>
```

**实用示例**：
```html
<!-- 只有在有数据时才显示底部统计区域 -->
<footer v-show="list.length">
  <span>合计: <strong>{{ list.length }}</strong></span>
  <span>总价: <strong>{{ totalPrice }}</strong></span>
</footer>

<!-- 边界按钮的显示控制 -->
<button v-show="index > 0" @click="index--">上一页</button>
<button v-show="index < list.length - 1" @click="index++">下一页</button>

<!-- 加载状态和错误状态 -->
<div v-if="loading">加载中...</div>
<div v-else-if="error">加载失败，请重试</div>
<div v-else-if="list.length === 0">暂无数据</div>
<div v-else>
  <!-- 正常数据展示 -->
</div>
```

#### 本地存储技巧

**模板方法**：
```javascript
// 本地存储模板
// 保存数据
localStorage.setItem('键名', JSON.stringify(数据));

// 读取数据
const 数据 = JSON.parse(localStorage.getItem('键名')) || 默认值;

// 删除数据
localStorage.removeItem('键名');
```

**实用示例**：
```javascript
// 在watch中实现自动保存
watch: {
  list: {
    deep: true,
    handler(newVal) {
      localStorage.setItem('todoList', JSON.stringify(newVal));
    }
  }
},

// 在data中读取本地数据
data: {
  list: JSON.parse(localStorage.getItem('todoList')) || []
}
```

#### 防抖处理技巧

**模板方法**：
```javascript
// 防抖函数模板
if (this.timer) clearTimeout(this.timer);
this.timer = setTimeout(() => {
  // 延迟执行的逻辑
}, 延迟时间);
```

**实用示例**：
```javascript
// 搜索防抖
watch: {
  searchText(newVal) {
    if (this.searchTimer) clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => {
      this.performSearch(newVal);
    }, 300);
  }
}
```

</details>