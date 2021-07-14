<template>
  <div>
    <div class="text-center">
      <h3 class="title_article">Soft Skills vs Hard Skills</h3>
      <button class="etiquette">News</button>
      <img v-bind:src="require('@/assets/articles/Les-soft-skills-by-Tilt.jpg')" class="img_article" width="100%" alt="article 01">
    </div>
    <b-container class="padding_top_80">
      <div class="row">
        <div class="col-8">
          <div class="margin_top_30 d-inline-flex">
            <div>
              <img v-bind:src="require('@/assets/users/MartinRIPOCHE.jpg')" width="100%" class="user_profil" alt="Martin Ripoche">
            </div>
            <div class="user">
              <p>Martin <span>Ripoche</span></p>
              <p>UI Designer chez Tilt</p>
            </div>
          </div>
          <p><small>Ecrit le 21/09/2021 à 16h21</small></p>
          <div class="content_article padding_top_80">
            <h4>Les Hard Skills, qu’est ce que c’est ?</h4>
            <p>Les hard skills regroupent toutes les compétences acquises lors de différentes expériences professionnelles, à l’école ou en formation. Ce sont des compétences sur des logiciels comme la suite Adobe, Microsoft Office etc… Les hard skills étaient jusqu’à présent les principaux facteurs d’embauches pour les recruteurs lors d’un entretien.</p>
            <h4>L’ère des soft skills ?</h4>
            <p>Connaître par cœur son métier ne fait pas tout, il faut aussi que notre savoir-être en entreprise soit exemplaire et adéquat à son environnement de travail. Les soft skills permettent une meilleure intégration au sein d’une équipe, la maîtrise de notre métier ne suffit plus car la flexibilité, l'adaptabilité, l’intelligence relationnelle et émotionnelle sont aussi importantes, encore plus de nos jours.</p>
            <p>De nos jours, les entreprises attendent de leurs (futurs) collaborateurs un savoir-être ponctué par différents soft skills. Cela signifie que chacun peut se démarquer à travers son savoir-être ; nous sommes évalués par notre quotient intellectuel mais aussi émotionnel.</p>
            <img v-bind:src="require('@/assets/articles/content_article_01.jpg')" width="100%" alt="Article sur qu’est ce que les soft skills ?">
            <h4>Soft skills vs hard skills !</h4>
            <p>La société évolue constamment et ne cesse de nous en demander plus, que ce soit en matière de hard ou soft skills. Ces deux derniers restent primordiaux pour travailler dans les meilleures conditions et donner le meilleur de soi ! Les hard skills sont très importants dans le cadre du travail, contrairement aux soft skills qui sont applicables au travail mais également au quotidien. En effet, les soft skills ne servent pas forcément qu’au travail, ils sont également utilisés dans la vie personnelle. Il est important de développer ses soft skills en société.</p>

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
  name: "Soft-Skills-vs-Hard-Skills"
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
