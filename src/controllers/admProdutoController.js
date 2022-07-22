const db = require("../../database/models")
const admProdutoController = {
   visualizar: async (req,res)=>{
      try{
          const produto = await db.Produto.findOne({
              raw: true,
          })
          console.log(produto);
          res.render('produtos/produtoVisualizar', {produto});
      }
      catch(err){
          console.log(err);
      }
  

},
   listar: async (req,res)=>{
      try{
         const produtos = await db.Produto.findAll({
         
         })
         console.log(produtos)
         return res.render('produtos/produtoListar',{produtos})
      }
      catch(err){
         console.log(err)
      }
   },

   criar:(req,res)=>{
      return res.render('produtos/produtoCadastrar')
   },

   salvar:async (req,res)=>{
      try{
         
         const resultado= await db.Produto.create({
            nome:req.body.nome,
            slug:req.body.slug,
            preco:req.body.preco,
            categoria:req.body.categoria,
            descricao:req.body.descricao
         })

         console.log(resultado)
         return res.redirect('/lista/produtos')
      }
      catch(err){
         console.log(err)
      }
   
   
   },

   alterar:async (req,res)=>{
    try {
      const {id} = req.params
      const produto = await db.Produto.findByPk(id)
      return res.render ('produtos/produtoAtualizar',{produto})
    } catch (error) {
      console.log(err)
    }
   },
   atualizar:async (req,res)=>{
     
     try {
      const {id} = req.params 
      const resultado= await db.Produto.update({
         nome:req.body.nome,
         preco:req.body.preco,
         categoria:req.body.categoria,
         descricao:req.body.descricao
      
      },{
         
           where:{
            id:id
           }
          
      })
   
      console.log(resultado)
      res.redirect('/lista/produtos')
   
     } catch (err) {
      console.log(err)
     }
     
   
   },
   destroy:async (req,res)=>{
   const {id} =req.params
   const resultado= await db.Produto.destroy({
      
         where:{
         id:id
         }
      
   })
   console.log(resultado)
   res.redirect('/lista/produtos')

   try {
      
   } catch (err) {
   console.log(err)
   }
   }

}
  



module.exports=admProdutoController