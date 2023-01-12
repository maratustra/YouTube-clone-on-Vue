<template>
  <div class="relative">
    <button
        @click="isOpen = !isOpen"
        class="relative p-2 focus-outline-none"
    >
      <base-icon name="viewGrid" class="w-5 h-5" />
    </button>
    <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transition opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
    >
      <div
          v-show="isOpen"
          ref="dropdown"
          @keydown.esc="isOpen = false"
          tabindex="-1"
          class="absolute top-9 right-0 sm:left-0 bg-white w-60 border border-t-0 focus:outline-none">
        <section class="py-2 border-b">
          <ul>
            <dropdown-apps-list-item label="YouTube TV" />
          </ul>
        </section>
        <section class="py-2 border-b">
          <ul>
            <dropdown-apps-list-item label="YouTube Music" />
            <dropdown-apps-list-item label="YouTube Kids" />
          </ul>
        </section>
        <section class="py-2">
          <ul>
            <dropdown-apps-list-item label="Creator Academy" />
            <dropdown-apps-list-item label="YouTube for Artists" />
          </ul>
        </section>
      </div>
    </transition>
  </div>
</template>

<script>
import DropdownAppsListItem from "@/components/DropdownAppsListItem.vue";
import BaseIcon from "@/components/BaseIcon.vue";

export default {
  name: "TheDropdownApps",
  components: {DropdownAppsListItem, BaseIcon},

  data() {
    return {
      isOpen: false
    }
  },

  mounted() {
    window.addEventListener('click', event => {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false
      }
    })
  },

  watch: {
    isOpen() {
      this.$nextTick(() => this.isOpen && this.$refs.dropdown.focus())
    }
  }
}
</script>

<style scoped>

</style>