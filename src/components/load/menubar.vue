<template>
  <div
    class="desktop-only shadow-2"
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
      <div class="row items-center">
        <div class="col">
          <img
            class="q-pt-md q-pl-md"
            src="~assets/log_in_picture/giraffe.png"
            alt="giraff"
            style="height: 135px"
          />
        </div>
        <div class="col-6">
          <div class="textProfile" align="left">AunNy</div>
          <div class="textProfile" align="left">ผู้ดูแลระบบ</div>
        </div>
      </div>
      <!-- menubar -->
      <!-- manga -->
      <div class="items-center row menuBar">
        <div class="col"></div>
        <img
          src="~assets/menu_bar_symbol/books.svg"
          alt="books"
          style="width: 30px"
        />
        <div class="spaceBar"></div>
        <div class="textMenu col-5 q-pt-sm">หนังสือ</div>
        <div class="col"></div>
      </div>

      <hr style="width: 270px" />
      <!-- category -->
      <div @click="goToCategoryPage()" class="row items-center menuBar">
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

      <hr style="width: 270px" />
      <!-- ranking -->
      <div class="row items-center menuBar">
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

      <hr style="width: 270px" />
      <!-- ad -->
      <div class="row items-center menuBar">
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
      <hr style="width: 270px" />
      <!-- admin -->
      <div class="row items-center menuBar">
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

      <!-- sign out -->
      <div class="absolute-bottom">
        <hr style="width: 270px" />
        <div
          @click="goToLogIn()"
          class="row signOutBox"
          style="height: 60px"
          align="center"
        >
          <div class="col-2"></div>
          <div class="row items-center">
            <q-icon class="" name="fas fa-sign-out-alt" size="25px" />
            <div style="width: 20px"></div>
            <div class="textMenu">ออกจากระบบ</div>
          </div>
          <div class="col-2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
  methods: {
    goToCategoryPage() {
      this.$router.push("/category");
    },
    goToLogIn() {
      this.$router.push("/");
    },
  },
};
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

  margin: auto;
}
.menuBar {
  width: 270px;

  cursor: pointer;
  margin: auto;
}
.signOutBox {
  width: 270px;
  cursor: pointer;
  margin: auto;
}
.menuBar:hover {
  background-color: #e5eeff;
  margin: auto;
}
.signOutBox:hover {
  background-color: #e5eeff;
  margin: auto;
}
.bottomLine {
  width: 270px;
}
.textMenu {
  font-size: 22px;
  color: #333333;
}
.menuGap {
  height: 10px;
}
.underline {
  border: 1px solid #c7c7c8;
}
.spaceBar {
  height: 58px;
  width: 25px;
}
.spaceBarAd {
  height: 58px;
  width: 9px;
}
.brx {
  border: 1px solid red;
}
</style>
