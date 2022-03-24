<template>
  <div
    class="desktop-only shadow-6 q-pl-md q-pt-lg q-pb-md"
    style="background-color: #f6f7fb; width: 100%; height: 100%; margin: auto"
  >
    <div class="bar">
      <!-- giraffprofile -->
      <div class="row">
        <img
          class="q-pt-md q-pl-md"
          src="~assets/log_in_picture/giraffe.png"
          alt="giraff"
          style="height: 135px"
        />
        <div class="textProfile q-pt-xs" align="left">AunNy</div>
        <div class="col-2"></div>
      </div>
      <!-- menubar -->
      <div class="menuBar" align="center">
        <div class="textMenu q-pt-sm">หนังสือ</div>
      </div>
      <div class="menuGap"></div>
      <div class="underline"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bar {
  width: 300px;
  height: 1366px;
  border: 3px;
  background-color: white;
}
.textProfile {
  font-size: 22px;
  color: #343434;
  width: 66px;
  height: 26px;
  margin: auto;
}
.menuBar {
  width: 270px;
  height: 45px;
  background-color: #2d6be4;
  margin: auto;
}
.textMenu {
  font-size: 22px;
  color: white;
}
.menuGap {
  height: 10px;
}
.underline {
  border: 1px solid #c7c7c8;
  width: 270px;
  margin: auto;
}

.brx {
  border: 1px solid red;
}
</style>
