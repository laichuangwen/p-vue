<template>
  <div class="name">
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <div class="age">

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
  },
};
</script>

<style lang="scss" scoped>
.age{
  width: 500px;
  height: 500px;
  background-color: #663333;
}
</style>
