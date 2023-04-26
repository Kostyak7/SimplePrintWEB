<template>
  <header-a></header-a>
  <main>
    <main-sect-a></main-sect-a>
    <slider-a></slider-a>
    <about-us-a></about-us-a>
    <price-a></price-a>
    <faq-a></faq-a>
  </main>
  <footer-a></footer-a>

</template>


<script>
import HeaderA from "@/components/HeaderA";
import MainSectA from "@/components/MainSectA";
import SliderA from "@/components/SliderA";
import AboutUsA from "@/components/AboutUsA";
import PriceA from "@/components/PriceA";
import FooterA from "@/components/FooterA";
import FaqA from "@/components/FAQA";

export default {
  name: "MainPage",
  components: {
    HeaderA,
    MainSectA,
    SliderA,
    AboutUsA,
    PriceA,
    FaqA,
    FooterA,
  }
}
</script>

<style lang="sass">


</style>
