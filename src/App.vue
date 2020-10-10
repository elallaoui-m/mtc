<template>
  <v-app :style="{ background: '#FBF0F1' }">
    <v-app-bar app color="#b70016" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-down"
          contain
          min-width="100"
          src="@/assets/logo_mtc.png"
          width="150"
        />
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  }),
};
</script>
