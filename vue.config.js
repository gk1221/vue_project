
module.exports = {
    filenameHashing: false,
    publicPath: '/vue_project/dist/'
    ,
       

    
    devServer: {
        proxy: {
            ["/api/news/text"]:{
                target:'http://127.0.0.1:8000',
                changeOrigin:true,
                pathRewrites:{
                    ['^' + "/api/news/text"]: ''
                }
            }
            
            
        },
    }
}
