<template>
<div class="main_wrapper">
    <div class="wrapper">

      <div class="output_window">
          <input ref="code" value="123456">
        </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "code-view-page",
  data() {
    return {
      code: '',
    }
  },

  methods: {
    async get_data() {
      this.isLoading = true
      await axios
          .get(
              'http://localhost:8000/v1/form/code/',
              {}
          )
          .then(({data}) => {
            this.$refs.code.value = data.code
            this.isLoading = false
          })
    }
  }
}
</script>

<style scoped>

</style>