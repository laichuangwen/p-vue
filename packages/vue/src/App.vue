<template>
  <div class="name">
    vue
    <name></name>
    <age class="age"></age>
  </div>
</template>

<script>
import Name from './Name.vue';
import Age from './Age.vue';

export default {
  components: {
    Name,
    Age,
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
.age{
  margin-top: 50px;
}
</style>
