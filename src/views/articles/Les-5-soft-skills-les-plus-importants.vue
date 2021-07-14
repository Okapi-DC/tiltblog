<template>
  <div>
    <div class="text-center">
      <h3 class="title_article">Les 5 soft skills les plus importants !</h3>
      <button class="etiquette">News</button>
      <img v-bind:src="require('@/assets/articles/Les-soft-skills-by-Tilt.jpg')" class="img_article" width="100%" alt="article 01">
    </div>
    <b-container class="padding_top_80">
      <div class="row">
        <div class="col-8">
          <div class="margin_top_30 d-inline-flex">
            <div>
              <img v-bind:src="require('@/assets/users/LucasVOIZOT.jpg')" width="100%" class="user_profil" alt="Lucas Voizot">
            </div>
            <div class="user">
              <p>Lucas <span>Voizot</span></p>
              <p>Motion Designer chez Tilt</p>
            </div>
          </div>
          <p><small>Ecrit le 19/09/2020 à 13h58</small></p>
          <div class="content_article padding_top_80">
            <h4>La résolution des problèmes</h4>
            <p>Par résolution des problèmes, nous parlons essentiellement du fait de pouvoir ou non, trouver des solutions à un obstacle sur un projet ou autre. C'est aussi un travail sur la gestion du stress vis-à-vis de l'obstacle qui est géré différemment en fonction de la façon de penser de chacun. Analyser et comprendre ce qui est important sont les facteurs clés que les recruteurs recherchent.</p>
            <h4>La curiosité</h4>
            <p>La curiosité est à la fois un défaut mais aussi une très grande qualité ! En entreprise être curieux permet d’être au courant du marché, de ses concurrents, des dernières nouveautés etc…
              Cela est primordial pour avancer dans un marché en constante évolution où chacun innove chaque jour, il faut donc avoir un temps d’avance !
              La curiosité mène généralement vers de bonnes opportunités qu’il ne faut surtout pas rater.
            </p>
            <h4>Créativité</h4>
            <p>La créativité est souvent liée au monde de l’art mais ce n’est pas valable que pour les métiers artistiques. Dans notre quotidien ou au bureau, la créativité à plusieurs sens : c’est le fait de pouvoir générer des idées, en lien avec la résolution de problèmes. Cela permet de se sortir des impasses de la manière la plus originale possible. Chacun à un esprit très différent qui permet de proposer des idées innovantes et de se démarquer de la concurrence !
            </p>
            <img v-bind:src="require('@/assets/articles/content_article_01.jpg')" width="100%" alt="Article sur qu’est ce que les soft skills ?">
            <h4>Intelligence émotionnelle</h4>
            <p>Qu’est ce que l’intelligence émotionnelle à proprement parler ? C’est le fait de pouvoir se comprendre soi-même mais aussi comprendre ce qui nous entoure. C’est par exemple le fait d’adapter son discours en fonction du contexte et de l'interlocuteur. Par exemple, nous allons nous adresser différemment à notre patron ou à notre collègue. L'intelligence émotionnelle influe la façon de penser ou de communiquer d’une personne. </p>
            <h4>La coordination, l’organisation</h4>
            <p>Être coordonné avec son équipe est un facteur très important en entreprise. Savoir que l’on peut compter sur ses collègues en cas de soucis est primordial, notamment lorsque l’on a des objectifs précis communs. Cela nécessite les compétences de chacun, il faut savoir se coordonner et s’organiser, ces soft skills sont liés étroitement : l’un ne fonctionne pas sans l’autre.</p>
          </div>
        </div>
        <div class="col-4">
          <h2 class="title_02">Nos derniers articles</h2>
          <div class="article">
            <img v-bind:src="require('@/assets/articles/article_03.jpg')" width="80%" alt="Article sur qu’est ce que les soft skills ?">
            <h4>Nom d'article</h4>
          </div>
          <div class="article">
            <img v-bind:src="require('@/assets/articles/article_04.jpg')" width="80%" alt="Article sur qu’est ce que les soft skills ?">
            <h4>Nom d'article</h4>
          </div>
          <div class="article">
            <img v-bind:src="require('@/assets/articles/article_05.jpg')" width="80%" alt="Article sur qu’est ce que les soft skills ?">
            <h4>Nom d'article</h4>
          </div>
        </div>

      </div>
    </b-container>

  </div>
</template>

<script>
export default {
  name: "Les-5-soft-skills-les-plus-importants"
}
</script>

<style scoped>
.article{
  margin-bottom: 50px;
  margin-top: 50px;
  border-bottom: 2px solid #3B0E67;
}
.article h4 {
  margin-top: 20px;
  margin-bottom: 20px;
}
.content_article h4 {
  margin-bottom: 30px;
  margin-top: 30px;
  font-weight: bold;
  color: #3B0E67;
}
.content_article p {
  margin-bottom: 30px;
  margin-top: 30px;
}
.img_article{
  margin-top: 110px;
  padding-right: 250px;
}
.user p,p {
  margin: 0px;
}
p small {
  margin-top: 20px;
}
span{
  font-weight: bold;
}

button{
  margin-right: 10px
}

.user_profil{
  padding-right: 15px;
}

.col-4:last-child{
  border-left: 2px solid #3B0E67;
}
</style>
