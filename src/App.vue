<template>
  <the-header />
  <TheSidebarSmall />
  <the-sidebar />
  <the-sidebar-mobile />
  <the-categories />
  <the-videos />
</template>

<script>
import TheSidebarSmall from "@/components/TheSidebarSmall.vue";
import TheSidebar from "@/components/TheSidebar.vue";
import TheSidebarMobile from "@/components/TheSidebarMobile.vue";
import TheCategories from "@/components/TheCategories.vue";
import TheVideos from "@/components/TheVideos.vue";
import TheHeader from "@/components/TheHeader.vue";

export default {
  components: {
    TheHeader,
    TheVideos,
    TheCategories,
    TheSidebarMobile,
    TheSidebar,
    TheSidebarSmall
  }
}
</script>

<style scoped>

</style>