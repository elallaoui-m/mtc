<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="748">
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <horizontal-stepper
              :steps="demoSteps"
              @completed-step="completeStep"
              @active-step="isStepActive"
              @stepper-finished="alert"
            >
            </horizontal-stepper>
          </div>
        </div>
      </div>
    </section>
  </v-card>
</template>

<script>
import HorizontalStepper from "vue-stepper";

// This components will have the content for each stepper step.
import StepOne from "./Steps/StepOne.vue";
import StepTwo from "./Steps/StepTwo.vue";

export default {
  components: {
    HorizontalStepper,
  },
  data() {
    return {
      demoSteps: [
        {
          icon: "info",
          name: "A propos de vous",
          title: "A propos de vous",
          component: StepOne,
          completed: false,
        },
        {
          icon: "details",
          name: "Vos caratere",
          title: "Vos caratere",
          component: StepTwo,
          completed: false,
        },
        {
          icon: "sync",
          name: "Centres d'interet",
          title: "Centres d'interet",
          component: StepOne,
          completed: false,
        },
        {
          icon: "forum",
          name: "Communication",
          title: "Communication",
          component: StepTwo,
          completed: false,
        },
        {
          icon: "loyalty",
          name: "Relation",
          title: "Relation",
          component: StepOne,
          completed: false,
        },
        {
          icon: "favorite",
          name: "ce qui fais la difference",
          title: "ce qui fais la difference",
          component: StepTwo,
          completed: false,
        },
      ],
    };
  },
  methods: {
    // Executed when @completed-step event is triggered
    completeStep(payload) {
      this.demoSteps.forEach((step) => {
        if (step.name === payload.name) {
          step.completed = true;
        }
      });
    },
    // Executed when @active-step event is triggered
    isStepActive(payload) {
      this.demoSteps.forEach((step) => {
        if (step.name === payload.name) {
          if (step.completed === true) {
            step.completed = false;
          }
        }
      });
    },
    // Executed when @stepper-finished event is triggered
    alert(payload) {
      alert(payload);
    },
  },
};
</script>
