<template>
  <div>
    <h2>setup和ref的基本使用</h2>
    <h3>{{count}}</h3>
    <button @click="updateCount">更新</button>
  </div>
</template>

<script lang="ts">
// 这里使用ts代码

// defineComponent函数，目的是定义一个组件，内部可以传入一个配置对象
import { defineComponent, ref } from 'vue'

// setup：
// 新的option, 所有的组合API函数都在此使用, 只在初始化时执行一次
// 函数如果返回对象, 对象中的属性或方法, 模板中可以直接使用
// setup是在beforeCreate生命周期之前就执行了，而且就执行一次，由此可以得出，
// setup在执行的时候当前的组件还没有创建出来，组件的实例对象还没有创建，this根本不能用，undefined,不能通过this去调用data等
// setup的返回值是一个对象，内部的属性和方法是给html模板使用的
// 如果有重名, setup优先，自测重名会报错
// 一般不要混合使用: methods中可以访问setup提供的属性和方法, 但在setup方法中不能访问data和methods
// setup不能是一个async函数: 因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性数据

// ref
// 作用: 定义一个数据的响应式
// 语法: const xxx = ref(initValue)
// - 创建一个包含响应式数据的引用(reference)对象
// - js中操作数据: xxx.value
// - 模板中操作数据: 不需要.value
// 一般用来定义一个基本类型的响应式数据

// 暴露出去一个定义好的组件
export default defineComponent({
  name: 'App',
  beforeCreate() {
    console.log(111)
  },
  // setup是组合api中的函数,是组合api的入口
  setup() {
    const count = ref(0)
    const updateCount = () => {
      console.log(1111)
      // count++ // 这里的数据还不是响应式数据,得换成ref，用ref定义才是响应式数据
      count.value++
    }
    return {
      count,
      updateCount
    }
  }
})
</script>
