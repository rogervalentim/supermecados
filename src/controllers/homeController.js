
const produtos = require('../../database/data/produtos.json')

const homeController={
    index:(req,res)=>{
        res.render('home',{home:produtos})
    },
    view:(req,res)=>{
        res.render('produtos/produtos',{home:produtos})
    }
}

module.exports = homeController;