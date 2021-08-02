<template>
  <div id="nav-bar">
    <b-navbar toggleable variant="secondary" class="text-white">
      <b-navbar-brand to="/" class="mr-auto text-white">{{ brandTitle }}</b-navbar-brand>

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
              <b-dropdown-item v-for="subroute in route.subroutes" v-bind:to="subroute.path" >{{subroute.name}}</b-dropdown-item>
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
export default {
  name: "NavBar",
  computed: {
    screenSize() {
      return window.innerWidth
    },
    isMediumOrBigger() {
      return this.screenSize >= 768
    }
  },
  data() {
    return {
      routes: [
        {
          name: "Home",
          path: "/"
        },
        {
          name: "News",
          path: "/news"
        },
        {
          name: "People",
          subroutes: [
            {
              name: "Students",
              path: "/students"
            },
            {
              name: "Professors",
              path: "/professors"
            }
          ]
        },
        {
          name: "Publications",
          path: "/publications"
        },
        // {
        //   name: "Vacancies",
        //   path: "/vacancies"
        // },
        // {
        //   name: "Research Lines",
        //   path: "/research-lines"
        // },
        // {
        //   name: "Softwares and Databases",
        //   path: "/softwares-and-databases"
        // },
        // {
        //   name: "Classes",
        //   path: "/classes"
        // },
        // {
        //   name: "Projects",
        //   path: "/projects"
        // }
      ],
      brandTitle: "SOMA Research Group"
    }
  }
}
</script>

<style scoped>

</style>