/**
 * 目标1：完成省市区下拉列表切换
 *  1.1 设置省份下拉菜单数据
 *  1.2 切换省份，设置城市下拉菜单数据，清空地区下拉菜单
 *  1.3 切换城市，设置地区下拉菜单数据
 */

axios({
  url: 'https://hmajax.itheima.net/api/province'
}).then(result =>{
  console.log(result)
  const provinceOptionStr = result.data.list.map(current => {
    return `<option value="${current}">${current}</option>`
  }).join('')
  document.querySelector('.province').innerHTML = '<option>省份</option>' + provinceOptionStr
})

document.querySelector('.province').addEventListener('change', async e => {
  console.log(e.target.value)
  const cities = await axios({url: 'https://hmajax.itheima.net/api/city', params: { pname: e.target.value }})
  console.log(cities)
  const cityOptionStr = cities.data.list.map(currentCity => {
    return `<option value="${currentCity}">${currentCity}</option>`
  })
  document.querySelector('.city').innerHTML = '<option>城市</option>' + cityOptionStr

  document.querySelector('.area').innerHTML = '<option>地区</option>'
})


document.querySelector('.city').addEventListener('change', async e => {
  const pname = document.querySelector('.province').value
  const areas = await axios({url: 'https://hmajax.itheima.net/api/area', params: {pname, cname: e.target.value}})
  const areasOptionStr = areas.data.list.map(currentArea => {
    return `<option value = "${currentArea}" >${currentArea}</option>`
  })
  document.querySelector('.area').innerHTML = '<option>地区</option>'
  document.querySelector('.area').innerHTML = '<option>地区</option>' + areasOptionStr

})


/**
 * 目标2：收集数据提交保存
 *  2.1 监听提交的点击事件
 *  2.2 依靠插件收集表单数据
 *  2.3 基于axios提交保存，显示结果
 */

document.querySelector('.submit').addEventListener('click', async () => {
  try {
    const form = document.querySelector('.info-form')
    const data = serialize(form, { hash: true, empty: true } )

    const result = await axios({
      url: 'https://hmajax.itheima.net/api/feedback',
      method: 'POST',
      data
    })

    alert(result.data.message)
  } catch (e) {
    console.dir(e)
    alert(e.response.data.message)
  }



})