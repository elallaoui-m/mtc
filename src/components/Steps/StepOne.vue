<template>
  <div style="padding: 2rem 3rem; text-align: left">
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <div class="field">
          <v-select
            v-model="form.age"
            :items="range(16, 80)"
            label="Votre âge ?"
          ></v-select>
          <p v-if="$v.form.age.$error" class="help is-danger">Champs requis</p>
        </div>
      </v-col>
      <v-col class="d-flex" cols="12" sm="6">
        <div class="field">
          <v-select
            v-model="form.ageHer"
            :items="range(16, 80)"
            label="L'âge de votre partenaire?"
          ></v-select>
          <p v-if="$v.form.ageHer.$error" class="help is-danger">
            Champs requis
          </p>
        </div>
      </v-col>
    </v-row>

    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <div class="field">
          <v-select
            v-model="form.taille"
            :items="tailles"
            label="Votre taille ?"
          ></v-select>
          <p v-if="$v.form.taille.$error" class="help is-danger">
            Champs requis
          </p>
        </div>
      </v-col>
      <v-col class="d-flex" cols="12" sm="6">
        <div class="field">
          <v-select
            v-model="form.tailleHer"
            :items="tailles"
            label="La taille de votre partenaire?"
          ></v-select>
          <p v-if="$v.form.tailleHer.$error" class="help is-danger">
            Champs requis
          </p>
        </div>
      </v-col>
    </v-row>

    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <div class="field">
          <v-select
            v-model="form.poids"
            :items="poids"
            label="Votre poids ?"
          ></v-select>
          <p v-if="$v.form.poids.$error" class="help is-danger">
            Champs requis
          </p>
        </div>
      </v-col>
      <v-col class="d-flex" cols="12" sm="6">
        <div class="field">
          <v-select
            v-model="form.poidsHer"
            :items="poids"
            label="Le poids de votre partenaire?"
          ></v-select>
          <p v-if="$v.form.poidsHer.$error" class="help is-danger">
            Champs requis
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <div class="field">
          <v-select
            v-model="form.astro"
            :items="astro"
            label="Votre signe astrologique"
            item-text="name"
          >
            <template v-slot:selection="{ item }">
              <v-img
                class="mb-3"
                max-height="48"
                max-width="48"
                :src="item.img"
              />
              <span>{{ item.name }}</span>
            </template>
          </v-select>
          <p v-if="$v.form.astro.$error" class="help is-danger">
            Champs requis
          </p>
        </div>
      </v-col>
      <v-col class="d-flex" cols="12" sm="6">
        <div class="field">
          <v-select
            v-model="form.astroHer"
            :items="astro"
            item-text="name"
            label="Le signe astrologique de votre partenaire"
          >
            <template v-slot:selection="{ item }">
              <v-img
                class="mb-3"
                max-height="48"
                max-width="48"
                :src="item.img"
              />
              <span>{{ item.name }}</span>
            </template>
          </v-select>
          <p v-if="$v.form.astroHer.$error" class="help is-danger">
            Champs requis
          </p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  props: ["clickedNext", "currentStep"],
  mixins: [validationMixin],
  data() {
    return {
      form: {
        age: "",
        ageHer: "",
        taille: "",
        tailleHer: "",
        poids: "",
        poidsHer: "",
        astro: "",
        astroHer: "",
      },
      tailles: [
        "150-159cm",
        "160-169cm",
        "170-179cm",
        "180-189cm",
        "+ de 190cm",
      ],
      poids: [
        "50-59kg",
        "60-69kg",
        "70-79kg",
        "80-89kg",
        "90-99kg",
        "+ de 100kg",
      ],
      astro: [
        { img: require("@/assets/Belier.png"), name: "Bélier " },
        { img: require("@/assets/Taureau.png"), name: "Taureau " },
        { img: require("@/assets/Gemeaux.png"), name: "Gémeaux " },
        { img: require("@/assets/Cancer.png"), name: "Cancer " },
        { img: require("@/assets/Lion.png"), name: "Lion " },
        { img: require("@/assets/Vierge.png"), name: "Vierge " },
        { img: require("@/assets/Balance.png"), name: "Balance " },
        { img: require("@/assets/Scorpion.png"), name: "Scorpion " },
        { img: require("@/assets/Sagittaire.png"), name: "Sagittaire " },
        { img: require("@/assets/Capricorne.png"), name: "Capricorne " },
        { img: require("@/assets/Verseau.png"), name: "Verseau " },
        { img: require("@/assets/Poissons.png"), name: "Poissons " },
      ],
    };
  },
  validations: {
    form: {
      age: {
        required,
      },
      ageHer: {
        required,
      },
      taille: {
        required,
      },
      tailleHer: {
        required,
      },
      poids: {
        required,
      },
      poidsHer: {
        required,
      },
      astro: {
        required,
      },
      astroHer: {
        required,
      },
    },
  },
  watch: {
    $v: {
      handler: function (val) {
        if (!val.$invalid) {
          this.$emit("can-continue", { value: true });
        } else {
          this.$emit("can-continue", { value: false });
        }
      },
      deep: true,
    },
    clickedNext(val) {
      if (val === true) {
        this.$v.form.$touch();
      }
    },
  },
  methods: {
    range: (start, end) => {
      return Array(end - start + 1)
        .fill()
        .map((_, idx) => start + idx);
    },
  },
  mounted() {
    if (!this.$v.$invalid) {
      this.$emit("can-continue", { value: true });
    } else {
      this.$emit("can-continue", { value: false });
    }
  },
};
</script>
