<template>
<div id="classes-group">
  <b-card v-for="classe in classes">{{classe.name}}</b-card>
</div>
</template>

<script>
export default {
  name: "ClassesGroup",
  props: {
    classes: Array
  }
}
</script>

<style scoped>

</style>