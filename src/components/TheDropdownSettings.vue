<template>
  <div>
    <button
        @click="isOpen = !isOpen"
        class="relative p-2 focus-outline-none"
    >
      <base-icon name="dotsVertical" class="w-5 h-5" />
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
          class="absolute top-9 right-0 w-72 bg-white border border-t-0 focus:outline-none"
      >
        <section class="py-2 border-b">
          <ul>
            <dropdown-settings-list-item
              v-for="listItem in listItems.slice(0, listItems.length - 1)"
              :key="listItem.label"
              :label="listItem.label"
              :icon="listItem.icon"
              :with-sub-menu="listItem.withSubMenu"
            />
          </ul>
        </section>
        <section class="py-2">
          <ul>
            <dropdown-settings-list-item :label="listItems[8].label" :with-sub-menu="listItems[8].withSubMenu" />
          </ul>
        </section>
      </div>
    </transition>
  </div>
</template>

<script>
import DropdownSettingsListItem from "@/components/DropdownSettingsListItem.vue"
import BaseIcon from "@/components/BaseIcon.vue"

export default {
  name: "TheDropdownSettings",
  components: {DropdownSettingsListItem, BaseIcon},

  data() {
    return {
      isOpen: false,
      listItems: [
        {
          label: "Appearance: Light",
          icon: "light",
          withSubMenu: true,
        },
        {
          label: "Language: English",
          icon: "language",
          withSubMenu: true,
        },
        {
          label: "Location: Georgia",
          icon: "location",
          withSubMenu: true,
        },
        {
          label: "Settings",
          icon: "setting",
          withSubMenu: false,
        },
        {
          label: "Your data in YouTube",
          icon: "shield",
          withSubMenu: false,
        },
        {
          label: "Help",
          icon: "question",
          withSubMenu: false,
        },
        {
          label: "Send feedback",
          icon: "feedback",
          withSubMenu: false,
        },
        {
          label: "Keyboard shortcuts",
          icon: "keyboard",
          withSubMenu: false,
        },
        {
          label: "Restricted Mode: Off",
          icon: null,
          withSubMenu: true,
        },
      ]
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