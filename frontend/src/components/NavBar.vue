<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light my-nav-bg"> <!-- bg-light-subtle -->
        <div class="container-xl">
          <a class="navbar-brand" href="#">SimplePrint</a>
          <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarData"
                  aria-controls="navbarData" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="navbar-collapse collapse" id="navbarData" style="">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">О нас</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Цены</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Вопросы</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Поддержка</a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
header {
  flex: 0 0 auto;
}

.my-nav-bg {
  background-color: #dcedff;
}

</style>