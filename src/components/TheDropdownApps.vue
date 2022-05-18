<template>
  <div class="absolute top-9 -right-full sm:right-0 sm:left-0 w-60 opacity-0 group-hover:opacity-100 bg-white border border-t-0">
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
</template>

<script>
import DropdownAppsListItem from "@/components/DropdownAppsListItem.vue";

export default {
  name: "TheDropdownApps",
  components: {DropdownAppsListItem}
}
</script>

<style scoped>

</style>