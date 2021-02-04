<template>
  <div class="roller">
    <button v-on:click="rollDice" class="dice-roller">Lancer</button>
    <div class="dice">
      <Dice v-bind:value="diceOne"></Dice>
      <Dice v-bind:value="diceTwo"></Dice>
    </div>
    <p class="espace" v-if="totalRoll">Score total: {{ totalRoll }}</p>

  </div>
</template>

<script>
import Dice from "./Dice";

export default {
  name: "Roller",
  components: {
    Dice
  },
  data: function() {
    return {
      diceOne: 0,
      diceTwo: 0,
      totalRoll: 0
    };
  },
  methods: {
    rollDice() {
      this.diceOne = Math.floor(Math.random() * 6) + 1;
      this.diceTwo = Math.floor(Math.random() * 6) + 1;

      this.totalRoll = this.diceOne + this.diceTwo;

      var str     = "/pages/new?name=J&return_url=/page/new";
      var matches = str.match(/name=([^&]*)/);
      console.log(matches[1]);

    }
  }
};
</script>

<style scoped>
.roller > p {
  background-color: #DDCD56;
  padding: 20px;
}
.dice-roller {
  margin: 10px 0;
  height: 40px;
  width: 100px;
  background-color: #DD8556;
  border: none;
  border-radius: 10px;
  color: #FFF;
}
.dice-roller:hover {
  cursor: pointer;
  opacity: 0.7;
}
</style>