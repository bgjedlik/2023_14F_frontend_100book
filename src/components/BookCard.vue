<template>
  <div class="card h-100">
    <img :src="imgUrl + book.ImageName" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ book.Title }}</h5>
      <p class="card-text">Szerző: {{ book.Author }}</p>
      <p class="card-text">Nyelv: {{ book.Language }}</p>
      <p class="card-text">Ország: {{ book.Country }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['book']);
const imgUrl = import.meta.env.VITE_IMG_URL;
</script>

<style lang="scss" scoped></style>