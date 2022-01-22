<template>
  <v-app>
    <v-main>
      <app-layout>
        <router-view />
      </app-layout>
    </v-main>
  </v-app>
</template>

<script>
import appLayout from "@/components/layout/index.vue";

export default {
  name: "App",
  components: {
    appLayout,
  },
};
</script>
