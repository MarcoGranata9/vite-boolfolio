<script>
import axios from 'axios';
import ProjectsCard from '../components/ProjectsCard.vue';
import { store } from '../store';

export default {
    data() {
        return {
            store,
            projects: [],
        };
    },
    created() {
        axios.get(`${this.store.apiUrl}/api/projects`)
            .then((resp) => {
                console.log(resp);
                this.projects = resp.data.results;
            });
    },
    components: { ProjectsCard }
}
</script>

<template>
    <div class="container mt-4">
        <h1>Progetti</h1>
        <div class="row row-cols-4 g-3">
            <div v-for="project in projects" :key="project.id" class="col">
                <ProjectsCard :project="project" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>