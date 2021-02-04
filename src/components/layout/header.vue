<template>
  <header>
    <b-navbar toggleable="lg"
              variant="white"
              bg-primary
              class="container">

      <b-navbar-brand to="/">
        <img alt="Logo Alcoolo" src="@/assets/logo.png">

      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- CENTRE -->
        <b-navbar-nav class="ml-md-auto">
          <b-nav-item to="/Jeu" exact-active-class=" active">Jeu</b-nav-item>
          <b-nav-item to="/apropos" exact-active-class=" active">À propos</b-nav-item>
          <b-nav-item to="/Contact" exact-active-class=" active">Contact</b-nav-item>
        </b-navbar-nav>

        <!-- GAUCHE -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/Connexion" exact-active-class=" active">Connexion</b-nav-item>
          <b-nav-item to="/Inscription" class="fav" exact-active-class=" active">Inscription</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>

export default {
  name: 'header',
}
</script>

<style scoped>
header {
  margin-top: 30px;
  margin-bottom: 60px;
}
</style>
