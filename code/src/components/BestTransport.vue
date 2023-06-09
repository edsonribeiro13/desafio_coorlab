<template>
  <v-container style="padding: 0" fluid>
    <div class="title">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand class="ml-2">
          <b>{{ appName }}</b>
        </b-navbar-brand>
      </b-navbar>
    </div>
    <v-row class="position-container" no-gutters style="height: 90%">
      <filter-card style="max-width: 45%; min-width: 25rem"></filter-card>
      <card-result style="width: 50%"></card-result>
    </v-row>
  </v-container>
</template>

<script>
import { BNavbar, BNavbarBrand } from "bootstrap-vue";
import FilterCard from "./FilterCard.vue";
import CardResult from "./CardResult.vue";

export default {
  components: {
    BNavbar,
    BNavbarBrand,
    FilterCard,
    CardResult,
  },
  data() {
    const appName = "";

    return {
      appName,
    };
  },
  created() {
    // Implemente aqui o GET dos dados da API REST
    // para que isso ocorra na inicialização da pagina
    this.appName = "Melhor Frete";
  },
  methods: {
    // Implemente aqui os metodos utilizados na pagina
    methodFoo() {
      console.log(this.appName);
    },
  },
};
</script>

<style scoped>
.title .navbar {
  background-color: #00aca6 !important;
}

.title .navbar-brand {
  margin-left: 20px;
}
</style>
