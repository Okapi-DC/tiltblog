<template>
  <div class="text-center">
    <h3 class="game">Nos jeux de soirées !</h3>
    <b-tabs pills card vertical>
      <b-tab active>
        <template #title>
          <b-spinner type="grow" small></b-spinner> Pierre <i>Feuille </i> <strong>Ciseaux</strong>
        </template>
        <p class="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </b-tab>

      <b-tab>
        <template #title>
          <b-spinner type="border" small></b-spinner> Picolo
        </template>
        <p class="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </b-tab>

      <b-tab>
        <template #title>
          <b-spinner type="border" small></b-spinner> Jeu du cul sec
        </template>
        <p class="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </b-tab>
    </b-tabs>
  </div>

</template>


<script>
export default {

}
</script>


<style scoped>
.game {
  padding-top: 90px!important;

}
</style>