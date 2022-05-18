<template>
  <div class="absolute top-9 right-0 w-72 opacity-0 group-hover:opacity-100 bg-white border border-t-0">
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
        <dropdown-settings-list-item :label="listItem[8].label" :with-sub-menu="listItem[8].withSubMenu" />
      </ul>
    </section>
  </div>
</template>

<script>
import DropdownSettingsListItem from "@/components/DropdownSettingsListItem.vue"

export default {
  name: "TheDropdownSettings",
  components: {DropdownSettingsListItem},

  data() {
    return {
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
  }

}
</script>

<style scoped>

</style>