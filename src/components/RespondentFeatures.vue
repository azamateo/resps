<template>
  <h1>{{ featuresHeader }}</h1>
  <div class="features">
    <div class="card first">
      <div class="card__image">
        <img src="../assets/img1.svg" alt="Будь первым" />
      </div>
      <h3>{{ featuresFirstCardName }}</h3>
      <p class="desciprtion">
        {{ featuresFirstCardDescription }}
      </p>
    </div>
    <div class="card second">
      <div class="card__image">
        <img src="../assets/img2.svg" alt="Будь первым" />
      </div>
      <h3>{{ featuresSecondCardName }}</h3>
      <p class="desciprtion">
        {{ featuresSecondCardDescription }}
      </p>
    </div>
    <div class="card third">
      <div class="card__image">
        <img src="../assets/img3.svg" alt="Будь первым" />
      </div>
      <h3>{{ featuresThirdCardName }}</h3>
      <p class="desciprtion">
        {{ featuresThirdCardDescription }}
      </p>
    </div>
  </div>
</template>
<style>
.first {
  background: #fff6cc;
}
.second {
  background: #eaf4ff;
}
.third {
  background: #000;
  color: #fff !important;
}
</style>
<script>
export default {
  computed: {
    featuresHeader() {
      return this.$store.getters.featuresHeader;
    },
    featuresFirstCardName() {
      return this.$store.getters.featuresFirstCardName;
    },
    featuresFirstCardDescription() {
      return this.$store.getters.featuresFirstCardDescription;
    },
    featuresSecondCardName() {
      return this.$store.getters.featuresSecondCardName;
    },
    featuresSecondCardDescription() {
      return this.$store.getters.featuresSecondCardDescription;
    },
    featuresThirdCardName() {
      return this.$store.getters.featuresThirdCardName;
    },
    featuresThirdCardDescription() {
      return this.$store.getters.featuresThirdCardDescription;
    },
  },
};
</script>
