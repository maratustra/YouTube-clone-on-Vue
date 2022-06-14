<template>
  <transition
      enter-from-class="opacity-0"
      enter-active-class="transition-opacity ease-linear duration-200"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-active-class="transition-opacity ease-linear duration-200"
      leave-to-class="opacity-0"
  >
    <the-sidebar-mobile-overlay @click="isOpen = false" v-show="isOpen" />
  </transition>

  <transition
      enter-from-class="-translate-x-full"
      enter-active-class="transition ease-in-out duration-200 transform"
      enter-to-class="translate-x-0"
      leave-from-class="translate-x-0"
      leave-active-class="transition ease-in-out duration-200 transform"
      leave-to-class="-translate-x-full"
  >
    <aside v-show="isOpen" class="w-64 max-h-screen overflow-auto bg-white fixed z-40">
      <section class="sticky top-0 flex items-center p-4 border-b bg-white">
        <button @click="isOpen = false" class="ml-2 mr-6">
          <base-icon name="menu" />
        </button>
        <logo-main />
      </section>
      <sidebar-content />
    </aside>
  </transition>
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
  },
  data() {
    return {
      isOpen: true,
    }
  }
}
</script>

<style scoped>

</style>