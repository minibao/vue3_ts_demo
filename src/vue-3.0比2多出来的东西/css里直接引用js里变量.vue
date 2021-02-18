
<template>
  <div class="test">css调用js的变量</div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'

export default {
  setup() {
    const testColor = 'blue'
  }
}
</script>

<style lang="less" scoped vars="{ testColor }">
.test {
  color: var(--testColor);
}
</style>
