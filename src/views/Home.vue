<template>
  <div id="home">
<!--        <b-container>-->
            <group-description/>
            <missions/>
            <research-areas/>
<!--        </b-container>-->
  </div>
</template>

<script>
import database from "@/database"
import Missions from "@/views/Home/Missions"
import ResearchAreas from '@/views/Home/ResearchAreas.vue'
import GroupDescription from "@/views/Home/GroupDescription";
// import { Tweet, Moment, Timeline } from 'vue-tweet-embed'

export default {
  components: {
    Missions,
    ResearchAreas,
    GroupDescription
  },
  computed: {
  
    home() {
      return database.getHome()
    }
  },
  // components: {
  //   Timeline
  // }
}
</script>