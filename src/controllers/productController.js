// // var product = { produto: "Sobrecoxa Sadia Bio 1 Kg", slug: "a", 
// // preco: "12,95", image:"/img/produtos/produto1.jpg"};

const db = require('../../database/models')

const productController = {
    index: async (req,res)=>{
       try{
        const {slug} = req.params;
           const product = await db.Produto.findOne({
               where:{
                slug
               }
           })
           console.log(product);
           res.render('internalProduct', {product});
       }
       catch(err){
           console.log(err);
       }
   
 
 },
}

   
    
module.exports=productController;