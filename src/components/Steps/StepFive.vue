<template>
  <div style="padding: 2rem 3rem; text-align: left">
    <div class="field">
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="12">
          <div class="field">
            <v-text-field
              v-model="embrasses"
              label="Nombre de fois que vous avez embresser ?"
              type="number"
            ></v-text-field>
            <p v-if="$v.form.embrasses.$error" class="help is-danger">
              Champs requis
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="12">
          <div class="field">
            <v-text-field
              v-model="sex"
              label="Nombre de fois que vous avez fait de l'amour ?"
              type="number"
            ></v-text-field>
            <p v-if="$v.form.sex.$error" class="help is-danger">
              Champs requis
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="12">
          <div class="field">
            <v-text-field
              v-model="meetParents"
              label="Vous avez deja recontrer ses parents ?"
              type="number"
            ></v-text-field>
            <p v-if="$v.form.meetParents.$error" class="help is-danger">
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
        embrasses: "",
        sex: "",
        meetParents: "",
      },
    };
  },
  validations: {
    form: {
      embrasses: {
        required,
      },
      sex: {
        required,
      },
      meetParents: {
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
