<template>
<div>
  <div class="text-center">
  <h3 class="title_article">Les soft skills by Tilt</h3>
  <button class="etiquette">News</button>
  <img v-bind:src="require('@/assets/articles/Les-soft-skills-by-Tilt.jpg')" class="img_article" width="100%" alt="article 01">
  </div>
  <b-container class="padding_top_80">
    <div class="row">
      <div class="col-8">
        <div class="margin_top_30 d-inline-flex">
          <div>
            <img v-bind:src="require('@/assets/users/MargotBRIET.jpg')" width="100%" class="user_profil" alt="Margaux Briet">
          </div>
          <div class="user">
            <p>Margot <span>Briet</span></p>
            <p>UI Designer chez Tilt</p>
          </div>
        </div>
        <p><small>Ecrit le 18/09/2020 à 18h19</small></p>
      <div class="content_article padding_top_80">
        <h4>Qu’est ce que les soft skills ?</h4>
        <p>Les “soft skills”, ou le “savoir-être” en français, font référence à plusieurs qualités humaines et sont liées à la personnalité de chacun.</p>
        <p>Mais que sont-ils vraiment ?</p>
        <p>Il existe plusieurs soft skills et chacun fait référence à une qualité humaine, par exemple le fait d’analyser une situation, de résoudre un problème ou même de savoir communiquer sans problème sont des facettes des “soft skills”. </p>
        <p>Cela peut-être aussi des activités sportives afin de renforcer l’esprit d’équipe ou toute autres activités comme par exemple le bénévolat qui permet de faire ressortir l'empathie, la compassion et aussi d’être plus compréhensif envers les personnes qui nous entourent.</p>
        <p>Ces différents “soft skills” permettent plusieurs choses, notamment d’avoir plus confiance en soi. En effet, cela nous aide à nous affirmer dans le monde du travail, mais également dans notre vie personnelle.</p>
        <img v-bind:src="require('@/assets/articles/content_article_01.jpg')" width="100%" alt="Article sur qu’est ce que les soft skills ?">
        <h4>Les soft skills, une nécessité ?</h4>
        <p>Dans le monde du travail, qui est de plus en plus exigeant, chacun se doit d’être autonome et rigoureux. Les “soft skills” sont donc nécessaires et doivent être appliqués au quotidien.</p>
        <p>S’entendre au mieux avec ses collaborateurs est primordial dans une entreprise. Chacun doit s’investir individuellement afin de pouvoir avancer collectivement ensuite. Il est important que chacun puisse comprendre l’autre à travers des soft skills divers et variés. Ces dernières nous permettent ensuite de parfaire la cohésion d’un groupe. </p>
        <p>Les soft skills sont une nécessité afin de s’épanouir dans ce que l’ont fait car nous savons au quotidien comment gérer certaines situations sans jamais baisser les bras !</p>
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
name: "Les-soft-skills-by-Tilt"
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
