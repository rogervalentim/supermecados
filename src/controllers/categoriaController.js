const db = require('../../database/models')

const categoriaController={

    listar: async (req,res)=>{
        const categorias = await db.Cliente.findAll();
        res.render('categoria/listando', {categorias})
    }
}

module.exports = categoriaController;