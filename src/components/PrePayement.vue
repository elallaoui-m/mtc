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
        <v-img src="@/assets/photo-page-paiement.jpg"></v-img>
      </div>

      <v-card-title class="primary--text text-h5"
        >Accedez à votre note et à nos services pour seulement
        3.90€!</v-card-title
      >
      <v-divider class="mx-4"></v-divider>
      <v-card-text class="text-h6"> Détails de la commande </v-card-text>

      <v-list-group no-action>
        <template v-slot:activator>
          <v-list-item-avatar class="mr-4">
            <v-img src="@/assets/votre-note.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Votre note</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item>
          <v-list-item-content>
            <div class="caption">
              Votre note de compatibilité amoureuse est déterminée en prenant en
              compte l’ensemble des réponses du questionnaire que vous venez de
              remplir. La note va de 1 à 10, 1 étant la note la plus faible qui
              veux dire que votre couple n’est pas du tout compatible et, la
              note 10 est la plus élevée, ce qui signifie que votre couple est
              compatible et solide !
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

      <v-list-group no-action>
        <template v-slot:activator>
          <v-list-item-avatar class="mr-4">
            <v-img src="@/assets/conseils-personnalises.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Conseils personnalisés</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item>
          <v-list-item-content>
            <div class="caption">
              En effet, en prenant en compte les réponses à notre questionnaire
              nous allons vous proposer, chaque deux semaines, deux conseils
              personnalisés pour améliorer votre relation de couple. Il vous
              suffit d’effectuer nos conseils et de nous dire, via votre
              interface client, si vous avez bien répondu positivement à nos
              conseils ou pas. En fonction de vos réponses le test continue et a
              comme objectif de vous rendre compatible, vous verrez c’est très
              efficace !
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

      <v-list-group no-action>
        <template v-slot:activator>
          <v-list-item-avatar class="mr-4">
            <v-img src="@/assets/evolution-note.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Évolution note</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item>
          <v-list-item-content>
            <div class="caption">
              Ce produit est une innovation, en effet, au fur et à mesure que
              vous suivrez le programme proposé, votre note de compatibilité
              évoluera en temps réel via un graphique disponible dans votre
              interface client. Vous pouvez ainsi savoir votre degré de
              compatibilité en temps réel.
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

      <v-list-group no-action>
        <template v-slot:activator>
          <v-list-item-avatar class="mr-4">
            <v-img src="@/assets/votre-compte.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Votre compte</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item>
          <v-list-item-content>
            <div class="caption">
              Vous avez accès, à travers votre compte client, à l’historique de
              toutes les questions et réponses du test initial mais aussi du
              suivi des conseils préconisés, bref vous avez tous sous vos yeux,
              vous verrez c’est très intéressant de connaitre l’analyse de votre
              couple.
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

      <v-list-group no-action>
        <template v-slot:activator>
          <v-list-item-avatar class="mr-4">
            <v-img src="@/assets/concour-gratuit.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Concours gratuit</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item>
          <v-list-item-content>
            <div class="caption">
              Chaque fin de mois, nous tirons au sort un couple et nous lui
              offrons un séjour d’une valeur de 2’000€ via notre partenaire
              <a href="lastminute.com">lastminute.com</a> , les heureux gagnant
              seront mis en relation avec l’opérateur de voyage et disposera
              d’un coupon d’une valeur de 2’000€ à utiliser à leur guise.
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

      <v-list-group no-action>
        <template v-slot:activator>
          <v-list-item-avatar class="mr-4">
            <v-img src="@/assets/acces-gratuit.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Accès gratuit</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item>
          <v-list-item-content>
            <div class="caption">
              Vous pourrez gratuitement utiliser nos sites de Fitness à domicile
              <a href="http://easyfitnessgo.com">easyfitnessgo.com</a> et
              <a href="http://officiel-qi-test.com">officiel-qi-test.com</a>
              pour une durée de 6 mois. Une fois votre compte validé vous
              obtiendrez les accès par email.
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      <router-link to="/payementFin"
        ><v-btn class="py-8" color="primary" block @click="reserve"
          >Payer maintenant
        </v-btn></router-link
      >
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Prepayement",
};
</script>
