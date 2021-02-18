<template>
  <div>
    <h2>计算属性和监视</h2>
    <fieldset>
      <legend>姓名操作</legend>
      姓氏：<input type="text" placeholder="姓氏" v-model="user.firstName">
      名字：<input type="text" placeholder="名字" v-model="user.lastName">
    </fieldset>
    <fieldset>
      <legend>计算属性和监视</legend>
      姓名：<input type="text" placeholder="显示姓氏" v-model="fullName1">
      姓名：<input type="text" placeholder="显示名字" v-model="fullName2">
      姓名：<input type="text" placeholder="显示姓名" v-model="fullName3">
      姓名：<input type="text" placeholder="显示姓名" v-model="fullName4">
    </fieldset>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, watch, ref, watchEffect } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const user = reactive({
      firstName: '东方',
      lastName: '不败'
    })
    // 1-通过计算属性的方式来实现第一个姓名的方式,返回的是一个ref的对象
    const fullName1 = computed(() => {
      return `${user.firstName}-${user.lastName}`
    })

    // 2-通过第二个方法
    const fullName2 = computed({
      get() {
        return `${user.firstName}-${user.lastName}`
      },
      set(val: string) {
        console.log(val)
        const names = val.split('-')
        user.firstName = names[0]
        user.lastName = names[1]
      }
    })

    // 3-监视方法,第三个姓名
    const fullName3 = ref('')
    watch(user, (val) => {
      fullName3.value = `${val.firstName}-${val.lastName}`
    }, { immediate: true, deep: true }) // 让watch默认去执行一次

    // 4-watchEffect,第四个方法,该监视方法不需要用immediate来默认执行一次，本身就会默认执行一次
    const fullName4 = ref('')
    watchEffect(() => {
      fullName4.value = `${user.firstName}-${user.lastName}`
    })

    return {
      user,
      fullName1,
      fullName2,
      fullName3,
      fullName4
    }
  }
})
</script>

<style lang="less" scoped>
</style>
