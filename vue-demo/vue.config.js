modules.exports = {
    lintOnSave:false,
    devServer:{
        // before:function(app,server){
        //     const Datalist=[
        //         {
        //             "name":"方小鱼Finny",
        //             "type":"总交易额¥1098",
        //             "price":"¥500"
        //         },
        //         {
        //             "name":"早安先生",
        //             "type":"暂无交易额",
        //             "price":"¥0"
        //         },
        //         {
        //             "name":"方小鱼Finny",
        //             "type":"总交易额¥1098",
        //             "price":"¥500"
        //         },
        //         {
        //             "name":"方小鱼Finny",
        //             "type":"总交易额¥1098",
        //             "price":"¥500"
        //         }
        //     ]
        //     app.get('/api/list',(req,res)=>{
        //         console.log(req.query,'query')
        //     })
        // }
        proxy:{
            '/api':{
                target:'http://localhost:3000'
            }
        }
    }
}

