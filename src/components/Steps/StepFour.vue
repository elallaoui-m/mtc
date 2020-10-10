<template>
  <div style="padding: 2rem 3rem; text-align: left">
    <div class="field">
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="12">
          <div class="field">
            <v-text-field
              v-model="messages"
              label="Nombre des messages"
              type="number"
            ></v-text-field>
            <p v-if="$v.form.messages.$error" class="help is-danger">
              Champs requis
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="12">
          <div class="field">
            <v-text-field
              v-model="appels"
              label="Nombre des appels"
              type="number"
            ></v-text-field>
            <p v-if="$v.form.appels.$error" class="help is-danger">
              Champs requis
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="12">
          <div class="field">
            <v-text-field
              v-model="communFriends"
              label="Nombre des amis communs"
              type="number"
            ></v-text-field>
            <p v-if="$v.form.communFriends.$error" class="help is-danger">
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
        messages: "",
        appels: "",
        communFriends: "",
      },
    };
  },
  validations: {
    form: {
      messages: {
        required,
      },
      appels: {
        required,
      },
      communFriends: {
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
