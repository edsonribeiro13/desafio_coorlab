<template>
    <v-container class="filter-card" style="height: 90%" fluid>
        <v-row no-gutters class="row-title-filter">
            <v-col style="margin-left: -10px;" cols="1">
                <v-icon x-large>mdi-map-clock-outline</v-icon>
            </v-col>
            <v-col style="margin-left: -12px;" cols="9">
                <span style="font-size: x-large">Insira o destino e o peso</span>
            </v-col>
        </v-row>
        <v-row no-gutters class="row-default">
            <v-col cols="10">
                <v-form>
                    <v-col style="padding-inline: 0" cols="12">Destino</v-col>
                    <v-select background-color="white" filled outlined placeholder="Selecione o destino"></v-select>
                    <v-col style="padding-inline: 0" cols="12">Peso</v-col>
                    <v-text-field background-color="white" filled outlined placeholder="Peso da carga em KG"></v-text-field>
                </v-form>
                <v-col class="column-btn" style="padding: 0;" cols="12">
                    <v-btn style="background-color: #90b4c6;">Analisar</v-btn>
                </v-col>
            </v-col>
        </v-row>
    </v-container>
</template>

<style>
@import '../assets/default.css';
</style>