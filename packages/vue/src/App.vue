<template>
  <div class="name">
    vue
    <name></name>
  </div>
</template>

<script>
import Name from './Name.vue';

export default {
  components: {
    Name,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.name {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
