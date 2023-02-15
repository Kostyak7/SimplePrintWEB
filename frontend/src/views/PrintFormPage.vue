<template>
  <div class="main_wrapper">
    <div class="wrapper">

      <div class="to_main_page_button">
        <div class="large-12 medium-12 small-12 cell">
          <label>Файл
            <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
          </label>
        </div>

        <div>
          <label>Цвет</label>
          <select ref="color">
            <option selected value="BLACK">Черно-Белый</option>
            <option value="COLOR">Цветной</option>
          </select>
        </div>

        <div>
          <label>Формат</label>
          <select ref="format">
            <option selected value="ONE-SIDE">Односторонний</option>
            <option value="TWO-SIDE">Двусторонний</option>
          </select>
        </div>

        <div>
          <label for="amount">Кол-во копий</label>
          <input type="number" size="3" name="amount" min="1" max="10" value="1" ref="amount">
        </div>

        <button type="button"
                class="btn btn-primary"
                v-on:click="submitFile">Печатать
        </button>
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

      validate: '',
      code: '',
    }
  },

  methods: {
    handleFileUpload() {
      if (this.$refs.file.files[0]) this.file = this.$refs.file.files[0];
    },
    async submitFile() {
      if (!this.file) return;

      let filename_type = this.file.name.split('.');
      let isPDF = false;
      if (filename_type[filename_type.length - 1].toLowerCase() === "pdf") isPDF = true;
      if (!isPDF || this.file.size > 100 * 1024 * 1024) return;

      let formData = new FormData();
      formData.append('file', this.file);
      let amount_value = parseInt(this.$refs.amount.value)
      if (amount_value > 10) amount_value = 10
      if (amount_value < 1) amount_value = 1
      this.$refs.amount.value = amount_value
      await axios
          .post(
              'http://localhost:8000/v1/print/form/filled/',
              formData,
              {
                params: {
                  color: this.$refs.color.value,
                  format: this.$refs.format.value,
                  amount: this.$refs.amount.value,
                }
              },
              {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              }
          )
          .then(({data}) => {
            this.isLoading = false
            if (data.validate && data.code) {
              this.code = data.code
            }
          })
      if (this.code) {
        await axios
            .get(
                'http://localhost:8000/v1/print/code/',
                {
                  code: this.code,
                }
            )
            .then(() => {
            })
      }
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