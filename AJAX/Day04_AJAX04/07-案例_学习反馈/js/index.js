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