<template>
  <div id="app" class="container">
    <nav id="nav" class="navbar navbar-expand-sm bg-light animated fadeInUp">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Add' }" class="nav-link">Add user</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'List' }" class="nav-link">Show user</router-link>
        </li>
      </ul>
    </nav>
    <div class="gap">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="css">
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>

<style>
.gap {
  margin-top: 50px;
}

nav {
  font-size: 1.4em;
  justify-content: center;
}

</style>

<script>
export default {
  name: "app"
};
</script>
