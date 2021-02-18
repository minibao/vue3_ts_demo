<!--
  - 目前github上使用比较多的一种配合ts的写法
  - https://github.com/vuejs/vue-class-component/issues?q=is%3Aopen+is%3Aissue+label%3Av8
  - https://github.com/vuejs/vue-class-component/issues/406
-->

<template>
  <div id="app">
    <div id="nav">
      <h3>{{ systemName }}</h3>
      <div v-if="menuStatus" class="header-nav">
        <router-link to="/">首页</router-link> |
        <router-link to="/about-vue">Vue 页面</router-link> |
        <router-link to="/about-jsx">JSX 页面</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapGetters } from 'vuex'

@Options({
  name: 'App',
  computed: {
    ...mapGetters([
      'systemName',
      'menuStatus'
    ])
  }
})
export default class App extends Vue {}
</script>
