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
// import StepOne from "./Steps/StepOne.vue";
import StepTwo from "./Steps/StepTwo.vue";
import StepThree from "./Steps/StepThree.vue";
import StepFour from "./Steps/StepFour.vue";
import StepFive from "./Steps/StepFive.vue";
import StepSix from "./Steps/StepSix.vue";

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
          component: StepThree,
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
          component: StepThree,
          completed: false,
        },
        {
          icon: "forum",
          name: "Communication",
          title: "Communication",
          component: StepFour,
          completed: false,
        },
        {
          icon: "loyalty",
          name: "Relation",
          title: "Relation",
          component: StepFive,
          completed: false,
        },
        {
          icon: "favorite",
          name: "ce qui fais la difference",
          title: "ce qui fais la difference",
          component: StepSix,
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
