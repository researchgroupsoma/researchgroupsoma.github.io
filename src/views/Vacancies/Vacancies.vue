<template>
  <div id="vacancies">
    <b-container>
      <h1>Vacancies</h1>
      <vacancies-group v-bind:vacancies="vacancies"></vacancies-group>
    </b-container>
  </div>
</template>

<script>
import VacanciesGroup from "./VacanciesGroup";
import database from "@/database"
export default {
  components:{
    VacanciesGroup
  },
  computed:{
    vacancies() {
      return database.getVacancies()
    }
  }
}
</script>

<style scoped>

</style>