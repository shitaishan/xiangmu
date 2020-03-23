<template>
  <div class="home">
    <Header title="首页" />
    <HomeBanner />
    <HomeMain />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import HomeBanner from "./components/HomeBanner.vue";
import HomeMain from "./components/HomeMain.vue";

export default {
  components: {
    Footer,
    Header,
    HomeBanner,
    HomeMain
  },
  data() {
    return {};
  }
};
</script>
