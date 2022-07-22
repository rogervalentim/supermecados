const db = require("../../database/models")

const productsController={

    index:async(req,res)=>{
        const products = await db.Produto.findAll()
        console.log(products)
        res.render('products', {products:products})
    }
}


module.exports=productsController;