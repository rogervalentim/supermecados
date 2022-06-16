var products = [
    {produto: "Sobrecoxa Sadia Bio 1 Kg", slug: "a", preco: "12,95", image:"/img/produtos/produto1.jpg"},
    {produto: "Hambúrguer Bovino Tradicional 350g", slug: "b", preco: "14,79", image:"/img/produtos/produto2.jpg"},
    {produto: "Batata MCcain 600g", slug: "n", preco: "10,99", image:"/img/produtos/produto3.jpg"},
    {produto: "Salsicha Hot dog Seara 500g", slug: "b", preco: "9,90", image:"/img/produtos/produto8.jpg"},
    {produto: "Sobrecoxa Sadia Bio 1 Kg", slug: "f", preco: "12,95", image:"/img/produtos/produto1.jpg"},
    {produto: "Hambúrguer Bovino Tradicional 350g", slug: "d", preco: "14,79", image:"/img/produtos/produto2.jpg"},
    {produto: "Batata MCcain 600g", slug: "a", preco: "10,99", image:"/img/produtos/produto3.jpg"},
    {produto: "Salsicha Hot dog Seara 500g", slug: "a", preco: "9,90", image:"/img/produtos/produto8.jpg"},

];

const productsController={

    index:(req,res)=>{
        res.render('products', {products:products})
    }
}

module.exports=productsController;