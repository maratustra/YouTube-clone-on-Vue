<template>
  <div class="flex items-start mt-3">
    <img :src="`https://picsum.photos/seed/avatar${index}/68`" alt="" class="w-9 h-9 mr-3 rounded-full">
    <div class="text-sm">
      <span class="font-semibold text-gray-800">Video Title {{ index }}</span>
      <div class="flex items-center mt-1">
        <span>Channel Name {{ index }}</span>
        <base-icon name="checkCircle" class="w-3.5 h-3.5 ml-1" />
      </div>
      <div v-html="summary"></div>
    </div>
    <button class="opacity-0 group-hover:opacity-100 -mt-1 ml-auto p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
      <base-icon name="dotsVertical" />
    </button>
  </div>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";

export default {
  name: "VideoItemInfo",
  components: {BaseIcon},
  props: ['index'],

  computed: {
    summary() {
      const days = this.index === 1 ? 'day' : 'days'
      return `${this.index}K views &middot; ${this.index} ${days} ago`
    }
  }
}
</script>

<style scoped>

</style>