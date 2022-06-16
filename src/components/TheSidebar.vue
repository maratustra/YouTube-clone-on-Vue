<template>
  <aside class="xl:block w-64 max-h-screen overflow-auto fixed top-12 bg-white z-20">
    <sidebar-content />
  </aside>
</template>

<script>
import SidebarContent from "@/components/SidebarContent.vue";

export default {
  name: "TheSidebar",
  components: {
    SidebarContent
  }
}
</script>

<style scoped>

</style>