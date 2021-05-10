<template>
  <div id="classes">
    <b-container>
      <h1>Classes</h1>
      <classes-group v-bind:classes="classes"></classes-group>
    </b-container>
  </div>
</template>

<script>
import database from "@/database"
import ClassesGroup from "@/views/Classes/ClassesGroup";

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