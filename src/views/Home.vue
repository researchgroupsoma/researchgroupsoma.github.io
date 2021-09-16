<template>
  <div id="home">
    <b-row>
<!--      <b-col cols="12" md="10">-->
        <b-container>
          <h2>{{home.groupName}}</h2>
<!--          <b-img-->
<!--              alt="Group Picture"-->
<!--              v-bind:src="require('../'+home.imageSource)"-->
<!--              fluid-->
<!--              width="920"-->
<!--          />-->
          <p>{{home.welcomeMessage}}</p>

          <b-container>

            <missions/>
            <research-areas/>

            
          </b-container>
        </b-container>
<!--      </b-col>-->

<!--      <b-col cols="12" md="2">-->
<!--        <Timeline id="ufmsbr"/>-->
<!--      </b-col>-->
    </b-row>
  </div>
</template>

<script>
import database from "@/database"
import Missions from "@/views/Home/Missions"
import ResearchAreas from '@/views/Home/ResearchAreas.vue'
// import { Tweet, Moment, Timeline } from 'vue-tweet-embed'

export default {
  components: {
    Missions,
    ResearchAreas
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