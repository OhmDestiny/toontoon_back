<template>
  <div>
    <div class="row q-ma-md">
      <div class="row items-center" align="right">
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
      <!-- <div class="col-2" align="center">
      <q-select square outlined v-model="category" :options="categoryOptions" />
    </div>
    <div class="col-2">
      <q-select square outlined v-model="category" :options="categoryOptions" />
    </div> -->
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      searchBar: ref(""),
      category: ref("ทั้งหมด"),
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
</style>
