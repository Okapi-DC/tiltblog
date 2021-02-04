<template>
  <div class="dice">
    <span>{{ value }}</span>
  </div>
</template>

<script>
export default {
  name: "Dice",
  props: ["value"]
};
</script>

<style scoped>
.dice {
  width: 30px;
  height: 30px;
  border: 1px solid black;
  margin: 5px;
  display: inline-block;
}
.dice span {
  display: block;
  width: 100%;
  height: 100%;
  line-height: 30px;
}
</style>