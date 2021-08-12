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
            <b-row>
              <b-col>
                <h3>Missões</h3>
                <b-list-group>
                  <b-list-group-item v-for="mission in home.missions" v-bind:key="mission">{{mission}}
                  </b-list-group-item>
                </b-list-group>
              </b-col>
              <b-col>
                <h3 class="mt-3">Áreas de Interesse</h3>
                <b-list-group>
                  <b-list-group-item v-for="interest in home.researchInterests" v-bind:key="interest">{{interest}}</b-list-group-item>
                </b-list-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <h3 class="mt-3">Organization</h3>
                <p>{{home.organization}}</p>
              </b-col>
            </b-row>
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
// import { Tweet, Moment, Timeline } from 'vue-tweet-embed'

export default {
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