<template>
  <div class="mainBG">
    <menubar></menubar>
  </div>
</template>

<script>
import menubar from "../components/load/menubar.vue";
export default {
  components: {
    menubar,
  },
};
</script>

<style lang="scss" scoped>
.mainBG {
  background-color: #f6f7fb;
}
</style>
