<template>

<h1>
  Title
</h1>
<button class="btn btn-warning" @click="updatedprice()">Refresh</button>
  <div class="container">
    <div class="row align-items-start">

        <div class="col " v-for="(result, index) in results" :key="index">
          <div class="card" style="">
            <div class="card-header">
               <h3> {{ index }}</h3>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">¥ {{ result.CNY }}</li>
              <li class="list-group-item">$ {{ result.USD }}</li>
              <li class="list-group-item">NT$ {{ result.TWD }}</li>
            </ul>
          
          </div>
        </div>

    </div>
  </div>

</template>

<script>


const url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,USDT&tsyms=CNY,USD,TWD";
export default ({
  data() {
    return {
      results: {      
      }
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
      })
      console.log("OVER");
    }
  }



})
</script>

