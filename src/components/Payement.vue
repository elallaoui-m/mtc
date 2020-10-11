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

      <v-list-item>
        <v-list-item-icon>
          <v-icon medium color="yellow darken-4"> mdi-star </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <div class="caption">
            Payer votre abonemment maintenant et profiter d'autres services
            supplimentaires.
          </div>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon medium color="green darken-4"> mdi-clock </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <div class="caption">
            Vous allez recevoir votre resultat de test aussi que les auggestions
            dans un instant.
          </div>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="mx-4"></v-divider>

      <v-credit-card @change="creditInfoChanged" />
      <router-link to="/payementFin"
        ><v-btn class="py-8" color="primary" block @click="reserve"
          >Payer maintenant
        </v-btn></router-link
      >
      <v-card-text class="text-center"> Ou </v-card-text>
      <div id="smart-button-container">
        <div style="text-align: center">
          <div id="paypal-button-container"></div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script
  src="https://www.paypal.com/sdk/js?client-id=sb&currency=USD"
  data-sdk-integration-source="button-factory"
></script>
<script>
import router from "../router";

export default {
  name: "Hello",
  components: {},
  data: function () {
    return {
      name: "",
      cardNumber: "",
      expiration: "",
      security: "",
      cardName: null,
      environment: "sandbox",
      token:
        "access_token$sandbox$dwz59fbryg4v6fs9$39d905b818f403943a3d9406bc3a74d6",
    };
  },

  mounted() {
    this.initPay();
  },

  methods: {
    creditInfoChanged(values) {
      for (const key in values) {
        this[key] = values[key];
      }
    },
    cardChanged(cardName) {
      this.cardName = cardName;
    },
    onAuthorize: (nonce) => {
      console.log(nonce);
      router.push("/error");
    },
    onCancel: () => {
      console.log("Cancelled");
      router.push("/error");
    },
    reserve: () => {
      console.log("success");
      router.push("/error");
    },
    onError: (error) => {
      console.error(error);
      router.push("/error");
    },
    initPay: () => {
      {
        paypal
          .Buttons({
            style: {
              shape: "rect",
              color: "gold",
              layout: "vertical",
              label: "buynow",
            },

            createOrder: function (data, actions) {
              router.push("/error");
              // return actions.order.create({
              //   purchase_units: [
              //     { amount: { currency_code: "USD", value: 1 } },
              //   ],
              // });
            },

            onApprove: function (data, actions) {
              router.push("/error");
              // return actions.order.capture().then(function (details) {
              //   alert(
              //     "Transaction completed by " +
              //       details.payer.name.given_name +
              //       "!"
              //   );
              // });
            },

            onError: function (err) {
              console.log(err);
              router.push("/error");
            },
          })
          .render("#paypal-button-container");
      }
    },
  },
};
</script>

<style scoped>
#image {
  background: "primary";
}
</style>
