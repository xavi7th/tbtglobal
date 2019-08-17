<template>
  <main id="tg-main" class="tg-main tg-haslayout">
    <page-slider></page-slider>
    <what-we-offer></what-we-offer>
    <why-choose-us></why-choose-us>
    <!-- <our-team></our-team> -->
    <company-statistics></company-statistics>
    <our-projects></our-projects>
    <contact-us></contact-us>
    <testimonials></testimonials>
    <ads-bar></ads-bar>
    <our-clients></our-clients>
  </main>
</template>

<script>
  import PageSlider from "@components/partials/home/Slider";
  import WhatWeOffer from "@components/partials/home/WhatWeOffer";
  import WhyChooseUs from "@components/partials/home/WhyChooseUs";
  import OurTeam from "@components/partials/home/OurTeam";
  import CompanyStatistics from "@components/partials/home/CompanyStatistics";
  import OurProjects from "@components/partials/home/OurProjects";
  import ContactUs from "@components/partials/home/ContactUs";
  import Testimonials from "@components/partials/home/Testimonials";
  import AdsBar from "@components/partials/home/AdsBar";
  import OurClients from "@components/partials/home/OurClients";
  import pageLoad from "@assets/js/config/pageload.mixin";
  export default {
    name: "HomePage",
    components: {
      PageSlider,
      WhatWeOffer,
      WhyChooseUs,
      OurTeam,
      CompanyStatistics,
      OurProjects,
      ContactUs,
      Testimonials,
      AdsBar,
      OurClients
    },
    mixins: [pageLoad]
  };
</script>

<style scoped lang="scss">
  .tg-main {
    margin-top: 110px;

    @media (max-width: 576px) {
      margin-top: 70px;
    }
  }

  .tg-homeslider figure figcaption .tg-btnsbox .tg-btn {
    @media (max-width: 576px) {
      width: 75%;
    }
  }
</style>
