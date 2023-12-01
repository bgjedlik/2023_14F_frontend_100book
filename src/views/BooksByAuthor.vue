<template>
    <div class="container">
        <h1 class="display-5 text-center">Könyvek szerző szerint</h1>
        <div class="row">
            <div class="col-12 col-md-4">
                <form class="row my-5" @submit.prevent="onSearchByAuthor">
                    <div class="col-md-8">
                        <label for="" class="form-label">Szerző:</label>
                        <select id="" class="form-select">
                        </select>
                    </div>
                    <div class="col-md-4 d-flex align-items-end">
                        <button type="submit" class="btn btn-primary ">Listázás</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import bookservice from '../services/bookservice.js';

const authors = ref();

bookservice.getAllAuthor()
    .then(resp =>{
        authors.value = resp;
    });

function onSearchByAuthor(){

}
</script>

<style lang="scss" scoped>

</style>