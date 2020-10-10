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

      <v-card-text> </v-card-text>

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
      <v-card-text> </v-card-text>

      <v-divider class="mx-4"></v-divider>
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
export default {
  name: "Hello",
  components: {},
  data: function () {
    return {
      environment: "sandbox",
      token:
        "access_token$sandbox$dwz59fbryg4v6fs9$39d905b818f403943a3d9406bc3a74d6",
    };
  },

  mounted() {
    this.initPay();
  },

  methods: {
    onAuthorize: (nonce) => {
      console.log(nonce);
      this.$router.push("error");
    },
    onCancel: () => {
      console.log("Cancelled");
      this.$router.push("error");
    },
    onError: (error) => {
      console.error(error);
      this.$router.push("error");
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
              // return actions.order.create({
              //   purchase_units: [
              //     { amount: { currency_code: "USD", value: 1 } },
              //   ],
              // });
              this.$router.push("error");
            },

            onApprove: function (data, actions) {
              // return actions.order.capture().then(function (details) {
              //   alert(
              //     "Transaction completed by " +
              //       details.payer.name.given_name +
              //       "!"
              //   );
              // });

              this.$router.push("error");
            },

            onError: function (err) {
              console.log(err);
              this.$router.push("error");
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
