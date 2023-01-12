<template>
  <div class="relative">
    <img :src="`https://picsum.photos/seed/image${index}/720/404`" alt="">
    <video-item-thumbnail-button icon="clock" label="Watch later" class="top-0" />
    <video-item-thumbnail-button icon="menuAlt3" label="Add to queue" class="top-8" />
    <span class="opacity-100 group-hover:opacity-0 duration-500 absolute bottom-0 right-0 m-1 p-1 bg-black text-white rounded-sm text-xs font-semibold">
      6:35
    </span>
  </div>
</template>

<script>
import BaseIcon from "@/components/BaseIcon.vue";
import VideoItemThumbnailButton from "@/components/VideoItemThumbnailButton.vue";

export default {
  name: "VideoItemThumbnail",
  components: {BaseIcon, VideoItemThumbnailButton},
  props: ['index'],
}
</script>

<style scoped>

</style>