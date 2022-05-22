<template>
  <aside class="hidden xl:block w-64 max-h-screen overflow-auto fixed top-12 bg-white z-20">
    <sidebar-section>
      <ul>
        <sidebar-nav-item label="Home" icon="home" is-active />
        <sidebar-nav-item label="Trending" icon="trending" />
        <sidebar-nav-item label="Subscriptions" icon="subscriptions" />
      </ul>
    </sidebar-section>
    <sidebar-section>
      <ul>
        <sidebar-nav-item label="Library" icon="library" />
        <sidebar-nav-item label="History" icon="history" />
      </ul>
    </sidebar-section>
    <sidebar-section class="px-8 py-4 border-b font-medium leading-5">
      <span class="text-sm">Sign in to like videos, comment, and subscribe</span>
      <button-login class="flex items-center px-2 py-0.5 mt-3 text-sm text-blue-700 uppercase border border-blue-700 rounded-sm"/>
    </sidebar-section>
    <sidebar-section>
      <sidebar-section-heading title="Best of Youtube" />
      <ul>
        <sidebar-nav-item label="Music" icon="music" />
        <sidebar-nav-item label="Sports" icon="sports" />
        <sidebar-nav-item label="Gaming" icon="gaming" />
        <sidebar-nav-item label="Movies" icon="movies" />
        <sidebar-nav-item label="News" icon="news" />
        <sidebar-nav-item label="Live" icon="live" />
        <sidebar-nav-item label="360&deg; Video" icon="video" />
      </ul>
    </sidebar-section>
    <sidebar-section>
      <ul>
        <sidebar-nav-item label="Browse channels" icon="plus" />
      </ul>
    </sidebar-section>
    <sidebar-section>
      <sidebar-section-heading title="More from Youtube" />
      <ul>
        <sidebar-nav-item label="YouTube Premium" icon="premium" />
        <sidebar-nav-item label="Live" icon="live" />
      </ul>
    </sidebar-section>
    <sidebar-section>
      <ul>
        <sidebar-nav-item label="Settings" icon="setting" />
        <sidebar-nav-item label="Report history" icon="report" />
        <sidebar-nav-item label="Help" icon="help" />
        <sidebar-nav-item label="Send feedback" icon="sendFeedback" />
      </ul>
    </sidebar-section>
    <sidebar-section class="px-6 py-4 space-y-4 text-xs font-semibold">
      <the-footer />
    </sidebar-section>
  </aside>
</template>

<script>
import SidebarNavItem from "@/components/SidebarNavItem.vue";
import SidebarSection from "@/components/SidebarSection.vue";
import SidebarSectionHeading from "@/components/SidebarSectionHeading.vue";
import ButtonLogin from "@/components/ButtonLogin.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "TheSidebar",
  components: {TheFooter, SidebarSection, ButtonLogin, SidebarNavItem, SidebarSectionHeading}
}
</script>

<style scoped>

</style>