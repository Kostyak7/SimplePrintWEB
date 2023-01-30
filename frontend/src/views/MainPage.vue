<template>
    <div class="main_wrapper">
      <div class="wrapper">

        <div class="to_print_page_button">
          <button type="button"
                  class="btn btn-primary"
                  v-on:click="to_print_page">Начать печатать</button>
        </div>
      </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "main-page",
  methods: {
    async to_print_page() {
      this.isLoading = true
      await axios
          .get(
              'http://localhost:8000/v1/',
              {}
          )
          .then(() => {
            this.isLoading = false
          })
    }
  }
}
</script>

<style scoped>
  .wrapper{
    max-width: 1600px;
    width: 100%;
    padding: 10px;
    display: grid;
    gap: 20px;
    grid-template-columns: minmax(500px, 860px) 100px minmax(400px, 640px);
    grid-template-rows: 75% 20%;
    grid-template-areas:
      "to_print_page"
    ;
  }
  @media (max-width: 1100px) {
    .wrapper{
      grid-template-columns: repeat(1, auto);
      grid-template-rows: repeat(4, auto);
      grid-template-areas:
      "to_print_page"
      ;
    }
  }
  .main_wrapper{
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    margin: auto;
  }

  .to_print_page_button{
    grid-area: to_print_page;
  }
</style>