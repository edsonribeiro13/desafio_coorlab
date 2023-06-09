<template>
  <v-container style="padding: 0;" fluid>
    <div class="title">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand class="ml-2">
          <b>{{ appName }}</b>
        </b-navbar-brand>
      </b-navbar>
    </div>
    <v-row no-gutters style="height: 100%;">
      <filter-card></filter-card>
    </v-row>
  </v-container>
</template>

<script>
import {
  BNavbar,
  BNavbarBrand,
} from 'bootstrap-vue'
import FilterCard from './FilterCard.vue'

export default {
  components: {
    BNavbar,
    BNavbarBrand,
    FilterCard
  },
  data() {
    const appName = ''

    return {
      appName,
    }
  },
  created() {
    // Implemente aqui o GET dos dados da API REST
    // para que isso ocorra na inicialização da pagina
    this.appName = 'Melhor Frete'
  },
  methods: {
    // Implemente aqui os metodos utilizados na pagina
    methodFoo() {
      console.log(this.appName)
    },
  },
}
</script>

<style scoped>
.title .navbar {
  background-color: #00aca6 !important;
}

.title .navbar-brand {
  margin-left: 20px;
}
</style>
