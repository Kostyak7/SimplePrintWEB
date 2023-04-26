<template>
  <header-a class="header_scrolled"></header-a>
    <div class="get-file-page">
        <div class="container">
            <form action="" class="form">
                <div class="form__line">
                    <label for="formFile" class="form-label">PDF файл</label>
                    <input ref="file" class="form-control" type="file" id="formFile" accept=".pdf" v-on:change="handleFileUpload()">
                </div>
                <div class="form__line">
                    <label class="form-label">Цвет</label>
                    <select ref="color" class="form-select" aria-label="Type of printing" id="formPrintType">
                        <option selected value="BLACK">Чёрно-белая</option>
                        <option value="COLOR">Цветная</option>
                    </select>
                </div>
                <div class="form__line">
                    <label class="form-label">Формат</label>
                    <select ref="format" class="form-select" aria-label="Type of printing" id="formPrintFormat">
                        <option selected value="ONE-SIDE">Односторонний</option>
                        <option value="TWO-SIDE">Двухсторонний</option>
                    </select>
                </div>
                <div class="form__line">
                    <label for="numOfCopies">Количество копий</label>
                    <input ref="amount" type="number" id="numOfCopies" value="1" min="1" max="10">
                </div>
                <div>
                    <a class="form__preview-button" href="#">Посмотреть превью</a>
                </div>
                <div class="form__submit">
                    <button-a class="form__button" @click="submitFile">Печатать</button-a>
                </div>
            </form>
            <img class="get-file-page__flower" src="@/assets/img/Flowers-form.svg" alt="">
            <img class="get-file-page__flower-desk" src="@/assets/img/Flowers-form-desk.svg" alt="">
        </div>
    </div>
</template>

<script>
import axios from "axios";
import HeaderA from "@/components/HeaderA";

export default {
  name: "form-print-a",
  components: {HeaderA},
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
        this.$router.push({name: 'code-page', params: {code: this.code}})
        /*await axios
            .get(
                'http://localhost:8000/v1/print/code/',
                {
                  code: this.code,
                }
            )
            .then(() => {
              window.alert(this.code);
            })*/
      }
    }
  }
}
</script>

<style lang="sass">
.get-file-page
    height: 100vh
    // align-items: center
    &__flower
        position: absolute
        bottom: 0
        right: 1.5rem
        z-index: -1
    &__flower-desk
        display: none
    & .container
        min-height: 100%
        position: relative
        display: flex
        padding-top: 15vh


.form
    width: 100%
    &__line
        margin-bottom: 2rem
        border: var(--border)
        width: 100%
        display: flex
        align-items: center
        background-color: #fff
        & label
            margin: 0
            background-color: $light-blue
            padding: 0.5rem 1.5rem
            width: 40%
            border-right: var(--border)
        & :last-child
            border: none
            padding: 0 1.5rem
            width: 60%
    &__preview-button
        color: #A7A7A7
    &__button
        margin-top: 5rem
        background-color: #fff !important
        padding-left: 4rem !important
        padding-right: 4rem !important

@media (min-width: 768px)
    .form
        font-size: 20px
        &__line
            & label
                margin: 0
                padding: 1rem 3rem
            & :last-child
                padding: 0rem 3rem

@media (min-width: 1200px)
    .get-file-page
        min-height: 650px
        &__flower
            display: none
        &__flower-desk
            display: block
            height: 100%
            position: relative
            bottom: -18px
            margin-left: 10%
        & .container
            min-height: 520px
    .form
        min-width: 500px
        position: relative
        &__button
            margin-top: 5rem
            background-color: #fff !important
            padding-left: 4rem !important
            padding-right: 4rem !important
            position: absolute
            bottom: 0
            left: 0
</style>