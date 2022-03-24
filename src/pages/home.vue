<template>
  <div class="mainBG"></div>
  <menubar></menubar>
  <optionbar></optionbar>
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
};
</script>

<style lang="scss" scoped>
.mainBG {
  background-color: #e5e5e5;
  width: 100%;
  max-width: 1600px;
  margin: auto;
}
</style>
