
<!--
  - 兼容vue2X的写法，上手比较快
-->

<template>...</template>

<script>
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      direction: 'top',
      pinPadding: 0,
      time: '',
      timer: 0
    }
  },
  methods: {
    initTime() {}
  },
  mounted() {
    this.initTime()
  }
})
</script>
