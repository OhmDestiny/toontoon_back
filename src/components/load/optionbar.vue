<template>
  <div class="row q-ma-md q-pt-md">
    <div class="col-2" align="center">
      <q-select square outlined v-model="category" :options="categoryOptions" />
    </div>
    <div class="col-2">
      <q-select square outlined v-model="category" :options="categoryOptions" />
    </div>
    <div class="col-2"></div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
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

<style lang="scss" scoped></style>
