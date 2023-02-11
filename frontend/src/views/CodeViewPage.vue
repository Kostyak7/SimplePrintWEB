<template>
<div class="main_wrapper">
    <div class="wrapper">

      <div class="output_window">
          <input value="123456">
        </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CodeViewPage",

  methods: {
    async get_data() {
      this.isLoading = true
      await axios
          .get(
              'http://localhost:8000/v1/form/code/',
              {}
          )
          .then(({data}) => {
            this.code_data = data.code
            this.isLoading = false
          })
    }
  }
}
</script>

<style scoped>

</style>