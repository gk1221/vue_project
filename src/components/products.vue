<template>
    <div>
        產品列表
    </div>
    <ul>
    <li><router-link :to="{ name: 'home' }">Home</router-link></li>
    <li><router-link :to="{ name: 'users' , params: {userId:2} }">User</router-link></li>
  </ul>
  {{isLoading}}
  
  <router-link to="/">Home</router-link>
  <router-link to="/about"
  custom
  v-slot="{href, route, navigate, isActive, isExactActive }">
    <NavLink :active="isActive" :href="href" @click="navigate">
      {{ route.fullPath }}
    </NavLink>
  </router-link>
</template>
