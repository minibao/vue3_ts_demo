// 该hook是了为了封闭一个axios的实例
import axios from 'axios'
import { ref } from 'vue'

export default function<T>(url: string) {
  // 加载的状态
  const loading = ref(true)
  // 请求数据
  const data = ref<T>()
  // 错误提示
  const errorMsg = ref('')

  // 发送请求
  axios.get(url).then(res => {
    loading.value = false
    data.value = res.data
    errorMsg.value = 'ok'
    console.log(res.data)
  }).catch(err => {
    loading.value = false
    data.value = err.data || []
    errorMsg.value = 'false'
  })
  return {
    loading,
    data,
    errorMsg
  }
}
