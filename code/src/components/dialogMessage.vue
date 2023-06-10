<template>
  <v-card class="position-container" max-width="100%">
    <v-col style="display: flex; justify-content: center" cols="12">
      <v-icon x-large color="#3b677f">mdi-alert-box-outline</v-icon>
    </v-col>
    <v-col
      style="display: flex; justify-content: center; font-size: large"
      cols="12"
    >
      <span>{{ message }}</span>
    </v-col>
    <v-col class="column-btn" cols="12">
      <v-btn @click="$emit('closeDialog')" style="background-color: #90b4c6"
        >Fechar</v-btn
      >
    </v-col>
  </v-card>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: "",
    },
  },
};
</script>
