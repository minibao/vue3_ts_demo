
<!--
  - 原生的写法，比较推荐的，后期熟悉了再配合ts风格，能写出高质量并且优雅的代码
-->

<template>
  <button @click="increment">
    Count is: {{ count }}, double is {{ double }}, click to increment.
  </button>
</template>

<script>
import { ref, computed, onMounted } from 'vue'

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
