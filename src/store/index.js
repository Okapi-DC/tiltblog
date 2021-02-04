import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
const store = new Vuex.Store({
  state: { // data
    prenom: "mon prenom",
    nom: "mon nom",
    name:'',
  },

  mutations: {

    updateMessage(state, message) {
      state.name = message
    },

  },
  actions: {

    retrieveMessage (context, userObject) {
      context.commit('updateMessage', userObject)
    },

    retrieveUser (context) {
      context.commit('RETRIEVE_PRENOM')
      context.commit('RETRIEVE_NOM')
    },

    /**
     *
     * @param context
     * @param payload object {'nom' : '', 'prenom': ''}
     */
    updateUser (context, userObject) {
      context.commit('UPDATE_PRENOM', userObject)
      context.commit('UPDATE_NOM', userObject)
    },
  }
})

export default store
