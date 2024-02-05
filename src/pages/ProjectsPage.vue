<script>
import axios from 'axios';
import ProjectsCard from '../components/ProjectsCard.vue';
import { store } from '../store';

export default {
    data() {
        return {
            store,
            projects: [],
            currPage: 1,
            lastPage: 0,
            totalProjects: 0,
        };
    },
    created() {
        this.getProjects(1);
    },
    methods: {
        getProjects (pageNum) {
            this.currPage = pageNum
            axios.get(`${this.store.apiUrl}/api/projects`, {
                params: {page: pageNum},
            })
            .then((resp) => {
                this.projects = resp.data.results.data;
                this.lastPage = resp.data.results.last_page
                this.totalProjects = resp.data.results.total
            });

        }
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
            <div class="d-flex justify-content-center w-100">
                <button class="btn btn-primary" :disabled="currPage === 1" @click="getProjects(currPage - 1)">Indietro</button>
    
                <div>
                    <button class="btn mx-1" :class="num === currPage ? 'btn-primary' : 'btn-outline-primary'" v-for="num in lastPage" @click="getProjects(num)">{{ num }}</button>
                </div>
    
                <button class="btn btn-primary" :disabled="currPage === lastPage"  @click="getProjects(currPage + 1)">Avanti</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>