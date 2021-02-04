<template>
  <footer class="container text-center espace">
    <div class="row">

      <div class="col-md-4">
        <h5>Service</h5>
        <ul class="list-unstyled text-small">
          <li><b-link :to="{ path: 'Connexion' }">Connexion</b-link></li>
          <li><b-link :to="{ path: 'Inscription' }">Inscription</b-link></li>
        </ul>
      </div>

      <div class="col-md-4">
        <h5>Informations</h5>
        <ul class="list-unstyled text-small">
          <li><b-link :to="{ path: './' }">Mentions légales</b-link></li>
        </ul>
      </div>

      <div class="col-md-4">
        <h5>Nous rejoindre</h5>
        <ul class="list-unstyled text-small">
          <a href="#"><b-icon icon="facebook" aria-hidden="true"></b-icon></a>
          <a href="#"><b-icon icon="instagram" aria-hidden="true"></b-icon></a>
          <a href="#"><b-icon icon="twitter" aria-hidden="true"></b-icon></a>
        </ul>

      </div>

    </div>

    <div class="text-center espace">
      <img alt="Logo Alcoolo" src="@/assets/logo.png">
      <p>Tous droits réservés©</p>

    </div>

  </footer>
</template>

<script>

export default {

}
</script>

<style scoped>
.b-icon {
  margin: 7px;
  font-size: 18px;
}
</style>


