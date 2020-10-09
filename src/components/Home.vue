<template>
  <div>
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <div id="image">
        <v-img
          alt="Designed by wayhomestudio"
          src="@/assets/homecard.jpg"
        ></v-img>
      </div>

      <v-card-title>My True Companion</v-card-title>

      <v-card-text>
        C’est à vous, accédez à l’amour et mariez-vous
      </v-card-text>
      <v-list-item>
        <v-list-item-icon>
          <v-icon medium color="green darken-2"> mdi-check </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <div class="caption">Effectuez le test de compatibilité</div>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon medium color="green darken-2"> mdi-check </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <div class="caption">Découvrez votre note de compatibilité</div>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon medium color="green darken-2"> mdi-check </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <div class="caption">
            Suivez nos conseils personnalisés en fonctions de vos réponses au
            test
          </div>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon medium color="green darken-2"> mdi-check </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <div class="caption">Profitez de nombreux autres services.</div>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="mx-4"></v-divider>

      <router-link to="/mtc"
        ><v-btn color="primary py-8" block @click="reserve"
          >Commencer le test
        </v-btn></router-link
      >
    </v-card>
  </div>
</template>

<script>
import router from "vue-router";
export default {
  name: "Hello",

  methods: {
    reserve: () => {
      router.go("/");
    },
  },
};
</script>

<style scoped>
#image {
  background: "primary";
}
</style>
