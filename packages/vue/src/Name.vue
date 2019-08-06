<template>
  <div :class="s.view">
    vue2227
    <div>
      555555383877755555
    </div>
    <div>
      5555553838777
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  mounted() {
    const s = new Set();
    [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
  },
};
</script>

<style lang="scss" module="s">
.view {
  width: 100px;
  height: 50px;
  background-color: #e344ef;
}
</style>
