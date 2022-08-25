const {Produto,Categoria} = require("../../database/models");

const carrinhoController={
    
    index: async(req,res)=>{
    try{
       
         const carrinho = window.localStorage.getItem('carrinho')
        ? JSON.parse(localStorage.getItem('carrinho'))
        : [];
        
        return res.render('carrinho',{carrinho})
    }
        catch(err){
         console.log(err)
    }
}
}




module.exports=carrinhoController;