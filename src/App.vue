<template>
  <div id="app">
    <header>
      <v-btn>Connexion</v-btn>
      <v-btn>Inscription</v-btn>
    </header>
    <v-container>
      <v-layout>
        <v-flex>
          <router-view/>
        </v-flex>
      </v-layout>
    </v-container>
    <footer>
      <h1>Footer</h1>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* Header */
#app header {
  border-bottom:1px solid rgba(0, 0, 0, 0.5);
}

/* Footer */
#app footer {
  border-top:1px solid rgba(0, 0, 0, 0.5);
}
</style>
