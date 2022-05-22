<template>
  <button :class="classes">
    <base-icon name="user" class="w-7 h-7 mr-2" />
    Sign In
  </button>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";

export default {
  name: "ButtonLogin",
  components: {BaseIcon},

  computed: {
    classes() {
      return this.$attrs.class || 'flex items-center px-2 py-1 text-sm text-blue-700 uppercase border border-blue-700 rounded-sm whitespace-nowrap'
    }
  }
}
</script>

<style scoped>

</style>