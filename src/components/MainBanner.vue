<template>
  <div class="banner">
    <div class="banner__content">
      <h1>{{ bannerHeader }}</h1>
      <p>{{ bannerDescription }}</p>
      <button class="button" @click="openURL">{{ bannerButton }}</button>
    </div>
    <div class="banner__image">
      <img src="../assets/banner_image.svg" alt="Beeline респонденты" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openURL() {
      const url = this.getLink; // Replace with your desired URL
      window.open(url, "_blank");
    },
  },
  computed: {
    bannerHeader() {
      return this.$store.getters.bannerHeader;
    },
    bannerDescription() {
      return this.$store.getters.bannerDescription;
    },
    bannerButton() {
      return this.$store.getters.bannerButton;
    },
    getLink() {
      return this.$store.state.link.url;
    },
  },
};
</script>
