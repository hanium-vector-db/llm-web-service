<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <main class="flex-grow">
      <slot />
    </main>
    <footer class="bg-gray-100 text-center text-sm text-gray-500 py-4">
      © 2025 ReportWeb. All rights reserved.
    </footer>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "BaseLayout",
  components: {
    NavBar,
  },
};
</script>
