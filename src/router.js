import { createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/HomePage.vue'
import AboutUsPage from './pages/AboutUsPage.vue'
import ProjectsPage from './pages/ProjectsPage.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutUsPage,
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsPage,
        }
    ]
})

export {router}