<template>
  <div id="research-lines">
    <b-container>
      <h1>Research Lines</h1>
      <research-lines-group v-bind:researchLines="researchLines"></research-lines-group>
    </b-container>
  </div>
</template>

<script>
import database from "@/database"
import ResearchLinesGroup from "@/views/ResearchLines/ResearchLinesGroup";

export default {
  components: {
    ResearchLinesGroup
  },
  computed: {
    researchLines() {
      return database.getResearchLines()
    }
  }
}
</script>

<style scoped>

</style>