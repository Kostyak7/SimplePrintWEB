<template>
  <div class="wrap">
    <nav-bar/>
    <main-page/>
    <print-form-page/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import MainPage from "@/views/MainPage.vue";
import PrintFormPage from "@/views/PrintFormPage.vue";

export default {
  name: 'App',
  components: {
    MainPage,
    PrintFormPage,
    NavBar
  }
}
</script>

<style>
.wrap{
  display: flex;
  flex-flow: column nowrap;
  width: 100vw;
  min-height: 100vh;
  max-height: 200vh;
}

#app {
  /* background-image: url('assets/background.svg');*/
  background-repeat: repeat-y;
  background-color: #ffffff;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}
</style>
