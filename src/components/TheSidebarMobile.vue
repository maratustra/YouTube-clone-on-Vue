<template>
  <transition
      enter-from-class="opacity-0"
      enter-active-class="transition-opacity ease-linear duration-200"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-active-class="transition-opacity ease-linear duration-200"
      leave-to-class="opacity-0"
  >
    <the-sidebar-mobile-overlay @click="$emit('close')" v-show="isOpen" />
  </transition>

  <transition
      enter-from-class="-translate-x-full"
      enter-active-class="transition ease-in-out duration-200 transform"
      enter-to-class="translate-x-0"
      leave-from-class="translate-x-0"
      leave-active-class="transition ease-in-out duration-200 transform"
      leave-to-class="-translate-x-full"
  >
<!-- aside не является html элементом, к которому может быть применен фокус по-умолчанию
 поэтому устанавилваем фокус с помощью tabindex -->
    <aside
        v-show="isOpen"
        ref="mobileSidebar"
        @keydown.esc="$emit('close')"
        tabindex="-1"
        class="w-64 max-h-screen overflow-auto bg-white fixed z-40 outline-none"
    >
      <section class="sticky top-0 flex items-center p-4 border-b bg-white">
        <button @click="$emit('close')" class="ml-2 mr-6 focus:outline-none">
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
  props: {
    isOpen: Boolean,
  },
  emits: {
    close: null,
  },

  watch: {
    isOpen() {
      // подождать, пока Vue полностью обновит html шаблон на основании обновленных внешних свойств
      this.$nextTick(() => this.isOpen && this.$refs.mobileSidebar.focus())
    }
  }
}
</script>

<style scoped>

</style>