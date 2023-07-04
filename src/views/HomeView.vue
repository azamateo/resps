<template>
  <header>
    <wrapper>
      <NavBar />
      <MainBanner />
    </wrapper>
  </header>
  <wrapper>
    <AboutRespondent />
    <RespondentFeatures />
    <HowTo />
    <OurMission />
  </wrapper>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import MainBanner from "@/components/MainBanner.vue";
import AboutRespondent from "@/components/AboutRespondent.vue";
import RespondentFeatures from "@/components/RespondentFeatures";
import HowTo from "@/components/HowTo";
import OurMission from "@/components/OurMission";

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
};
</script>
