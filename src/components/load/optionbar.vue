<template>
  <div>
    <div class="row q-ma-md items-center">
      <div class="row col-4 items-center" align="right">
        <q-input
          class="searchTextColor"
          v-model="searchBar"
          dense
          style="width: 200px"
          label="ค้นหาชื่อการ์ตูน"
        />
        <q-icon
          class="colorSearch"
          size="30px "
          name="fa-solid fa-magnifying-glass"
        />
      </div>
      <div class="col-2"></div>
      <div class="col" align="center">
        <q-select
          square
          outlined
          v-model="showCategory"
          :options="categoryOptions"
        />
      </div>
      <div class="blockGap"></div>
      <div class="col">
        <q-select
          square
          outlined
          v-model="showCategoryStatus"
          :options="categoryStatus"
        />
      </div>
      <div class="blockGap"></div>
      <div class="col" align="center">
        <q-select
          square
          outlined
          v-model="showCategoryPage"
          :options="categoryPage"
        />
      </div>
      <div class="blockGap"></div>

      <div class="col row items-center justify-evenly addNewCartoonBtn">
        <q-icon class="colorSearch" size="20px " name="fa-solid fa-plus" />
        <div class="font16" align="center">เพิ่มเรื่องใหม่</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      searchBar: ref(""),
      showCategory: ref("ทั้งหมด"),
      categoryOptions: [
        "ทั้งหมด",
        "โรแมนติก",
        "แฟนตาซี",
        "แอคชั่น",
        "พลังวิเศษ",
        "ตลก",
        "ผึ/ปึศาจ",
        "กึฬา",
        "ดราม่า",
        "ทำอาหาร",
        "โรงเรียน",
        "เกาหลึ",
        "จึน",
        "ตอนเดียวจบ",
        "จบแล้ว",
      ],
      showCategoryStatus: ref("อัพเดตล่าสุด"),
      categoryStatus: ["อัพเดตล่าสุด", "เรียงตามอันดับ", "เรียงตามตัวอักษร"],
      showCategoryPage: ref("หน้าที่3"),
      categoryPage: [
        "หน้าที่1",
        "หน้าที่2",
        "หน้าที่3",
        "หน้าที่4",
        "หน้าที่5",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.colorSearch {
  cursor: pointer;
  color: #333333;
}
.searchTextColor {
  color: #949393;
}
.blockGap {
  width: 15px;
}
.addNewCartoonBtn {
  width: 135px;
  height: 55px;
  line-height: 55px;
  border: 1px solid #474747;
  cursor: pointer;
}
</style>
