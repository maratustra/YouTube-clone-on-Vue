<template>
  <section :class="classes">
    <div class="max-w-screen-2xl m-auto px-4 border-t border-b">
      <div class="flex py-3 space-x-3 overflow-auto text-sm whitespace-nowrap">
        <category-item
            v-for="category in categories"
            :key="category"
            :category="category"
            :is-active="category === 'All'"
        />
      </div>
    </div>
  </section>
</template>

<script>
import CategoryItem from "./CategoryItem.vue";

export default {
  name: "TheCategories",
  components: {CategoryItem},
  props: {
    isSidebarOpen: Boolean,
  },

  data() {
    return {
      categories: [
        "All",
        "Trucks",
        "Machines",
        "Engines",
        "Snow",
        "Ships",
        "Roads",
        "Tanks",
        "Buildings",
        "Mars",
        "Woodworking",
        "Tractors",
        "Songs",
        "Football"
      ]
    }
  },

  computed: {
    classes() {
      return [
        this.isSidebarOpen ? 'xl:pl-64' : 'md:pl-24',
        'fixed', 'w-full', 'pt-14', 'bg-white', 'bg-opacity-95', 'z-10'
      ]
    }
  }
}
</script>

<style scoped>

</style>