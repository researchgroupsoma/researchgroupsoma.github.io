<template>
  <div id="classes">
    <b-container>
      <h1>Classes</h1>
      <courses-group v-bind:classes="classes"></courses-group>
    </b-container>
  </div>
</template>

<script>
import database from "@/database"
import ClassesGroup from "@/views/Courses/ClassesGroup";

export default {
  name: "Classes",
  components: {
    ClassesGroup
  },
  computed: {
    classes() {
      return database.getClasses()
    }
  }
}
</script>

<style scoped>

</style>