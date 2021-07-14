<template>
  <div class="container padding_bottom_90 padding_top_80">
    <div class="row">
      <div class="col-md-6">
        <img v-bind:src="require('@/assets/articles/article_01.jpg')" width="100%" alt="article 01">
      </div>
      <div class="col-md-6 text-left">
        <button class="etiquette">News</button>
        <h3 class="margin_top_30">Les soft skills by Tilt</h3>
        <p class="margin_top_30">Qu’est ce que les soft skills ?</p>
        <p>Les “soft skills”, ou le “savoir-être” en français, font référence à plusieurs qualités humaines et sont liées à la personnalité de chacun...
          <router-link to="articles/Les-soft-skills-by-Tilt">en lire plus</router-link></p>
        <div class="margin_top_30 d-inline-flex">
          <div>
            <img v-bind:src="require('@/assets/users/MargotBRIET.jpg')" width="100%" class="user_profil" alt="Margaux Briet">
          </div>
          <div class="user">
            <p>Margot <span>Briet</span></p>
            <p>UI Designer chez Tilt</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 3 -->
    <div class="row padding_top_150 text-left">
      <div class="col-md-4">
        <img v-bind:src="require('@/assets/articles/article_02.jpg')" width="100%" alt="article 02">
        <button class="margin_top_30 etiquette">News</button>
        <button class="margin_top_30 etiquette">TECH FOR GOOD</button>
        <h3 class="margin_top_30">Soft Skills vs Hard Skills</h3>
        <p class="margin_top_30">Les Hard Skills, qu’est ce que c’est ?</p>
        <p>Les hard skills regroupent toutes les compétences acquises lors de différentes expériences professionnelles, à l’école ou en formation...
          <router-link to="articles/Soft-Skills-vs-Hard-Skills">en lire plus</router-link></p>
        <div class="margin_top_30 d-inline-flex">
          <div>
            <img v-bind:src="require('@/assets/users/MartinRIPOCHE.jpg')" width="100%" class="user_profil" alt="Martin Ripoche">
          </div>
          <div class="user">
            <p>Martin <span>Ripoche</span></p>
            <p>UI Designer chez Tilt</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <img v-bind:src="require('@/assets/articles/article_03.jpg')" width="100%" alt="article 02">
        <button class="margin_top_30 etiquette">News</button>
        <h3 class="margin_top_30">Les 5 soft skills les plus importants</h3>
        <p class="margin_top_30">1) La résolution des problèmes</p>
        <p>Par résolution des problèmes, nous parlons essentiellement du fait de pouvoir ou non,...
          <router-link to="articles/Les-5-soft-skills-les-plus-importants">en lire plus</router-link></p>
        <div class="margin_top_30 d-inline-flex">
          <div>
            <img v-bind:src="require('@/assets/users/LucasVOIZOT.jpg')" width="100%" class="user_profil" alt="Lucas Voizot">
          </div>
          <div class="user">
            <p>Lucas <span>Voizot</span></p>
            <p>Motion Designer chez Tilt</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <img v-bind:src="require('@/assets/articles/article_04.jpg')" width="100%" alt="article 02">
        <button class="margin_top_30 etiquette">News</button>
        <h3 class="margin_top_30">Les soft skills by Tilt</h3>
        <p class="margin_top_30">Qu’est ce que les soft skills ?</p>
        <p>Les “soft skills”, ou le “savoir-être” en français, font référence à plusieurs qualités humaines et sont liées à la personnalité de chacun...</p>
        <div class="margin_top_30 d-inline-flex">
          <div>
            <img v-bind:src="require('@/assets/users/TonyCORSINI.jpg')" width="100%" class="user_profil" alt="Tony Corsini">
          </div>
          <div class="user">
            <p>Tony <span>Corsini</span></p>
            <p>Chef de projet chez Tilt</p>
          </div>
        </div>
      </div>
    </div>
<!-- 3 -->
    <div class="row padding_top_150 text-left">
      <div class="col-md-4">
        <img v-bind:src="require('@/assets/articles/article_05.jpg')" width="100%" alt="article 05">
        <button class="margin_top_30 etiquette">News</button>
        <h3 class="margin_top_30">Les soft skills by Tilt</h3>
        <p class="margin_top_30">Qu’est ce que les soft skills ?</p>
        <p>Les “soft skills”, ou le “savoir-être” en français, font référence à plusieurs qualités humaines et sont liées à la personnalité de chacun...</p>
        <div class="margin_top_30 d-inline-flex">
          <div>
            <img v-bind:src="require('@/assets/users/SihamELMANCOURI.jpg')" width="100%" class="user_profil" alt="Siham El Mancouri">
          </div>
          <div class="user">
            <p>Siham <span>El Mancouri</span></p>
            <p>UX Designer chez Tilt</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <img v-bind:src="require('@/assets/articles/article_06.jpg')" width="100%" alt="article 06">
        <button class="margin_top_30 etiquette">News</button>
        <h3 class="margin_top_30">Les soft skills by Tilt</h3>
        <p class="margin_top_30">Qu’est ce que les soft skills ?</p>
        <p>Les “soft skills”, ou le “savoir-être” en français, font référence à plusieurs qualités humaines et sont liées à la personnalité de chacun...</p>
        <div class="margin_top_30 d-inline-flex">
          <div>
            <img v-bind:src="require('@/assets/users/LutryciaVALENTIN.jpg')" width="100%" class="user_profil" alt="Lutrycia Valentin">
          </div>
          <div class="user">
            <p>Lutrycia <span>Valentin</span></p>
            <p>Motion Designer chez Tilt</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <img v-bind:src="require('@/assets/articles/article_07.jpg')" width="100%" alt="article 07">
        <button class="margin_top_30 etiquette">News</button>
        <h3 class="margin_top_30">Les soft skills by Tilt</h3>
        <p class="margin_top_30">Qu’est ce que les soft skills ?</p>
        <p>Les “soft skills”, ou le “savoir-être” en français, font référence à plusieurs qualités humaines et sont liées à la personnalité de chacun...</p>
        <div class="margin_top_30 d-inline-flex">
          <div>
            <img v-bind:src="require('@/assets/users/ClementQUATRAVAUX.jpg')" width="100%" class="user_profil" alt="Clément Quatravaux">
          </div>
          <div class="user">
            <p>Clément <span>Quatravaux</span></p>
            <p>Développeur Web chez Tilt</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "articles"
}
</script>

<style scoped>
.user p,p {
  margin: 0px;
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
</style>
