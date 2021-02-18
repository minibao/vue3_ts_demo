<template>
  <div>
    {{msg}}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  setup(props, context) {
    // props: Proxy对象，里面有父级组件向子级组件传递的数据，并且在子级组件中使用props接收到的所有的属性
    // context参数也是一个对象，里面有attrs对象，emit方法，slots插槽
    // props: 包含props配置声明且传入了的所有属性的对象
    // attrs: 包含没有在props配置中声明的属性的对象, 相当于 this.$attrs
    // slots: 包含所有传入的插槽内容的对象, 相当于 this.$slots
    // emit: 用来分发自定义事件的函数, 相当于 this.$emit
    console.log(props)
    console.log(context.attrs)
    console.log(context.emit)
    console.log(context.slots)
    const msg1 = 10
    return {
      msg1
    }
  },
  data() {
    return {
      msg: 11
    }
  }
})
</script>

<style lang="less" scoped>
</style>
