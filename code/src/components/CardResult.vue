<template>
  <v-container v-if="hasFilter">
    <v-row no-gutters>
      <v-col cols="12" style="font-size: x-large"
        >Estas são as melhores opções de frete que encontramos para você</v-col
      >
    </v-row>
    <v-row no-gutters>
      <v-col class="column-first-icon" cols="2">
        <v-icon x-large>mdi-hand-coin-outline</v-icon>
      </v-col>
      <v-card flat color="#e1e1df" max-width="50%">
        <v-col
          style="padding-inline: 4px; padding-bottom: 2px; font-weight: bold"
          cols="12"
          >Frete com menor valor</v-col
        >
        <v-col
          style="padding-inline: 4px; padding-top: 0px; padding-bottom: 2px"
          cols="12"
          >Transportadora: {{ bestPriceCompany.name }}</v-col
        >
        <v-col style="padding-inline: 4px; padding-top: 0px" cols="12"
          >Tempo estimado: {{ bestPriceCompany.hour }}</v-col
        >
      </v-card>
      <v-spacer style="max-width: 4px"></v-spacer>
      <v-card flat color="#e1e1df" max-width="25%">
        <v-col cols="12">Preço</v-col>
        <span style="padding-left: 16px">{{ bestPriceCompany.price }}</span>
      </v-card>
    </v-row>
    <v-spacer style="min-height: 8px"></v-spacer>
    <v-row no-gutters>
      <v-col class="column-second-icon" cols="2">
        <v-icon x-large>mdi-clock-check-outline</v-icon>
      </v-col>
      <v-card flat color="#ececee" max-width="50%">
        <v-col
          style="padding-inline: 4px; padding-bottom: 2px; font-weight: bold"
          cols="12"
          >Frete mais rápido</v-col
        >
        <v-col
          style="padding-inline: 4px; padding-top: 0px; padding-bottom: 2px"
          cols="12"
          >Transportadora: {{ bestTimeCompany.name }}</v-col
        >
        <v-col style="padding-inline: 4px; padding-top: 0px" cols="12"
          >Tempo estimado: {{ bestTimeCompany.hour }}</v-col
        >
      </v-card>
      <v-spacer style="max-width: 4px"></v-spacer>
      <v-card flat color="#ececee" max-width="25%">
        <v-col cols="12">Preço</v-col>
        <span style="padding-left: 16px">{{ bestTimeCompany.price }}</span>
      </v-card>
    </v-row>
    <v-row>
      <v-col class="column-btn" style="padding: 0" cols="12">
        <v-btn @click="() => (hasFilter = false)" style="background-color: #90b4c6"
          >Limpar</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
  <v-container v-else fluid class="position-container">
    <v-col style="font-size: xx-large" class="position-container"
      >Nenhum dado selecionado</v-col
    >
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      hasFilter: false,
    };
  },
  props: {
    bestPriceCompany: {
      type: Object,
    },
    bestTimeCompany: {
      type: Object,
    },
  },
};
</script>

<style>
@import "../assets/default.css";
</style>
