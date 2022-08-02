<template>
    <h3 class="page-title">This is Connect Page</h3>




<div class="row row-cols-3 row-cols-md-3 g-5 mt-1">
  <div class="col" v-for="(item, index) in results.results" :key="item">
    <div  class="diary-card hvr-grow" >
      <img v-bind:src="item.photo" class="card-img-top diary-img " alt="...">
      <div class="card-body">
        <h2 class="card-title">{{item.title}}</h2>
        <h5>{{item.created_at}}</h5>
        <p class="card-text">{{item.content}}</p>
        
      </div>
    </div>
  </div>

</div>



</template>


<script>
const url = "http://127.0.0.1:8000/api/news/diary/";
export default ({
  data() {
    return {
      results: {      
      },
      mydate : {},
    }
  },
  mounted() {
    this.updatedprice();
  },

  methods:{
    updatedprice(){
      console.log("GOING");
        this.axios.get(url).then(response => {
        this.results = response.data;
        this.mydate = new Date(this.results.results[0].created_at);
        this.mydate = this.mydate.getFullYear();
        console.log((this.mydate));
      })
      
      console.log("OVER");
    }
  }



})

</script>