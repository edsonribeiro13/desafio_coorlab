<template>
  <v-container class="filter-card" style="height: 90%" fluid>
    <v-row no-gutters class="row-title-filter">
      <v-col style="margin-left: -10px" cols="1">
        <v-icon x-large>mdi-map-clock-outline</v-icon>
      </v-col>
      <v-col style="padding-left: 4px" cols="9">
        <span style="font-size: x-large">Insira o destino e o peso</span>
      </v-col>
    </v-row>
    <v-row no-gutters class="row-default">
      <v-col cols="10">
        <v-form>
          <v-col style="padding-inline: 0" cols="12">Destino</v-col>
          <v-select
            :items="arrayCities"
            v-model="citySelected"
            background-color="white"
            filled
            outlined
            placeholder="Selecione o destino"
          ></v-select>
          <v-col style="padding-inline: 0" cols="12">Peso</v-col>
          <v-text-field
            background-color="white"
            suffix="kg"
            type="number"
            hide-spin-buttons
            filled
            outlined
            v-model="weigth"
            placeholder="Peso da carga em KG"
          ></v-text-field>
        </v-form>
        <v-col class="column-btn" style="padding: 0" cols="12">
          <v-btn @click="getFreight()" style="background-color: #90b4c6"
            >Analisar</v-btn
          >
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import retrieveCities from "@/server/handlers/retrieveCities";
import getPossibleFreight from "@/server/handlers/getPossibleFreight";
export default {
  data() {
    return {
      arrayCities: [],
      citySelected: null,
      weigth: "",
    };
  },

  created() {
    this.fillCities();
  },

  methods: {
    fillCities() {
      const citiesSet = new Set();
      retrieveCities().then((res) => {
        res.forEach((company) => {
          citiesSet.add(company.city);
        });

        this.arrayCities = Array.from(citiesSet);
      });
    },

    getFreight() {
      getPossibleFreight(this.citySelected).then((res) => {
        this.$emit("fillCardResult", res, parseFloat(this.weigth));
      });
    },
  },
};
</script>

<style>
@import "../assets/default.css";
</style>
