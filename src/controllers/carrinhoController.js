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
};

module.exports = carrinhoController;
