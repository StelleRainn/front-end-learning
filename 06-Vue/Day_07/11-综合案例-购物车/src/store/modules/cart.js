import axios from 'axios'

const cart = {
  namespaced: true,

  state: () => {
    return {
      list: []
    }
  },

  mutations: {
    changeList (state, payload) {
      state.list = payload
    },

    // 2.4 根据id，修改对应前端count数据
    changeCount (state, payload) {
      const item = state.list.find(item => item.id === payload.id)
      item.count = payload.count
    }
  },
  actions: {
    // 1.2 getList获取数据后，发出请求，在mutations中修改数据
    async getList (context) {
      const res = await axios.get('http://localhost:3000/cart')
      context.commit('changeList', res.data)
    },

    async changeCountAsync (context, obj) {
      const id = obj.id
      const count = obj.count
      // 2.2 获取数据后，发送请求，修改后端数据 （axios.patch）
      await axios.patch(`http://localhost:3000/cart/${id}`, {
        count
      })
      // 2.3 后端数据修改完毕，前端数据也要修改，提交给mutations
      context.commit('changeCount', {
        id,
        count
      })
    }
  },
  getters: {
    // 3.1 使用getters计算商品数量与总价格
    totalCount: state => {
      return state.list.reduce((total, current) => total + current.count, 0)
    },
    totalPrice: state => {
      return state.list.reduce((prev, current) => prev + current.count * current.price, 0)
    }
  }

}

export default cart
