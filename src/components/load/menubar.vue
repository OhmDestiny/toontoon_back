<template>
  <div
<<<<<<< Updated upstream
    class="desktop-only shadow-6 q-pl-md q-pt-lg q-pb-md"
=======
    class="desktop-only q-pl-md q-pt-lg q-pb-md"
>>>>>>> Stashed changes
    style="
      background-color: #f6f7fb;
      width: 100%;
      max-width: 1600px;
      height: 100%;
      margin: auto;
    "
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
      <!-- manga -->
      <div class="row menuBar">
        <div class="col"></div>
        <img
          class="q-pt-sm"
          src="~assets/menu_bar_symbol/books.svg"
          alt="books"
          style="width: 30px"
        />
        <div class="spaceBar"></div>
        <div class="textMenu col-5 q-pt-sm">หนังสือ</div>
        <div class="col"></div>
      </div>
      <div class="menuGap"></div>
      <hr style="width: 270px" />
      <!-- category -->
      <div class="row menuBar">
        <div class="col"></div>
        <img
          class="q-pt-sm"
          src="~assets/menu_bar_symbol/category.svg"
          alt="category"
          style="width: 31.95px"
        />
        <div class="spaceBar"></div>
        <div class="textMenu col-5 q-pt-sm">หมวดหมู่</div>
        <div class="col"></div>
      </div>
      <div class="menuGap"></div>
      <hr style="width: 270px" />
      <!-- ranking -->
      <div class="row menuBar">
        <div class="col"></div>
        <img
          class="q-pt-sm"
          src="~assets/menu_bar_symbol/category.svg"
          alt="category"
          style="width: 31.95px"
        />
        <div class="spaceBar"></div>
        <div class="textMenu col-5 q-pt-sm">อันดับ</div>
        <div class="col"></div>
      </div>
      <div class="menuGap"></div>
      <hr style="width: 270px" />
      <!-- ad -->
      <div class="row menuBar">
        <div class="col-2"></div>
        <img
          class="q-pt-sm"
          src="~assets/menu_bar_symbol/ad.svg"
          alt="category"
          style="width: 36.76px ,height:28.31px"
        />
        <div class="spaceBarAd"></div>
        <div class="textMenu col-6 q-pt-sm q-pl-sm">โฆษณา</div>
        <div class="col"></div>
      </div>
      <div class="menuGap"></div>
      <hr style="width: 270px" />
      <!-- admin -->
      <div class="row menuBar">
        <div class="col"></div>
        <img
          class="q-pt-sm"
          src="~assets/menu_bar_symbol/admin.svg"
          alt="category"
          style="width: 33.37px, height: 31.94px"
        />
        <div class="spaceBar q-pl-md"></div>
        <div class="textMenu col-5 q-pt-sm">ผู้ดูแลระบบ</div>
        <div class="col"></div>
      </div>
      <div class="menuGap"></div>

      <!-- sign out -->
      <hr style="width: 270px" />
      <div class="row menuBar absolute-bottom" align="center">
        <div class="col"></div>
        <q-icon class="q-pt-sm" name="fas fa-sign-out-alt" size="25px" />
        <div class="textMenu col-7">ออกจากระบบ</div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bar {
  width: 300px;
  height: 896px;
  border: 3px;
  background-color: white;
  position: relative;
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
  line-height: 45px;
  margin: auto;
  cursor: pointer;
}
.menuBar:hover {
  background-color: #e5eeff;
}
.textMenu {
  font-size: 22px;
  color: #333333;
  margin: auto;
}
.menuGap {
  height: 10px;
}
.underline {
  border: 1px solid #c7c7c8;
}
.spaceBar {
  height: 58px;
  width: 30px;
}
.spaceBarAd {
  height: 58px;
  width: 9px;
}
.brx {
  border: 1px solid red;
}
</style>
