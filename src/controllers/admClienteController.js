
const {Cliente} = require("../../database/models");
const admClienteController = {
   create:(req,res)=>{
      return res.render('users/cadastrar');
   },

   store:async (req,res)=>{
      try{
         
         const result= await Cliente.create({
            nome:req.body.nome,
            email:req.body.email,
            senha: req.body.senha,
            ativo: 1,
         })

         return res.redirect('/users/login')
      }
      catch(err){
         console.log(err)
      }
   },

   edit:async (req,res)=>{
    try {
      const {id} = req.params
      const cliente = await Cliente.findByPk(id)
      return res.render ('users/atualizar',{cliente})
    } catch (error) {
      console.log(err)
    }
   },

   update:async (req,res)=>{
     
     try {
      const {id} = req.params 
      
      const resultado= await Cliente.update({
         nome:req.body.nome,
         email:req.body.email,
         senha: req.body.senha,
      },{
         where:{
            id:id
         }
      })
   
      res.redirect('/users/login')
   
     } catch (err) {
      console.log(err)
     }
     
   
   },

   destroy:async (req,res)=>{
  
   try {
      const {id} =req.params
      const result= await Cliente.destroy({
         where:{
            id:id
         }
      })
      
      res.redirect('/users/login')
   
   } catch (err) {
      console.log(err)
   }
   }
}


module.exports=admClienteController