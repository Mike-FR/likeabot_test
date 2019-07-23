<template>
  <div id="adduser">
    <v-app>
      <h3>Welcome to my first Vue app</h3>
      <div>
        <img src="../assets/logo.png" />
      </div>


    </v-app>
  </div>
</template>

<script>
export default {
  components: {
      name: 'Home'
  }
}
</script>

<style>
#adduser {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

img {
  width: 100px;
  margin: 3em 0;
}

h3 {
    margin-top: 2em;
}

</style>