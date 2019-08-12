<template>
  <div :class="s.view">
    vue2227
    <div>
      555555383877755555
    </div>
    <div>
      5555553838777
    </div>
    <img src="./assets/empty.png">
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  mounted() {
    const set = new Set([1, 2, 3, 4, 4]);
    console.log(...set);
  },
  methods: {
  },
};
</script>

<style lang="scss" module="s">
.view {
  width: 100px;
  height: 50px;
  background-color: #e344ef;
  background-image: url('assets/empty.png')
}
</style>
