<template>
  <button class="flex items-center px-2 py-1 text-sm text-blue-700 uppercase border border-blue-700 rounded-sm whitespace-nowrap">
    <base-icon name="user" class="w-7 h-7 mr-2" />
    Sign In
  </button>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";

export default {
  name: "ButtonLogin",
  components: {BaseIcon}
}
</script>

<style scoped>

</style>