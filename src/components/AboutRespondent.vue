<template>
  <div class="about">
    <h1>{{ whoisHeader }}</h1>
    <p>{{ whoisDescription }}</p>
  </div>
</template>
<script>
export default {
  computed: {
    whoisHeader() {
      return this.$store.getters.whoisHeader;
    },
    whoisDescription() {
      return this.$store.getters.whoisDescription;
    },
  },
};
</script>
