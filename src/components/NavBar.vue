<template>
  <div id="nav-bar">

        <b-navbar sticky fixed="top" v-if="isMediumOrBigger">
          <b-navbar-brand to="/" class="mr-auto">{{home.brandTitle}}</b-navbar-brand>
          <b-navbar-nav>
            <b-nav-item v-bind:to="route.path" v-for="route in routes">{{ route.name }}</b-nav-item>
          </b-navbar-nav>
        </b-navbar>

    <b-navbar v-else toggleable variant="secondary" class="text-white">
      <b-navbar-brand to="/" class="mr-auto text-white">{{ home.brandTitle }}</b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-compact-up" style="color: white !important"></b-icon>
          <b-icon v-else icon="chevron-compact-down" style="color: white !important"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav>
          <div v-for="route in routes">
            <b-nav-item-dropdown v-if="route.subroutes">
              <template v-slot:button-content><span style="color: white">{{ route.name }}</span></template>
              <b-dropdown-item v-for="subroute in route.subroutes" v-bind:to="subroute.path">{{ subroute.name }}
              </b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item v-else v-bind:to="route.path">
            <span style="color: white">
            {{ route.name }}
            </span>
            </b-nav-item>

          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

  </div>
</template>

<script>
import database from "@/database"

export default {
  name: "NavBar",
  computed: {
    screenSize() {
      return window.innerWidth
    },
    isMediumOrBigger() {
      return this.screenSize >= 768
    },
    home() {
      return database.getHome()
    }
  },
  data() {
    return {
      routes: [
        {
          name: "Página Principal",
          path: "/"
        },
        {
          name: "Pessoas",
          subroutes: [
            {
              name: "Professores",
              path: "/professors"
            },
            {
              name: "Estudantes",
              path: "/students"
            }
          ]
        },
        {
          name: "Publicações",
          path: "/publications"
        }
      ],
    }
  }
}
</script>

<style scoped>

</style>