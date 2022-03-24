<template>
  <div class="mainBG">
    <div class="row">
      <div><menubar></menubar></div>
      <div class="col shadow-2 bgBox" align="center">
        <optionbar></optionbar>
        <div class="row justify-start">
          <div
            class="q-pt-md"
            style="margin-left: 13px"
            v-for="(item, index) in allBookInLibrary"
            :key="index"
          >
            <cartoonbox></cartoonbox>
          </div>
        </div>
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
    return {
      allBookInLibrary: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
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
  max-width: 1600px;
}
</style>
