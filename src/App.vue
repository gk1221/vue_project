<template>

  <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container-fluid">
      <router-link :to="'/'" class="nav-title">Home</router-link> 
      <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{ path: '/connect'}">日記</router-link>
          </li>

          <li class="nav-item">
            <router-link :to="{ name: 'users', params: {userId:10} }" replace>使用者</router-link>
          </li>

          <li class="nav-item">
            <router-link :to="'/about'">About</router-link> 
          </li>

          <li class="nav-item">
            <router-link :to="'/articles'">文章</router-link>             
          </li>

          <li class="nav-item">
            <a class=" {{rwd_active}}" href="/rwd">測試介面</a>
          </li>

          <li class="nav-item">
            <a class="" href="/admin">Admin</a>
          </li>

        </ul>
      </div>
    </div>
  </nav>


  <div class="context-container main">
    <router-view/>
  </div>
  
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.router-link-exact-active{
  color:red
}
</style>

<script>
import "@/assets/css/style.css"
import axios from 'axios'
import VueAxios from 'vue-axios'


export default{
  data(){
    return {
      isLoading: false,
    };
  },
  

  

}


</script>