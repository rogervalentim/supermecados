// const { itemPedido, Pedido} = require("../../database/models");

const carrinhoController = {
  
  async adicionarProdutoCarrinho(req, res) {
    const { id_produto, nome,preco,imagem  } = req.body;
    const { carrinho } = req.session;
    const products = {
      id: id_produto,
      nome,
      preco,
      imagem

    };

   

    if (req.session.carrinho) {
      req.session.carrinho.push(products);
    } else {
      req.session.carrinho= [products];
    }
    res.render("carrinho", {carrinho});
    
  },

  async save(req, res) {
    
    const carrinho = req.body.carrinho;

    if (!req.session.login) {
      res.status(401).jsonp( {  erro: "Usuário não logado"});
    }

    const cliente = Cliente.findOne({
      where: {
          email:req.session.login
      }
    })


    // // criar a tabela compra 
    // // cirar a tabela produto_compra
    // try{
    //   // criar um item na tabela compra 
    //   const compra = await Compra.create({
    //     id_usuario: cliente.id,
    //     data:  now(), // data do request
    //  })

    // //  salvar produtos na compra
    //   carrinho.forEach(produto => {
    //     const produto_compra = await ProdutoCompra.create({
    //       produto_id: produto.id,
    //       compra_id: compra.id,
    //       quantidade: produto.quantidade,
    //       produto_valor: produto.valor,
    //    })
    //   })

    //   // mandar para pagina de sucesso;
      
    //   return res.render('produtos/produtoListar',{produtos, message, type})
    // }
    // catch(err){
    //     console.log(err)
    // }
    
  },
};

module.exports = carrinhoController;
