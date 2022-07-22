var product = { produto: "Sobrecoxa Sadia Bio 1 Kg", slug: "a", 
preco: "12,95", image:"/img/produtos/produto1.jpg"};

const product = await db.Produto.find({
    where: {
        slug: req.params
    }
})

const productController={

    index:(req,res)=>{
        res.render('internalProduct', {product:product})
    }
}

module.exports=productController;