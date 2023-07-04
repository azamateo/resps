<template>
  <div class="howto">
    <h1>{{ howtoHeader }}</h1>
    <div class="howto__wrapper">
      <div class="howto__block">
        <div class="howto__number firstnum">
          <h1>1</h1>
        </div>
        <h3>{{ howtoFirstName }}</h3>
        <p>{{ howtoFirstDesc }}</p>
      </div>
      <div class="howto__block">
        <div class="howto__number secondnum">
          <h1>2</h1>
        </div>
        <h3>{{ howtoSecondName }}</h3>
        <p>{{ howtoSecondDesc }}</p>
      </div>
    </div>
    <div class="howto__wrapper">
      <div class="howto__block">
        <div class="howto__number thirdnum">
          <h1>3</h1>
        </div>
        <h3>{{ howtoThirdName }}</h3>
        <p>{{ howtoThirdDesc }}</p>
      </div>
      <div class="howto__block">
        <div class="howto__number fourthnum">
          <h1>4</h1>
        </div>
        <h3>{{ howtoFourthName }}</h3>
        <p>{{ howtoFourthDesc }}</p>
      </div>
    </div>
  </div>
</template>
<style>
.firstnum {
  background: #eaf4ff;
  color: #0183d4;
}
.secondnum {
  background: #f3ecff;
  color: #9e66ff;
}
.thirdnum {
  background: #dff6d9;
  color: #61ca45;
}
.fourthnum {
  background: #fff7e2;
  color: #ffbd12;
}
</style>

<script>
export default {
  computed: {
    howtoHeader() {
      return this.$store.getters.howtoHeader;
    },
    howtoFirstName() {
      return this.$store.getters.howtoFirstName;
    },
    howtoFirstDesc() {
      return this.$store.getters.howtoFirstDesc;
    },
    howtoSecondName() {
      return this.$store.getters.howtoSecondName;
    },
    howtoSecondDesc() {
      return this.$store.getters.howtoSecondDesc;
    },
    howtoThirdName() {
      return this.$store.getters.howtoThirdName;
    },
    howtoThirdDesc() {
      return this.$store.getters.howtoThirdDesc;
    },
    howtoFourthName() {
      return this.$store.getters.howtoFourthName;
    },
    howtoFourthDesc() {
      return this.$store.getters.howtoFourthDesc;
    },
  },
};
</script>
