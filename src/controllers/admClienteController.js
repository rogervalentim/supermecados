
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

         let message = "Usuário cadastrado com sucesso!" ;
         let type = "success" ;
   
         res.render('users/login', {message, type})
    
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
   
      const cliente = await Cliente.findByPk(id)
      constId = cliente.id
      let message = "Usuário atualizado com sucesso!" ;
      let type = "success" ;
   
      return res.render('users/atualizar',{cliente, message, type})
   
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

      let message = "Usuário deletado com sucesso!" ;
      let type = "success" ;

      
      res.render('users/login', {message, type})

   } catch (err) {
      console.log(err)
   }
   }
}


module.exports=admClienteController