<template>
  <div class="flex w-full h-full">
    <the-search-input />
    <the-search-button name="search" />
  </div>
</template>

<script>
import TheSearchInput from "./TheSearchInput.vue";
import TheSearchButton from "./TheSearchButton.vue";

export default {
  name: "TheSearch",
  components: {TheSearchButton, TheSearchInput}
}
</script>

<style scoped>

</style>