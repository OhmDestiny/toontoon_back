<template>
  <div class="mainBG">
    <div class="row">
      <div><menubar></menubar></div>
      <div class="q-ma-lg bgBox">
        <optionbar></optionbar>
        <div class="q-ma-md"><cartoonbox></cartoonbox></div>
      </div>
    </div>
  </div>
</template>

<script>
import menubar from "../components/load/menubar.vue";
import optionbar from "../components/load/optionbar.vue";
import cartoonbox from "../components/load/cartoonbox.vue";
export default {
  components: {
    menubar,
    optionbar,
    cartoonbox,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.mainBG {
  background-color: #f6f7fb;
  margin: auto;
  width: 100%;
  max-width: 1600px;
}
.bgBox {
  background-color: white;
  max-width: 1100px;
  width: 100%;
<<<<<<< Updated upstream
  max-width: 1600px;
  margin: auto;
=======
  max-height: 1366px;
>>>>>>> Stashed changes
}
</style>
