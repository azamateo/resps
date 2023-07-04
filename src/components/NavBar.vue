<template>
  <div id="app">
    <div class="wrapper">
      <div class="logo">
        <a href="#"
          ><img src="../assets/logo.svg" alt="Beeline респонденты"
        /></a>
      </div>
      <div class="navbar" :class="{ show: isNavbarVisible }">
        <div class="close-nav"><button @click="toggleNavbar">×</button></div>
        <nav>
          <ul>
            <li><a href="#">Какие плюсы?</a></li>
            <li><a href="#">Что потребуется от тебя</a></li>
            <li><a href="#">Наша миссия</a></li>
            <li><a href="#">Присоединиться</a></li>
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
        document.body.classList.add("hide-scroll");
      } else {
        document.body.classList.remove("hide-scroll");
      }
    },
  },
};
</script>

<style>
.hide-scroll {
  overflow: hidden;
}
</style>
