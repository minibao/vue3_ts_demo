
<template>
  <button @click="increment">
    Count is: {{ count }}, double is {{ double }}, click to increment.
  </button>
</template>

<script>
import { ref, computed, onMounted } from 'vue' // 组件 API 将组件属性公开为函数，因此第一步是导入所需的函数。
// ref 创建响应性引用
// computed 建立计算属性
// onMounted 访问安装的生命周期 hook
// https://vue-composition-api-rfc.netlify.app/zh/#api-介绍

export default {
  setup() {
    // 1.setup函数是一个新的组件选项，作为在组件内使用Composition API的入口点。
    // 2.调用时机：创建组件实例，然后初始化props,紧接着就调用setup函数。从生命钩子的视角来看，它会在beforCreate钩子之前被调用。
    // 3.模板中使用：如果setup返回一个对象，则对象的属性将会被合并到组件模板的渲染上下文。
    // 4.渲染函数：setup也能返回一个函数，函数中也能使用当前setup函数作用域中的响应式数据
    // 5.setup参数：每个参数是props，props对象是响应式的，第二个参数提供了一个上下文对象，可用当作this来用
    // 它只是一个将属性和函数返回到模板的函数而已。我们在这里声明所有响应性属性、计算属性、观察者和生命周期 hook，然后将它们返回，以便可以在模板中使用它们
    const count = ref(0)
    const double = computed(() => count.value * 2)

    function increment() {
      count.value++
    }

    onMounted(() => console.log('component mounted!'))

    return { // 返回的对象会被合并到组件模板的上下文里去
      count,
      double,
      increment
    }
  }
}
</script>
