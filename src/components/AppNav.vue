<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <span class="navbar-brand" >100 Könyv</span>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          
          <li class="nav-item">
            <router-link class="nav-link" to="/">Nyitó oldal</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/konyvek">Könyvek</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/konyvek-szerzo">Könyvek szerző szerint</router-link>
          </li>
        </ul>
     
      </div>
    </div>
  </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>