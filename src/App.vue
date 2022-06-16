<template>
  <the-header @toggle-sidebar="toggleSidebar" />
  <the-sidebar-small :is-open="sidebarState === 'compact'" />
  <the-sidebar :is-open="sidebarState === 'normal'" />
  <the-sidebar-mobile
      :is-open="isMobileSidebarOpen"
      @close="closeMobileSidebar"
  />
  <the-categories :is-sidebar-open="sidebarState === 'normal'" />
  <the-videos :is-sidebar-open="sidebarState === 'normal'" />
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
  },

  data() {
    return {
      isMobileSidebarOpen: false,
      sidebarState: null
    }
  },

  mounted() {
    if (window.innerWidth >= 768 && window.innerWidth < 1280) {
      this.sidebarState = 'compact'
    }
    if (window.innerWidth >= 1280) {
      this.sidebarState = 'normal'
    }
  },

  methods: {
    toggleSidebar() {
      if (window.innerWidth >= 1280) {
        this.sidebarState = this.sidebarState === 'normal' ? 'compact' : 'normal'
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