
<template>
  <button @click="increment">
    Count is: {{ count }}, double is {{ double }}, click to increment.
  </button>
</template>

<script>
import { ref, computed, onMounted } from 'vue' // 组件 API 将组件属性公开为函数，因此第一步是导入所需的函数。
// ref 创建响应性引用
// ref作为渲染上下文属性返回，在setup返回的对象中，并在模板中使用时，它会自动解套，无需在模板内额外书写.value
// vue本身已经有ref的概念了，只是了为了在模板中获取dom元素或者组件实例。新的ref系统同时用于逻辑状态和模板引用
// 个人理解，无非是在原有的引用基础上使其改变成响应式引用了（只限响应式对象，数组和map结构除外）

export default {
  setup() {
    const count = ref(0)
    const double = computed(() => count.value * 2)
    const increment = () => count.value++
    return {
      count,
      double,
      increment
    }
  }
}
</script>
