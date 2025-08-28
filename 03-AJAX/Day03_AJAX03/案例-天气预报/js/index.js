/**
 * 目标1：默认显示-北京市天气
 *  1.1 获取北京市天气数据
 *  1.2 数据展示到页面
 */

function getWeather (cityCode = '110100') {
  myAxios({
    url: 'https://hmajax.itheima.net/api/weather',
    params: {
      city: cityCode
    }
  }).then(result => {
    console.log(result)

    // 将获取到的数据依次渲染到页面中
    const weatherData = result.data

    // 1. 日期
    document.querySelector('.title').innerHTML =
      `<span class="dateShort">${weatherData.date}</span>
        <span class="calendar">农历&nbsp;
          <span class="dateLunar">${weatherData.dateLunar}</span>
        </span>`

    // 2. 城市名
    document.querySelector('.area').innerHTML = `${weatherData.area}`

    // 3. 当前天气-大
    document.querySelector('.weather-box').innerHTML =
      `<div class="tem-box">
        <span class="temp">
          <span class="temperature">${weatherData.temperature}</span>
          <span>°</span>
        </span>
      </div>
      <div class="climate-box">
        <div class="air">
          <span class="psPm25">${weatherData.psPm25}</span>
          <span class="psPm25Level">${weatherData.psPm25Level}</span>
        </div>
        <ul class="weather-list">
          <li>
            <img src="./imgs/小雨-line.png" class="weatherImg" alt="">
            <span class="weather">${weatherData.weather}</span>
          </li>
          <li class="windDirection">${weatherData.windDirection}</li>
          <li class="windPower">${weatherData.windPower}</li>
        </ul>
      </div>`

    // 4. 当前天气-小
    document.querySelector('.today-weather').innerHTML =
      `<div class="range-box">
        <span>今天：</span>
        <span class="range">
          <span class="weather">${weatherData.todayWeather.weather}</span>
          <span class="temNight">${weatherData.todayWeather.temNight}</span>
          <span>-</span>
          <span class="temDay">${weatherData.todayWeather.temDay}</span>
          <span>℃</span>
        </span>
      </div>
      <ul class="sun-list">
        <li>
          <span>紫外线</span>
          <span class="ultraviolet">${weatherData.todayWeather.ultraviolet}</span>
        </li>
        <li>
          <span>湿度</span>
          <span class="humidity">${weatherData.todayWeather.humidity}</span>%
        </li>
        <li>
          <span>日出</span>
          <span class="sunriseTime">${weatherData.todayWeather.sunriseTime}</span>
        </li>
        <li>
          <span>日落</span>
          <span class="sunsetTime">${weatherData.todayWeather.sunsetTime}</span>
        </li>
      </ul>`

    // 5. 周天气预报
    const dayForecastStr = weatherData.dayForecast.map(item => {
      return `<li class="item">
          <div class="date-box">
            <span class="dateFormat">${item.dateFormat}</span>
            <span class="date">${item.date}</span>
          </div>
          <img src="./imgs/多云.png" alt="" class="weatherImg">
          <span class="weather">${item.weather}</span>
          <div class="temp">
            <span class="temNight">${item.temNight}</span>-
            <span class="temDay">${item.temDay}</span>
            <span>℃</span>
          </div>
          <div class="wind">
            <span class="windDirection">${item.windDirection}</span>
            <span class="windPower">${item.windPower}</span>
          </div>
        </li>`
    }).join('')
    console.log(dayForecastStr)
    document.querySelector('.week-wrap').innerHTML = dayForecastStr
  })
}

getWeather()

/**
 * 目标2：搜索城市列表
 * 2.1 绑定input事件，获取关键字
 * 2.2 获取展示城市列表数据
 */
document.querySelector('.search').addEventListener('input', (e) => {
  // console.log(e.target.value)
  myAxios({
    url: 'https://hmajax.itheima.net/api/weather/city',
    params: {
      city: e.target.value
    }
  }).then(result => {
    console.log(result)
    document.querySelector('.search-list').innerHTML = result.data.map(item => {
      return `<li class="city-item" data-citycode = ${item.code}>${item.name}</li>`
    }).join('')
  })

})

/**
 * 目标3: 切换城市天气
 * 3.1 绑定城市点击事件，获取城市Code值
 * 3.2 调用获取并展示天气的函数（目标1）
 */
document.querySelector('.search-list').addEventListener('click', ev => {
  if (ev.target.classList.contains('city-item')) {
    // NOTE：cityCode在被添加为自定义属性时会强制小写（目标2）
    getWeather(ev.target.dataset.citycode)
  }
})