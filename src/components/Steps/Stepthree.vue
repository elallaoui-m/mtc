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
            <p v-if="$v.form.eyesColor.$error" class="help is-danger">
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
            <p v-if="$v.form.eyesColorHer.$error" class="help is-danger">
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
        dance: "",
        sport: "",
        pratiquant: "",
        centre: "",
        danceHer: "",
        sportHer: "",
        pratiquantHer: "",
        centreHer: "",
      },
      items: [],
    };
  },
  validations: {
    form: {
      dance: {
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
