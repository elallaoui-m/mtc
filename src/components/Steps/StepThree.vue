<template>
  <div style="padding: 2rem 3rem; text-align: left">
    <div class="field">
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <div class="field">
            <v-combobox
              v-model="centre"
              :items="items"
              label="Tes centres d'intérêt"
              multiple
              chips
            ></v-combobox>
            <p v-if="$v.form.centre.$error" class="help is-danger">
              Champs requis
            </p>
          </div>
        </v-col>
        <v-col class="d-flex" cols="12" sm="6">
          <div class="field">
            <v-combobox
              v-model="centreHer"
              :items="items"
              label="Ses centres d'intérêt"
              multiple
              chips
            ></v-combobox>
            <p v-if="$v.form.centreHer.$error" class="help is-danger">
              Champs requis
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <div class="field">
            <v-radio-group
              label="Vous aimez la danse ?"
              v-model="danse"
              :mandatory="true"
            >
              <v-radio label="Oui" value="oui"></v-radio>
              <v-radio label="Non" value="non"></v-radio>
            </v-radio-group>
            <p v-if="$v.form.danse.$error" class="help is-danger">
              Champs requis
            </p>
          </div>
        </v-col>
        <v-col class="d-flex" cols="12" sm="6">
          <div class="field">
            <v-radio-group
              label="Votre partenaire aime la danse ?"
              v-model="danseHer"
              :mandatory="true"
            >
              <v-radio label="Oui" value="oui"></v-radio>
              <v-radio label="Non" value="non"></v-radio>
            </v-radio-group>
            <p v-if="$v.form.danseHer.$error" class="help is-danger">
              Champs requis
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <div class="field">
            <v-radio-group
              label="Vous faites du sport ?"
              v-model="sport"
              :mandatory="true"
            >
              <v-radio label="Oui" value="oui"></v-radio>
              <v-radio label="Non" value="non"></v-radio>
            </v-radio-group>
            <p v-if="$v.form.sport.$error" class="help is-danger">
              Champs requis
            </p>
          </div>
        </v-col>
        <v-col class="d-flex" cols="12" sm="6">
          <div class="field">
            <v-radio-group
              label="Votre partenaire fait du sport ?"
              v-model="sportHer"
              :mandatory="true"
            >
              <v-radio label="Oui" value="oui"></v-radio>
              <v-radio label="Non" value="non"></v-radio>
            </v-radio-group>
            <p v-if="$v.form.sportHer.$error" class="help is-danger">
              Champs requis
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <div class="field">
            <v-radio-group
              label="Vous etes pratiquant ?"
              v-model="pratiquant"
              :mandatory="true"
            >
              <v-radio label="Oui" value="oui"></v-radio>
              <v-radio label="Non" value="non"></v-radio>
            </v-radio-group>
            <p v-if="$v.form.pratiquant.$error" class="help is-danger">
              Champs requis
            </p>
          </div>
        </v-col>
        <v-col class="d-flex" cols="12" sm="6">
          <div class="field">
            <v-radio-group
              label="Votre partenaire est pratiquant(e) ?"
              v-model="pratiquantHer"
              :mandatory="true"
            >
              <v-radio label="Oui" value="oui"></v-radio>
              <v-radio label="Non" value="non"></v-radio>
            </v-radio-group>
            <p v-if="$v.form.pratiquantHer.$error" class="help is-danger">
              Champs requis
            </p>
          </div>
        </v-col>
      </v-row>
    </div>
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
        danse: "non",
        sport: "non",
        pratiquant: "",
        centre: "non",
        danseHer: "non",
        sportHer: "non",
        pratiquantHer: "non",
        centreHer: "",
      },
      items: ["danser"],
    };
  },
  validations: {
    form: {
      danse: {
        required,
      },
      sport: {
        required,
      },
      pratiquant: {
        required,
      },
      centre: {
        required,
      },
      centreHer: {
        required,
      },
      danseHer: {
        required,
      },
      sportHer: {
        required,
      },
      pratiquantHer: {
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
  mounted() {
    if (!this.$v.$invalid) {
      this.$emit("can-continue", { value: true });
    } else {
      this.$emit("can-continue", { value: false });
    }
  },
};
</script>
