<template>
        <!-- $attrs хранит все переданные в атрибут компоненты извне,
        те, которые мы не перечисляли в props-->
    <svg
        :class="$attrs.class || 'w-6 h-6'"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        v-html="path"
    >
    </svg>
</template>

<script>
import icons from '../icons'

export default {
  name: "BaseIcon",
  props: ['name'],
  data() {
    return {
      path: icons[this.name]
    }
  }
}
</script>

<style scoped>

</style>