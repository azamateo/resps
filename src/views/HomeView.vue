<template>
  <header>
    <wrapper>
      <NavBar @scrollTo="scrollMeTo" />
      <MainBanner />
    </wrapper>
  </header>
  <wrapper>
    <AboutRespondent id="about" />
    <RespondentFeatures id="features" />
    <HowTo id="howto" />
    <OurMission id="mission" />
  </wrapper>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import MainBanner from "@/components/MainBanner.vue";
import AboutRespondent from "@/components/AboutRespondent.vue";
import RespondentFeatures from "@/components/RespondentFeatures.vue";
import HowTo from "@/components/HowTo.vue";
import OurMission from "@/components/OurMission.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    MainBanner,
    AboutRespondent,
    RespondentFeatures,
    HowTo,
    OurMission,
  },
  methods: {
    scrollMeTo(id) {
      let element = document.getElementById(id);
      // Calculate position to scroll to
      const y = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    },
  },
};
</script>
