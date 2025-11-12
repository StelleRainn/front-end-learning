# AJAX基础

## axios

### axios基本使用

基础三步走：引入js；传入**配置对象**；用`then`接受结果并作后续处理

```html
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

### URL的基本了解

URL，即统一资源定位符，主要构成：**协议，域名，资源路径**。

协议：`http://` & `https://` 。规定数据传输的格式 。
域名：必须要写的。标记服务器在互联网中的方位。
资源路径：标记资源在服务器下的具体位置。

**URL中的端口号**：

定义：域名后的冒号后面的数字。
作用：标记服务器的端口号，默认是80（http）或443（https），如果服务器使用了其他端口号，则需要在URL中指定。范围：0-65535，其中1023以下的端口号是**系统保留端口**，不能使用。
**常见几种服务：80（HTTP），443（HTTPS），21（FTP），3306（MySQL），8080（备用HTTP端口）等。**


### 查询参数 params

浏览器提供给服务器的**额外参数**，让服务器返回浏览器想要的信息。

语法 `url?params1=value1&params2=value2`

axios中，可以在配置对象中加入**params对象**以使用查询参数：

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


### 请求方法 method

指`axios`配置对象中的`method`，参数包括：**GET（获取数据，可以省略），POST（提交数据），PUT，DELETE，PATCH**。

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

### 错误处理 catch方法

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

### HTTP协议之请求报文与响应报文

指基于HTTP协议，发给服务器（即：请求）或返回给浏览器（即：响应）的内容

请求报文包括请求头、请求行、请求体，在浏览器中，通过“网络”-“Fetch/XHR”可以查看，包括标头（Headers），载荷（Payload）

响应报文基本一致。关注HTTP响应状态码：用来表明请求是否成功完成：
**2xx：成功 4xx：客户端错误 5xx：服务端错误 （404：找不到资源）**

### 接口文档

由后端工程师完成的，描述接口的文档，包括与服务器通信时使用的URL，请求方法，参数类型等。

### form-serialize插件

`form-serialize`是一个js脚本，可以**快速获取表单控件的`value`**引入后可通过`serialize()`函数快速获取指定表单中所有控件的`value`值。

```html
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

### FormData

在`axios`中，有时接口文档的参数类型可能为`FormData`，通过这种方式上传图片到服务器。

```js
  /**
   * 目标：图片上传，显示到网页上
   *  1. 获取图片文件
   *  2. 使用 FormData 携带图片文件
   *  3. 提交到服务器，获取图片url网址使用
  */

  // 文件选择：change改变事件
  document.querySelector('.upload').addEventListener('change', e => {
    console.log(e.target.files[0])
    // File {name: 'C51D4E94-908E-4DEA-88E0-A26BC414CE94_1_105_c.jpeg', lastModified: 1750349978690, ...}

    // FormData(重点)
    const fd = new FormData()
    fd.append('img', e.target.files[0])

    axios({
      url: 'https://hmajax.itheima.net/api/uploadimg',
      method: 'POST',
      data: fd,
    }).then(result => {
      console.log(result)
      console.log(result.data.data.url)
      document.querySelector('.my-img').src = result.data.data.url
    })
  })
```

## AJAX原理

### XMLHttpRequest

`XMLHttpRequest`是浏览器提供的一个API，用于在不重新加载页面的情况下与服务器进行异步通信。它可以发送HTTP请求并接收响应。

#### 基本使用

```js
  /**
   * 目标：使用XMLHttpRequest对象与服务器通信
   *  1. 创建 XMLHttpRequest 对象
   *  2. 配置请求方法和请求 url 地址
   *  3. 监听 loadend 事件，接收响应结果
   *  4. 发起请求
   */

  let xhr = new XMLHttpRequest()
  xhr.open('GET', 'https://hmajax.itheima.net/api/province')
  xhr.addEventListener('loadend', () => {
    const result = xhr.response // 获取的是JSON字符串
    // console.log(JSON.parse((result)))
    document.querySelector('.my-p').innerHTML = JSON.parse(result).list.join('<br>')
  })
  xhr.send()
```

#### XHR查询参数

可以在`open`方法中添加查询参数，格式为`url?key1=value1&key2=value2`。

```js
  xhr.open('GET', 'https://hmajax.itheima.net/api/city?pname=广西壮族自治区')
```

*使用`URLSearchParams`可以更方便地构建查询参数：*

```js
/**
 * 目标: 根据省份和城市名字, 查询对应的地区列表
 */
document.querySelector('.sel-btn').addEventListener('click', () => {
    const pname = document.querySelector('.province').value
    const cname = document.querySelector('.city').value

    // 使用URLSearchParams制作查询参数
    const queryObj = {pname, cname}
    const paramsObj = new URLSearchParams(queryObj)
    const queryString = paramsObj.toString() 
    // pname=%E5%8C%97%E4%BA%AC&cname=%E5%8C%97%E4%BA%AC%E5%B8%82


    // 插入查询参数进行查询
    const xhr = new XMLHttpRequest()
    xhr.open('GET', `https://hmajax.itheima.net/api/area?${queryString}`)
    xhr.addEventListener('loadend', ()=> {
      console.log(xhr.response)

      const data = JSON.parse(xhr.response).list
      console.log(data)

      const htmlStr = data.map( item => `<li class="list-group-item">${item}</li>` ).join('')
      console.log(htmlStr)

      document.querySelector('.list-group').innerHTML = htmlStr
    })
    xhr.send()
  }
)
```

#### XHR数据提交

核心：在`send()`方法中传入数据。

*在准备数据时，记得使用`setRequestHeader()`设置标头*

```js
/**
 * 目标：使用xhr进行数据提交-完成注册功能
 */
document.querySelector('.reg-btn').addEventListener('click', () => {
  const xhr = new XMLHttpRequest()
  xhr.open('POST', 'https://hmajax.itheima.net/api/register')
  xhr.addEventListener('loadend', () => { console.log(xhr.response) })

  // 准备要提交的数据
  xhr.setRequestHeader('Content-Type', 'application/json')
  const user = {username: 'StelleRainn', password: '512451'}
  const userStr = JSON.stringify(user)

  // 提交数据
  xhr.send(userStr)
})

/**
 * 在“网络 - Fetch/XHR - 标头“中查看标头，在”载荷“中查看请求体。
 */
```

### Promise 对象（重点）

`Promise`是JavaScript中的一个对象，用于表示异步操作的最终完成（或失败）及其结果值。它可以让我们更方便地处理异步操作，避免回调地狱。

#### Promise的基本使用

```js
// 创建Promise对象，resolve和reject分别是两个回调函数
const promise = new Promise((resolve, reject) => {
  // 异步操作,resolve函数触发后续then执行，reject函数触发catch执行
  setTimeout(() => {
    const success = true // 模拟操作成功或失败
    if (success) {
      resolve('操作成功') // 成功时调用 resolve
    } else {
      reject('操作失败') // 失败时调用 reject
    }
  }, 1000)
})

// 使用then方法处理成功结果，catch方法处理失败结果
promise.then(result => {
  console.log(result) // 输出: 操作成功
}).catch(error => {
  console.error(error) // 输出: 操作失败
})
```

#### Promise的三种状态

`Promise`有三种状态：**pending（等待中）**、**fulfilled（已完成）**和**rejected（已拒绝）**。

1. **pending**: `new Promise()`的初始状态；表示待定，异步操作尚未完成。
2. **fulfilled**: 异步操作成功完成，**调用`resolve()`方法后进入该状态**。
3. **rejected**: 异步操作失败，**调用`reject()`方法后进入该状态**。

**NOTE**：一旦由`pending`变为`fulfilled`或`rejected`状态，就不能再改变状态了。

```js
const p = new Promise((resolve, reject) => {
  console.log('pending状态中的函数会立即执行（同步任务）')

  setTimeout(() => {
    // resolve('模拟执行成功')
    reject(new Error('模拟失败结果'))
  }, 2000)
})

console.log(p)
// 在页面刷新后的2s内展开，可以看见 PromiseState: "pending"。2s后展开则为fulfilled或rejected

p.then(result => {
  console.log(result)
}).catch(error => {
  console.log(error)
})
```

#### Promise的链式调用

1. **回调函数地狱**

回调函数地狱，指的是当**多个异步操作需要依赖前一个操作的结果**时，嵌套的回调函数会导致代码难以阅读和维护。

**可读性差；耦合性严重；异常无法获取。**

2. **Promise 的链式调用**

`Promise`通过`then()`方法支持链式调用，可以将多个异步操作串联起来，使代码更清晰易读。

**原理**：每个`then()`方法返回一个新的`Promise`对象，从而可以继续使用`then()`方法进行后续操作。

```js
// new Promise() -> .then(回调函数) -> 新的Promise对象(回调函数中的return结果)
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('第一个异步操作完成')
  }, 1000)
})

// 在第一个Promise的then中返回一个新的Promise
const p2 = p.then(result => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${result}的基础上，第二个异步操作完成`)
    }, 1000)
  })
})

p2.then(result => {
  console.log(result) // 输出: 第一个异步操作完成的基础上，第二个异步操作完成
}).catch(error => {
  console.error(error)
})
```

#### Promise.all() 静态方法

`Promise.all()`是一个静态方法，用于将多个`Promise`对象组合成一个新的`Promise`对象。当所有的`Promise`都成功时，返回一个包含所有结果的数组；如果有任何一个`Promise`失败，则返回失败的结果。

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('第一个异步操作完成')
  }, 1000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('第二个异步操作完成')
  }, 2000)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('第三个异步操作完成')
  }, 3000)
})

Promise.all([p1, p2, p3]).then(results => {
  console.log(results) // 输出: ['第一个异步操作完成', '第二个异步操作完成', '第三个异步操作完成']
}).catch(error => {
  console.error(error)
})
```

实践例子：

```js
const codeArray = ['110100', '310100', '440100', '440300']

const promiseArray = codeArray.map((city) => {
  // axios本身返回一个Promise对象
  return axios({url: 'https://hmajax.itheima.net/api/weather', params: {city}})
})

const p = Promise.all(promiseArray)

p.then(result => {
  document.querySelector('.my-ul').innerHTML = result.map(element => {
    return `<li>${element.data.data.area} --- ${element.data.data.weather}</li>`
  }).join('')
})
```

### 使用XHR和Promise模拟基础axios

```js
function myAxios (config) { // config: axios 配置对象
  return new Promise((resolve, reject) => {

    // Pt.2 支持查询参数
    if(config.params) {
      const paramsObj = new URLSearchParams(config.params)
      const paramsString = paramsObj.toString()
      config.url += `?${paramsString}`
    }

    // Pt.1 基础部分（XHR的基本使用步骤）
    const xhr = new XMLHttpRequest()
    xhr.open(config.method || 'GET', config.url)
    xhr.addEventListener('loadend', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(JSON.parse(xhr.response))
      } else {
        reject(new Error(xhr.response))
      }
    })

    // Pt.3 支持提交数据
    if(config.data) {
      xhr.setRequestHeader('Content-Type', 'application/json')
      const data = JSON.stringify(config.data)
      xhr.send(data)
    } else {
      xhr.send()
    }

  })
}
```

_**结论**：`axios`自身会返回一个`Promise`对象，可以使用`then()`和`catch()`方法处理结果和错误。_

### async 与 await

`async & await`是ES2017引入的语法糖，用于简化`Promise`的使用，使异步代码更像同步代码。

**概念**：在`async`函数内，使用`await`关键字，获取`Promise`对象"成功状态"结果值

**注意**：`await`必须用在`async`修饰的函数内（`await`会阻止"异步函数内"代码继续执行，原地等待结果）

使用`try-catch`捕获错误

```js
async function getData() {
  try {
    const pObj = await axios({url: "https://hmajax.itheima.net/api/province"})
    const pname = pObj.data.list[0]

    const cObj = await axios({url: "https://hmajax.itheima.net/api/city", params: { pname }})
    const cname = cObj.data.list[0]

    const aObj = await axios({url: "https://hmajax.itheima.net/api/area1", params: { pname, cname }})
    const area = aObj.data.list[0]

    document.querySelector('.province').innerHTML = pname
    document.querySelector('.city').innerHTML = cname
    document.querySelector('.area').innerHTML = area
  } catch (e) {
    console.dir(e.response.data.message)
  }

}

getData()
```
