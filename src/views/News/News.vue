<template>
  <div id="news">
    <b-container>
      <h1>News</h1>
      <news-group v-bind:news="news"></news-group>
    </b-container>
  </div>
</template>

<script>
import NewsGroup from "./NewsGroup";
import database from "@/database"

export default {
  name: "News",
  components: {
    NewsGroup
  },
  computed:{
    news() {
      return database.getNews()
    }
  }


}
</script>

<style scoped>

</style>