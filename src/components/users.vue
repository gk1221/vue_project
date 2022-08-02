<template>
  <router-link to="/users">Back Home</router-link>
  <h1> UserID:{{ userId }} - {{userInfo?.name }} </h1>
  <div>username: @{{ userInfo.username }}</div>
  <div>email: {{ userInfo.email }}</div>
  <div>phone: {{ userInfo.phone }}</div>
  <hr/>

  Show
  <router-link :to="`/users/${userId}/posts`">
    /users/{{ userId }}/posts
  </router-link>

  <hr />
  <!-- for Post.vue-->
  <router-view></router-view>

</template>



<script>
export default ({
  data() {
    return {
      userInfo: {},
      corn: "A1",
    }
  },
 
  computed: {
    userId() {
      return this.$route.params.userId;
    }
  },
  watch:{
    userId: async function (val){
   
      this.userInfo = await this.fetchUserInfo(val);

    }
  },
  methods: {
    async fetchUserInfo(id) {
      return await fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => response.json())
      .then((json) => json);
    }
  },
  async created(){
    this.corn = "WHAT??";
    this.userInfo = await this.fetchUserInfo(this.userId);
    
  },
  async onBeforeRouteUpdate(to, from){

    console.log(to, from);
  }
})
</script>

