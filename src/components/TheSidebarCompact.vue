<template>
  <aside :class="classes">
    <section>
      <ul>
        <sidebar-compact-nav-item
            v-for="navItem in navItems"
            :key="navItem.label"
            :label="navItem.label"
            :icon="navItem.icon"
            :is-active="navItem.isActive"
        />
      </ul>
    </section>
  </aside>
</template>

<script>
import SidebarCompactNavItem from "@/components/SidebarCompactNavItem.vue";
export default {
  name: "TheSidebarCompact",
  components: {
    SidebarCompactNavItem
  },

  data() {
    return {
      navItems: [
        {
          label: 'Home',
          icon: 'home',
          isActive: true
        },
        {
          label: 'Trending',
          icon: 'trending',
          isActive: false
        },
        {
          label: 'Subscriptions',
          icon: 'subscriptions',
          isActive: false
        },
        {
          label: 'Library',
          icon: 'library',
          isActive: false
        },
        {
          label: 'History',
          icon: 'history',
          isActive: false
        }
      ]
    }
  },

  computed: {
    classes() {
      return [
        'min-h-screen', 'overflow-auto', 'fixed', 'top-0', 'pt-14', 'bg-white', 'z-20'
      ]
    }
  }
}
</script>

<style scoped>

</style>