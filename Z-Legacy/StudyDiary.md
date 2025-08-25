# 学习进度跟踪

*此MarkDown用于记录自己的学习进度，也方便自己复习。*

*Apr
22nd留：从今天开始，调整日志风格：总标题使用h1，月份使用h2，每日使用h3，每日板块标题用h4；每日主题或简单心里话使用引用；代码块标注代码语言；不强制设置缩进；全部以冒号、分号或句号结尾。*

## June 2025

<details><summary>点击展开 / 关闭<summary>

### June 1st, Sun, Day 73

> 六一快乐

**今日总结**

重新开始敲代码的感觉，还真不错。今天没有跟视频课，主要是思考了一下未来职业道路的事宜，比如再回深圳。目前有这个念头，但都不是很要紧；再经过过去一个月的是是非非后，现在，我知道自己所追求的目标究竟是什么。

下午直到晚上在刷LeetCode题目。哪怕不是要成为算法大神，但基本的算法素养还是要有！目前做了4题，包括：

- (1) Two Sum 用哈希表和“补数思维”来提升性能
- (2) Add Two Numbers 以单链表的形式加和，思维不难，主要考虑逐位相加、进位处理、指针迭代即可；在具体实现上，由于涉及C++以及指针，以及数据结构的
  **单链表**知识，会比较陌生，需要反复修正
- (1768) Merge Strings Alternately 交替拼接字符串，比较简单，顺便复习了JS中`string.slice()`方法
- (1071) Greatest Common Divisor of Strings 数组的最大公约数。最初是用**正则表达式**
  与末尾逐位删除匹配进行，可以通过，但效率比较低。高效的办法：1）结构对称性（剪枝）2）**欧几里德算法求最大公约数**（gcd(), 又称*
  *辗转相除法**）。顺带复习箭头函数，正则表达式。

独立开了一个新项目，也开了个新仓库，和CodeSprint40一样去推送和更新。并非突发奇想，现实要求也确实如此，在这方面下点功夫总是没错的。所以，以后除了
**视频课主线**，每周也要花点时间在LeetCode做上那么**几道算法题**，复习一下**《数据结构》**；以及**《计算机网络》**
也该提上日程了，毕竟是Web前端，面试时必问的。

现在手感不错了。明天，可以继续推进视频课这个大主线；之后可以复盘一下今天做的几道算法题；最后要留点时间准备一下这周的安卓开发课程的测试，以及计算机英语的朗读翻译测试。

**无需担心，多学多做。没有人生来就会，脚踏实地，发挥我的长处，并尽力补齐我的短板，提高解决问题的效率，而非空想与自怨自艾，这就够了。
**




</details>

## May 2025

<details><summary>点击展开 / 关闭</summary>

### May 29, Thu, Day 70

> 好久不见。带着全新的热爱，一往无前吧。

**心里所想**

我还记得四月初之时我如何描绘那场相遇为“不一样的波澜”。我没有辜负自己，只是到如今也发现自己的确不适合。无法改变已经发生的事情，伤春悲秋或计较得失皆为徒劳；至少我现在明白一点：
**我的确还是热爱着开发与创造的**，我又一次选择了计算机，一如三年前高考结束填报志愿那般高兴。

**今日学习**：主要是AJAX入门，讲解axios的使用；上次刚学到这里就遇上各种各样的事情，继续拾起曾经的知识，拼接起来吧。

#### AXIOS的基本使用

基础三步走：引入js；传入**配置对象**；用then接受结果并作后续处理

```javascript
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

<script>
  axios({
    url: 'http://hmajax.itheima.net/api/province' // 告诉axios服务器地址
  }).then(result => {
    console.log(result) // 看输出中的data{}，包括list和message
    console.log(result.data.list) // 数组
  })
</script>
```

#### URL的基本了解

URL，即统一资源定位符，主要构成：**协议，域名，资源路径**。

协议：http:// & https:// 。规定数据传输的格式 。
域名：必须要写的。标记服务器在互联网中的方位。
资源路径：标记资源在服务器下的具体位置。

#### 查询参数

浏览器提供给服务器的**额外参数**，让服务器返回浏览器想要的信息。

语法 `url?params1=value1&params2=value2`

axios中，可以在配置对象中加入 **params对象**以使用查询参数：

```javascript
axios({
  url: 'http://hmajax.itheima.net/api/city',

  params: {
    pname: '广西壮族自治区'
  }
}).then(re => {
  console.log(re.data.list)
})
```

#### 常用请求方法：method

指axios配置对象中的method，参数包括：**GET（获取数据，可以省略），POST（提交数据），PUT，DELETE，PATCH**。

通常一起出现的，还有**data**对象，也就是要处理的数据对象。

```javascript
axios({
    url: 'http://hmajax.itheima.net/api/register',
    method: 'POST', // 指定请求的方法
    data: {
      username: 'Rainn0311',
      password: '512451',
    }
  }).then(result => {
    console.log(result.data.message) // confirm whether it's succeed
  })
})
```

#### axios错误处理：catch方法

在利用then方法接受结果后，可以用catch方法处理可能出现的错误。

```javascript
axios({
    url: 'http://hmajax.itheima.net/api/register',
    method: 'POST', // 指定请求的方法
    data: {
      username: 'StelleRainn',
      password: '512451',
    }
  }).then(result => {
    console.log(result.data.message) // confirm whether it's succeed
  }).catch(error => {
    console.log(error)
    console.log(error.response.data.message) // error message
    alert(error.response.data.message) // 弹窗处理
  })
})
```

#### HTTP协议之请求报文与响应报文

指基于HTTP协议，发给服务器（即：请求）或返回给浏览器（即：响应）的内容

请求报文包括请求头、请求行、请求体，在浏览器中，通过“网络”-“Fetch/XHR”可以查看，包括标头（Headers），载荷（Payload）

响应报文基本一致。关注HTTP响应状态码：用来表明请求是否成功完成：
**2xx：成功 4xx：客户端错误 5xx：服务端错误 （404：找不到资源）**

#### 接口文档

由后端工程师完成的，描述接口的文档，包括与服务器通信时使用的URL，请求方法，参数类型等。

#### form-serialize插件：快速获取表单控件的value

一个js脚本，引入后可通过serialize()函数快速获取指定表单中所有控件的value值。

```javascript
<script src="lib/form-serialize.js"></script>
<script>
  const form = document.querySelector('.example-form')
  /**
   * serialize函数，一次性获取某个表单全部控件的值（value）
   * @param {form} 要获取哪个表单的值
   * @param {Object} 配置对象，主要包括hash和empty
   *  hash 设置数据结构，这决定了返回值类型
   *    - true：JS对象
   *    - false：查询字符串
   *  empty 是否获取空值
   *    - true：取空值
   *    - false：不获取空值
   */
  document.querySelector('#btn').addEventListener('click', () => {
    const data = serialize(form, {hash: true, empty: true})
    console.log(data)
    console.log(document.querySelector('#name').value)
  })
</script>
```

#### 案例一：地区查询

主要考察对GET方法和查询参数params的使用；注意一个小细节：**在ES6+中，变量名和参数名一致时，可以简写**

```javascript
btn.addEventListener('click', () => {
  let pname = document.querySelector('[name=province]').value
  let cname = document.querySelector('[name=city]').value

  // 获取数据
  axios({
    url: 'http://hmajax.itheima.net/api/area',
    method: 'GET',
    params: {
      // ES6写法：变量名和值相同，可以一起写
      pname,
      cname,
    }
  }).then(result => {
    // console.log(result.data.list)
    let content = result.data.list.map(current => `<li class="list-group-item">${current}</li>`)
    // console.log(content)
    document.querySelector('.list-group').innerHTML = content.join(' ')
  })
})
```

#### 案例二：登录

考察POST方法，catch错误处理以及serialize方法的综合运用。

*顺便简单复习了一下正则表达式与数组解构*

核心代码：

```javascript
const formData = serialize(form, {hash: true, empty: true})
```

```javascript
const {username: username, password: password} = formData // 如需要，可以使用ES6简写
```

```javascript
const unameRegExp = /^[a-zA-Z0-9]{8,}$/ig
if (!unameRegExp.test(username)) {
  myAlert('用户名格式不正确', false)
  return
}
```

```javascript
axios({
  url: 'http://hmajax.itheima.net/api/login',
  method: 'POST',
  data: {
    username: `${username}`,
    password: `${password}`,
  }
}).then(result => {
  console.log(result)
  console.log(result.data.message)
  myAlert(result.data.message, true)
}).catch(error => {
  console.log(error)
  console.log(error.response.data.message)
  myAlert(error.response.data.message, false)
})
/*小技巧：可以在控制台右击对应属性，快速复制其路径，例如上面的response.data.message就是复制下来的*/
})
```

```javascript
// 目标2:使用提示框反馈登录消息
const alertMsg = document.querySelector('.alert')

function myAlert(msg, isSuccess) {
  // 显示提示框
  alertMsg.classList.add('show')

  // 显示不同的提示文字（参数），并根据isSuccess决定背景色（添加不同的类）
  alertMsg.innerText = msg
  const currentBg = isSuccess ? 'alert-success' : 'alert-danger'
  alertMsg.classList.add(currentBg)

  // 自动消失，并去除背景色，避免重叠与层叠
  let timer = setTimeout(() => {
    alertMsg.classList.remove('show',currentBg)
  }, 2000)
}
```

#### 总结

这一部分内容主要是axios入门，不难，恰好同时可以复习之前的知识，例如箭头函数、计时器、正则表达式、数组解构等；一个月没有敲过代码，手感确实很生疏了，所以这段时间多多敲代码，也可以好好复习一下之前的javascript的内容，多多找回感觉吧！

### May 3, Sat, Day 44

> The First Job

Gey things done. 把事做好。

</details>

## April 2025

<details><summary> 点击展开 / 关闭 </summary> 

### Apr 28th, Mon, Day 39

> THE INTERVIEW

审核通过，收到了面试邀请。花了一天的时间准备面试，正装。晚上8点半开始面试。第二天才出结果。

### Apr 27th, Sun, Day 38

> THE RESUME

今天得到了师兄的橄榄枝，将时间都花在了准备申请书和简历制作上。

### Apr 26th, Sat, Day 37

> 进入框架前置课程，期望1周完成

今天早上收尾了一下JavaScript，补写了StudyDiary，JavaScript的视频课学习完结撒花！（当然，复习是不能少的）。

剩下没多少时间，简单看了一下框架前置课程，对AJAX和axios有初步了解，但内容不多，明日学习完成后，再统一把知识点写到明天的SD中吧。

今晚又是社区的实践活动，好好表现吧！

### Apr 25th, Fri, Day 36

> 里程碑2。Milestone 2.

#### 浅拷贝

可以完成对「单层」对象的拷贝，对新的对象/数组的修改不会影响到原来的对象/数组。包括两种方法：

```javascript
// {...sourceObj}
const o1 = {...obj}
o1.age = 20
console.log(obj.age, o1.age) // 18 20 对o1的修改不会影响原来的obj
```

```javascript
// Object.assign(target, source)
const o2 = {}
Object.assign(o2, obj)
o2.age = 20
console.log(obj.age, o2.age) // 18 20 对o2的修改也不会影响到obj
```

拷贝数组，包括`[...sourceArray]`和`Array.prototype.contact`两种方法。

然而，浅拷贝不能完成对多级（嵌套）的对象/数组的拷贝（对于其中的简单数据类型就拷贝了值，但引用数据类型还是拷贝了地址），故引出*
*深拷贝**。

#### 深拷贝

包括递归函数实现、lodash库实现和JSON字符串三种实现方式。

**递归函数实现：**

自定义函数deepCopy(target, source)，接受新对象、源对象作为参数，将源对象拷贝给新对象，同时两个对象之间各自的属性/修改互不影响。

核心要点：遍历，条件判断与递归。使用**forin**循环遍历对象中的每一个属性，对每个属性作**if判断**，根据属性**instanceof**
的不同类型将其**递归处理**：

```javascript
const charlotte = {} // 新对象
function deepCopy(target, source) {
  for (let key in source) { // 对象遍历，key是属性名（变量），source[key]是属性值（详见基础day7）
    if (source[key] instanceof Array) { // 判断是否是数组（复杂数据类型）
      target[key] = [] // 让自己作为同样的数组类型，去递归获取源对象中的这个数组属性
      deepCopy(target[key], source[key]) // 递归调用
    } else if (source[key] instanceof Object) { // 判断是否为对象，但Array先行，因为数组也是对象
      target[key] = {}
      deepCopy(target[key], source[key])
    } else {
      target[key] = source[key]
    }
  }
}

deepCopy(charlotte, rainn)
```

**lodash库实现：**

```javascript
<!--引用lodash库-->
<script src="lodash.min.js"></script>
...
const charlotte = _.cloneDeep(rainn)
console.log(charlotte)
...
```

**JSON化实现：**最直观也最简单，将源对象转化为完全的字符串，将字符串赋值给新变量，再将其反JSON化，就得到了一致但地址不同的两个对象。

*p.s. 但是不支持拷贝函数*

```javascript
const charlotte = JSON.parse(JSON.stringify(rainn))
```

#### 异常处理

**throw new Error('message')**：抛出可定义的错误信息，同时会**终止**程序！

```javascript
function fn1(x, y) {
  if (!x || !y) {
    throw new Error('参数不完整') // 会终止程序
  }
  return x + y
}

fn1()
```

**try-catch-finally 捕获异常**：拦截错误，提示浏览器提供的错误信息，但不中断执行（除非加入return或throw）。finally则是无论是否有错误，都必然会执行的语句。

```javascript
function fn2() {
  try {
    document.querySelector('span').style.color = 'red'
  } catch (e) { // 参数e中的message是错误消息
    console.log(e.message)
    // throw new Error(e.message)
  } finally {
    alert('finally 语句中的代码一定会执行')
  }
  console.log('后续代码正常运行')
}

fn2()
```

**debugger**：运行到该代码，在浏览器中打开debugger调试程序，相当于打断点。

#### 处理 this

1. 普通函数中的this：**谁调用，this的值就指向谁**。

```javascript
// 普通函数没有明确调用者时，this的值为window
// 严格模式下没有调用者时，this的值为undefined
// 严格模式 'use strict'
console.log(this) // Window
function f() {
  console.log(this) // Window
}
setTimeout(function () {
  console.log(this) // Window
}, 1)
document.querySelector('button').addEventListener('click', function () {
  console.log(this) // button
})
const obj = {
  sayHi: function () {
    console.log(this) // 指向obj对象
  }
}
```

2. **箭头函数**：**本身没有this**，箭头函数的this引用的就是最近一级作用域的this。适用于需要**用到上层this**的地方。

#### 改变 this 指向：call，apply与bind方法

```javascript
const obj = {
  name: 'rainn',
}
function fn(x, y) {
  console.log(this) // 一般调用时，指向window
  console.log(x + y)
}
```

**call()方法：**会**立即调用函数**。

```javascript
// function.call(this语句, 参数1, 参数2...)
// 调用函数的同时，指定this的指向
fn.call(obj, 1, 2) // {name: 'rainn'} 3
```

**apply()方法：**也会**立即调用函数**，但参数形式和call()方法不同，必须以**数组形式**传入。

```javascript
// function.call(thisArg, [参数1, ..., 参数n])
// 必须以数组的方式传递其他参数
// 也可以改变this的指向，其他参数以数组的形式传入
  fn.apply(obj, [1, 2])

// 使用场景：求数组最大值
const arr = [1, 2, 3]
const max = Math.max.apply(Math, arr) // max方法本身只接受(1,2,3)这样的数据
```

**bind()方法：**不会立即调用函数。返回一个新函数（对原函数的拷贝，同时改变了this的指向）。

```javascript
const fun = fn.bind(obj) // 返回一个改变了this指向的新函数
fun()
```

```javascript
btn.addEventListener('click', function () {
  this.disabled = true
  setTimeout(function () {
    this.disabled = false
  }.bind(this), 2000) // 这里的this指向的是btn
})
```

#### 防抖 debounce

单位时间内频繁触发某事件，但**只执行最后一次**；**前面的频繁触发都不作数**。（类比回城技能）

使用场景包括：搜索框搜索输入，只需用户最后一次输入完，再发送请求；手机号，邮箱验证输入检测……

e.g. 鼠标划过（mousemove）div块后，内部数字增加1。如果不防抖，那么哪怕移动一像素，数字也会增加。通过防抖，使多次划动都只算1次（就是最后一次停止了才算），并在最后一次划动停止200ms后才计数。

**lodash库实现debounce：**

```javascript
function mouseMove() {
  box.innerHTML = String(++i)
}
```

```javascript
 box.addEventListener('mousemove', _.debounce(mouseMove, 200)) //_.debonuce(fn, waitTime)
```

**手写节流：**setTimeout与闭包。

核心思路：检测是否有正在运行的定时器，如有，就要**销毁**，重新开启一个定时器，在wait秒后执行fn。

```javascript
function debounce(fn, wait) {
  let timer
  // 闭包变量，内部函数引用了外部函数作用域中的变量，这个变量就会“被保留下来”，不会被销毁。
  // 不能写在return function的作用域中，否则每次事件都会重新声明一个timer
  
  return function () {
    // 关键：每次执行前，检测是否有定时器，如有，则清除上一个定时器；
    // 然后在新的定时器中调用函数
    if (timer) clearTimeout(timer)
    timer = setTimeout(function () {
      fn()
    }, wait)
  }
}

box.addEventListener('mousemove', debounce(mouseMove, 200))
// 理解：addEventListener我们正常绑定的是函数名，或者用匿名函数，但这里填入了函数调用
// 这就意味着，box在绑定时就已经执行了这个函数，并将其返回值作为事件处理函数
// 所以，在自定的debounce函数中，我们返回一个函数（不是函数调用）；在mousemove事件后，执行的就是这个返回的函数
```

#### 节流 throttle

单位时间内，频繁触发事件，但**只执行最开始那一次**；**执行期间，任何触发都不会生效，直到该执行完毕**（类比：技能冷却，换子弹等）

使用场景： 鼠标移动mousemove， 页面缩放resize，滚动条scroll等。

e.g. 鼠标经过div块，3s后计数器加一，期间不论怎么移动都不影响。

**lodash库实现throttle**

```javascript
box.addEventListener('mousemove', _.throttle(mouseMove, 3000))
```

**手写节流：** 和防抖结构类似，但**核心正好相反**：如果有正在运行的定时器，那就放任执行，什么也不做；如果没有定时器了，才开启定时器并在wait秒执行代码fn，并在最后
**清空**定时器。

p.s. 注意这里的用词***清空***，因为我们是无法在定时器内部***销毁***一个定时器的，也就是clearTimer不生效，所以，只能*清空*：

```javascript
function throttle(fn, wait) {
  let timer // 闭包变量
  return function () {
    if (!timer) {
      timer = setTimeout(function () {
        fn()
        // 注意：清空定时器不能用clearTimeout！
        // 不能在定时器里面清除定时器，因为定时器还在运作
        // clearTimeout(timer)
        timer = null
      }, wait)
    }
  }
}
box.addEventListener('mousemove', throttle(mouseMove, 3000))
```

#### 综合案例：视频播放位置记忆，节流优化性能

- 学习两个媒体事件：`timeupdate` & `loadeddata`

​    *p.s. 如果是L0写法，前面都要加`on`，如`video.ontimeupdate = function () {...} `*

​    `timeupdate`: 当视频/音频（进度条等）发生变化，执行函数；

​    `loadeddata`: 事件在媒体当前播放位置的视频帧（通常是第一帧）加载完成后触发。

- video属性：`video.currentTime`可读可写，代表当前媒体的进度
- 节流的要点：
    - 我们需要timeupdate事件获得当前视频的currentTime属性值，并存入到本地存储，刷新页面时，在loadeddata事件中，从本地存储取出这个值，重新赋值给currentTime；
    - 然而，timeupdate的频次较高，我们只需要1s执行一次进度记录就可以了，所以，采用节流效果防止重复触发。

```javascript
const video = document.querySelector('video')

// 使用lodash进行节流（只需要1s记录一次就可以了）
function recordVideoTime() {
  // 存入本地存储
  localStorage.setItem('currentTime', String(video.currentTime))
}

video.addEventListener('timeupdate', _.throttle(recordVideoTime, 1000))

video.addEventListener('loadeddata', () => {
  video.currentTime = Number(localStorage.getItem('currentTime'))
})
```

### Apr 24th, Thu, Day 35

> We've made so far. Yet we can't stop by this far.

#### 两种编程思想

1. **面向过程**：按照分析好了的步骤依次解决问题。性能比面向对象高。

2. **面向对象**：以对象功能来划分问题而不是步骤。

   每一个对象都是功能中心，具有明确分工。

   非常灵活、代码可复用、易维护和开发、适用于多人合作的大型项目。

   包括**三大特性**：**封装，继承，多态**

#### 构造函数

构造函数体现了面向对象的封装特性；创建的对象彼此独立，互不影响。

但是，存在**浪费内存**的问题（比如，每new一个对象，其中的函数也会开辟、占用一份内存，即使这两个函数表现起来是一致的）。

为了解决这一问题，引出**「原型」**。

#### 原型对象 prototype

构造函数通过**原型**分配的函数是所有对象共享的；每一个构造函数都有一个`prototype`对象（通过`dir`可以看到是`Object`
），指向另一个对象，也称为**原型对象**；

**prototype可以挂载函数**，故可以将不变的方法直接定义在prototype对象上，然后所有对象的实例就可以共享这些方法。

**p.s. 构造函数和原型对象中的this都指向「实例化的对象」**

```javascript
// 相同属性定义在构造函数中
function Student(name, age) {
  this.name = name
  this.age = age
  this.pointer = this
}

// 相同方法定义在原型对象中
Student.prototype.sing = function () {
  console.log('Singing~')
  console.log(this)
}

const rainn = new Student('rainn', 21)
const charlotte = new Student('charlotte', 20)

console.log(rainn.sing === charlotte.sing) // true

// this指向实例对象
console.log(rainn.pointer) // 指向rainn对象
console.log(charlotte.pointer) // 指向charlotte对象
rainn.sing() // log结果为rainn对象
charlotte.sing() // log结果为charlotte对象
```

**可以自定义方法**

```javascript
// 自定义max方法，求数组最大值
Array.prototype.max = function () {
  return (Math.max(...this)) // 直接用this指向调用的数组
}
console.log(arr.max())

// 自定义sum方法，求数组元素之和
Array.prototype.sum = function () {
  return this.reduce((prev, current) => prev + current, 0)
}
console.log(arr.sum())
```

#### 原型对象中的 constructor属性

每个`prototype`中都有一个`constructor`属性，指向自己的构造函数。

```javascript
function Student () {}
console.log(Student.prototype.constructor === Student) // true
```

使用场景：需要为prototype添加多个方法，采用了对象赋值的形式。这会导致原prototype中的内容被覆盖，constructor属性丢失。故而，在对象赋值的过程中，显式声明（赋值）constructor。

```javascript
console.log(Student.prototype) // 有constructor
// 采用对象赋值的形式为prototype添加方法
Student.prototype = { 
  constructor: Student, // 如果不加这一句，后面输出就无法查看到constructor
  sing: function () {
    console.log('sing')
  },
  dance: function () {
    console.log('dance')
  }
}
console.log(Student.prototype) // 既保留了constructor，又追加了sing和dance方法
```

#### 对象原型 \__proto__  或  [[prototype]]

每个对象都会有一个属性\__proto__ ，称为对象原型，指向构造函数的prototype。这就是实例对象能够使用prototype中方法的原因。

\__proto__是JS的非标准属性，只读；在浏览器中显示为[[prototype]]，两种方式的意义相同。

```javascript
const rainn = new Student()
console.log(rainn.__proto__ === Student.prototype) // true
console.log(rainn.__proto__.constructor === Student) // true
```

#### 原型继承

抽取共同属性称为一个公共的构造函数（父类），新的构造函数（子类）通过prototype继承其中的属性。

注意：继承后需要重新为prototype.constructor赋值，令其指回构造函数

*p.s. 可以按照Java中类的思想理解*

```javascript
// 父类
function Human() {
  this.eyes = 2
  this.head = 1
}

// 子类
function Student() {
  this.school = 'GDUFS'
}
function Worker() {
  this.company = 'Apple'
}

// 继承
Student.prototype = new Human()
Student.prototype.constructor = Student // 也要记得重新声明constructor
const Rainn = new Student()

Worker.prototype = new Human()
Worker.prototype.constructor = Worker
const Charlotte = new Worker()

Worker.prototype.salary = function () { // 添加新方法
  console.log('发工资')
}
console.log(Charlotte) // 有新方法
console.log(Rainn) // 不受影响
```

#### 原型链

> 梳理清楚**构造函数**，**实例对象**与**原型对象**之间的关联。

基于prototype的继承使得不同构造函数的原型对象关联在一起，且这种关联的关系是一种链状结构。将原型对象的链状结构关系称为原型链。

**原理：原型对象prototype本身也是个对象，是对象就有\__proto__**

*p.s. 最大的基类是Object。万物皆对象。*

```javascript
function Person () {}

// 只要是对象，就有__proto__，指向构造函数的prototype
console.log(Person.prototype.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__ === null) // true 顶级对象，无法再向上寻找 

// 只要是原型对象，就有constructor，指回构造函数
console.log(Person.prototype.constructor === Person) // true
console.log(Object.prototype.constructor === Object) // true
```

**原型链-查找规则**：访问一个对象的属性/方法，先看看这个对象自身有没有；如果没有，就沿着\__
proto__所指向的prototype上寻找；直到顶级构造函数Object的prototype；如果依然没有，就返回null。

意义：为对象成员的查找机制提供一个方向或者说路线。

**instanceof** 运算符：检测构造函数的prototype属性是否出现在某个实例对象的原型链上；

简单理解：**对象是否属于某个构造函数**。

```javascript
const rainn = new Person()
console.log(rainn instanceof Person) // true
console.log(rainn instanceof Object) // true
console.log(rainn instanceof Array) // false
console.log([''] instanceof Array) // true
console.log(Array instanceof Object) // true
```

#### 综合案例：点击按钮，得到弹窗

> 要求使用面向对象的思路完成

核心：封装一个模态框Modal（公共类），存入属性（一个DOM元素，也就是弹窗）；为modal的prototype添加方法：open()和close()
。当点击按钮时，添加click事件，回调函数中执行new Moal().open()即可。

**公共类**（构造函数），参数包括title和message（默认空），创建属性modalBox，赋值一个DOM元素；随后，为其添加类名和innerHTML，完成初步内容写入。

```javascript
this.modalBox = document.createElement('div') // 为modalBox属性 赋值 一个DOM元素
```

**open()方法**：向页面（body）添加该DOM元素即可；但要留意一个小bug，频繁点击按钮，页面会反复叠加该盒子；所以，在open()
方法中，在添加DOM元素之前，要先检测是否已经有该元素了，如有，就要移除后才添加；本案例采用逻辑中断的方式完成：

```javascript
const existedBox = document.querySelector('.modal')
existedBox && existedBox.remove() // 如果没有，则不执行remove，往下继续；如果有，就移除后再继续

document.body.append(this.modalBox)
```

**close()方法：**在prototype添加close()方法，使用**remove()方法**移除自身。注意点：因为先打开过才能关闭，所以在open()
方法中追加关闭按钮的点击事件，由**里面的回调函数执行close()方法**。

### Apr 23rd, Wed, Day 34

> Make every second worth it.

#### 创建对象的三种方式

1. 字面量：`cosnt obj = {name: 'rainn'}`
2. new 关键字：`construction obj = new Object({name: 'rainn'})`
3. **构造函数：**
    1. 是一种特殊的函数，用来初始化对象、快速创建多个类似的对象； *类似于Java中的类*；
    2. 约定：函数命名以大写字母开头；并且只能由new关键字执行；
    3. 构造函数内部不写return（写了也无效）；其返回值就是新创建的对象。
    4. 实例化过程中，new关键字执行之后，经过以下四步：
        1. 立即创造一个新的空对象；
        2. 构造函数中的this指向这个新对象；
        3. 执行构造函数的代码，修改this，添加属性；
        4. 返回对象。

```javascript
function Student(name, age, gender) {
  this.name = name
  this.age = age
  this.gender = gender
  this.sayHi = function () {
    console.log('Singing.')
  }
}

// 实例化
console.log(new Student('rainn', '21', 'male'))
```

#### 实例成员 & 静态成员

1. **实例成员**

实例成员即「实例对象」中的属性和方法（实例属性、实例方法）。

为构造函数传入不同的参数，创建结构相同但值不同的对象；实例对象彼此互不影响。

```javascript
function Stu(name) {
  this.name = name
}

const rainn = new Stu('rainn')
const stelle = new Stu('stelle')

rainn.name = 'Rainn' // 实例属性
rainn.sayHi = () => console.log('Hi') // 实例方法
```

2. **静态成员**

「构造函数」中的属性和方法就是静态成员。

只能通过构造函数访问，例如`Math.PI`，`Math.random()`；静态方法中的`this`指向构造函数。

```javascript
Stu.school = 'GDUFS' // 静态属性
Stu.sayHi = function () { // 静态方法
  console.log(this)
}
Stu.sayHi() // 指向Stu函数
```

#### 基本包装类型

简单的数据类型（如字符串）也有自己的属性和方法，这实际上是因为JS在底层自动进行了包装；字符串、数值、布尔等基本类型都有专门的构造函数，称为包装类型。

``````javascript
const str = 'rainn'
console.log(str.length)

// 实际上相当于
const string = new String('rainn')
``````

#### 内置构造函数 Object系列

- `Object.keys(obj)`：获取obj对象的所有键（属性），返回一个**数组**；
- `Object.values(obj)`：获取obj对象的所有值，同样返回一个**数组**；
- `Object.assign(target, source)`：拷贝一个源对象到目标对象之中；

``````javascript
const newObj = {}
Object.assign(newObj, obj)
Object.assign(newObj, {school: 'GDUFS'}) // 追加
``````

#### 内置构造函数 Array系列

已经学习过的一些**实例方法**：

1. **forEach**方法：遍历数组：

```javascript
arr.forEach(function (current) { ...
}) 
```

2. **filter**方法：遍历并做条件过滤，将符合条件的元素加入到新数组并返回该数组：

```javascript
arr.filter(function (current) {...
})
```

3. **map**方法：遍历与迭代处理，返回处理后的新数组：

```javascript
arr.map(function (current) {...})
```

**新方法：**

4. **reduce**方法：返回累计处理的结果，常用于求和操作等;
    1. 参数：回调函数，起始值。
    2. 回调函数中，至少包含prev和current两个值；
    3. 如果没有起始值，则默认以数组第一个元素作为起始值。 p.s. 注意一个细节：第一个元素未必是个数值，所以建议至少填入起始值0。
    4. 注意：每次循环（包括首次），**当前元素**的位置都在current上；prev可以理解为**累计值**，
       每次循环后，都会把当前return结果作为prev传递给下一次循环。

``````javascript
const total = arr.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue
  })
const tot = arr.reduce((prev, current) => prev + current, 10)

// 对象数组：prev值不要采用prev.salary，因为首次循环之后的返回值就是纯数值了，而不是对象。
const totalSalary = array.reduce((prev, current) => prev + current.salary, 0)
``````

5. **join**方法：将数组元素拼接成一个字符串，返回字符串。参数即拼接方式，默认逗号。

```javascript
console.log(arr.join('/'))
console.log(typeof arr.join()) // string
```

6. **find方法**：返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。

```javascript
// find(callbackFn(element, index, array), thisArg)
const apple = phones.find(value => value.name === 'Apple')
```

7. **every**方法：测试一个数组内的**所有元素**是否能通过指定函数的测试。返回一个布尔值。

```javascript
console.log(numbers.every((value) => value >= 1)) // true
```

8. **some**方法：和every接近，但只要有一个元素通过测试，就能返回true。

**静态方法from：将伪数组转换为真数组**：

9. **Array.from(伪数组序列)**：

```javascript
const list = document.querySelectorAll('ul li')
console.log(list) // NodeList
const realList = Array.from(list)
console.log(realList)
```

#### 内置构造函数 String系列

1. **split**方法：将字符串拆分成数组，参数即分隔符。和数组join方法反过来。

```javascript
const str = '2025-4-24'
const arr = str1.split('-')
console.log(arr)
```

2. **substring**方法：截取子字符串。

```javascript
// str.substring(indexStart[, indexEnd]) 省略indexEnd，则默认截取到字符串的最后.
// 包含indexStart，不包含indexEnd
const longStr = '0123456789'
const subStr1 = longStr.substring(0)
const subStr2 = longStr.substring(8)
const subStr3 = longStr.substring(5, 9) // 5678
```

3. **startsWith**方法：判断字符串是否以给定的子字符串开头，返回一个布尔值。（同步记住**endsWith**方法）

```javascript
const str = 'Grain,Stelle,Rainn'
// startsWith(searchString[, position])判断当前字符串是否以另外一个给定的子字符串开头，返回布尔值
console.log(str.startsWith('Grain')) // t
console.log(str.startsWith('Rainn')) // f
console.log(str.startsWith('Rainn', 13)) // true
```

4. **includes**方法：判断是否包含某子串：

```javascript
// includes(searchString[, position]) 区分大小写
console.log(str.includes('Rainn')) // true
console.log(str.includes('rainn')) // false
```

#### 内置构造函数 Number系列

1. **toFixed**方法：保留几位小数，注意四舍五入：

```javascript
const number = 10.919
console.log(number.toFixed()) // 11 -- 四舍五入
console.log(number.toFixed(2)) // 10.92
```

2. **toString**方法：转化为字符串，和字符串**String()**方法一致：

```javascript
console.log(typeof String(number))
console.log(typeof number.toString())
```

#### 购物车渲染案例

**核心：使用数组map方法遍历数组，使用对象解构来简化代码；最后的价格统计使用数组reduce方法计算**

1. 数据数组中，每个元素都是对象，所以**map后解构**来获取对象中的各个属性；

```javascript
document.querySelector('.list').innerHTML = goodsList.map((item) => {
  const {name, price, picture, count, spec, gift} = item
 ...
```

2. `spec`比较特殊，**本身是个对象，且内容不固定**，所以需要`Object.values(spec)`来获取其中的**所有值**，然后渲染即可；

```javascript
...`<p class="spec">${Object.values(spec).join('/')}</p>`...
```

2. `gift`也比较特殊，不是每个数组元素（对象）都有；通过条件判断来确定是否获取，否则，将其置为**空字符串**
   （解构时，如果没获取到，就是undefined）

```javascript
const str = gift ? gift.split(',').map(current => `<span class="tag">【赠品】${current}</span>`).join('') : ''
// 然后在后面的map return中将str写入即可
```

4. 计算总价时，可以注意一个细节，即**先增大再做除法**，可以**减少精度误差**

```javascript
const total = goodsList.reduce((prev, current) => ((prev + current.price * current.count) * 100) / 100, 0)
```

### Apr 22nd, Tue, Day 33

> 那些年没敢追的女孩，那些年没能敲下的代码……回想起来也有遗憾；但不必遗憾，现在，就努力去追赶，用自己的双手与智慧去成就梦想，遇见更好的自己！

#### 作用域和作用域链

> ```
> 局部作用域 和 全局作用域
> 
> 局部作用域又分函数作用域和块级作用域
> 块级作用域，使用{}包含的代码块，在其内部声明的变量几乎不能被外面访问
> let 和 const 默认有块作用域，var没有块作用域
> 
> 全局作用域，写在script标签和.js文件中的代码
> 函数中未使用任何关键字生命的比阿亮为全局变量，不推荐
> 尽可能少的声明全局变量，防止变量被污染
> 
> 
> 作用域链
> 本质：底层的「变量查找机制」
> 函数被执行，优先查找当前函数作用域中的变量
> 当前作用域查找不到则「依次、逐级」查找父级作用域，直到全局作用域
> p.s. 子作用域能访问父作用域，父作用域无法访问子作用域
> ```

#### JS垃圾回收机制

**内存生命周期**

1. **内存分配**（声明变量）、**内存使用**（读写）、**内存回收**（使用完毕，由垃圾回收器处理）

2. 全局变量在关闭页面时回收（一般），局部变量在使用完毕后自动被回收；

**垃圾回收机制的两种办法**

1. **引用计数算法**。核心：定义“内存不再使用”。原理是：多一次引用，次数加1；减少一次引用，次数-1；若引用为0，回收堆空间。但存在一个缺陷，若存在相互引用，则引用永远不会为0，无法回收而造成内存泄露。
2. **标记清除法**。核心：定时从根部出发扫描对象，如果是可达（reachable）则保留，否则被标记为不再使用，回收内存。

#### 闭包

一个函数对周围状态的引用捆绑在一起，内部函数可以访问其外层函数的作用域。简单理解：**闭包 = 内层函数 + 外层函数的变量**。

闭包的应用：使数据私有，同时让外部也可以访问函数内部的变量。

```javascript
// 将counter闭包
function count() {
  let counter = 0

  function f() {
    counter++
    console.log(`函数被调用了${counter}次`)
  }

  return f
}

const ff = count()
// 当调用ff()时，counter是私有的，即使修改外部的counter，也不会影响到闭包中的counter
// 同时，ff引用count里面的counter，所以局部变量不会被垃圾机制回收，可能会造成内存泄露（潜在风险）
```

#### 变量提升和函数提升

1. var声明的变量，会存在函数提升现象（先使用再声明）。原理是：代码在执行之前，预解析，把所有var声明的变量提升到「当前」作用域的最前面。p.s.
   提升的是声明，但赋值不会提升。
2. let / const 声明的变量不存在函数提升

```javascript
console.log(num) // undefined
var num = 10
console.log(num) // 10
```

3. 函数的声明接近，之所以可以先调用再声明，也是因为预解析而将函数的声明提前到了「当前作用域」的最前面。同样地，提升的只是函数的声明，不提升调用。

#### 函数动态参数 arguments

**本质：伪数组，并且只能存在于函数中**。可以接受多个参数。

```javascript
function getSum() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

getSum(2, 3) // Arguments(2)
getSum(1, 2, 3, 4, 5, 6, 7) // Arguments(7)
```

#### 剩余参数 ...args

**本质：真数组，也能接受多个参数，同样只能存在于函数中**。开发中推荐使用。

```javascript
function getSum(a, b, ...arr) {
  let sum = 0
  sum += a + b
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}

console.log(getSum(2, 3)) // 5
console.log(getSum(2, 3, 4, 5, 6)) // 20
```

#### 展开运算符

可以将数组展开；注意区分剩余参数。典型应用场景包括数组求最值、合并数组等：

```javascript
const arr1 = [1, 2, 3]
console.log(Math.max(...arr1)) // 3 // Math.max()本身不接受数组参数
```

```javascript
const arr2 = [4, 5, 6]
const arr3 = [...arr1, ...arr2]
```

#### 箭头函数

适用于那些需要匿名函数的地方；不绑定this；属于表达式函数，不存在变量提升。

p.s. 箭头函数没有动态参数，只有剩余参数...args

```javascript
const fun = () => {
  console.log(123)
}
```

```javascript
const f = (x, y) => {
  console.log(x, y)
}
```

```javascript
// 简化写法：只有一个形参，可以省略小括号；函数执行体只有一行代码，可以省略大括号
const f1 = x => console.log(x)

// 一行return可以省略return
const f2 = (x, y) => x + y
```

```javascript
// 箭头函数可以直接返回一个对象
// 用小括号是因为函数体的花括号和对象的花括号冲突
const f3 = uname => ({uname: uname})
console.log(f3('Rainn')) // {uname: 'Rainn'}
```

关于箭头函数中的this，简单来说：箭头函数本身不生成this；如果在内部使用了this关键字，它会沿着「作用域链」在上一级寻找this。e.g.

```javascript
const obj = {
  name: 'Rainn',
  sayHi: function () {
    console.log(this)
  }
}
obj.sayHi() // obj, sayHi函数自带this

const obj1 = {
  name: 'Rainn',
  sayHi: () => console.log(this)
}
obj1.sayHi() // window，sayHi函数没有this，且上一级作用域直接到了window

const obj2 = {
  name: 'Rainn',
  sayHi: function () {
    const fn = () => {
      console.log(this)
    }
    fn()
  }
}
obj2.sayHi() // obj, fn上一级作用域（obj的sayHi函数中）有this，所以按作用域链理解即可
```

#### 数组解构

将数组元素值「快速、批量」赋值给变量的简洁语法。

```javascript
const [max, min, avg] = [100, 60, 80]
// 然后，直接用这个变量
console.log(max)
```

可以方便地交换两个变量：

```javascript
;[b, a] = [a, b] // 此处的分号必须要加
```

p.s. 关于分号：

```javascript
// 分号拓展：前面有代码，后面用数组开头的，用分号隔开；当然，立即执行函数开头也要加
;[1, 2, 3].map(function (item) { // 不加分号就报错
  console.log(item)
})
```

一些特殊情况：

```javascript
// 1.单元值少而变量多
const [i, j, k, l] = [1, 2, 3]
console.log(i, j, k, l) // 1, 2, 3, undefined

// 2.变量少而单元值多
const [x, y] = [1, 2, 3]
console.log(x, y) // 1, 2

// 3.利用「剩余参数」解决变量少的问题
const [v, w, ...args] = [1, 2, 3, 4, 5]
console.log(v, w, args) // 1, 2, [3, 4, 5]

// 4.防止undefined传递
const [f = 0, g = 0] = [1]
console.log(f, g) // 1, 0

// 5.按需导入赋值（即有意地忽视某些单元值）（重）
const [m, n, , o] = [1, 2, 3, 4]
console.log(m, n, o) // 1, 2, 4

// 6. 多维数组解构
const [r, t, p] = [1, 2, [3, 4]]
console.log(p[0]) // 3
const [q, e, [h, s]] = [1, 2, [3, 4]]
console.log(h, s) // 3 ,4
```

#### 对象解构

和数组解构接近，但有几个注意点：

1. **变量名要和对象属性/方法相同**，因为数组是**无序**的，需要一致才能赋值；否则，变量名输出undefined；
2. 解构中的变量名不要与其他、外部的变量名冲突。

```javascript
const obj = {
  name: 'rainn',
  age: 18,
  sayHi: function () {
    console.log('Hi')
  }
}

const {name, age, sayHi} = obj
```

```javascript
// 对象解构的变量名的重新改名，语法：旧变量名: 新变量名
const {name: username} = obj
console.log(username) // rainn
```

对于一些嵌套关系，如对象数组，对象嵌套对象，甚至嵌套对象数组，只需记住：**解构体的结构要和被解构体相同**，例如数组被解构，那就
`const [...] = [...]`；对象被解构，就是`const {...} = {...}`；内部的结构（按需求）保持一致即可。一些例子:

```javascript
// 2.解构对象数组
const stu = [
  {
    name: 'Charlotte',
    gender: 'female',
  },
  {
    name: 'Rainn',
    gender: 'male',
  }
]
const [{name: name1, gender: gender1}, {name: name2, gender: gender2}] = stu // 解构体是数组
console.log(name1, gender1, name2, gender2) // Charlotte female Rainn male
```

```javascript
// 3.对象嵌套对象
const pig = {
  name: '佩奇',
  family: {
    mother: '猪妈妈',
    father: '猪爸爸',
    sister: '乔治',
  },
  age: 6
}
// 在其中说明是哪个对象
const {name: pigName, family: {mother, father, sister}, age: pigAge} = pig // 解构体是对象
```

```javascript
// 对象嵌套对象，并内嵌在数组
const pigs = [
  {
    name: '佩奇',
    family: {
      mother: '猪妈妈',
      father: '猪爸爸',
      sister: '乔治',
    },
    age: 6
  }
]

// 解构体是数组
const [{name: theName, family: {mother: mo, father: fa, sister: sis}, age: theAge}] = pigs
console.log(theName, mo, fa, sis, theAge) // 佩奇 猪妈妈 猪爸爸 乔治 6
```

#### 数组的forEach循环

和map方法类型，但是只遍历，不迭代，也没有返回值。

```javascript
// array.forEach(function(当前数组元素，当前元素索引号) {...} )
// 当前数组元素必写，索引号可选
const arr = ['r', 'g', 'b']
arr.forEach((item, index) => console.log(item, index))
```

#### 数组的filter方法

筛选数组符合条件的元素，并加入到新数组中，返回这个数组。

``````javascript
const newArr = arr.filter(function(currentValue, index, array) {...} )
const newArr = arr.filter(currentValue => currentValue > 10)
``````

#### 综合案例：渲染商品

能够根据不同价格渲染不同的商品。

1. 封装渲染函数：使用数组forEach循环，采用「字符串拼接」的方式，将每一个商品的div块（即HTML内容）写进一个空字串。最后，将这个字符串通过innerHTML写入网页中。
2. 价格筛选：核心：使用数组filter筛选，将符合条件的元素返回到一个新数组，然后调用渲染函数渲染该数组即可。

``````javascript
// 采用click事件委托；并采用对象解构简化代码
const {tagName, dataset} = ev.target
let arr = goodsList // 默认
  if (tagName === 'A') {
    if (dataset.index === '1') {
      arr = goodsList.filter(item => item.price < 100)
    } else if {...} else {...}
render(arr)
``````

### Apr 21st, Mon, Day 32

> 我想，变得更强！去成为一个出色的 **「工程师」**！

今日主要是做**两个综合案例**：

#### APIs6-综合案例：表单验证相关知识：

- **发送短信验证码**：

  `click`事件，`间歇函数`与`innerHTML`修改内容。重点：**节流阀**，通过一个`flag`信号量来避免反复点击与触发间歇函数；

- **表单验证**：

  各控件添加`change`事件；使用正则表达式`reg.test(ev.value)`验证输入内容；封装验证函数`verify`，使各个控件可以复用；函数返回
  `true/false`，方便最后`submit`时再次统一验证；

  最后的二次密码验证，与`pwd.value`匹配即可；

- **同意协议**：`classList.toggle`添加类名即可；

- **提交**：针对表单各个控件再次调用验证函数（取得布尔值），以及验证同意小按钮有没有新增的类名（代表已经选中）即可；

- **登录页之tab栏切换效果**：

  添加`click`事件与**事件委托**；**排他思想**添加`active`类；对于tabPane中的内容，采用**先全部获取并隐藏**的方式，再根据*
  *自定义属性data-id**显示对应盒子；

- **登录页之点击登录**：

  用户协议使用`checked`属性确认；点击登录后，使用`localStorage.setItem()`将用户名存入到**本地存储**（**简单字符串不需要JSON化
  **）；使用`location.href`跳转到主页；

  *p.s. 这里不重复做表单验证相关功能了*

- **主页之显示用户名**：封装为`render`函数；检查**本地存储**相应字段，如有就用`innerHTML`填入相关字段，并设置退出登录（
  `click事件`，`confirm`确认，`localStorage.removeItem()`删除数据，来模拟退出）；若无，则分别设置登录和注册链接即可；

#### APIs7-综合案例：图片的放大镜效果：

- **头部显隐**：依旧是比较`scrollTop`与指定元素的`offsetTop`来控制`display: none / block`；注意以下几点：

    - **是给window添加scroll事件**；

    - `const distance`写在事件里面（实时获取）；

    - `offsetTop`本身是个定值（多数情况），`scrollTop`动态变化；

   ```javascript
   sticky.style.top = distance >= xtx_wrapper.offsetTop ? '0' : '-80px'
   ```

- **图片切换模块**：和APIs6的登录页tab切换原理相近，注意点：

    - 使用`mouseover`而不是`mouseenter`：**前者才可以冒泡**，进而实现**事件委托**；

    - `ev.target.tagName`选择的是IMG，但是**排他思想**添加`active`类的时候，是给它父级（`li`标签，通过`parentNode`获取）添加：

   ```javascript
   ev.target.parentNode.classList.add('active') // IMG的上一级才是LI
   ```

    - 修改中等盒子的图片，修改的是其子级中的`img`；`middle`类本身没有`src`属性：

   ```javascript
   middle.querySelector('img').src = `${ev.target.src}` // middle 本身没有src，是middle里面的子级img的图片src
   ```

- **放大镜模块**：

    - 使用`mouseenter / mouseleave`事件，当鼠标经过中等盒子，大盒子出现 / 隐藏；大盒子也添加该事件；

    - 中等盒子黑色遮罩layer的显/隐：`mouseenter / mouseleave` 事件控制`display`;

    - **layer的移动计算：**

        1. 整体采用`mousemove`事件，通过`console.log(ev)`可以得到 `mouseEvent`；符合移动即触发的效果；

        2. 我们需要分别获取**鼠标的坐标**和**中等盒子的坐标**，才能确定layer在中等盒子中的坐标：

           ev中，有`PageX`和`PageY`两个属性，就是鼠标在页面的横纵坐标（相当于left值和top值）；

           而中等盒子的坐标，采用`getBoundingClientRect()`，其中的`x`和`y`就是我们需要的、**该盒子基于视口的坐标**；而不用
           `offsetLeft / offsetTop`，是因为担心受父级盒子的**定位**影响。

        3. 如此，通过`distance = Page - getBoundingClientRect()`，就能初步计算layer需要在middle中移动的距离；再令
           `layer.style.top(left) = distanceY(distanceX) + 'px'`，就实现了在mousemove事件中，layer随鼠标变化而移动的效果。

        4. 但存在一个问题，当页面向上滚动，y值会变小，导致distanceY偏大；看起来就是layer跑到了鼠标下方。

        5. 所以，还要减去html的scrollTop卷积部分来修正这个问题：

        ```javascript
        const distanceY = ev.pageY - middle.getBoundingClientRect().y -document.documentElement.scrollTop
        ```

        6. **重点难点**：需要更精确地控制移动范围，采用条件判断，以分段函数理解就可以

        ```javascript
        // 定义move表示遮罩的实际移动坐标
        // 在Distance小于遮罩宽度一半时，遮罩不移动；move保持为0；
        // 在Distance处在[middle盒子宽度-遮罩宽度一半, middle盒子宽度]这个区间，遮罩不移动；move在middle宽-遮罩宽处停止；
        // 在Distance处于[遮罩宽度一半, middle盒子宽度-遮罩宽度一半]区间内，此时遮罩开始移动，；
        // 为平衡第一点的影响，move在移动过程应该是Distance - 遮罩半宽
        // 通过调整实现了“鼠标在黑色遮罩居中”的效果
        
        // 定义黑色遮罩的实际跟随坐标；通过offsetWidth获取元素自身宽高
        let moveX = 0, moveY = 0
        const halfLayerWidth = layer.offsetWidth / 2
        const middleWidth = middle.offsetWidth
        if (distanceX < halfLayerWidth) {
           moveX = 0
        } else if (distanceX < middleWidth && distanceX > (middleWidth - halfLayerWidth)) {
           moveX = (middleWidth - halfLayerWidth) - halfLayerWidth
        } else {
           moveX = distanceX - halfLayerWidth // 后面两次-halfLayerWidth是为抵消鼠标实际位置（d）与遮罩开始移动的位置的差距（m）
         }
        layer.style.left = moveX + 'px' // top同理
        ```

        7. 最后，修改large盒子中的背景图片，鉴于large中的图片恰好是middle缩放的2倍，通过更新bg-position，同步移动2倍的moveX或moveY，即可实现效果：

        ```javascript
        large.style.backgroundPositionX = -2 * moveX + 'px'
        large.style.backgroundPositionY = -2 * moveY + 'px'
        ```

### Apr 20th, Sun, Day 31

- 调整与归位
- 今天一大早就被叫起来去开了社区的「中期复盘」，感觉还是蛮快的；一想到社区结束的时间也差不多就是我准备简历的时间，就更加觉得时间紧迫；
- 不知不觉，CodeSprint40也已经一个月了，目前学完了H5C3，JS还差大约一周；后面还有框架前置课，Vue2/3课；
    - 中间不断的意外与调整，也使得最初的目标由五月初，变到五月中上旬，现在，估计要到五月中旬了（14～17号这样）；
    - 即使过完这些课程，也至少还要花几天准备面试题；但愿实习生的面试题不会特别夸张吧，但准备肯定是少不了；
    - 下个月，也就是明天开始，除了推进学习，及时复习也得包含在每天的学习中了，一个月学了不少东西了，但不复习，学得有多快，忘得就有多快；
- 今天把一些零零散散的东西也收拾好了，包括忙得没时间做的记账，社区的会议总结，以及个人时间的调整；
- 我觉得，还可以再狠一些，而这还远没有要拼死的程度，只是要抛掉更多东西罢了，要抵制一些诱惑，以此来换取更多的时间；我认为这是可行的，我也打算这么做；
- 不论如何，五月中旬这样，必须能够投出简历，随时准备面试，6月必须开始上班；
- 今天就这样吧，等会儿去跑几圈，晚上听听音乐，浅浅玩一下游戏放松放松，然后好好休息，明天鼓足干劲，继续努力

### Apr 19th, Sat, Day 30

- 「暂缓」
- 本周末依然是被各种事物拆碎的状态，上午写了社区的每日总结，下午学习了2个小时不到的JS视频课，主要是**正则表达式**
  相关的内容，就不在这里写了，学完了视频课的那一个Day再一起写。
- 晚上参加了社区的实践活动-生死99秒，第一次竞选了队长。虽然最后没有胜利，但也算出了一把风头，要自信，要有气势；**要纯粹，要相信。
  **

### Apr 18th, Fri, Day 29

- 「暂缓」
- 早上学院召开实习动员大会，介绍了一些HR在面试时的感觉感受，也有一位刚毕业的师姐分享就业感想。总的来说还是多学多做，随时准备，保持进步，大胆投简历，学习更多技能吧！
- 这天在学习上没有推进太多，下午补了Day 28的Study Diary，就没什么时间了；晚上参加了社区的理论课。争取到了一次上台发言的机会，还是很不错的。

### Apr 17th, Thu, Day 28

- 「推进」
- 今日有效学习时间大约4～5小时，晚上参加了社区活动，此日志是在18号写的
- 主要知识点总结：
    - **BOM与window对象** ：BOM即浏览器对象模型，`window`是其中最大的对象，其子级包括
      `document | location | navigator | history | screen`
        - `window`对象是JS中的顶级对象、全局对象；`window`对象下的属性和方法调用时可以省略`window`
    - 延时函数：`setTimeout(function() {...}, 1000)` 和间歇函数相近，不同点在于，延时函数的意义是「多久后」开始，所以只会执行一次
        - 清除延时函数：`clearTimeout(timer)`
    - 理论知识：JS的单线程，同步与异步任务，事件循环
        - JS是单线程的；但HTML5 Web Worker标准允许JS脚本创建多个线程
        - 同步：程序执行顺序与任务排列顺序一致；异步则是可以在做一件事的同时去做另一件事；本质：流水线上各个流程的执行顺序不同
        - 同步任务：都在主线程执行，形成执行栈；
        - **异步任务**，通过回调函数实现，被添加到任务队列中，包括：
            - 普通事件（click、resize），资源加载（load、error），定时器（setInterval、setTimeout）等
        - 事件循环机制：1.先执行执行栈的同步任务；2.异步任务放到任务队列（先放入Web
          API或者说浏览器API，处理后再加入到任务队列）3.执行栈同步任务处理完毕，系统读取任务队列的异步任务，按顺序执行
    - **location对象（window.location）**，介绍其中四个属性/方法：
        - `href`: 页面地址，可以修改以实现页面跳转等功能 e.g. `location.href = https://apple.com.cn`
        - `search`: 提交表单后，获取表单信息问号后的内容，要求表单标签都有`name`属性 e.g.
          `location.search -> '?username=11&pwd=11'`
        - `hash`: 获取#后的地址 e.g.` location.hash -> '#/friend'`
        - `reload`: 刷新页面，可带参数ture表示强制刷新 e.g. `location.reload(true)`
    - **navigator对象** ：获取浏览器的信息 -- 可用于检测是否为移动端设备（安卓/iOS）而进行网页跳转
    - **history对象** ：管理历史记录，控制后退/前进，包括`forward()`,` back()`, `go()`; `go()`带参数，`1`前进，`-1`后退
    - **本地存储localStorage(重点)** ：将数据永久存储在本地，除非手动删除，否则即使页面关闭，数据也存在
        - 特性：同一浏览器多页面/窗口**共享**；以**键值对**形式存储
        - 增加/修改数据：`localStorage.setItem('key', 'value')`；没有key就是增，有key就是覆盖原来的key，也即改。注意：*
          *本地存储只能存储字符串！**
        - 获取数据：`localStorage.getItem('key')`
        - 删除数据：1. 只删除指定key：`localStorage.removeItem('key')`; 2. 全部删除：`localStorage.clear()`
    - 向本地存储存入复杂数据类型：**JSON字符串**
        - 复杂数据类型无法直接存入localStorage e.g. `localStorage.setItem('obj', obj) // [object Object] // 无法正确存入`
        - 需要将**对象、数组**等复杂数据类型转化为**「JSON字符串」**，再存储到本地
        - **语法** ：`JSON.stringify(数据)` e.g. `localStorage.setItem('obj', JSON.stringify(obj)`
        - 此时`typeof localStorage.getItem('obj')`返回`string`，log输出得到 `{"uname":"rainn","age":18,"sex":"male"}`
        - JSON 对象：属性和值有引号，而且引号统一是双引号
        - 此时需要从本地存储中拿出来用，就要反JSON化
        - **语法** ：`JSON.parse(JSON字符串)` e.g.
          `console.log(JSON.parse(localStorage.getItem('obj'))) // {uname: 'rainn', age: 18, sex: 'male'}`
    - 拓展数组的map()和join()方法
        - `map()`，也即映射，遍历数组、处理数据，并且可以**返回新数组**, e.g.
      ```
      const newArr = arr.map(function (ele, index) {
        console.log(ele) // 数组元素
        console.log(index) // 索引号
        return ele + 'Color' // 处理数据并返回新数组
      })
      console.log(newArr) // ['redColor', 'blueColor', 'greenColor']
      ```
        - `join()`，把数组中所有元素拼接起来，并且通过参数可以定义拼接方式，**常用空字符串使所有字符串相接为一个长串**，以及：
      ```
      console.log(newArr.join()) // redColor,blueColor,greenColor 参数为空，逗号分割（默认）
      console.log(newArr.join('')) // redColorblueColorgreenColor 参数为空字符串，则分割消失
      console.log(newArr.join('|')) // redColor|blueColor|greenColor
      ```
- 其他小细节知识点：
    - 立即执行函数，一般用括号封住 e.g. `(function() {...} )() // OK`; 但有时，也可以用`!``+`等符号防止报错（要能看懂别人的代码）
      e.g. `!function(){...} () // 也OK`
    - `sessionStorage`：`和localStorage相近`，差别在于存活周期，`sessionStorag`e在关闭浏览器窗口后就消失
    - `confirm('message')` 方法确认 e.g.` if (confirm('你确定要删除吗？')) { ... }`
    - form表单属性之`autocomplete`：可以设置历史记录自动填充，填入`off`以关闭
    - 对于表单value判空，H5新增了required属性，可以实现基础的表单判空，但空字符串可以跳过这一点，所以JS中可以用trim()方法进一步优化
        - e.g. `if (String(form_items[i].value).trim() === '') {return alert('请填入完整字段')}`
- 综合案例：学生信息表：通过**表单添加学生信息**，并将**信息渲染在页面上**，可以通过**按钮删除**；数据存入**本地存储**
  ，刷新页面不会消失。实现的核心逻辑如下：
    - **本地存储**中，存储的是key名为`data`的字符串，其值在反JSON化后得到的是对象数组（亦即取数据操作，并将对象数组赋值给一个const
      arr变量）
    - **渲染表单环节** ：对于数组中的每一个对象，需要向**tbody中追加一列tr** ，所以：
        - **用map方法遍历arr，将每个对象的各个值拆分给tr中对应的td，并返回一个带有完整tr中html内容的新字符串；将所有这些字符串返回到新数组
          ** -- 最核心
        - 对于新数组，利用数组`join('')`方法将数组每个tr拼接起来（这就得到了完整的，无分割的html内容），再用innerHTML向tbody追加这份内容，渲染完成
    - 而对于**增加信息环节** ，则是对**from添加submit事件**，用`arr.push()`方法，将表单各个控件的value封装成一个对象{...}，填入push参数中，存入到数组
        - 继而存入到本地（记得JSON化），重新调用渲染函数即可。**细节：记得阻止默认提交；非空判断；reset清空表单**
    - 对于最后的**删除信息环节** ，则为tbody添加点击事件（并利用事件委托），利用自定义属性获取索引（自定义属性在渲染表单环节中动态添加），使用数组删除办法删除该数据，更新本地存储并重新渲染即可
    - 这里有一个注意点，使用`arr.splice(Number(e.target.dataset.id), 1)`方法而不能是
      `this.removeChild(this.children[e.target.dataset.id])`
        - 原因是，data-id是固定的，但删除某个元素后，其位置发生了变化，this.children[]的索引改变了，与data-id不能匹配，会出现报错

### Apr 16th, Wed, Day 27

- 「积极思考」
- Web APIs的内容都很新，这几天连续接触新知识，思考的压力其实不小，所以更加要多多复习
- 今日知识点总结：
    - 日期对象：使用 new 关键字
        - 实例化：`const date = new Date() // 获取当前的系统时间`
        - 实例化并指定时间：`const date = new Date('2025-5-1 08:30:00')`
        - 格式化：`new Date().toLocaleString`
        - 日期对象方法：包括但不限于以下例子，注意`getMonth`和`getDay`方法
      ```
      console.log(date.getFullYear()) // 2025 年 数字型
      console.log(date.getMonth() + 1) // 0 ~ 11, +1为实际月份
      console.log(date.getDate()) // 16 号
      console.log(date.getDay() + 1) // 0 ~ 6, +1为实际星期几
      ```
    - 时间戳：现在距离1970年的「毫秒数」，故每个时间都有唯一的时间戳
        - 三种获取方法：`getTime()` -- 必须先实例化 | `+new Date(optional param)` | `Date.now` -- 只能得到当前时间戳
    - DOM结点相关：DOM树中每一个内容都称为节点，包括元素结点，属性结点，内容结点；重点关注元素结点，即标签 p.s. html是根结点
        - 查找结点 -- 从之前的查找元素变为「查找关系」 p.s.两种方式并不冲突
            - 查找父结点：只得到最近一级的「亲父亲」
              ```
              console.log(son.parentNode)  // father
              console.log(son.parentNode.parentNode) // grandfather // 都返回dom对象
              ```
            - 查找子结点：
                - `childNodes`：获得所有子节点、包括文件节点、注释结点（了解）
                - `children`：仅获得所有「元素」结点，并返回一个伪数组，和querySelectorAll相似；且选择的是「亲儿子」
              ```
              const ul = document.querySelector('ul')
              console.log(ul.children)
              ```
            - 查找兄弟结点：`li.nextElementSibling // 下一个兄弟` | `li.previousElementSibling) // 下一个兄弟`
        - **增加结点（重点）** -- 先创建，后追加
            - 创建： `const li = document.createElement('li')`
              `li.innerHTML = 'This is a li' // 使用innerHTML直接向新标签书写更多HTML内容`
            - 追加：
                - `ul.appendChild(li) // 插入到父元素的最后一个子元素`
                - `ul.insertBefore(li, ul.children[0]) // 插入到某个子元素前面，父元素.insertBefore(要插入的元素, 在哪个元素前面)`
                - p.s. `父元素.children`返回的是一个数组，哪怕只有一个元素
        - 克隆结点：`element.cloneNode(boolean) `
            - `true`：克隆时会包含后代节点（深克隆）
            - `false`：克隆时不包含后代节点（浅克隆，只克隆标签，内容不管）（默认）
            - e.g. 克隆后 前插 `ul.insertBefore(ul.children[2].cloneNode(true), ul.children[0])`
        - 删除结点：要删除元素必须通过父元素删除
            - `父元素.removeChild(子元素)` e.g. `ul.removeChild(ul.children[0])`

### Apr 15th, Tue, Day 26

- 「持续推进」
- 今日知识点总结
    - 事件流概念：事件完整执行过程中的流动路径
        - 事件捕获：
            - 从DOM根元素开始去执行对应的事件（外到里）
            - addEventListener传入第三个参数true，表示事件捕获触发
        - 事件冒泡：
            - 一个元素的事件触发，同名事件在祖先元素依次触发
            - addEventListener第三个参数删掉或false，表示冒泡阶段触发（也即默认冒泡）
        - 例如，一个页面中类名father的div嵌套一个类名son的div，在JS中获取对象后，都添加click事件：
            - 事件捕获执行顺序：document - father - son
            - 事件冒泡执行顺序：son - father - document
        - p.s. onclick方法没有捕获，只有冒泡
        - 阻止冒泡：obj.stopPropagation() 本质：组织事件流动传播，在冒泡/捕获阶段都有效。
    - 事件解绑：
        - L0：btn.onclick = null 直接将事件置空
        - L2：btn.removeEventListener('click', fn)  p.s. 匿名函数无法解绑
        - mouseover/mouseout 和 mouseenter/mouseleave 的区别：
            - over/out 组会有冒泡效果，例如内嵌在father中的son，即使没有给son设置事件，鼠标经过son时会认为离开了father；而son并没有事件，又冒泡回来执行father的经过事件
            - 同样的例子，在 enter/leave 组中就不会发生，经不经过son都不会影响
        - 总结对比：
            - L0：同一对象，后者覆盖前者；null覆盖可以解绑；都是冒泡阶段执行
            - L2：注册不会向前覆盖；使用removeEventListener解绑；通过第三个参数决定冒泡
    - 事件委托：减少注册次数，提高程序性能
        - 利用冒泡特点，只需为父元素注册事件，当子元素被触发，就必然冒泡回父元素并执行相应事件
        - 在执行函数中获取点击对象：e.target e就是先前的学到的事件对象 p.s. 可以使用console.dir(e.target)查看对象的各种属性
        - 进一步筛选特定标签：e.target.tagName 例如可能为'A'或'LI'等
    - 阻止默认行为：e.preventDefault() 包括表单中的submit，a标签的跳转
    - 页面加载事件：load 与 DOMContentLoaded
        - 监听「页面」，等待所有资源加载完毕，一般用于window，也可以针对某些资源添加，如图片等
        - window.addEventListener('load', function(e) {...} )
        - 另一种页面加载事件，HTML结构加载完即触发，无需等待样式表、图片等，速度更快
        - document.addEventListener('DOMContentLoaded', function (e) {...} )
    - 页面滚动事件：scroll
        - 两个重要属性：scrollTop 与 scrollLeft，可读可写，数字型，无单位
        - 分别表示“被卷去的头部”和“被卷去的左部”
        - 想知道整个页面被卷去多少，需要获取最大元素HTML，方式：document.documentElement -- 返回HTML标签
      ```
        window.addEventListener('scroll', function () { 
        console.log(document.documentElement.scrollTop }) 
      ```
        - 页面滚动距离可以作为固定写法，非常常用：`const distance = document.documentElement.scrollTop`
    - 页面尺寸相关：
        - 事件 resize：窗口尺寸改变时触发
        - 元素属性 clientWidth / clientHeight：获取元素可视部分的宽高，包含padding，不含border和margin；只读
        - 元素属性 offsetWidth / offsetHeight：获取元素自身宽高，包含到border，不含margin；只读
        - 元素属性 offsetTop / offsetLeft：获取自己与「包含定位属性」的父级元素的上/左距离；只读
        - 元素方法 obj.getBoundingClientRect()：获得一组对象，内含各种坐标；基于视口（了解即可）
- 3个案例与1个综合案例
    - Tab栏切换：事件委托
        - 通过事件委托，为父元素添加事件，事件中，利用e.target.tagName筛选出点击的a标签，更改内容
        - tab-nav完成后，为获取索引以更新tab-content，利用了自定义属性dataset，将e.target.dataset.id作为索引给到items数组，完成内容切换
    - 滚动控制头部的显/隐：scrollTop 与 offsetTop的配合
        - 当页面scrollTop > 模块.offsetTop，控制div块的显 p.s. offsetTop在元素位置不改变时，本身是个定值
        - `header.style.top = distance > sk.offsetTop ? '0' : '-80px'`
    - 点击标签，小滑块跟随：offsetLeft 与 transform: translate() 配合
        - 滑块需要移动的距离，即div块位置与左边的距离，即offsetLeft
        - ``line.style.transform = `translateX(${distance}px)` // 记得加px``
    - 综合案例：电梯导航
        - 为防止变量污染，将不同业务封装到不同的立即执行函数中 (function () {...} (params -- optional);
        - 模块一：页面滑动，电梯显隐 + backTop按钮
            - 和小案例2一样，核心是在scroll事件中，利用 scrollTop 与 模块.offsetTop进行对比
            - `elevator.style.opacity = distance > entry.offsetTop ? '1' : '0'`
            - backTop按钮则是添加点击事件，置scrollTop = 0
        - 模块二：按钮active样式
            - 利用事件委托(e.target.tagName === 'A')与click事件完成
            - 与之前的案例不同，本次在一开始「排他」时，没有active类，所以定义一个oldStyle+一个if判断是否有旧active类，若有就删，没有就可以加，避免了报错
        - 模块三：点击实现页面跳转
            - 核心：控制 scrollTop = 制定模块的offsetTop
            - 一开始选择了获取所有模块并用switch-case实现跳转到不同模块，视频课采取更简易的方法，利用了自定义属性与类名之间的巧妙联系
            -
          ``document.documentElement.scrollTop = document.querySelector(`.xtx_goods_${e.target.dataset.name}`).offsetTop``
        - 模块四：小按钮随页面滚动自动激活
            - 在scroll事件中，先移除旧样式，然后：
            - 利用if判断scrollTop所处的距离在哪些模块之间，再直接用自定义属性获取对应电梯小按钮，使其有active类
        - 补充：CSS知识：
            - 属性选择器，例如input[type] {css} 或进一步 input[type=text] {css}
                - 在模块4中，表现为：`document.querySelector('[data-name=new]').classList.add('active') // 属性选择器`
            - 让页面滚动更丝滑：scroll-behavior: smooth (html标签)
                - `document.documentElement.style.scrollBehavior = 'smooth'`

### Apr 14th, Mon, Day 25

- 「一如既往，一往无前」
- 投入到学习状态中的感觉很美好，愿一切都将有所收获。
- 今日知识点总结：
    - 最核心：**事件监听：**
        - `元素对象.addEventListener('事件类型', 要执行的函数)`
        - 三要素：事件源（元素对象），事件类型，执行（调用）的函数
        - e.g. 关闭广告：btn.addEventListener('click', function () { AD.style.display = 'none' })
        - 其他版本的事件监听（看到别人的代码知道即可）： btn.onclick = function () {...}
          缺点在于，会被新的onclick覆盖（相当于重置onclick函数），而addEvenListener就不会覆盖
    - 今日所学的四类事件：鼠标事件、焦点事件、键盘事件、文本输入事件
        - 鼠标事件：click mouseenter mouseleave
        - 焦点事件：focus blur 主要是input文本框
        - 键盘事件：keydown keyup
        - 输入事件：input
    - 事件对象event以及常见属性：
        - 时间绑定的回调函数的第一个参数就是事件对象，必须是在事件里面
        - 回调函数：将函数A作为参数，传递给函数B时，称函数A为回调函数 e.g. setInterval(fn, 1000) fn()就是回调函数
      ```
      btn.addEventListener('click', function (e) {
        console.log(e) // PointerEvent
        console.log(e.type) // type: 获取当前的事件类型
        console.log(e.clientX) //获取光标相对于浏览器可见窗口左上角的位置
        console.log(e.clientY)
        console.log(e.offsetX) // 获取光标相对于当前DOM元素左上角的位置
        console.log(e.offsetY)
      })
      ```
        - key属性：键盘值（原先keycode已弃用） e.g. if (e.key === 'Enter') { console.log('我按了enter') }
    - 环境对象this：
        - 每个「函数里面」都有this对象，普通函数中，this指向window；回调函数里则指向调用者 e.g.
      ```
      btn.addEventListener('click', function () {
        console.log(this) // <button>button</button> btn对象
        this.style.color = 'red' // this 指代了 btn
      })
      ```
        - 函数的调用方式不同，this的指代对象也不同。粗略规则：谁调用，this就是谁
    - 5个案例+2个综合案例
        - 随机点名：通过click事件设置开始/结束点名，通过定时器与随机数，选出名字并填入到innerHTML中，删除对应姓名，最后禁用按钮
        - 轮播图完整版：
            - 通过click事件设置左右按钮业务(index++或index--)，分别设置index达限后恢复（归0或arr.length - 1)，
            - 根据index更换轮播组件的内容，小圆点依旧采用排他思想：先移除原active的active类，再为现在的index增添active类
            - 自动播放业务，本质是右按钮（next）业务。知识点：不用重复写一遍，直接用 next.click() 自动调用点击事件（外嵌定时器）
            - 鼠标经过/离开影响自动播放：mouseenter与mouseleave事件，分别销毁定时器与开启定时器即可
        - 搜索框菜单：通过对input分别设置focus/blur焦点事件，控制元素的display:block/none样式
        - 按回车发布评论，以及评论字数统计：
            - 获焦/失焦事件控制字数统计的opacity
            - 计算字数：对textArea设置input事件，获取textArea.value.length计算字数
            - str.trim()方法：去除字符串左右两边的空格
            - 发布评论：为textArea设置键盘事件，当事件对象`e.key === 'Enter'`,检测空内容(
              `if(textArea.value.trim() // 去除左右空内容并检测是否为空`)，修改样式，发布评论; 清空字数
        - 综合案例：Tab栏切换：
            - 为每个a标签添加mouseenter事件，添加样式，同时完成对内容div块添加样式的操作（都是利用排他思想添加active类）
        - 综合案例：全选反选案例：(checkbox) 全选可以控制所有小按钮，小按钮也可以反过来控制全选按钮
            - 全选控制小按钮：为checkAll添加click事件，遍历所有singleCheck[i],直接令所有小按钮与自己的checked属性同步
              核心代码：singleCheck[i].checked=this.checked
            - 小按钮控制全选：同样是计数思维，当老师的方法相当简洁——利用css中的:
              checked伪类，统计其个数，等于singleCheck.length则令大按钮checked为true
            - 同时，引入一种新的简化if判断的语句，即若当if判断条件是某变量等于某值，决定另一个变量取true或false的双分支情况下，可以这样写：
            - e.g. `checkAll.checked = flag === singleCheck.length // 将flag === singleCheck.length的判断结果赋值给checked属性`
            - 核心代码：`checkAll.checked = document.querySelectorAll('.ck:checked').length === singleCheck.length `
- 今日知识点还是相当丰富的，很有意思，也很重要，及时复习！

### Apr 13th, Sun, Day 24

- 「社会实践」
- 今天没有进行知识理论的学习，而是去参加了社区的社会实践活动
- 首次社会实践活动就遇上了非常难得的「城市生存挑战」：一个团队，每人10元，四个地点，想尽办法打卡并赚取更多钱
- 具体收获主要是「更敢说话」了吧，甚至中途还有和老外交流的机会，所以说学英语还是有用的
- 更多的，就留到具体文档里写吧
- 今天奔波一天，也确实累了，好好休息。明天带着新的自信，继续学习JavaScript吧！

### Apr 12th, Sat, Day 23

- 「持续推进」
- 正式进入JS的Web APIs学习，接触到了非常多新的知识，需及时复习：
    - **声明变量const优先**：
        - const的语义化更好；
        - 建议数组和对象使用const声明，因为数组/对象名本身存储的是地址；
        - 使用数组方法或对象属性赋值时，本身没有影响 数组/对象名 中的地址值；
        - 注意，如果将 数组/对象名 用于声明新的 数组/对象，那就等同于修改了地址，就会引发常量报错；
    - **DOM树与DOM对象**：
        - 最核心思想：把网页内容当作对象处理；DOM对象：浏览器根据html标签生成的「JS对象」，有属性名和方法
        - document对象：最大的DOM对象
    - **由HTML树获取DOM元素（重点）**：
        - `document.querySelector('css选择器')`
            - 必须加引号（字符串）；
            - 参数，一个或多个css选择器（和css一样的写法）；
            - 返回值：匹配到的「第一个」元素，一个HTMLElement对象；没有则返回空
        - `document.querySelectorAll('css选择器')`
            - 返回值：匹配到的所有元素，NodeList对象集合
            - 一个伪数组（哪怕只有一个元素），有长度、索引号，但没有数组方法
        - 其他获取方式（了解即可）：
          ```
          document.getElementById('nav') // 根据id获取第一个元素（单元素）
          document.getElementsByTagName('div') // 根据标签获取一类元素 得到伪数组
          document.getElementsByClassName('name') // 根据类名获取元素 得到伪数组
          ```
    - **修改元素内容：** `obj.innerText = 'text'`或`obj.innerHTML = 'text'`，其中，`innerHTML`会解析html标签；常用于**双标签
      **
    - **修改元素常用属性：** 修改如src，href等html标签的属性，像修改对象属性一样修改。 e.g. `img.src = 'images/01.jpg'`
    - **修改元素样式：** 分为`style`，`className`，`classList`三种方式
        - **style方式：** 和修改对象属性一样，但要先加入`.style`。e.g.
          `box.style.backgroundColor = 'darkCyan' // css中有短横线的，用小驼峰命名法`
        - **className方式：** 覆盖一个新的类名。 e.g. `div.className = 'nav box' // 若想保留原类名，就两个一起写`
        - **classList方式：追加、删除、切换类名：**
      ```
      // 「追加」类名
      box.classList.add('active') // 类名一样不加点，并且是字符串
      // 「移除」类名
      box.classList.remove('box')
      // 「切换」类名：有就删掉，没有就加上
      box.classList.toggle('box')
      ```
    - **修改表单元素属性：** 本质还是修改对象属性、重新赋值
        - 获取表单的值：用`obj.value`而非`innerHTML`
        - 修改类型：e.g. `input.type = 'password'`
        - 修改表单中的添加/移除效果，一律用「布尔值」。 e.g. `check.checked = true` `button.disabled = true`
        - `button`特殊一些，双标签，所以还是用innerHTML修改其中的文字
        - p.s. 虽然有时填 'true' 字符串也生效，但本质上他们发生了隐式转换，上述属性只接受布尔值。生效是因为非空字符串在转换时成为了true
    - **自定义属性：**
        - 一律以`data-`开头。e.g. `<div data-id = '1' data-spm = 'sample'>1</div>`
        - 在DOM对象上一律以dataset对象方式获取。e.g.
      ```
      console.log(div.dataset) // DOMStringMap（拿到全部自定义属性）
      console.log(div.dataset.id) // 1
      console.log(div.dataset.spm) // sample
      ```
      **定时器之间歇函数：**
    - `setInterval(函数, 间隔时间ms)`，返回值：定时器id（表示自己是第几个定时器）
    - `clearInterval(timer)` 结束定时器，参数`timer`即某个定时器，如`let timer = setInterval(...)`
    ```
    setInterval(function () {
      console.log('1s/carries')
    }, 1000)
    ```
    - 使用外部具名函数的话，不用加括号，只填入函数名即可。e.g. `setInterval(f, 1000)`
- 完成了3个小案例（随机抽奖、随机轮播图、阅读用户协议倒计时）和一个综合案例（顺序定时轮播图）
    - 随机抽奖：对数组方法，Math对象方法（Random）和innerHTML的运用
    - 随机轮播图：对修改元素内容、常用属性、样式属性的综合运用
    - 用户协议倒计时：对修改表单属性、计时器的综合运用
    - 综合案例：综合了修改元素内容、常用属性、样式属性、计时器的综合运用。
        - 其中对于原点指示器，运用排他思想，比原先计划用数组下标计算的方式更加高效直观
      ```
      // 删除前一个圆点
      // li[i - 1].classList.remove('active')
      // 用排他思想做会更好！避免了数组下标的计算问题
      document.querySelector('.slider-indicator .active').classList.remove('active')
      ...
      li[i].classList.add('active')
      ```
- 至此，JavaScript也算是开始与之前学的HTML开始互通了，及时复习！

### Apr 11th, Fri, Day 22

- 「持续推进」
- 节奏稳定的一天，正式完成了JS视频课的基础语法部分，即将进入Web APIs阶段。
- 今天的主要知识点是**对象**：
    - **基本概念**：一种无序的集合。*p.s.数组是一种有序的聚合*
    - **声明**：`let obj = {}` 或 `let obj = new Object()`。后者是未来的知识
    - **构成**：属性和方法。`属性名: 属性值` `方法名: 函数`。各属性、方法之间用逗号隔开
        - e.g. `age: 18, sayHi: function () {console.log('Hi~')}`
    - **增删改查 & 方法的调用**：围绕 对象名.属性名/方法名 操作
        - 增：对象名.新属性 = 值
        - 改：对象名.原属性 = 值
        - 删：delete 对象名.属性（不常用）
        - 查：对象名.属性名 或 对象名['属性名']。
            - 重点，尤其是第二种方式在面对属性名是字符串或含特殊字符、for-in循环中特别有用
            - 第二种方式中，引号是必须加的
        - 方法的调用：对象名.方法名(参数)
    - **遍历对象**：使用for-in循环 *p.s.虽然也可以用于遍历数组，但由于变化量输出的是字符/串，不推荐这么用*
  ```
  for (let key in obj) { 
    console.log(key) // 得到了属性名，而且都有引号（字符串）-- 'myName' 'age' 'gender'
    console.log(obj[key]) // 'stelle rainn' 18 'male'
  }
  ```
    - **内置数学对象**：提供一些列可用于数学运算的属性或方法
        - 属性：e.g. `Math.E` `Math.PI` `Math.LN2`
        - 方法：`Math.ceil(x)` `Math.floor(x)` `Math.round(x)` `Math.abs(x)` `Math.max(x, y, z)` `Math.min(x, y, z)`
          `Math.pow(x,n)` `Math.sqrt(x)`
        - 随机数：`Math.random(x)`无参数，返回[0,1)区间的随机小数，扩展运用：
            - 取数组元素：`arr[Math.floor(Math.random() * (arr.length))] // 因为数组长度值刚好比索引值多1，加上floor(x), 解决了右开区间取值的问题`
            - 任取[min, max]之间的整数：`Math.floor(Math.random() * (max - min + 1) + min)`
    - 拓展知识：简单数据类型和引用数据类型
        - 简单数据类型（值类型）：变量本身存储这个值，存储于栈空间
        - 引用数据类型（复杂数据类型）：变量本身只存储这个对象的「引用地址」，这个地址指向堆空间中存储的实际数据
        - *p.s. 类似C++中的指针*
      ```
      let obj1 = {
      age : 18
        }
      let obj2 = obj1
      obj2.age = 20
      console.log(obj1.age) // 20
      ```

### Apr 10th, Thu, Day 21

- 「推进」
- 依旧是节奏稳定的一天，继续推进JavaScript基础的学习。今天的主要知识点是**函数**：
    - **函数的声明、调用**：类同C++：
  ```
  function getMax(a, b) {
      return a > b ? a : b
    }
    let max = getMax(201, 200)
    console.log(max)
  ```
    - **return多个值**：返回数组，并用数组承接结果。e.g. `return [max, min]` `let maxRe = f(x)[0] let minRe = f(x)[1]`
    - **出现相同的函数名**：后面的函数声明会覆盖前面；不管在哪儿调用函数，都会以后面的为准
    - **实参、形参数目不匹配**：
        - 若实参多于形参，则多余的实参被舍弃，不参与运算。函数可以输出前面参数的运算结果
        - 若实参少于形参，则形参出现`undefined`，导致出现`NaN`结果
    - **作用域**：分为全局作用域与局部作用域，由此引申出全局变量与局部(函数)变量
        - 特殊情况1: 在函数内部未声明变量而赋值，该变量会成为全局变量。*强烈不建议此情况的出现*
        - 特殊情况2: 形参可以看作是一种局部变量
        - 对于不同作用域中同名变量的访问原则：就近，从当前作用域开始寻找，若无，则一级一级向外访问
      ```
      let x =10
      function f3() {
        let x = 20
        function f4() {
          let x = 30
          console.log(x)
        }
        f4()
      }
      f3() 
      console.log(x) // 30
      ```
    - **匿名函数**：分为函数表达式和立即执行函数
        - 函数表达式：将函数赋值给一个变量，而后这个变量名就是函数名，并利用该名调用函数。
        - 和具名函数的不同点在于，函数表达式必须先声明再调用
  ```
  let fn = function (a, b) {
    return a + b
  }
  // 调用
  let re = fn(10, 20)
  console.log(re) // 30
  ```
    - 立即执行函数：避免全局变量间的污染。需要配合结束分号，若该函数前有代码，前面也要加分号。
    - *p.s.立即执行函数也可以加分号*
  ```
  ;(function (x ,y) {
    console.log(x + y)
  }(1, 2)); // 调用函数的括号写在里外都可以
  ```
    - **逻辑中断**：对于`&&`，如果左边为假，则中断，返回左边值；对于`||`，如果左边为真，则中断，立即返回左边值
        - 原理：与门的「一假即假」和或门的「一真则真」使当算式左边的真假一旦判断，后面的代码就不需要执行
        - 注意：判断的是真假（布尔），但返回的是这个值本身
        - 拓展：对于`&&`，如果都是真，则按顺序执行到最后一个「真」条件，并返回该值，如`console.log(11 && 22) // 22`; 而对于
          `||`, 只要遇到一个「真」就立即结束并返回该值
      ```
      function f(x, y) {
      x = x || 0
      y = y || 0
      return x + y
      }
      console.log(f(1,2)) // 3
      console.log(f()) // 0 避免了undefined的NaN情况出现
      ```
    - **转换为布尔类型**（隐式转换补充）：以下转换为布尔类型(`Boolean(x)`)时为`false`
        - `''` `0` `false` `undefined` `null` `NaN`
        - 其中，遇到减法运算，`''`和`null`的值会化为`0`；`undefined`的值化为`NaN`；
        - 特殊情况：`undefined == null` 为`true`，但`undefined === null` 依然是`false`
- 逻辑中断和布尔类型（隐式转换）需要及时复习，比较新

### Apr 09th, Wed, Day 20

- 「推进」
- 别无他事，稳住心态，坚定目标，持续推进
- 今日学习知识点：
    - **for循环**：和C++一致；注意`continue`结束单次循环（并回到if），`break`跳出循环
    - **循环嵌套**：直角三角形打印，九九乘法表等常规内容
  ```
  // Exercise 99乘法表
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j <= i; j++) {
      document.write(`<span>${j+1} x ${i+1} = ${(i+1)*(j+1)}</span>`)
    }
    document.write('<br>')
  }
  ```
    - **数组的增删改查**：
        - *p.s. 创建数组可以使用`let array = new Array(data)`-- 属于未来的知识*
        - 增：`push(data)` -- 末尾追加 | `unshift(data)` -- 开头追加。都返回数组的长度, e.g.
          ```console.log(emptyArray.unshift('unshift new content')) // 5```
        - 删：`pop()` -- 末尾删除，返回该元素本身 | `shift()` -- 首部删除，返回该元素本身 | `splice(index, counts)` --
          指定索引及个数删除，counts无参则默认删到最后
        - 改：常规赋值。注意昨日所提的运算细节，如`undefined + number` 得 `NaN`, `undefined + 'Strings'` 得
          `'undefinedStrings'`
        - 查：常规操作。注意索引不要越界
    - **综合案例，输入季度销售额，在HTML界面渲染柱状图**
        - 核心：通过for循环取得4个输入，存入到数组，再将每个元素输出到盒子CSS的height属性上。部分代码：
      ```
       //渲染界面
       document.write('<div class="box">')
       for (let i = 0; i < seasons.length; i++) {
         // 一个div.box盒子
         document.write(`
           <div style="height: ${seasons[i]}px">
              <span>${seasons[i]}</span>
              <h4>Season${i+1}</h4>
           </div>
         `)
       }
       document.write('</div>')
      ```
    - **拓展之冒泡排序**：核心思想/两个关键点：
        - 双重循环，每一趟循环都让`arr[0]`与其它数据元素(arr.length - 1个)比较，根据大小进行交换(
          升序或降序，自行调整if判断中arr[j]和arr[j+1]的比较方式)
        - 一趟排序完成后，产生本趟**最值**，「冒泡」到数组末尾。下一趟arr[0]无需与最值比较。所以内层循环的终止条件是
          `j < arr.length -1 -i`
      ```
      for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] > array[j+1]) {
           swap...
      ```
        - 可以用一个布尔标志，当没有发生交换时，可以直接结束循环（外层）
        - JS也有sort()函数 `e.g. array.sort() ` 默认升序
        - sort()函数如需降序，可以填入函数 `array.sort( function (a, b) { return b - a } )`
        - 关于 return b-a 的理解
            - **sort函数通过return expression判断，当expression的结果大于0，交换参数a、b的位置；结果小于等于0，不交换参数a、b的位置；
              **
            - 假设锚定规则「大于0则交换位置」：
                - 若使用 return a-b ：当发生交换，说明「前者」（指参数的位置）a更大，同时被排到后面，完成升序
                - 若使用 return b-a ：当发生交换，说明「后者」b更大，同时被排到前面，完成降序
- 无他，及时复习

### Apr 08th, Tue, Day 19

- 「推进」
- 别无他事，持续推进JavaScript基础部分的学习
- 知识点总结：
    - **数组的使用**：`let arrayName = [data1, data2, 'data3'....]` 数组的数据可以是混合型的，甚至嵌套数组。
        - 下标/索引：从0开始; 取值：`arrName[n]`
        - 获取数组长度：`arr.length`
    - **常量**：`const G = 9.8` 在声明时必须赋值，定义后**不可修改**
    - **数字类型 Numbers**：整数、小数（浮点数）、正数、负数都统一为Numbers类型
        - NaN：也是数字类型，代表计算错误。具有粘性，任何对NaN的操作都会返回NaN
        - 搭配算术运算符运算： + - * / %；n ** x: n的x次幂
    - **字符串类型 String**：用单、双、反引号以及转义字符；单双引号可以互相嵌套；使用+号可以对两个字符串接
        - **模板字符串**：只能用反引号，内部可以接 ${expression}, expression代表变量或表达式，e.g.
            - ```document.write(`Hello, my name is ${userName} and I'm ${userAge} years old.`)```
            - ```document.write(`The larger one is ${String(a > b ? a : b)}`)```
            - 补充昨日对**输出语法**的用法：可以利用document.write('html codes')来输出html标签，配合模板字符串修改一些内容
            - e.g. ```document.write(`<td>${price}元</td>`)``` 在没学DOM操作前，先这么用着
            - 再补充：WebStorm检测到${}的输入会自动修正单引号
    - **布尔 Boolean**、**未定义 Undefined**与**空 Null**：
        - boolean： true / false
        - undefined：声明一个变量却未赋值等
        - null：赋值为空（将null作为尚未创建的对象）
        - *undefined 与 null 不同， 例如同样 +1 操作，前者返回NaN，后者返回1*
    - **数据类型检测 typeof 或typeof()**: 都一样，目前使用前者，较简洁；e.g. `console.log(typeof isReal)`
    - **类型转换**，分为隐式和显式
        - 隐式：
            - 对于+号，若两边存在一个字符串，则自动将另外一个转换为字符串；所以**任何数据和字符串相加的结果都是字符串**
            - 除+号之外的运算符，只要有数字，都换转换成数字
            - **单独使用+号**：可以转换成数字类型；e.g. `console.log(typeof '123') // string`
              `console.log(typeof +'123') // number`
        - 显式：
            - Number(x): 将x转换为数字类型；若字符串含非数字内容，则返回NaN
            - parseInt(x) & parseFloat(x): 取整数/小数部分；前提：字符串开头不能是非数字
          ```
          console.log(parseInt('12px12')) // 12
          console.log(parseInt('123.123px')) // 123
          console.log(parseFloat('123.123px')) // 123.123
          console.log(parseFloat('abc123abc')) // NaN
          ```
    - **赋值运算符**：`=, +=, -=, *=， /=，%=` ；和C++一样
    - **自增运算符**：`++i / i++, --i / i--`; 和C++一样，依然格外注意看好是先自增还是先运算
        - 存在自增和运算并行的情况，需留意 e.g. `let i = 1 console.log(i++ + ++i + i) // 1 + 3 + 3 = 7`
    - **比较运算符**：和之前学过的C++大部分都一样，额外留意：
        - `==`：值相等；`===`：值和类型相等（全相等），**推荐使用**，对应`!==`: 不全等
        - `undefined == null // true `
        - `NaN === NaN // false`
        - 本质：比较的是ASCII码值：`console.log('aa' < 'aac') // true`
    - **逻辑运算符：与或非**：记住优先级：`小括号 > 一元运算符(含!) > 算术运算符 > 逻辑运算符(先 && 后 ||)`
    - **if单/双/多分支**：和C++一致 `if / if-else / if-else if-else`
    - **三元运算符**：简化if双分支，一般用来取值（不限定，比较简洁，爱用就用）
        - `condition ? 满足条件所执行的代码 : 不满足条件所执行的代码`
      ```
       // Exercise：数字补0
       let input = Number(prompt('a number:'))
       document.write(`After formatted: ${input > 10 ? input : '0'+ input}`) // '0' + input: 隐式转换，拼接
      ```
    - **switch分支**：用来做条件匹配；注意 `case 值:` 中的值要和prompt输入的值全相等
        - *p.s. 可以写`case (value): {多条 expressions}`，也可以`case value: 多条expressions`*
        - 记得加break防止穿透
        - 记得加default:
    - **while循环**：和C++一样，注意`continue`是结束某次（某个条件的）循环（回到while起点），`break`是结束整个while循环
- 今天做了两个综合案例（以及很多小Exercise），1是day1的，prompt获取输入并打印到html表格中，知识点即**模板字符串**
  ；2是while+switch循环，和以前学过的程序设计课程的知识类型，不难，及时温习就好。
- 今日达标完成任务。明天开启视频课Day3的学习。

### Apr 07th, Mon, Day 18

- 「里程碑1」
- 完成了H5C3的视频课学习。 *p.s.注意及时复习，并且常态化复习，不然容易忘记*
- 整理了新的目标，将学习React切换至学习Vue（虽然是4周之后的事了）
- 知识点总结：开启JavaScript的系统化学习！今天主要是基础引入：
    - **JS的书写位置**：和css一样，包括内联（行内），内部（在</body>标签上），外部（<script src='...'>
      ）；写在底部的目的是，让页面按顺序从上往下加载，避免HTML元素加载不完全
    - **JS的注释**：和LESS一样的方式
    - **JS结束符号**：可写可不写，但要统一；（现阶段不写，简洁）
    - **输入语法**：`prompt('enter content here')`
    - **输出语法**: `document.write('...')`, `console.log('...')`, `alert('...')`
    - **变量**：`let 变量名 = 值` *忘记var吧！*
    - **命名规则**：仅`字母`，`数字`，`下划线`与`$`符号，数字不能开头；严格区分大小写；建议使用`小驼峰命名法`
    - 变量初始化与输入输出的结合：e.g. `let name = prompt('Please enter your name')`  `document.write(name)`
- 内容较为基础，加上本身有编程经验，所以上手很快。明天的内容预估总需8小时学习（含视频课Day1的一部分和Day2全部），明日也无事，就抓紧时间干起来吧！

### Apr 06th, Sun, Day 17

- 「迎接波澜」
- 清明假期的最后一天，上午忙于「社区」的面试（顺利通过），中午疲惫了些（昨晚不应该那么晚还硬吃辣泡面的），下午四点多才开始学习
- 晚上又突发快递相关的事件，耽误了一个多钟。虽然在赶快学了，但是Day 15的内容还是剩余大约1小时。
- 暂且接受吧，不能为了完成而完成，开倍速什么的不太好。加之又是重点内容，应该好好听讲才是。
- 知识点总结：
    - 进一步学习了媒体查询：
        - `max-width`：网页最大宽度值，意义是：在**视口小于等于**`max-width`时，（或者理解为“**在不大于最大值`max-width前`**
          ”）媒体查询的CSS生效
        - `min-width`：网页最小宽度值，意义是：在**视口大于等于**`min-width`时，媒体查询的CSS生效
        - 在一份css中，若要检测多视口，对于顺序是有要求的（CSS的层叠性）
            - 对于`min-width`：由小到大；对于`max-width`：由大到小
        - 小案例：左侧隐藏-利用`max-width`，当视口小于到一定程度，利用`display:none;`使div隐藏
    - Bootstrap的学习：
        - 使用步骤：在正确的位置引入下载好的CSS/字体图标的CSS/JS，在需要的标签调用类名即可。注意link的层叠性，让自己的css在最后
        - 栅格系统：将整个网页等分12份，每个盒子占一定份数。如：一行4个盒子，则每个占3份
        - **响应断点**（断点之间形成区间）与 **类前缀** -- 意思是，在不同的区间内，你想分几个盒子，类名的选择是有要求的
      ```
      xs：<567px .col-
      sm：>=576px .col-sm-
      md：>=768px .col-md-
      ld：>=992px .col-lg-
      xl：>=1200px .col-xl-
      xxl：>=1400px .col-xxl- 
      ```
        - 格式：`container -> row(实现flex) -> col-*-*(在什么区间，占多少份)`
        - 例如：`<div class="col-xl-3 col-md-6 col-sm-12">1</div>`（4个div），依次实现：
            - 在大于等于1200px，一行排4个盒子（每个3份 -- col-xl-3）
            - 大于等于768px，一行排2个（每个六份 -- col-md-6）
            - 大于等于576px，一行排1个（独占12份 -- col-sm-12）
        - Button样式：先给btn添加默认样式，再加入需要进一步实现的样式。例如：
          `<button class="btn btn-success btn-sm">小success</button>`
        - 表格类样式：与Button类一样，需要优先为table标签添加一个`table`类的默认效果，在依次给不同表格类标签（包括table，tr，th，td等）添加想要的效果
        - **Bootstrap组件**：从官网上可以复制各种组件。如需修改，只要观察结构（html也好，网页检查器也好），修改结构或css即可
            - 注意：部分CSS含`!important`最高优先级，所以修改时，自己也要加，确保层叠有效
        - 字体图标：如前面所言，下载后引入css文件，写类名即可，和iconfont相似。
            - p.s.官方文档中，需要写两个类名，但其实写一个也可以;例如：`<span class="bi-apple"></span>`
    - 综合案例：响应式布局与Bootstrap组件使用 -- 复刻「腾讯全端」网站首页 --能用框架就不必自己写
        - 目前完成了nav导航栏，主要工作包括复用bootstrap的导航栏组件，调整
            - `container-fluid`改`container`即可实现版心居中（fluid定义宽度100%）
            - 官网position部分提供了top定位，最外层加入`fixed-top`类名即可fixed定位
            - 调整`navbar-brand`与`nav-item`的位置：对于`nav-item`，`flex-grow`即`flex`
              的一个拆分，现不需要其占位（1），取消掉即可（container本身有space-between在，自然左右分开）
            - 视频课没出现的问题，但是在此有所呈现：对于li标签中的a的文字内容，英文字符再长也可以撑开（理想状态），而中文字符超过两个字就会竖排，推测；
                - Bootstrap 的 flex 布局没有默认限制文本换行，加上 中文文本的连续性，导致在 <li> 宽度未明确定义时，文字换行后视觉上显得“竖排”
                - 解决：加了 `white-space: nowrap` 后，强制文本不换行
- 总的来说，今天确实还算有点事多，加上午休休多了点，晚上又有别的事，所以Day15还剩一点内容（一个半小时左右）。
- 在可预见的明天，应该没什么事了，把内容收尾，复习复习，然后开启Javascript的学习吧！

### Apr 05th, Sat, Day 16

- 「拥抱不一样的波澜」
- 清明节假期，经由日前时樾学姐与沐琮学姐的指引，以及今日与容熠学长的5小时面对面交流，收获良多建议，例如
    - 对软实力的重视与提升，多维度成长
    - 更加主动地去争取与创造机会，扩展圈子，拓宽人脉，接触资源
    - 用行动对抗焦虑与迷茫
    - 获得了社区面试的机会，晚上在写申请书
- 但愿明日顺利，也愿自己更好地「多维度成长」
- 今天的CodeSprint40计划暂时搁置了，但，起码不是负面影响吧！毋需恪求绝对完美，「拥抱一些不一样的波澜」，也许是顺水推舟呢？
- 加油，明日面试自然放松即可，成与败皆有收获。回来后继续推进CodeSprint40，为JavaScript开启新阶段！

### Apr 04th, Fri, Day 15

- 「不一样的波澜」
- 知识点总结
    - **SEO补充**：对网站logo使用SEO优化时，采用h1嵌套a，例如
  ```
  <div class="logo">
        <h1><a href="#">小兔鲜儿</a></h1>
  </div>
  ```
    - 然后在css中设置`.logo a {font-size: 0; background-image: url(...)}`
    - 今天的[案例](HTML5_CSS3/Day_15_移动端适配方案2/综合案例-酷我音乐-移动端/index.html)不用，所以不需要h1嵌套，写div即可；想到了，所以复习一下
    - `Background`属性补充（强调）：在复合写法中，`bg-size(contain, cover等)`必须跟在`position`后面，以`/`分隔，否则会有错误。正确实例：
      `center/contain`
    - **正式引入vw与vh单位**：
        - 都是相对于「视口」的单位，1vw = 1/100 视口宽度，1vh = 1/100 视口高度
        - 与rem一样，对于设计稿中的px单位，需要转换成vw/vh单位
            - vw = 设计稿呈现的px / （设计稿参考设备的视口宽度/100）
            - vh = 设计稿呈现的px / （设计稿参考设备的视口高度/100）
            - 例如：定义变量`@vw: 3.75vw`；使用： `width: (50 / @vw);`
            - 注意：在开发中，vh不建议与vw混用，因为「全面屏」等设备的视口高度会有所不同，混用可能导致盒子变形
        - 其他知识点
            - `position:sticky;`与`position: fixed;` 有些许差异，表现在：
                - fixed
                    - 基于浏览器视口
                    - 完全脱标，后续元素会顶上来，可能需要为其他元素添加margin或使用空白盒子占位
                    - 转变为行内块，需要手动处理「宽度变窄」（设置width:100%）
                - sticky
                    - 基于最近的滚动父容器
                    - 半脱离文档流，仍然占位
                    - 保留块级特性，不一定需要设置宽度
                    - 必须指定 top、bottom、left 或 right 中的一个，不然不起作用。
                    - 父容器要有滚动（overflow: auto 或 scroll），而且父容器高度要大于 sticky 元素本身。
            - `object-fit: cover `
                - 和bg-size一个道理，取值也相同。不过object-fit适用于对img标签的调整，bg-size则专注于background系列
            - 再次强调：使用了display:flex的标签/元素，使用align-item /
              justify-content等调整子元素的属性前，必须设置宽高，否则本身只能被弹性内容撑开，上述属性效果不佳
- 今天状态蛮正常，但是晚上遇到一些比较新奇的事，我称之为不一样的波澜——纵然有所耽搁吧，但也算是一次有益的交流。
- 明日早上参加完心里交流会后，继续完成视频课Day15的内容，并做一次复习。后天开启JS的学习。

### Apr 03rd, Thu, Day 14

- 在足够的欲望面前，其他的小杂念又算什么？
- 今天是清明节假期前一天，图书馆很空。心情多少有点受影响，不是难过，不是压抑，就是复杂。但取得offer的渴望足够强大，我无论如何都要前进。
- 移动端适配方案
    - 了解了**谷歌模拟器**，可以在Chrome的 网页检查器 中选择移动设备
        - 小技巧，使用网页检查器时，查看PC布局，一般在下面；查看移动端，一般在侧面
    - **屏幕分辨率**、**视口与二倍图**
        - 硬件分辨率：物理分辨率（出厂设置）
        - 缩放调节的分辨率：逻辑分辨率（由软件/驱动/操作系统等设置）
        - PC端网页分辨率与逻辑分辨率保持一致
        - iPhone 6/7/8 -- 逻辑分辨率375px；plus -- 414px
        - **视口**：移动端网页分辨率并非逻辑分辨率。视口是，显示HTML网页的区域，使用视口约束HTML尺寸。使用HTML5自动骨架中就可以生成。
            - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
        - **二倍图**：现阶段设计稿参考iPhone
          6/7/8，以375px的设备宽度产出设计稿；则二倍图设计稿的尺寸即为750px。为确保缩放、比例关系正确，在pxcook、html等设计稿中，要切换2x模式。
    - **适配方案**
        - 宽度适配：宽度自适应
            - 百分比布局｜Flex布局
            - 适用于PC端
        - 等比适配：宽高等比缩放
            - rem｜vw
            - 适用于移动端
    - rem适配方案
        - rem:相对单位，相对「HTML标签字号」的结果。即：最终像素值 = rem值 * HTML标签字号
        - 媒体查询 -- 可以用于检测视口宽度，编写差异化的CSS样式 -- 当某个条件成立，执行对应的CSS样式，格式：
      ```
      @media (媒体特性/需要查询的媒体 -- 没有多余的分号) {
        选择器 {
          CSS属性;
          }
        }
      ```
      ```
        @media (width: 375px) {
              html {
                  font-size: 37.5px;
              }
          }
      ```
        - 实际工作中，不太可能为每个视口都单独编写这样的代码，于是引入一个js文件：flexible布局，以实现自适应：
            - `<script src="js/flexible.js"></script>`
        - 于是在实际中，就有 rem单位值 = 实际px值(来自设计稿) / 根字号(常设置成变量，如@rootSize: 37.5px)
        - 补充：目前rem布局方案中，将网页等分成10份，HTML标签的字号视为视口宽度的 1/10（flexible布局会计算好）
    - **less相关**
        - less注释：//…… 单行注释 ｜ /* …… */ 块级注释 -- 注意，在less中写的单行注释不会保留到css文件
        - **运算**：记住`margin: (68/37.5)rem;`即可，加减乘如上，除法必须带括号。**注意：**如果两个数字都带单位或更多单位，以「第一个」单位为准
        - **嵌套**：字面意思，在一个标签里面写另一个标签。相当于后代。和之前用过的sass一样。新的知识点，在嵌套中使用`&`
          ，代表自己，常与hover伪类，子代结构伪类配合使用，例如
      ```
      a {
        text-decoration: none;
        &:hover {
          color: #00BE9A;
        }
      }
      ```
        - 变量：存储数据，方便多处使用与统一修改。定义变量：`@变量名：数据; ` -- 不要漏掉分号。如`@rootSize: 37.5rem;`，
          `@myCyan: darkcyan;`
        - 导入：`@import "path/to/less";` -- 不要漏掉分号；如果是less文件，后缀可以不保留。
        - 导出：代码：在less文件的**第一行：**`// out: ./index.css ` -- 没有分号；或**禁止导出：**`// out: false`
            - 备注：WebStorm似乎是有自动编译，less文件创建即编译，所以导出就不太好测试，知道即可。
    - 完成了一个综合案例，主要是移动端的布局，知识点包括less的导入，rem适配方案等。
- 纵然今天事有点多，内心有些复杂的情感（明日是假期），但依然完成了视频课Day 13的内容，没有太落后进度。
- 我现在特别想要去操场跑步，所以Push之后我也要去“Push”一把，泄一泄压力。明天完成视频课Day14、15的内容，收尾H5C3，开启JavaScript！

### Apr 02nd, Wed, Day 13

- 「Distance」
- 积压的宿舍情感终于在这一天爆发与释怀，我不必再对没有自知之明的人抱有任何期待，愤怒之后，是释怀。也对自己的目标，更加清晰。这就是，我与他们的「Distance」
- 今天花了点时间平复情绪，不算压抑，更多是释怀；加之上午有课，所以进度慢了些，没有能彻底追平视频课。但至少没有被拉开。
- 不管怎样，今日还是学了不少内容，而且都很新，需要多复习：
    - 空间转换之缩放：`transform: scale3d(x,y,z)`，理解成长方体的长宽高就行
    - **动画** -- 今日重点：
        - 属性 animation，值为复合型，包括：动画名称 动画花费时长s（此二者必写）｜ 速度曲线 重复 交替（动画方向）延迟时间 结束时状态
            - 动画名称：自己定义的名称，如@keyframe move，则move就是动画名称
            - 花费时长 & 延迟启动时间：数字s，两个一起出现，前者为花费时长，后者为延迟时间
            - 速度曲线：默认非线性动画，可填入linear --线性｜steps(n) --n帧分步动画
            - 重复：可填入次数，或者infinite无限循环
            - 交替/动画方向：填入alternate以实现往返效果
            - 结束时状态：backwards --默认，第一帧状态｜afterwards --最后一帧状态
        - 以上均可单独拆分为单个属性，另外有一个额外的拆分属性：animation-play-state: paused --暂停
          --常与hover配合使用，按需求决定放在原元素还是hover伪元素里
        - **使用动画**，分两步
            - 定义动画： `@keyframe animation-name {
            from { CSS; }
            to { CSS; } } `
            - 或` @keyframe animation-name {
            0% { CSS; }
            20% { CSS; }
            ...
            100% { CSS; } } `
            - 注意，没有多余的分号或逗号
            - 第二步，哪个标签要用，就在哪个标签的css中写，如：`animation: cloud-move 1s linear infinite alternate 0.8s`
        - 逐帧动画，使用「速度曲线」，`animation-timing-function: steps(n)`，配合精灵图实现精灵动画
            - 定义显示区域（精灵图展示窗口）
            - 注意，定义动画中，移动的是背景图，用background-position，用transform的话父盒子会位移
            - 移动距离 = 精灵图宽度
            - steps(N)，N与精灵小图个数相同
            - 多组动画，即在animation属性中填入多个动画。
- 今天Day 13，完成了视频课Day12的内容，明天时间充裕，完成Day13&14的内容；后天Day15，完成Day15，收尾。

### Apr 01st, Tue, Day 12

- 「稳中有进」
- 今天按期完成了目标。完成了视频课Day10的内容（复制黏贴等工作挑时间补齐就好）；完成了Day11，并开启了Day12（部分），与CodeSprint
  Day12追平。
- 明日Day13：学习与完成视频课Day12，Day13，正式追平实际状态。
- 今日总结：内容较多，主要内容是更多的CSS（动态CSS）
    - 用`align-items`前，记得指定宽高，否则没效果（虽然生效）
    - **平面转换 transform**：一般配合过渡 transition 使用。再次强调，transition 通常写在原元素中而非 hover 伪类
    - 可以转换的内容包括：`translate（位移）｜rotate（旋转）｜scale（缩放）｜skew（倾斜）`
        - 位移 -- transform: translate(x轴，y轴)，可以单独填写一个值（X轴），也可以translateX或translateY单独调整。值为百分比（参照自身尺寸）或像素值
        - 旋转 -- transform: rotate(旋转角度deg)，同样地，可以X，Y单独设置。正值顺时针，负值逆时针。
        - 改变平面转换的原点 -- transform-origin: 水平原点位置 垂直原点位置。值为各方位名词。默认为盒子中心点。
        - 多重转换 -- 即：将transform用作复合属性。注意：第一个改变会影响盒子的轴向，从而影响第二个改变。
        - 缩放 -- transform: scale(缩放倍数 | x轴缩放倍数，y轴缩放倍数)。通常用第一种。默认基于盒子原点。
        - 倾斜 -- transform: skew(旋转度数deg)  --正值向左，负值向右。
    - **线性渐变** -- background-image: linear-gradient();
        - background-image: linear-gradient (
        - 渐变方向, (默认从上到下｜to 方位词｜角度值deg -- 以x轴为0度)
        - 颜色1 终点位置,（默认无｜百分比值）
        - 颜色2 终点位置,
        - ...); （最后的颜色不需要逗号）
    - **径向渐变** -- background-image: radial-gradient(
        - 半径 at 圆心位置,
            - -- 半径：单独 或 双值（变成椭圆）：x轴 y轴
            - -- 圆心位置：水平位置 垂直位置 -- 取值：方位名词｜像素单位值｜百分比（不常用）
        - 颜色1 终点位置,
        - 颜色2 终点位置,
        - ...
        - 颜色n 终点位置 -- (无逗号)
        - );
    - **空间变换**：依然是transform
        - transform3d(x, y, z); --3d必须写三个值，否则不生效
        - transform:translateZ();
    - 视距：perspective -- 添加给父级。从而更好观察子级的动效果。常用值800-1200px。
    - 空间旋转：
        - transform: rotateZ(值deg)
        - transform: rotateX(值deg)
        - 从各个轴的正方向看去：正值顺时针，负值逆时针
        - 亦即 -- 左手法则：大拇指与各个轴的正方向相同，四个手指弯曲方向即为旋转的正方向
- 完成了2个小案例，4个综合案例。明日需要及时复习与消化。

</details>

## March 2025

<details>
<summary> 点击展开 / 关闭 </summary>

### Mar 31st, Mon, Day 11

- 「尽力就好」。
- 今天总体效率还算可以，只是因为晚上还要上课，否则多出来的两小时确实可以完成视频课Day10的内容并开启Day11。
- 总之，在Day11，完成了大部分视频课Day10的内容；明天Day12，收尾Day10，完成Day11，如果可以，Day12也开启，追平之前「波动」导致的落后。
- 内容总概：依然在完成「小兔鲜儿」网页的制作，完成了footer，banner，好物，推荐，品牌，生鲜共计6个板块。总体内容跟得上，有些新的知识点或需要强调的知识点：
  -
  对于轮播图，连续放置（flex）几张图片，这会被父盒子挤压，所以设置父盒子宽度（例如为ul设置宽度300%以容纳三张图）；然后会溢出，在父盒子使用overflow:
  hidden解决，例子见[CSS banner 轮播图](/HTML5_CSS3/Day_10_xtc-pc/css/index.css)（24行）；
    - `E:not(:hover)`:
      意外发现的新技巧，可以实现与hover互斥的效果，在非hover状态下呈现某种样式；例如[CSS轮播图小圆点](/HTML5_CSS3/Day_10_xtc-pc/css/index.css)
      （98行）：当整个ol非hover，第一个圆点高亮；进入hover状态，原高亮消失，hover到哪儿，哪儿高亮。退出hover状态，第一个圆点恢复高亮。
    - :hover的优先级高于:not(:hover)
    - 注意margin塌陷问题，多考虑使用`overflow:hidden`来解决。
    - transition过渡效果加在原元素，不要加在伪元素上（否则退出hover的时候没效果）。
- 大体上就这些。最后一点，在案例复现上，还是选择先听课后敲代码的方式，耗时就耗时吧；如果一边看一边敲，自己的思考程度会降低。

### Mar 30th, Day 10

- 「加紧」。
- 心态更加稳定，按计划前进。
- 白天场：完成了视频课Day08的内容，主要包括：
    - 定位：`position: relative | absolute | fixed` ；
    - 需要配合边偏移：`top | right | bottom | left : 数字px / 百分比`；
    - `relative`（参照原先自己的位置）：不脱标且占位；
    - `absolute（相对从最近的祖先级到浏览器） | fixed（相对浏览器窗口）`：脱标且不占位，具备行内块元素特点（宽高生效)；
    - 记住一个口诀：`子绝父相`;
    - **新属性**：`transform: translate(x, y)`，以及单独的`translateX`、`translateY`；都填入`50%`时，位移就各是宽高的一半；
    - 堆叠层级：`z-index：数字`（越大越上面）；
    - CSS精灵：通俗理解，就是“想像”成所有小图合成在一张大图（精灵图的背景），设定盒子宽高（所谓展示窗口），然后通过背景定位来显示不同的小图；
    - 字体图标：1.引入css；2.为需要的标签指定两个类名；
    - 垂直对齐方式：`vertical-align: baseline（基线对齐，默认）| top | middle | bottom`；可以通过这个方式去除行内块、图片底部留白（非baseline）；
    - 过渡效果：`transition`：属性（如background-color） 过渡时间（如0.5s） 过渡方式（如ease-in-out）；
    - 透明度：`opacity`: 0.5（0-1之间）；印证了昨天提到的和background-color: rgba()的不同；
    - 鼠标样式：`cursor: pointer | default | text | move` 等；
- 完成了两个综合案例，分别是对CSS精灵的运用以及轮播图效果的学习（flex布局，定位）等。
- 晚上场：开始制作“小兔鲜儿”网页，这是视频课中「基础班」的最综合案例。
    - SEO：搜索引擎优化。`title`：网页标题标签；`description`：网页描述标签；`keywords`：网页关键词标签；（后两个是meta标签中的name属性值）；
    - Favicon：网站图标，出现在标题栏：`<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">`
      （ico文件放在网站的根目录即可）；
    - 设计流程记录：
        - 版心居中：`margin: 0 auto`；于common.css中设置，方便复用；
        - 快捷导航：通栏 > 版心 > 导航ul（flex布局）
        - 头部header：版心 > logo + nav + search + cart。
- 今天就完成到这里，其实效率还不错，day9差一个底部（估计一小时）；可惜昨晚睡得迟了些，早上没时间。所以，继续保持良好规律吧，明天加油。

### Mar 29th, Day 09

- 「稳住」。
- 自昨天内心的自我怀疑后，现在的心态已经更好。明确目标：H5+C3+JS6+React+Git/WebPack等，再做出一到两个个人项目，5月中上旬投简历，期望中下旬上班。
- **目标够明确，欲望够明确，就无须再被干扰。只管奋力向前。体会网页开发的乐趣。**

- 今天的学习，主要是继续完成昨天的网页制作。整体跟做不算难，算是对过去所有（没系统学习前端时）、及前面8天的H5C3知识的综合运用。成品：[学成在线（静态页面）](HTML5_CSS3/Day_09_做网页之学成在线/index.html).

- 充分体验了更系统的**从整体到局部，由上到下，由左到右，由内到外**的规范开发历程，颠覆了以往自己“小作坊”式的反复拼凑、调整的经历。
- 一些新的知识点与一些注意点：
    - `vertical-align`: 行内块和行内垂直方向对齐方式。如：`vertical-align: middle`
      ；用法见第一次完整网页制作的[index.css](HTML5_CSS3/Day_09_做网页之学成在线/css/index.css)的124行；
    - `outline: none;`：去掉表单的焦点控制；
    - `.search input::placeholder {font-size: ... }`：通过此方式控制表单控件中placeholder文字的属性；
    - 注意`background-color: rgba(0, 0, 0, .4);`和`opacity: 0.4;`的不同，前者是单独调整背景的透明度，后者会让整个元素及其子元素的可见度都变化；
    - **对结构伪类选择器的理解：**`.recommend .wrapper ul li:nth-child(9) a`是指第9个li元素里的a标签；（意思是，当li嵌套a时，是li在重复；所以迭代的是li
      而非 a；然后要选中li中的a标签）
    - flex布局中，子元素会变成弹性盒子，因此对于a，不用刻意转变为块元素，宽高也可以生效；
    - 将a标签字体隐藏，可以使用`font-size: 0;`;
- 其它：
    - 跟视频课时，就暂且不要那么“任性”了，类名和结构跟着视频走就好，也方便检查。
    - 因为纵然网页设计起来，确实有不同方案（今天也证明了，不按教学里设计，也是可以的），但还是留到后面自己复刻或做作品的时候再发挥吧。
    - 忍住！先别着急用SCSS。
    - 明日目标：快马加鞭，完成视频课day8 day9的内容，尽量做day10的内容，弥补之前的波动节奏。

### Mar 28th, Day 08

- 「波折」。
- 我的内心遭受挑战，总不禁想着与人对比。但思来想去，明白我不应陷在过去的后悔里。**眼前的代码，就是回答未来的答案。**-15:37.
- 上午+下午（没吃午饭）：约3小时，主要学习了浮动（float）和Flex布局等知识：
    - **浮动**：`float: left | right | none`；浮动元素会脱离文档流，后续元素会环绕在其旁边；
    - **清除浮动**：包括`overflow:hidden`、`额外标签法`，`单伪元素标签法`、`双伪元素标签法等`；
    - **Flex布局**：`display: flex`，可以设置的点包括：
        - 主轴对齐：`justify-content: center | space-between | space-around | space-evenly | flex-start | flex-end`；
        - 侧轴对齐：`align-items(父级) / self(子级): center | stretch | baseline | flex-start | flex-end |`；
        - 主轴方向修改：`flex-direction: row | row-reverse | column | column-reverse`；
        - 弹性伸缩比：（写在子级，相当于占位权重/比例）`flex: 1 | 2 | 3 | ...`；
        - 主轴元素换行：`flex-wrap: nowrap | wrap | wrap-reverse`；
        - 行对齐方式：`align-content: center | space-between | space-around | space-evently`；
    - 完成了一个综合案例。
- 晚上场：开始做一个完整的网页，学习了网页布局思路，目前在做header。目前的难点感觉在于各种距离的设置。明天跟视频敲完后，定个时间再自己敲一遍。

### Mar 27th, Day 07

- 「加速」。
- 上午：2小时，主要学习了：
    - **（重点）CSS的背景属性：**，如：
        - background-color：背景颜色；
        - background-image: `background-image: url('图片地址')`；
        - background-repeat: `background-repeat: no-repeat | repeat-x | repeat-y | repeat(default)`；
        - background-position: `background-position: 水平方向 垂直方向`；取值包括:
          `center | left | right | top | bottom | 数字px`；
            - **特殊写法1**:只写一个关键字，另一方向默认居中；只写一个数字px，则代表水平方向，且垂直方向居中；
            - **特殊写法2**:写关键字的顺序可以颠倒；
        - background-size(大小与缩放)：
          `background-size: cover(充满背景，可能图片不全) | contain(图片触边，可能背景留空) | auto | 数字px(不常用)`；
        - background-attachment：`background-attachment: fixed(固定) | scroll(滚动)`；
        - 以及复合属性 background；不区分顺序，但是若需要缩放，则：`位置/缩放`。
    - 标签的显示模式：块级元素（如div、h1等）和行内元素（如span、a等），以及行内块元素；
    - （细节）用display属性来控制或转换元素的显示模式。
- 综合昨天的知识和今早的新知识，做了两个综合案例。
- *新的快捷键：cmd + D：快速向下复制。*
- 下午与晚上场：5～5.5小时。学习了包括：
    - 伪类选择器（nth-child()等）、伪元素选择器（E::before/after）等；
    - **重点：盒子模型**，包括：
        - 边框线：border，如`border: 1px solid #66ccff;`；以及四个方向自定义；
        - 内边距：padding，如`padding: 10px`；可以四个方向自定义；可以有复合写法，**顺时针（上-右-下-左、上-左右-下、上下-左右）
          **；
        - 内边距尺寸之撑大盒子的问题：`box-sizing: border-box`  -- 内减模式；
        - 外边距：margin，与padding相同。不会撑大盒子。必须有width属性。**版心居中技巧：左右margin设置auto，如：**
          `margin: 0 center`；
    - 更多重点，包括：
        - 在CSS中，使用通配符选择器先清除默认样式，包括`margin`，`padding`，`box-sizing: border-box`等；
        - 盒子内容溢出，使用属性 `overflow`，包括`hidden`、`scroll`、`auto`；
        - 外边距（垂直方向）合并现象：取margin较大值；
        - 外边距塌陷问题：子级元素的margin属性导致的父级元素位移。解决办法：`取消子级margin，设置父级padding`；
          `为父级添加overflow:hidden`；`为父级添加border-top`；
        - 行内元素的内外边距问题：默认情况下，垂直方向不会受到影响；
        - 盒子圆角属性：`border-radius`，写法：`border-radius: 10px / 5%`
          ；以及复合写法，由左上角开始顺时针；正圆（正方形盒子，一半px或50%圆角）；胶囊（长方形盒子，高度一半的px）；
        - 盒子阴影属性：`box-shadow`，写法：
          `box-shadow: 0(x) 0(y) 10px(模糊半径--柔和程度) 10px(扩散半径--大小) #66ccff inset(内阴影)`；
    - 完成了两个综合案例，其中综合案例2非常具有代表性，建议多复习。

### Mar 26th, Day 06

- 「稳步」。
- 今天主要学习了CSS的一些进阶内容，包括：
- 复合选择器：如昨日提到的**后代选择器**，以及新的**子代选择器**，**并集选择器（逗号隔开，同时生效）**，**交集选择器（无间隔，表示“与”匹配）
  **
- 伪类选择器：主要学习了**hover**（鼠标悬停；任何标签到可以使用）；以及超链接的一些伪类（如a:link、a:visited、a:hover、a:active）
- 学习了CSS的三大特性：
    - 继承性：如font-family、color等文字属性会被子元素继承；所以通常可以写在body标签内。
    - 层叠性：后面定义的样式会覆盖前面的样式（如有冲突）。
    - 优先级：!important > 行内样式 > ID选择器 > 类选择器 > 标签选择器 > 通配符 > 继承样式
    - 拓展：如遇复合选择器，则需计算优先级。
- 最后学习了一些Emmet写法：通过一些快捷方式，由IDE自动补全代码。
- 今天时间不多，没有做更多综合案例。明天加把劲！

### Mar 25th, Day 05

- 「推进」。
- 今天正式开始CSS的学习。主要学习了CSS的基础。包括：
- 引入方式：内部样式（head嵌套style），外部样式（link引入），行内样式（style属性、配合JS）。
- 选择器：标签选择器、类选择、ID选择、后代选择器（未讲，属于此前已学习的知识）
- 文字控制属性：
    - font-family：字体；font-size：字号；font-style：样式（倾斜等）；font-weight：粗体；font：复合属性；
    - text-align：对齐方式；text-indent：首行缩进；text-decoration：文本装饰（下划线）等；*text-transform：大小写转换；*
    - line-height：行高； *letter-spacing：字母间距；word-spacing：单词间距；*
    - color：字体颜色；background-color：背景颜色；
- 小技巧：使用“标签名.类名”可快速补全一个包含类名的标签。

### Mar 24th, Day 04

- 「恢复」。
- 上午：学习了button的基本用法，包括type属性的button、sumbit、reset值。
- 下午：积极调整状态。学习了无语义标签div和span，以及字符实体（&nbsp;、&lt;、&gt;、&amp;）
- 综合了这一章节的内容，完成了两个综合案例。01主要是对列表的运用，02则是对表单的运用。其中，使用label标签来增强用户体验这一点很“新”，需要多用。
- 一些重点：
    - 对于radio单选，使用name属性分好组，否则没有单选效果。
    - checkbox是复选框；下拉菜单是select内嵌option，不要搞混。
    - 多用button，熟悉button。

### Mar 23rd, Day 03

- 注意饮食，吃坏肚子导致状态不佳了。
- 信息熵减。

### Mar 22nd, Day 02

- 休息的一天。
- 思考了一些哲学问题，写了点日记，和Grok聊心，心情放松很多。
- 不过没时间写代码了……比较可惜。周日加把劲吧！

### Mar 21st, Day 01

梳理了一下Git的基本用法，包括在GitHub上建仓库（不要有初始化选项），Commit与Push，Pull等；并意识到一个关键：在Push前先Pull一遍，避免其他修改的冲突。即“Pull -
Commit - Push”。

- 学习（复习）了HTML的基本语法和结构，基本的标签，注释，标题标签，段落标签，换行/水平线，文本格式标签（下划线那些），超链接标签，多媒体（图像、音频、视频），完成了两个十分简单的案例。
- 学习（复习）了列表（有序、无序、定义列表），表格（表头、表格标题、合并单元格），表单（文本框、单选框、复选框、下拉列表；第二日打算从“按钮”部分继续）。
- 今日有效学习时约：4～5小时，保持合理时间分配（如必要的中断休息），提高效率。再接再厉！

</details>
