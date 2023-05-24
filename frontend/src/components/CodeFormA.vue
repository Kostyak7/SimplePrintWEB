<template>
<header-a class="header_scrolled"></header-a>
    <div class="get-file-page">
        <div class="container">
            <form action="" class="form">
                <div class="form__line">
                    <label>Код</label>
                    <input ref="text" v-model="code">
                </div>
                <div class="form__submit">
                    <button-a class="form__button" @click="submitCode">Печатать</button-a>
                </div>
            </form>
            <img class="get-file-page__flower" src="@/assets/img/Flowers-form.svg" alt="">
            <img class="get-file-page__flower-desk" src="@/assets/img/Flowers-form-desk.svg" alt="">
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "code-form-a",
  data() {
    return {
      code: null,

      hostname: 'http://localhost:8000',
    }
  },
  methods: {
    valid_code(code_) {
      if (!code_) return false;
      return true;
    },
    async submitCode() {
      if (!this.valid_code(this.code)) return;
      await axios
          .post(
              this.hostname + '/v1/display/code/',
              {
                code: this.code,
              },
          )
          .then(({data}) => {
            console.log(data);
          })
    }
  }
}
</script>

<style scoped>

</style>