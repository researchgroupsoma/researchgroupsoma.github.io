<template>
  <div id="home">
    <b-row>
      <b-col cols="12" md="10">
        <b-container>
          <h1>{{home.groupName}}</h1>
          <b-img alt="Group Picture" v-bind:src="require('../'+home.imageSource)" fluid/>
          <h2>Welcome to SERG Website!</h2>
          <p>{{home.welcomeMessage}}</p>
          <h2>Mission</h2>
          <b-list-group>
            <b-list-group-item v-for="mission in home.missions" v-bind:key="mission">{{mission}}
            </b-list-group-item>
          </b-list-group>
          <h2>Reserch Interests</h2>
          <b-list-group>
            <b-list-group-item v-for="interest in home.researchInterests" v-bind:key="interest">{{interest}}</b-list-group-item>
          </b-list-group>
          <h2>Organization</h2>
          <p>{{home.organization}}</p>
        </b-container>
      </b-col>

      <b-col cols="12" md="2">
          <a class="twitter-timeline" href="https://twitter.com/nfl?ref_src=twsrc%5Etfw"
             data-height="90%"
          >NFL Twittes - Curated tweets by Gabriel Menezes</a>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import database from "@/database"
export default {
  computed: {
    home() {
      return database.getHome()
    }
  }
}
</script>