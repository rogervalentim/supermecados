
const {Produto,Categoria} = require("../../database/models");
const admProdutoController = {
   list: async (req,res)=>{
      try{
         const produtos = await Produto.findAll({
         include:{      
            model:Categoria,
            required: true,
            as:"categorias"
         }
            })
      
         console.log(produtos)
         return res.render('produtos/produtoListar',{produtos})
      }
      catch(err){
         console.log(err)
      }
   },

   create:(req,res)=>{
      return res.render('produtos/produtoCadastrar')
   },

   store:async (req,res)=>{

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
         
         const result= await Produto.create({
            nome:req.body.nome,
            slug:$slug,
            preco:req.body.preco,
            categoria:req.body.categoria,
            descricao:req.body.descricao,
            imagem: req.body.imagem,
         })

         console.log(result)
         return res.redirect('/lista/produtos')
      }
      catch(err){
         console.log(err)
      }
   
   
   },

   edit:async (req,res)=>{
    try {
      const {id} = req.params
      const produto = await Produto.findByPk(id)
      return res.render ('produtos/produtoAtualizar',{produto})
    } catch (error) {
      console.log(err)
    }
   },
   update:async (req,res)=>{
     
     try {
      const {id} = req.params 
      const resultado= await Produto.update({

         nome:req.body.nome,
         slug:req.body.slug,
         preco:req.body.preco,
         categoria:req.body.categoria,
         descricao:req.body.descricao
      
      },{
         
           where:{
            id_produto:id
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
   const result= await Produto.destroy({
      
         where:{
         id_produto:id
         }
      
   })
   console.log(result)
   res.redirect('/lista/produtos')

   try {
      
   } catch (err) {
   console.log(err)
   }
   }

}
  



module.exports=admProdutoController