<template>
  <section class="fixed w-full xl:pl-64 md:pl-24 pt-14 bg-white bg-opacity-95 z-10">
    <div class="max-w-screen-2xl m-auto px-4 border-t border-b">
      <div class="flex py-3 space-x-3 overflow-auto text-sm whitespace-nowrap">
        <a v-for="category in categories" :key="category" href="#" class="px-3 py-1 transition bg-gray-600 border border-gray-700 rounded-full hover:border-gray-200 text-white">
          {{ category }}
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheCategories",
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
  }
}
</script>

<style scoped>

</style>