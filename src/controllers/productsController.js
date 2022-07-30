const {Produto} = require("../../database/models")

const productsController={

    index:async(req,res)=>{
        const products = await Produto.findAll()
        console.log(products)
        res.render('products', {products:products})
    }
}


module.exports=productsController;