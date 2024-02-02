<script>
import axios from "axios";
import { store } from '../store';

export default {
    data() {
        return {
            loading: false,
            store,
            project: {},
        }
    },
    created() {
        this.loading = true;
        axios.get(`${this.store.apiUrl}/api/projects/${this.$route.params.slug}`)
        .then((resp)=> {
            console.log(resp);
            this.project = resp.data.results
            console.log(this.project);
        })
        .finally(()=> {
            this.loading = false
        })
    }                                                                                   
}
</script>

<template>
    <div class="container">
        <div v-if="loading">
            <h2>Caricando il progetto...</h2>
        </div>
        <div v-else class="card">
            <img :src="`${store.apiUrl}/storage/${project.cover_img}`" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ project.description }}</p>
                <p class="card-text">{{ project.type ? project.type.name : 'Nessun tipo' }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>