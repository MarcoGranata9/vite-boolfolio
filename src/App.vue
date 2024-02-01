<script>
import axios from 'axios';

export default {
  data() {
    return {
      apiUrl: 'http://127.0.0.1:8000',
      projects: [],
    }
  },
  created() {
    axios.get(`${this.apiUrl}/api/projects`)
      .then((resp) => {
        console.log(resp);
        this.projects = resp.data.results
      })
  },
}
</script>

<template>

</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>