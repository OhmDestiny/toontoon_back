<template>
  <div class="">
    <div class="row">
      <div><menubar></menubar></div>
      <div class="categoryBox shadow-2"><addnewcategory></addnewcategory></div>
    </div>
  </div>
</template>

<script>
import menubar from "../components/load/menubar.vue";
import addnewcategory from "../components/load/addnewcategory.vue";
export default {
  components: {
    menubar,
    addnewcategory,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.categoryBox {
  background-color: white;
  max-width: 1050px;
  width: 100%;
}
</style>
