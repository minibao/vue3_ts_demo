<template>
  <div>
    <h2>toRefs的使用</h2>
    <h3>{{age}}</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

// 把一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref
// 应用: 当从合成函数返回响应式对象时，toRefs 非常有用，这样消费组件就可以在不丢失响应式的情况下对返回的对象进行分解使用
// 问题: reactive 对象取出的所有属性值都是非响应式的
// 解决: 利用 toRefs 可以将一个响应式 reactive 对象的所有原始属性转换为响应式的 ref 属性

export default defineComponent({
  name: 'App',
  setup() {
    const user = reactive({
      id: '001',
      name: '小王',
      age: 12
    })
    const userToRefs = toRefs(user)
    setInterval(() => {
      userToRefs.age.value++
    }, 1000)
    return {
      ...userToRefs // 不是响应式的数据
    }
  }
})
</script>

<style lang="less" scoped>
</style>
