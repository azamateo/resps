<template>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
//Navbar
body {
  margin: 0;
}
wrapper {
  display: block;
  max-width: 1140px;
  margin: auto;
}
h1 {
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
}
h3 {
  font-size: 20px;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
}
p {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-shrink: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
}

header {
  padding: 10px 20px;
  background: #ddefff;
  display: flex;
  justify-content: center;
}
header .wrapper {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 32px;
}
header .logo img {
  height: 50px;
  display: block;
}

.navbar {
  position: fixed;
  top: 0;
  left: 100%;
  margin: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 20px;
  transition: left 0.3s;
}

.navbar.show {
  left: 0 !important;
}

.hide-scroll {
  overflow: hidden;
}

.navbar ul {
  all: unset;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
}
.navbar ul a {
  all: unset;
  cursor: pointer;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
}
.close-nav {
  text-align: right;
  margin-bottom: 20px;
}
.close-nav button {
  width: 36px;
  height: 36px;
  background: #f7f7f7;
  font-size: 28px;
  line-height: 28px;
  cursor: pointer;
  border-radius: 12px;
  color: #444444;
  margin-right: 50px;
  border: 0;
}
.close-nav button:hover {
  color: #222222;
  background: white;
}

.menu-bar button {
  border: 0;
  background: #fff;
  height: 50px;
  width: 50px;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 20px;
}
.menu-bar i {
  display: block;
  width: 80%;
  margin: 0 auto;
}
.menu-bar i::after {
  display: block;
  content: "";
  border-top: 3px solid #444444;
  margin: 6px 0;
  border-radius: 20%;
}
.menu-bar button:hover {
  background: white;
}
.menu-bar button:hover i {
  border-color: #222222;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 30px;
}

//Header
.button {
  display: flex;
  width: 158px;
  height: 56px;
  padding: 0px 32px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: var(--ui-buttons-primary-active, #ffe14d);
  color: var(--label-primary, #10083f);
  text-align: center;
  /* UI Text/Semibold/L */
  font-size: 18px;
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  border: 0px;
  cursor: pointer;
}

.banner {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 70px;
  padding-bottom: 50px;
}
.banner__content {
  text-align: left;
}

.banner__content .button {
  text-align: center;
}

// About Respondent
.about {
  width: 50%;
  margin: 110px auto;
}

// Features
.features {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0px 40px 0px;
}

.features h1 {
  text-align: left;
}

.card {
  width: 28%;
  height: 441px;
  flex-shrink: 0;
  border-radius: 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
}
.card__image {
  padding-top: 90px;
}
.card p {
  margin: 0;
}
.desciprtion {
  display: none;
}
.card:hover .desciprtion {
  display: block;
}
.card:hover {
  cursor: pointer;
  width: 30%;
}
// howto
.howto__wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom: 40px;
}

.howto__block {
  width: 50%;
  text-align: left;
}
.howto__block:last-child {
  margin-left: 120px;
}
.howto__number {
  display: flex;
  padding: 18px 22px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 16px;
  width: fit-content;
}
.howto__block h1 {
  text-align: center;
  font-size: 36px;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  margin: 0px;
}

.ourmission {
  display: flex;
  flex-direction: row-reverse;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  padding-top: 100px;
}

.ourmission__content {
  margin-left: 120px;
  text-align: left;
  width: 50%;
}
.ourmission__content p {
  width: 95%;
}
.ourmission__image {
  text-align: left;
  width: 50%;
}
.ourmission img {
  text-align: left;
  width: 100%;
}
.ourmission__content button {
  display: flex;
  width: 258px;
  height: 56px;
  padding: 0px 32px;
  margin-top: 55px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
}

@media (min-width: 720px) {
  .navbar {
    all: unset;
    display: block;
  }
  .navbar ul {
    flex-direction: row;
    gap: 20px;
  }
  .navbar ul a {
    font-size: inherit;
  }
  .close-nav,
  .menu-bar {
    display: none;
  }
}
@media (max-width: 720px) {
  nav {
    display: flex;
    flex-direction: row;
    align-content: center;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    all: unset;
    cursor: pointer;
  }
  .navbar ul a {
    font-size: 25px !important;
    font-style: normal;
    font-weight: 700;
    line-height: 70px;
  }

  .banner {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 20px;
    padding-bottom: 20px;
    flex-direction: column;
  }

  .banner {
    display: block;
    margin: auto;
  }
  .banner__content {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .banner__image {
    padding-top: 50px;
    width: 100%;
  }
  .banner img {
    width: 100%;
  }
  .about {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 30px auto;
  }
  .features {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0px;
  }

  .card {
    width: 80%;
    height: auto;
    border-radius: 16px;
    background: #fff6cc;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
  }
  .card__image {
    padding-top: 10px;
  }

  .card:hover .desciprtion {
    display: block;
  }
  .card:hover {
    cursor: pointer;
    width: 80%;
  }

  .howto__wrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    padding-top: 0px;
    padding-bottom: 0px;
    align-items: center;
  }
  .howto__block {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
  .howto__block:last-child {
    margin-left: 0px;
  }
  .howto__block p {
    text-align: center;
  }
  .ourmission {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    padding-top: 20px;
  }
  .ourmission__content {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    margin-left: 0px;
    padding-bottom: 50px;
    text-align: center;
  }
  .ourmission__image {
    text-align: center;
    width: 80%;
  }
}
</style>
