<template>
<div id="vacancies-group">
  <b-card v-for="vacancy in vacancies" v-bind:title="vacancy.title"
          v-bind:sub-title="`Type: ${vacancy.type}`">
    {{ `${vacancy.description}` }}
  </b-card>
</div>
</template>

<script>
export default {
  name: "VacanciesGroup",
  props: {
    vacancies: Array
  }
}
</script>

<style scoped>

</style>