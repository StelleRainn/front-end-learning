/**
 * 目标1：渲染图书列表
 *  1.1 获取数据
 *  1.2 渲染数据
 */

// 声明外号
const creator = 'rainn'

// 渲染图书列表函数
function getBooksList () {
  axios({
    url:'http://hmajax.itheima.net/api/books',
    method: 'GET',
    params: {
      creator
    }
  }).then(re => {
    // console.log(re.data.data)
    // 数组map函数返回一个新数组，用join方法合并数组
    document.querySelector('.list').innerHTML = re.data.data.map((item, index) => {
      return `
      <tr>
          <td>${ index+1 }</td>
          <td>${ item.bookname }</td>
          <td>${ item.author }</td>
          <td>${ item.publisher }</td>
          <td data-id = ${ item.id }>
            <span class="del">删除</span>
            <span class="edit">编辑</span>
          </td>
        </tr>
      `
    }).join('')
  })
}

getBooksList()


/**
 * 目标2：新增图书
 * 2.1 新增弹框，控制显隐
 * 2.2 收集表单数据，提交到服务器保存
 * 2.3 刷新图书列表，清空表单
 * */

const addModalDom = document.querySelector('.add-modal')
const addModal = new bootstrap.Modal(addModalDom)
document.querySelector('.add-btn').addEventListener('click', () => {
  const form = document.querySelector('.add-form')
  const newBook = serialize(form, {hash: true, empty: true})

  // 对象解构
  const {bookname, author, publisher} = newBook

  axios({
    url: 'http://hmajax.itheima.net/api/books',
    method: 'POST',
    data: {
      bookname,
      author,
      publisher,
      creator,
    }
  }).then(re => {
    getBooksList()

    form.reset()

    addModal.hide()
  })

})


/**
 * 目标3：删除图书
 * 3.1 删除元素绑定事件（获取图书ID）（事件委托）
 * 3.2 调用删除接口
 * 3.3 刷新图书列表
 */

document.querySelector('.list').addEventListener('click', e => {
  // 在目标1中，添加一本新书时，为td添加了自定义属性“书本ID”，用以制定要删除的图书
  // console.log(e.target.parentNode.dataset.id)
  if (e.target.classList.contains('del')) {
    const bookID = e.target.parentNode.dataset.id
    axios({
      // 参数位于path中
      url: `https://hmajax.itheima.net/api/books/${bookID}`,
      method: 'DELETE',
    }).then(() => {
      getBooksList()
    })
  }
})

/**
 * 目标4：编辑图书
 * 4.1 编辑弹框的显隐
 * 4.2 获取当前编辑图书的数据，回显到编辑表单
 * 4.3 提交保存修改，刷新列表
 */

const editModalDom = document.querySelector('.edit-modal')
const editModal = new bootstrap.Modal(editModalDom)

document.querySelector('.list').addEventListener('click', e => {
  if (e.target.classList.contains('edit')) {
    // 获取当前的图书数据，回显到编辑表单
    const bookID = e.target.parentNode.dataset.id
    axios({
      // 路径传参
      url: `https://hmajax.itheima.net/api/books/${bookID}`,
      method: 'GET',
    }).then(re => {
      // 标签“类名”和对象“属性”名一致，遍历数据对象，使用属性去获取对应的标签，快速赋值
      const book = re.data.data // {id: 670992, bookname: '《三国演义》', author: '罗贯中', publisher: '人民文学出版社'}
      const keys = Object.keys(book) // ['id', 'bookname', 'author', 'publisher']
      keys.forEach(item => {
        document.querySelector(`.edit-form .${item}`).value = book[item] // book[item] 动态访问对象属性
      })
    })
    editModal.show()
  }
})

document.querySelector('.edit-btn').addEventListener('click', ()=> {
  const editForm = document.querySelector('.edit-form')
  const { id, bookname, author, publisher } = serialize(editForm, {hash: true, empty: true})

  // ID是隐藏属性，可被获取，但不让用户看见与修改
  axios({
    url: `https://hmajax.itheima.net/api/books/${id}`,
    method: 'PUT',
    data: {
      bookname,
      author,
      publisher,
      creator,
    }
  }).then(() => {
    getBooksList()

    editModal.hide()
  })
})
