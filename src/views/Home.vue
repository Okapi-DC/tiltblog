<template>
    <b-container>
      <div class="row espace">
        <!-- GAUCHE -->
        <div class="col-md-4">
          <h1> Bienvenue, {{ name }} 👋 un jeu d'alccol ça te dis ?</h1>
          <p>Nous proposons des petits jeux facile d'alccol à faire en soirée à plusieurs 🍻 </p>
          <p>Alors, prets à te la coller ?</p>

          <div class="flex">
            <b-button variant="dark" v-on:click="visible = !visible">
              <span v-if="visible">Plus tard</span>
              <span v-else>Ton prénom ?</span>
            </b-button>

            <transition name="fade">
              <div v-if="visible" class="input_1">
                <b-form-input v-model="name" type="texte" placeholder="Prénom"></b-form-input>
              </div>
            </transition>
          </div>

          <div>
            <b-button v-b-modal.modal-lg>
              Regarder la vidéo
              <b-icon icon="play" aria-hidden="true" animation="throb">
              </b-icon>
            </b-button>

            <b-modal id = "modal-lg"  size = "lg" title="">
              <iframe width="560"
                      height="315"
                      src="https://www.youtube.com/embed/lXJkYBlnzmw"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen>
              </iframe>
            </b-modal>
          </div>


        </div>

        <!-- DROITE -->
        <div class="col-md-8 text-center">
          <img v-bind:src="require('@/assets/heroheader.svg')" alt="service-image" />
        </div>
      </div>


      <div class="my-md-5 pt-md-5 espace text-center">
        <p class="prevention">l'abus d'alcool est dangereux pour la santé<br>consommez avec modération</p>
      </div>
      <instruction></instruction>
      <newsletter></newsletter>
    </b-container>
</template>



<script>
import newsletter from '@/components/newsletter'
import instruction from '@/components/instruction'

export default {
  name: "Home",
  components: {
    newsletter,
    instruction,
  },

  data () {
    return {
      visible: false,
    }
  },

  mounted() {
    if(localStorage.name) this.name = localStorage.name;
  },
  watch:{
    name(newName) {
      localStorage.name = newName;
    }
  },

  computed: {
    name: {
      get () {
        return this.$store.state.name
      },
      set (value) {
        this.$store.commit('updateMessage', value)
      }
    }
  },

  methods: {
    updateMessage (e) {
      this.$store.commit('updateMessage', e.target.value)
    },
  },
}
</script>

<style scoped>

button,input {
  margin-top: 30px!important;
}


.prevention {
  color: #DD8556;
  font-style: italic;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.7s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

img {
  width: 100%;
}

.flex {
  display: flex;

}

iframe {
width: 100%;
}

input_1 {
  display: flex;
}
</style>
