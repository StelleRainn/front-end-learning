/**
 * 目标：网站-更换背景
 *  1. 选择图片上传，设置body背景
 *  2. 上传成功时，"保存"图片url网址
 *  3. 网页运行后，"获取"url网址使用
 * */

document.querySelector('.bg-ipt').addEventListener('change', e=> {

  const fd = new FormData()
  fd.append('img', e.target.files[0])

  axios({
    url: 'https://hmajax.itheima.net/api/uploadimg',
    method: 'POST',
    data: fd,
  }).then(result => {
    console.log(result)
    document.body.style.backgroundImage = `url(${result.data.data.url})`

    // 使用本地存储来确保刷新后不会丢失
    localStorage.setItem('bgIMG', result.data.data.url)
  })
})

const bgUrl = localStorage.getItem('bgIMG')

//使用逻辑中断避免初次加载因没有本地存储而报错
bgUrl && (document.body.style.backgroundImage = `url(${bgUrl})`)