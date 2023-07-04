<template>
  <div id="app">
    <div class="wrapper">
      <div class="logo">
        <a href="#">
          <img src="../assets/logo.svg" alt="Beeline респонденты" />
        </a>
      </div>
      <div class="navbar" :class="{ show: isNavbarVisible }">
        <div class="close-nav"><button @click="toggleNavbar">×</button></div>
        <nav>
          <ul>
            <li>
              <a @click="scrollToComponent('about')">Какие плюсы?</a>
            </li>
            <li>
              <a @click="scrollToComponent('howto')">Что потребуется от тебя</a>
            </li>
            <li>
              <a @click="scrollToComponent('mission')">Наша миссия</a>
            </li>
            <li><a @click="openURL">Присоединиться</a></li>
          </ul>
        </nav>
      </div>
      <div class="menu-bar">
        <button @click="toggleNavbar"><i></i><i></i><i></i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNavbarVisible: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarVisible = !this.isNavbarVisible;
      this.bodyScroll();
    },
    bodyScroll() {
      if (this.isNavbarVisible) {
        document.documentElement.classList.add("hide-scroll");
      } else {
        document.documentElement.classList.remove("hide-scroll");
      }
    },
    scrollToComponent(id) {
      this.$emit("scrollTo", id);
    },
    openURL() {
      const url = this.getLink;
      window.open(url, "_blank");
    },
  },
  computed: {
    getLink() {
      return this.$store.state.link.url;
    },
  },
};
</script>

<style>
.hide-scroll {
  overflow: hidden;
}
</style>
