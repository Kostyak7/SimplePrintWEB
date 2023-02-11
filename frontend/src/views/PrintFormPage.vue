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
          <label>Кол-во копий</label>
        <input type="number" size="3" name="num" min="1" max="10" value="1" ref="amount">
        </div>

        <div>
          <label>Форма оплаты</label>
          <select ref="payment">
            <option selected value="SFP">СБП</option>
            <option value="TELEGRAM">Телеграм</option>
          </select>
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
      params: {
        color: '',
        format: '',
        amount: '',
        payment: '',
      }
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
      if (this.$refs.file.files[0]) this.file = this.$refs.file.files[0];
    },
    async submitFile() {
      if (!this.file) return;
      let formData = new FormData();
      formData.append('file', this.file);
      /*formData.append('color', this.$refs.color.value)
      formData.append('format', this.$refs.format.value)
      formData.append('amount', this.$refs.amount.value)
      formData.append('payment', this.$refs.payment.value)*/
      await axios
          .post(
              'http://localhost:8000/v1/print/form/filled/',
                formData,
              {params: {
                  color: this.$refs.color.value,
                  format: this.$refs.format.value,
                  amount: this.$refs.amount.value,
                  payment: this.$refs.payment.value,
                }
              },
              {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              }
          )
          .then(() => {
            this.isLoading = false
          })
      await axios
          .post(
              ''
          )
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