<script>
import { store } from '../store';

export default {
    data() {
        return {
            store
        }
    },
    props: {
        project: Object,
    },
}
</script>

<template>
    <div class="card h-100">
        <img :src="`${store.apiUrl}/storage/${project.cover_img}`" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <p class="card-text">{{ project.type ? project.type.name : 'Nessun tipo' }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>