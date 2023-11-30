<template>
  <div class="container">
    <h1 class="display-5 text-center">Könyvek</h1>
    <div class="row">
      <div class="col-12 col-md-3 mb-2" v-for="book in books">
        
        <div class="card h-100" >
          <img :src="imgUrl + book.ImageName" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ book.Title }}</h5>
            <p class="card-text">Szerző: {{ book.Author }}</p>
            <p class="card-text">Nyelv: {{ book.Language }}</p>
            <p class="card-text">Ország: {{ book.Country }}</p>
           
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import bookservice from '../services/bookservice';

const books = ref();
const imgUrl = import.meta.env.VITE_IMG_URL;

bookservice.getAllBook()
  .then(resp => {
    books.value = resp;
  });

</script>

<style lang="scss" scoped></style>