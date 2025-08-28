/**
 * 目标1：信息渲染
 *  1.1 获取用户的数据
 *  1.2 回显数据到标签上
 * */

/**
 * 获取个人信息并渲染页面
 */

const creator = 'rainn'

axios({
  url: 'https://hmajax.itheima.net/api/settings',
  method: 'GET',
  params: {
    creator
  },
}).then(result => {
  console.log(result.data.data)
  const personalInfo = result.data.data
  const personalInfoKeys = Object.keys(personalInfo)

  personalInfoKeys.forEach(key => {
    if (key === 'avatar') {
      // 头像：是img，改src属性
      document.querySelector('.prew').src = personalInfo[key]
    } else if (key === 'gender') {
      // 注意，这里是select-all，personalInfo[key]返回对应性别的数字
      document.querySelectorAll('.gender')[personalInfo[key]].checked = true
    } else {
      // 其余部分，类名与对象属性名一致
      document.querySelector(`.${key}`).value = personalInfo[key]
    }
  })
})

/**
 * 目标2:修改头像
 *  2.1 获取头像文件(制作form-data)
 *  2.2 上传到服务器与回显
 */
document.querySelector('.upload').addEventListener('change', e => {
  // console.log(e.target.files[0])
  // 获取头像文件
  const fd = new FormData()
  fd.append('avatar', e.target.files[0])
  fd.append('creator', creator)
  // 上传到服务器
  axios({
    url: 'https://hmajax.itheima.net/api/avatar',
    method: 'PUT',
    data: fd,
  }).then(result => {
    // 更新页面头像
    document.querySelector('.prew').src = result.data.data.avatar
  })
})

/**
 * 目标3: 修改个人信息
 */
document.querySelector('.submit').addEventListener('click', () => {
  const userForm = document.querySelector('.user-form')
  const formData = serialize(userForm, { hash: true, empty: true })
  // console.log(formData)

  // 加入必要字段和修改数值类型
  formData.creator = creator
  formData.gender = Number(formData.gender)

  console.log(formData)

  // 传给服务器
  axios({
    url: 'https://hmajax.itheima.net/api/settings',
    method: 'PUT',
    data: formData
  }).then(re => {
    // 制作一个消息提示框
    const toastDom = document.querySelector('.my-toast')
    const toast = new bootstrap.Toast(toastDom)

    toast.show()
  })
})