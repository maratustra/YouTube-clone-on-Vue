<template>
  <div class="relative">
    <img :src="`https://picsum.photos/seed/image${index}/720/404`" alt="">
    <span class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-0 right-0 m-1 p-1 bg-black text-white rounded-sm">
      <base-icon class="w-5 h-5" name="clock" />
    </span>
    <span class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-8 right-0 m-1 p-1 bg-black text-white rounded-sm">
      <base-icon class="w-5 h-5" name="menuAlt3" />
    </span>
    <span class="opacity-100 group-hover:opacity-0 duration-500 absolute bottom-0 right-0 m-1 p-1 bg-black text-white rounded-sm text-xs font-semibold">
      6:35
    </span>
  </div>
</template>

<script>
import BaseIcon from "@/components/BaseIcon.vue";

export default {
  name: "VideoItemThumbnail",
  components: {BaseIcon},
  props: ['index'],
}
</script>

<style scoped>

</style>