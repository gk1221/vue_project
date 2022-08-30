<template>
    <h1>This is Article</h1>
    <div class="textspace">
        <div class="selection">
          <ul v-for="(item, index) in tag" :key="item">
              <li class="li-filter d-flex flex-row justify-content-between align-items-center">
                  <button  class="btn text-filt-but btn-outline-dark">
                    
                          
                  {{index}}
                  </button>
                  <span class="mx-2 badge bg-warning rounded-pill">{{item}}</span>
              </li>
          </ul>
          <ul>
              <li class="li-filter d-flex flex-row justify-content-between align-items-center">
                  <button class="btn text-filt-but btn-outline-dark">
                      All
                  </button>
                  <span class="mx-2 badge bg-warning rounded-pill">{{Object.keys(results).length}}</span>
              </li>
          </ul>

        </div>
        
        <div class="textlist">
          <div></div>
          <div class="all-card " align="center">
            <div class="cardlist hvr-grow {{item.tag}} -card cardshow" v-for="(item, index) in results" :key="item" >
              <div class="card-body">
                  <p class="card-text">
                  
                      <router-link :to="`/articles/${item.pk}`" class="card-title">{{item.title}}</router-link>
                      <br> #{{item.tag}} 
                      <br> {{item.time_create}}
                  </p>
              </div>   
              <br/>   
                                
            </div>  
          </div>
          
        </div>
                 
    </div>

     
         
</template>

<script>
const url = "http://127.0.0.1:8000/api/news/text/";

export default ({
  data() {
    return {
      results: {},
      tag: {},
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
          this.results = this.results.results;
          this.results.forEach(element => {
              var mydate = new Date(element.time_create);
              element.time_create = `${mydate.getFullYear()}/${mydate.getMonth()}/${mydate.getDate()} ${mydate.getHours()}:${mydate.getMinutes()}`
              if(element.tag in this.tag){
                this.tag[element.tag] += 1;
              }
              else{
                this.tag[element.tag] = 1;
              }
              //console.log(`${mydate.getFullYear()}/${mydate.getMonth()}/${mydate.getDate()} ${mydate.getHours()}:${this.addZero(mydate.getMinutes())}`);
          });     
        })
      
      console.log("OVER");
    },
    addZero(i) {
      if (i < 10) {i = "0" + i}
      return i;
    }
  }
})

</script>