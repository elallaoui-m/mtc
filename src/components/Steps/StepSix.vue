<template>
  <div style="padding: 2rem 3rem; text-align: left">
    <div class="field">
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="12">
          <div class="field">
            <v-combobox
              v-model="form.yourQualities"
              :items="qualities"
              :search-input.sync="search"
              hide-selected
              hint="Maximum 3"
              label="Ajouter 3 de vos qualitées"
              multiple
              persistent-hint
              small-chips
            >
              <template v-slot:no-data>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>
                      Aucun resultat "<strong>{{ search }}</strong
                      >". Taper <kbd>enter</kbd> pour l'ajoutée
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-combobox>
            <p v-if="$v.form.yourQualities.$error" class="help is-danger">
              Champs requis
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="12">
          <div class="field">
            <v-combobox
              v-model="form.herQualities"
              :items="qualities"
              :search-input.sync="search"
              hide-selected
              hint="Maximum 3"
              label="Ajouter 3 de ses qualitées"
              multiple
              persistent-hint
              small-chips
            >
              <template v-slot:no-data>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>
                      Aucun resultat "<strong>{{ search }}</strong
                      >". Taper <kbd>enter</kbd> pour l'ajoutée
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-combobox>
            <p v-if="$v.form.herQualities.$error" class="help is-danger">
              Champs requis
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="12">
          <div class="field">
            <v-combobox
              v-model="form.yourfouls"
              :items="fouls"
              :search-input.sync="search"
              hide-selected
              hint="Maximum 3"
              label="Ajouter 3 de vos defauts"
              multiple
              persistent-hint
              small-chips
            >
              <template v-slot:no-data>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>
                      Aucun resultat "<strong>{{ search }}</strong
                      >". Taper <kbd>enter</kbd> pour l'ajoutée
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-combobox>
            <p v-if="$v.form.yourfouls.$error" class="help is-danger">
              Champs requis
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="12">
          <div class="field">
            <v-combobox
              v-model="form.herfouls"
              :items="fouls"
              :search-input.sync="search"
              hide-selected
              hint="Maximum 3"
              label="Ajouter"
              multiple
              persistent-hint
              small-chips
            >
              <template v-slot:no-data>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>
                      Aucun resultat "<strong>{{ search }}</strong
                      >". Taper <kbd>enter</kbd> pour l'ajoutée
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-combobox>
            <p v-if="$v.form.herfouls.$error" class="help is-danger">
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
        yourQualities: [""],
        herQualities: [""],
        yourfouls: [""],
        herfouls: [""],
      },
      qualities: ["Adorable", "Aimable", "Amusante"],
      fouls: ["Agressive", "Aigri", "Anxieux"],
    };
  },
  validations: {
    form: {
      yourQualities: {
        required,
      },
      herQualities: {
        required,
      },
      yourfouls: {
        required,
      },
      herfouls: {
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
    model(val) {
      if (val.length > 3) {
        this.$nextTick(() => this.model.pop());
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
