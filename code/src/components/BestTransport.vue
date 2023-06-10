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
      <filter-card
        @fillCardResult="fillCardResult"
        style="max-width: 45%; min-width: 25rem"
      ></filter-card>
      <card-result
        :bestPriceCompany="bestPriceCompany"
        :bestTimeCompany="bestTimeCompany"
        ref="result"
        style="width: 50%"
      ></card-result>
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
      bestPriceCompany: {
        name: "",
        hour: "",
        price: "",
      },
      bestTimeCompany: {
        name: "",
        hour: "",
        price: "",
      },
    };
  },
  created() {
    this.appName = "Melhor Frete";
  },
  methods: {
    fillCardResult(possibleFreight, weigth) {
      const priceField =
        weigth <= 100 ? "cost_transport_light" : "cost_transport_heavy";
      let bestPrice = possibleFreight[0];
      let bestTime = possibleFreight[0];

      for (var freight of possibleFreight) {
        const freightNewPrice = freight[priceField].split(" ");
        const freightCurrentPrice = bestPrice[priceField].split(" ");
        if (
          parseFloat(freightNewPrice[1]) < parseFloat(freightCurrentPrice[1])
        ) {
          bestPrice = freight;
        }
        if (parseFloat(freight.lead_time) < parseFloat(bestTime.lead_time)) {
          bestTime = freight;
        }
      }

      let bestPriceTotal = bestPrice[priceField].split(" ")
      bestPriceTotal = this.transformValueToCurrentLocal(parseFloat(bestPriceTotal[1]) * weigth)

      let bestTimeTotal = bestTime[priceField].split(" ")
      bestTimeTotal = this.transformValueToCurrentLocal(parseFloat(bestTimeTotal[1]) * weigth)

      this.bestPriceCompany = {
        name: bestPrice.name,
        hour: bestPrice.lead_time,
        price: bestPriceTotal,
      };

      this.bestTimeCompany = {
        name: bestTime.name,
        hour: bestTime.lead_time,
        price: bestTimeTotal,
      };

      this.$refs.result.hasFilter = true;
    },

    transformValueToCurrentLocal(value) {
      return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
      })
    }
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
