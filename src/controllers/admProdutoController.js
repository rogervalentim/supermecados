const db = require("../../database/models")
const admProdutoController = {
     listar: async (req,res)=>{
        const products = await db.Produto.findAll();
        return res.render('produtos/produtoListar',{products})
     },
     create:(req,res) =>{
     return res.render('produtos/produtoCadastrar')
     },
        
    store:async (req,res) =>{
    const {nome,preco,categoria,descriçao}=req.body
    const resultado = await db.Produto.create({
    nome,
    preco,
    categoria,
    descriçao
    })
    console.log(resultado)
    return res.redirect('produtos/produtoListar')
    
 
    }
}



module.exports=admProdutoController