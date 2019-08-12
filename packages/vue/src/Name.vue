<template>
  <div :class="s.view">
    <div :class="s.top">

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
  background-image: url("assets/empty.png");
}
.top{
  width: 300px;
  height: 300px;
  background-color: #ddd555;
}
</style>
