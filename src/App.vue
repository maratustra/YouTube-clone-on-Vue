<template>
  <the-header @toggle-sidebar="toggleSidebar" />
  <the-sidebar-compact v-if="isCompactSidebarOpen" />
  <the-sidebar v-if="isSidebarOpen" />
  <the-sidebar-mobile
      :is-open="isMobileSidebarOpen"
      @close="closeMobileSidebar"
  />
  <the-categories :is-sidebar-open="isSidebarOpen" />
  <the-videos :is-sidebar-open="isSidebarOpen" />
</template>

<script>
import TheSidebarCompact from "@/components/TheSidebarCompact.vue";
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
    TheSidebarCompact
  },

  data() {
    return {
      isCompactSidebarActive: false,
      isMobileSidebarOpen: false,
      isCompactSidebarOpen: false,
      isSidebarOpen: false,
    }
  },

  mounted() {
    this.onResize()

    window.addEventListener('resize', this.onResize)
  },

  methods: {
    onResize() {
      if (window.innerWidth < 768) {
        this.isCompactSidebarOpen = false
        this.isSidebarOpen = false
      } else if (window.innerWidth < 1280) {
        this.isCompactSidebarOpen = true
        this.isSidebarOpen = false
      } else {
        this.isCompactSidebarOpen = this.isCompactSidebarActive
        this.isSidebarOpen = !this.isCompactSidebarActive
        this.isMobileSidebarOpen = false
      }
    },

    toggleSidebar() {
      if (window.innerWidth >= 1280) {
        this.isCompactSidebarActive = !this.isCompactSidebarActive
        this.onResize()
      } else {
        this.openMobileSidebar()
      }
    },

    openMobileSidebar() {
      this.isMobileSidebarOpen = true
    },

    closeMobileSidebar() {
      this.isMobileSidebarOpen = false
    }
  }
}
</script>

<style scoped>

</style>