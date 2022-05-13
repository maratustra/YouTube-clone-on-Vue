<template>
  <a href="#" class="mb-7 group">
    <div class="relative">
      <img :src="`https://picsum.photos/seed/image${index}/720/404`" alt="">
      <span class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-0 right-0 m-1 p-1 bg-black text-white rounded-sm">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </span>
      <span class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-8 right-0 m-1 p-1 bg-black text-white rounded-sm">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </span>
      <span class="opacity-100 group-hover:opacity-0 duration-500 absolute bottom-0 right-0 m-1 p-1 bg-black text-white rounded-sm text-xs font-semibold">
            6:35
          </span>
    </div>
    <div class="flex items-start mt-3">
      <img :src="`https://picsum.photos/seed/avatar${index}/68`" alt="" class="w-9 h-9 mr-3 rounded-full">
      <div class="text-sm">
        <span class="font-semibold text-gray-800">Video Title 1</span>
        <div class="flex items-center mt-1">
          <span>Channel Name 1</span>
          <svg class="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <div>
          <span>1K views</span>
          &middot;
          <span>1 day ago</span>
        </div>
      </div>
      <button class="opacity-0 group-hover:opacity-100 -mt-1 ml-auto p-1 text-gray-500 hover:text-gray-700 focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
      </button>
    </div>
  </a>
</template>

<script>
export default {
  name: "VideoItem",
  props: ['index'],
}
</script>

<style scoped>

</style>