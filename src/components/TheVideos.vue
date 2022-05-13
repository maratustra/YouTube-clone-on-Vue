<template>
  <main class="xl:ml-64 md:ml-24 pt-32 px-5 pb-5">
    <div class="max-w-screen-2xl m-auto grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4">
      <video-item v-for="videoBlock in 20" :key="videoBlock" :index="videoBlock" />
    </div>
  </main>
</template>

<script>
import VideoItem from "./VideoItem.vue";

export default {
  name: "TheVideos",
  components: {VideoItem}

}
</script>

<style scoped>

</style>