<template>
  <v-app>
    <v-content>
      <v-container>
        <div class="accent">Vuetify class works OK</div>
        <br>
        <div class="css-color">CSS color variables work OK</div>
        <br>
        <div class="var-color">But Vuetify color variables are missing in action</div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  created: function () {
    console.log(`App created`);
  }, // created()
};
</script>

<style scoped>
  .css-color {
    --main-bg-color: pink;
    background-color: var(--main-bg-color);
    border: 1px solid gray;
  }
  .var-color {
    background-color: var(--v-primary-base);
    border-left: 12px solid var(--v-accent-base);

    border-top: 1px solid gray;
    border-right: 1px solid gray;
    border-bottom: 1px solid gray;
  }
</style>
