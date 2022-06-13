<template>
  <the-sidebar-mobile-overlay>
    <aside class="w-64 max-h-screen overflow-auto bg-white">
      <section class="sticky top-0 flex items-center p-4 border-b bg-white">
        <button class="ml-2 mr-6">
          <base-icon name="menu" />
        </button>
        <logo-main />
      </section>
      <sidebar-content />
    </aside>
  </the-sidebar-mobile-overlay>
</template>

<script>
import TheSidebarMobileOverlay from "@/components/TheSidebarMobileOverlay.vue";
import BaseIcon from "@/components/BaseIcon.vue";
import LogoMain from "@/components/LogoMain.vue";
import SidebarContent from "@/components/SidebarContent.vue";

export default {
  name: "TheSidebarMobile",
  components: {
    TheSidebarMobileOverlay,
    BaseIcon,
    LogoMain,
    SidebarContent
  }
}
</script>

<style scoped>

</style>