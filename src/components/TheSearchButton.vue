<template>
  <button class="flex items-center px-6 py-1 text-gray-600 bg-gray-100 border border-l-0 border-gray-300 rounded-tr-sm rounded-br-sm hover:bg-gray-200 focus:outline-none">
    <base-icon name="search" class="w-5 h-5" />
  </button>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";

export default {
  name: "TheSearchButton",
  components: {BaseIcon}

}
</script>

<style scoped>

</style>