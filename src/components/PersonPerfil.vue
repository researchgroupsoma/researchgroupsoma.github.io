<template>
  <div id="person-perfil">
    <h3>{{ person.name }}</h3>
    <b-img
        v-bind:src="require('../'+person.imageSource)"
        fluid
        alt=""
        height="200px"
        width="200px"
    />

    <div v-if="person.titulation">
      <h3>Degree</h3>
      <p>{{ person.titulation }}</p>
      <p v-if="person.inFormationDegree"> {{person.inFormationDegree + ' ' + person.institutionalBond }}</p>
    </div>

    <div v-if="person.interestAreas">
      <h3>Interest Areas</h3>
      <b-card-group>
        <b-card v-for="interestArea in person.interestAreas">{{interestArea}}</b-card>
      </b-card-group>
    </div>

    <div v-if="person.researchLines">
      <h3>Research Lines</h3>
      <b-card-group>
        <b-card v-for="researchLine in person.researchLines">{{researchLine}}</b-card>
      </b-card-group>
    </div>

    <div v-if="person.description">
      <h3>Description</h3>
      <p>{{ person.description }}</p>
    </div>

    <div v-if="person.classes">
      <h3>Classes</h3>
      <b-card-group>
        <b-card v-for="classe in person.classes">{{classe}}</b-card>
      </b-card-group>
    </div>

  </div>
</template>

<script>

export default {
  //TODO refatorar, colocar cada topico em um Component?
  name: "PersonPerfil",

  components: {

  },

  props: {
    person: Object
  }
}
</script>

<style scoped>

</style>
