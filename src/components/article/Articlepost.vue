<template>

<h1>articlepost</h1>
<h2>{{results.title}}</h2>
<p>{{ pkId }}</p>
<p v-html="results.body"></p>

</template>


<script>



export default({
    data(){
        return{
            results:{},
        }        
    },
    
    computed:{
        pkId(){
            return this.$route.params.pk;
        }
    },

    mounted() {
        this.updatedprice();
    },

    methods:{
        updatedprice(){
            
            var url= `${ this.pkId}/`;
            console.log('url='+url);
            console.log("GOING");
            
            const postReq = this.axios.create({
                baseURL:"/api/news/text",
                
            });

            postReq.get(url).then((response) => {
                
                this.results = response.data;
                console.log(response.data);          

            
            });
        
        
        }
    }

})
    



</script>