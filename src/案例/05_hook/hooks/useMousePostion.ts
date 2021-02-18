import { onMounted, ref, onUnmounted } from 'vue'

export default function() {
  const x = ref(0)
  const y = ref(0)

  const clickPostion = (e: MouseEvent) => {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    window.addEventListener('click', clickPostion)
  })

  onUnmounted(() => {
    window.removeEventListener('click', clickPostion)
  })

  return {
    x,
    y
  }
}
