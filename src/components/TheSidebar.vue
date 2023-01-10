<template>
  <aside :class="classes">
    <sidebar-content />
  </aside>
</template>

<script>
import SidebarContent from "@/components/SidebarContent.vue";

export default {
  name: "TheSidebar",
  components: {
    SidebarContent
  },

  computed: {
    classes() {
      return [
        'w-64', 'max-h-screen', 'overflow-auto', 'fixed', 'top-0', 'pt-12', 'bg-white', 'z-20'
      ]
    }
  }
}
</script>

<style scoped>

</style>