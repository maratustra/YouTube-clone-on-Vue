<template>
  <header class="flex justify-between fixed z-30 w-full">
    <div class="lg:w-1/4 flex">
      <div class="flex items-center xl:w-64 xl:bg-white pl-4">
        <button
            @click="$emit('toggleSidebar')"
            class="mr-3 sm:ml-2 sm:mr-6 focus:outline-none"
        >
          <base-icon name="menu" />
        </button>
        <logo-main />
      </div>
    </div>
    <div class="hidden sm:flex flex-1 items-center justify-end lg:w-1/2 max-w-screen-md p-2.5 pl-8 lg:px-0 md:pl-12 md:px-8">
      <the-search />
      <button class="ml-4 focus:outline-none">
        <base-icon name="microphone" class="w-5 h-5" />
      </button>
    </div>
    <div class="lg:w-1/4 flex items-center justify-end p-2 sm:px-4 sm:space-x-3">
      <button class="sm:hidden p-2">
        <base-icon name="microphone" class="w-5 h-5" />
      </button>
      <button class="sm:hidden p-2">
        <base-icon name="search" class="w-5 h-5" />
      </button>
      <the-dropdown-apps />
      <the-dropdown-settings />
      <button-login />
    </div>
  </header>
</template>

<script>
import TheDropdownApps from "./TheDropdownApps.vue";
import TheDropdownSettings from "./TheDropdownSettings.vue";
import LogoMain from "./LogoMain.vue";
import TheSearch from "./TheSearch.vue";
import ButtonLogin from "./ButtonLogin.vue";
import BaseIcon from "./BaseIcon.vue";

export default {
  name: "TheHeader",
  components: {BaseIcon, ButtonLogin, TheSearch, LogoMain, TheDropdownSettings, TheDropdownApps},
  emits: {
    toggleSidebar: null,
  },
}
</script>

<style scoped>

</style>