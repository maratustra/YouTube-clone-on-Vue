<template>
  <li>
    <a href="#" class="flex items-center px-4 py-2 text-sm hover:bg-gray-100">
      <base-icon v-if="icon" :name="icon" class="w-6 h-6 mr-3 text-gray-400" />
      <span>{{ label }}</span>
      <base-icon v-if="withSubMenu" name="arrowRight" class="w-5 h-5 text-gray-400 ml-auto" />
    </a>
  </li>
</template>

<script>
import BaseIcon from "@/components/BaseIcon.vue";

export default {
  name: "DropdownSettingsListItem",
  components: {BaseIcon},
  props: {
    icon: String,
    label: String,
    withSubMenu: Boolean,
  }
}
</script>

<style scoped>

</style>