<template>
  <div id="app">
    <Header></Header>
      <router-view/>
      <Footer></Footer>
  </div>
</template>

<script>

import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import {mapActions} from 'vuex'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },

  data () {
    return {

    }
  },
   methods: {
    ...mapActions([
      'retrieveUser'
    ]),
  },
}
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
//  text-align: center;
  color: #2c3e50;
}

</style>
