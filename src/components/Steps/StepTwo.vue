<template>
  <div style="padding: 2rem 3rem; text-align: left">
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <div class="field">
          <v-select
            v-model="form.eyesColor"
            :items="eyes"
            label="Couleur de tes yeux"
          >
            <template v-slot:selection="{ item, index }">
              <v-chip v-if="index === 0">
                <span>{{ item }}</span>
              </v-chip>
              <!-- <span v-if="index === 1" class="grey--text caption">
                (+{{ value.length - 1 }} autres)
              </span> -->
            </template>
          </v-select>
          <p v-if="$v.form.eyesColor.$error" class="help is-danger">
            Champs requis
          </p>
        </div>
      </v-col>
      <v-col class="d-flex" cols="12" sm="6">
        <div class="field">
          <v-select
            v-model="form.eyesColorHer"
            :items="eyes"
            label="Couleur de ses yeux"
          >
            <template v-slot:selection="{ item, index }">
              <v-chip v-if="index === 0">
                <span>{{ item }}</span>
              </v-chip>
              <!-- <span v-if="index === 1" class="grey--text caption">
                (+{{ value.length - 1 }} others)
              </span> -->
            </template>
          </v-select>
          <p v-if="$v.form.eyesColorHer.$error" class="help is-danger">
            Champs requis
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <div class="field">
          <v-select
            v-model="form.hairColor"
            :items="hair"
            label="Couleur de tes cheuveux"
          >
            <template v-slot:selection="{ item, index }">
              <v-chip v-if="index === 0">
                <span>{{ item }}</span>
              </v-chip>
              <!-- <span v-if="index === 1" class="grey--text caption">
                (+{{ value.length - 1 }} autres)
              </span> -->
            </template>
          </v-select>
          <p v-if="$v.form.hairColor.$error" class="help is-danger">
            Champs requis
          </p>
        </div>
      </v-col>
      <v-col class="d-flex" cols="12" sm="6">
        <div class="field">
          <v-select
            v-model="form.hairColorHer"
            :items="hair"
            label="Couleur de ses cheuveux"
          >
            <template v-slot:selection="{ item, index }">
              <v-chip v-if="index === 0">
                <span>{{ item }}</span>
              </v-chip>
              <!-- <span v-if="index === 1" class="grey--text caption">
                (+{{ value.length - 1 }} others)
              </span> -->
            </template>
          </v-select>
          <p v-if="$v.form.hairColorHer.$error" class="help is-danger">
            Champs requis
          </p>
        </div>
      </v-col>
    </v-row>

    <!-- hello -->
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <div class="field">
          <v-select
            v-model="form.hairLong"
            :items="hairLong"
            label="Longeur de tes cheuveux"
          >
            <template v-slot:selection="{ item, index }">
              <v-chip v-if="index === 0">
                <span>{{ item }}</span>
              </v-chip>
              <!-- <span v-if="index === 1" class="grey--text caption">
                (+{{ value.length - 1 }} autres)
              </span> -->
            </template>
          </v-select>
          <p v-if="$v.form.hairLong.$error" class="help is-danger">
            Champs requis
          </p>
        </div>
      </v-col>
      <v-col class="d-flex" cols="12" sm="6">
        <div class="field">
          <v-select
            v-model="form.hairLongHer"
            :items="hairLong"
            label="Longeur de ses cheuveux"
          >
            <template v-slot:selection="{ item, index }">
              <v-chip v-if="index === 0">
                <span>{{ item }}</span>
              </v-chip>
              <!-- <span v-if="index === 1" class="grey--text caption">
                (+{{ value.length - 1 }} others)
              </span> -->
            </template>
          </v-select>
          <p v-if="$v.form.hairLong.$error" class="help is-danger">
            Champs requis
          </p>
        </div>
      </v-col>
    </v-row>

    <!-- hello -->
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <div class="field">
          <v-select
            v-model="form.clothsStyle"
            :items="clothsStyle"
            label="Votre Style vestimentaire"
          >
            <template v-slot:selection="{ item, index }">
              <v-chip v-if="index === 0">
                <span>{{ item }}</span>
              </v-chip>
              <!-- <span v-if="index === 1" class="grey--text caption">
                (+{{ value.length - 1 }} autres)
              </span> -->
            </template>
          </v-select>
          <p v-if="$v.form.clothsStyle.$error" class="help is-danger">
            Champs requis
          </p>
        </div>
      </v-col>
      <v-col class="d-flex" cols="12" sm="6">
        <div class="field">
          <v-select
            v-model="form.clothsStyleHer"
            :items="clothsStyle"
            label="Le Style vestimentaire de votre partenaire"
          >
            <template v-slot:selection="{ item, index }">
              <v-chip v-if="index === 0">
                <span>{{ item }}</span>
              </v-chip>
              <!-- <span v-if="index === 1" class="grey--text caption">
                (+{{ value.length - 1 }} others)
              </span> -->
            </template>
          </v-select>
          <p v-if="$v.form.clothsStyleHer.$error" class="help is-danger">
            Champs requis
          </p>
        </div>
      </v-col>
    </v-row>

    <!-- hello -->
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
        eyesColor: "",
        eyesColorHer: "",
        hairColor: "",
        hairColorHer: "",
        hairLong: "",
        hairLongHer: "",
        clothsStyle: "",
        clothsStyleHer: "",
      },
      eyes: ["Bleue", "Maron", "Noir"],
      hair: ["Chatain foncé", "Chatain clair", "Blond", "Noir"],
      hairLong: ["Tres court", "Court", "Long"],
      clothsStyle: ["Classique", "Sport", "Chic", "Très chic"],
    };
  },
  validations: {
    form: {
      eyesColor: {
        required,
      },
      eyesColorHer: {
        required,
      },
      hairColor: {
        required,
      },
      hairColorHer: {
        required,
      },
      hairLong: {
        required,
      },
      hairLongHer: {
        required,
      },

      clothsStyle: {
        required,
      },
      clothsStyleHer: {
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
  mounted() {
    if (!this.$v.$invalid) {
      this.$emit("can-continue", { value: true });
    } else {
      this.$emit("can-continue", { value: false });
    }
  },
};
</script>
