<template>
  <div id="person-perfil">
    <h2 class="mb-4">{{ person.name }}</h2>
    <b-container class="mb-4">
      <b-row>
        <b-col>
          <b-img
              v-if="person.imageSource"
              v-bind:src="require('../'+person.imageSource)"
              fluid
              alt=""
              height="200px"
              width="300px"
              class="mb-3"
          />
          <div v-if="person.interestAreas != undefined">
<!--            <h3 v-if="person.interestAreas.length">Interest Areas</h3>-->
            <b-card-group>
              <b-card v-for="interestArea in person.interestAreas">{{ interestArea }}</b-card>
            </b-card-group>
          </div>
        </b-col>
        <b-col cols="8">
          <div v-if="person.description">
<!--            <h3>Description</h3>-->
            <p>{{ person.description }}</p>
          </div>
        </b-col>
      </b-row>
    </b-container>


    <div v-if="person.publications != undefined">
      <h3 v-if="person.publications.length">Publications</h3>
      <publication-group v-bind:publications="person.publications" v-if="person.publications"/>
    </div>

    <div v-if="person.students != undefined">
      <h3 v-if="person.students.length">Students</h3>
      <person-card-list v-bind:people="person.students" v-on:click="$emit('click', $event)"/>
    </div>

    <div v-if="person.advisor">
      <h3>Advisor</h3>
      <person-card-list v-bind:people="[person.advisor]" v-on:click="goToAdvisorPage($event)"/>
    </div>

    <div v-if="person.courses != undefined">
      <h3 v-if="person.courses.length">Courses</h3>
      <classes-group v-bind:courses="person.courses"></classes-group>
    </div>

    <div v-if="person.projects != undefined">
      <h3 v-if="person.projects.length">Projects</h3>
      <projects-group v-bind:projects="person.projects"></projects-group>
    </div>

  </div>
</template>

<script>
import PublicationGroup from "@/views/Publications/PublicationGroup"
import PersonCardList from "@/components/PersonCardList"
import ClassesGroup from "@/views/Classes/ClassesGroup"
import ProjectsGroup from "@/views/Projects/ProjectsGroup";
import ResearchLinesGroup from "@/views/ResearchLines/ResearchLinesGroup";

export default {
  //TODO refatorar, colocar cada topico em um Component?
  name: "PersonPerfil",

  components: {
    PersonCardList,
    PublicationGroup,
    ClassesGroup,
    ProjectsGroup,
    ResearchLinesGroup
  },


  props: {
    person: Object
  }
}
</script>

<style scoped>

</style>
