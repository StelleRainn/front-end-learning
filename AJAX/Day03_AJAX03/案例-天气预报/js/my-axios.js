function myAxios (config) {
  return new Promise((resolve, reject) => {

    // Pt.2 支持查询参数
    if(config.params) {
      const paramsObj = new URLSearchParams(config.params)
      const paramsString = paramsObj.toString()
      config.url += `?${paramsString}`
    }

    // Pt.1 基础部分
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