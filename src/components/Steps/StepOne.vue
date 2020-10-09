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
            :items="taills"
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
            :items="taills"
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
