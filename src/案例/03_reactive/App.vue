<template>
  <div>
    <h2>reactive的使用</h2>
    <p>name: {{user.name}}</p>
    <p>age: {{user.age}}</p>
    <p>job: {{user.job}}</p>
    <p>性别: {{user.gender}}</p>
    <button @click="updateCount">更新</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

// reactive主要是把对象数据展示成响应式数据
// 作用: 定义多个数据的响应式
// const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
// 响应式转换是“深层的”：会影响对象内部所有嵌套的属性
// 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的
export default defineComponent({
  name: 'App',
  setup() {
    // 返回的是一个Proxy的代理对象，被代理者就是reactive中传入的对象
    const obj = {
      name: '李白',
      age: 9999,
      job: '打野'
    }
    // 返回一个Proxy的代理对象，被代理的目标对象就是obj
    // user现在是代理对象，obj是目标对象
    // user的类型是Proxy类型
    const user = reactive<any>(obj)
    console.log(user) // 显示的是被代理的对象
    const updateCount = () => {
      // obj.name = '1111111' // 直接使用目标对象的方式来更新数据是不行的，只能使用代理对象的方式来更新数据
      // user.age++
      // user.name += '_'
      user.gender = '男'
    }

    return {
      user,
      updateCount
    }
  }
})
</script>
