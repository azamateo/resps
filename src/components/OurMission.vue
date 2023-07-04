<template>
  <div class="ourmission">
    <div class="ourmission__content">
      <h1>Наша миссия</h1>
      <p>
        Тебя тоже раздражает, когда ты пользуешься приложением или сайтом и
        непонятно куда нажать? Когда попадаешь на пустой экран после ввода
        данных?
      </p>
      <p>Нам тоже это не нравится!</p>
      <p>
        Мы хотим улучшать наши продукты, делать их проще и удобнее для
        пользователя. Присоединяйся, без тебя нам не обойтись!
      </p>
      <button class="button" @click="openURL">Присоединиться</button>
    </div>
    <div class="ourmission__image">
      <img src="../assets/img4.svg" alt="" />
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
    getLink() {
      return this.$store.state.link.url;
    },
  },
};
</script>
