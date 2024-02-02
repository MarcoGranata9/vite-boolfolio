<script>
export default {
    data(){
        return {
            links: [
                {
                    name: 'home',
                    title: 'Home',
                },
                {
                    name: 'about',
                    title: 'About',
                },
                {
                    name: 'projects',
                    title: 'Progetti',
                },
            ]
        }
    }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Progetti</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="link in links">
                        <router-link :to="{ name: link.name }" class="nav-link">
                            {{link.title}}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped></style>