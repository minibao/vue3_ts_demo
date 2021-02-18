<template>
  <div>
    <h2>自定义hook函数</h2>
    <h2>x: {{x}}, y: {{y}}</h2>
    <h3 v-if="loading">loading……</h3>
    <h3 v-else>加载数据完成…{{errorMsg}}</h3>
    <span :key="item.id" v-for="item in data">
      <div>id: {{item.id}}</div>
      <div>name: {{item.name}}</div>
      <div>age: {{item.age}}</div>
      <div>----------------------</div>
    </span>
    <div></div>
    <div></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import useMousePostion from './hooks/useMousePostion'
import userRequest from './hooks/useRequest'

interface IUser{ // 定义一个接口类型来限制和约束返回的数据
  id: string,
  name: string,
  age: number
}
export default defineComponent({
  name: 'App',
  setup() {
    const { x, y } = useMousePostion()
    const { loading, data, errorMsg } = userRequest<IUser[]>('/mock/data.json')

    watch(data, () => {
      if (data.value) {
        console.log(data.value.length)
      }
    })
    return {
      x,
      y,
      loading,
      data,
      errorMsg
    }
  }
})
</script>

<style lang="less" scoped>
</style>
