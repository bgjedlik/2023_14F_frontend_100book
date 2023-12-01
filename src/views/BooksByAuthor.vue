<template>
  <div class="container">
    <h1 class="display-5 text-center">Könyvek szerző szerint</h1>
    <div class="row">
      <div class="col-12 col-md-4">
        <form class="row my-5" @submit.prevent="onSearchByAuthor">
          <div class="col-md-8">
            <label for="" class="form-label">Szerző:</label>
            <select id="" class="form-select" v-model="selectedAuthor">
              <option :value="author" v-for="author in authors">{{ author }}</option>
            </select>
          </div>
          <div class="col-md-4 d-flex align-items-end">
            <button type="submit" class="btn btn-primary ">Listázás</button>
          </div>
        </form>
      </div>

      <div class="col-12 col-md-8">
        <div class="row">
          <div class="col-12 col-md-4 mb-2" v-for="book in filteredBooks">

           <BookCard :book="book"/>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import BookCard from '../components/BookCard.vue';
import { ref } from 'vue';
import bookservice from '../services/bookservice.js';


const authors = ref();
const selectedAuthor = ref();
const filteredBooks = ref([]);

bookservice.getAllAuthor()
  .then(resp => {
    authors.value = resp;
    selectedAuthor.value = authors.value[0];
    onSearchByAuthor();
  });

function onSearchByAuthor() {
  // console.log(selectedAuthor.value);
  bookservice.getBooksByAuthor(selectedAuthor.value)
    .then(resp => {
      filteredBooks.value = resp;
    })
}
</script>

<style lang="scss" scoped></style>