<template>
  <div class="main_wrapper">
    <div class="wrapper">

      <div class="to_main_page_button">
        <button type="button"
                class="btn btn-primary"
                v-on:click="to_main_page">Что это?
        </button>
        <div class="large-12 medium-12 small-12 cell">
          <label>File
            <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
          </label>
          <button v-on:click="submitFile">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "print-form-page",
  data() {
    return {
      file: '',
    }
  },

  methods: {
    async to_main_page() {
      this.isLoading = true
      await axios
          .get(
              'http://localhost:8000/v1/',
              {}
          )
          .then(() => {
            this.isLoading = false
          })
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    async submitFile() {
      let formData = new FormData();
      formData.append('file', this.file);
      await axios
          .post(
              'http://localhost:8000/v1/print/form/filled/',
              formData,
              { headers: {
                  'Content-Type': 'multipart/form-data'
                }
              }
          )
          .then(() => {
            this.isLoading = false
          })
    }
  }
}
</script>

<style scoped>
.wrapper {
  max-width: 1600px;
  width: 100%;
  padding: 10px;
  display: grid;
  gap: 20px;
  grid-template-columns: minmax(500px, 860px) 100px minmax(400px, 640px);
  grid-template-rows: 75% 20%;
  grid-template-areas:
      "to_main_page";
}

@media (max-width: 1100px) {
  .wrapper {
    grid-template-columns: repeat(1, auto);
    grid-template-rows: repeat(4, auto);
    grid-template-areas:
      "to_main_page";
  }
}

.main_wrapper {
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  margin: auto;
}

.to_main_page_button {
  grid-area: to_main_page;
}
</style>