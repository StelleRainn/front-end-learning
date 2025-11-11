import axios from "axios"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useChannelStore = defineStore('channel', () => {
  const channelList = ref([])

  // actions 中也可以直接操纵异步操作
  const getChannelList = async () => {
    const res = await axios.get('http://geek.itheima.net/v1_0/channels')
    console.log(res.data.data.channels)
    channelList.value = res.data.data.channels
  }

  return {
    channelList, getChannelList
  }
})
