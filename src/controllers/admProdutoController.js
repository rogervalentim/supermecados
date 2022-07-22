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


      function slugify(str)
      {
         str = str.replace(/^\s+|\s+$/g, '');

         // Make the string lowercase
         str = str.toLowerCase();

         // Remove accents, swap ñ for n, etc
         var from = "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;";
         var to   = "AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------";
         for (var i=0, l=from.length ; i<l ; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
         }

         // Remove invalid chars
         str = str.replace(/[^a-z0-9 -]/g, '') 
         // Collapse whitespace and replace by -
         .replace(/\s+/g, '-') 
         // Collapse dashes
         .replace(/-+/g, '-'); 

         return str;
      }


      $slug = slugify(req.body.nome);

      try{
         
         const resultado= await db.Produto.create({
            nome:req.body.nome,
            slug: $slug,
            preco:req.body.preco,
            categoria:req.body.categoria,
            descricao:req.body.descricao,
            imagem: req.body.imagem ?? '/img/produtos/produto8.jpg',
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