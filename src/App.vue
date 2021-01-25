<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">主頁</router-link> |
      <router-link to="/page1">Time</router-link> |
      <router-link to="/page2">Roundabout</router-link> |
      <router-link to="/page3">Interactive</router-link> |
      <router-link to="/page4">Ｗhirling</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
