<template>
  <div class="container text-center">
    <h1 class="title-border_02 padding_top_30">Les derniers <br><span>articles</span></h1>
    <p>Suivez l’actualité de Tilt et retrouvez les derniers tips pour<br> devenir un super Héro !</p>
    <articles></articles>
  </div>
</template>

<script>
import Articles from "@/components/articles";
export default {
  name: "Home",
  components: {
    Articles
  },
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.7s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media screen and (max-width: 980px) {
  .padding_top_80 {
    padding-top: 0px;
  }
  .heroheader {
    padding-top: 60px;
  }
}
</style>
