
const {Produto,Categoria} = require("../../database/models");
const carrinhoController ={
index: async (req,res)=>{
   try{
   const carrinho = await Produto.findAll({
      include:{      
         model:Categoria,
         required: true,
         as:"categorias"
      },
   })

   return res.render('carrinho',{carrinho})
}
   catch(error){
      console.log(error)
   }

}


}




module.exports=carrinhoController;