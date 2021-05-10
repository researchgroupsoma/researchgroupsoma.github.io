<template>
  <div id="publications">
    <b-container>
      <h1>Publications</h1>
      <publication-group v-bind:publications="publications"/>
    </b-container>
  </div>
</template>

<script>
import PublicationGroup from "@/views/Publications/PublicationGroup";
import database from "@/database/index"

export default {
  components: {
    PublicationGroup
  },

  computed: {
    publications() {
      return database.getPublications()
    }
  }
}
</script>

<style scoped>

</style>