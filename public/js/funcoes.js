
function adicionar(novoItem) {
  // console.log('Item novoItem:', { novoItem });
  const carrinho = localStorage.getItem('carrinho')
    ? JSON.parse(localStorage.getItem('carrinho'))
    : [];

  console.log(carrinho.find((p) => p?.slug == novoItem.slug));

  if (carrinho.find((p) => p?.slug == novoItem.slug)) {
    // console.log('achou...', novoItem.quantidade);
    novoItem.quantidade += carrinho.find(
      (p) => p?.slug === novoItem.slug
    ).quantidade;
  }
  const copia = [novoItem, ...carrinho.filter((p) => p?.slug !== novoItem.slug)];

  localStorage.setItem('carrinho', JSON.stringify(copia));

}


function remover(itemCarrinho) {
  //Montar o carrinho a partir do cookie ou do localStorage
  const carrinho = localStorage.getItem('carrinho')
    ? JSON.parse(localStorage.getItem('carrinho'))
    : [];

  // Alterar a quantidade
  const produtoNoCarrinho = carrinho.find((p) => p.slug === itemCarrinho.slug);
  if (produtoNoCarrinho) {
    //Alterar a quantidade1
    produtoNoCarrinho.quantidade = produtoNoCarrinho.quantidade - 1;
    //const copia =  {...produtoNoCarrinho}
  }
  //Remover o produto do array carrinho
  const copiaCarrinho = carrinho.filter((produto) => produto.quantidade >= 1);

  //Atualizar o cookie ou do localStorage com o novo carrinho
  localStorage.setItem('carrinho', JSON.stringify(copiaCarrinho));

  console.log(JSON.stringify(carrinho));
  exibirCarrinho();
}

function exibirCarrinho() {
  const carrinhoTela = document.getElementById('carrinho-container');

  const carrinho = localStorage.getItem('carrinho')
    ? JSON.parse(localStorage.getItem('carrinho'))
    : [];

  //Apagar o carrinho carrinhoTela
  carrinhoTela.innerHTML = '';
  carrinho.forEach((produto) => {
    carrinhoTela.innerHTML += `  
      <div class="card p-3 m-3 text-center" style="width: 18rem;">
        <img class="card-img-top" src="${produto.imagem}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${produto.nome}</h5>
          <p class="card-text">Quantidade: ${produto.quantidade}</p>
          <p class="card-text">Subtotal: R$ ${produto.quantidade * produto.preco}</p>
          <button class="btn-carrinho btn btn-danger" onclick="remover({slug:'${produto.slug}', nome:'${produto.nome}'})">Remover </button>
        </div>
      </div>
      `;
  });

  if (!carrinho.length) {
    carrinhoTela.innerHTML += `  
    <h1 class="carrinho">Meu Carrinho</h1>
    <h1 class="carrinho1">Seu Carrinho está vazio.</h1>
    <span class="text">Para continuar comprando, navegue pelas categorias do site ou faça uma busca pelo seu produto.</span>
    <div class="bloco">
    <button class="botao-r"><a class="ln" href='/produtos'>Escolher Produtos</a></button>
    </div>
  `
  }
}
