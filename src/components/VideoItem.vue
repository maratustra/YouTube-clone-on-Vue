<template>
  <a href="#" class="mb-7 group">
    <video-item-thumbnail :index="index" />
    <video-item-info :index="index" />
  </a>
</template>

<script>
import VideoItemThumbnail from './VideoItemThumbnail.vue'
import VideoItemInfo from './VideoItemInfo.vue'

export default {
  name: "VideoItem",
  components: {VideoItemThumbnail, VideoItemInfo},

  props: ['index'],
}
</script>

<style scoped>

</style>