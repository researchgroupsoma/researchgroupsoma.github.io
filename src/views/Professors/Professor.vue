<template>
  <div id="professor">
    <b-container>
      <person-perfil
          v-bind:person="this.professor"
          v-on:click="clickHandler($event)"
      />
    </b-container>
  </div>
</template>

<script>
import PersonPerfil from "@/components/PersonPerfil"
import database from "@/database"

export default {
  components: {
    PersonPerfil
  },

  computed: {
    professor () {
      return database.getProfessorById(this.$route.params.id)
    }
  },

  methods: {
    clickHandler(id) {
      this.$router.push({name: 'Student', params: {id: id}})
    }
  }
}
</script>

<style scoped>

</style>
