function adicionarProduto(novoItem){
    console.log('item item novo', {novoItem})
const carrinho = localStorage.getItem('carrinho') ? JSON.parse(localStorage.getItem('carrinho')) : [];
console.log('o carrinho', {novoItem, carrinho});
if(carrinho.find((p) => p?.slug == novoItem.slug)){
    console.log('achou...', novoItem,quantidade)
    novoItem.quantidade += carrinho.find((p) => p?.slug === novoItem.slug).quantidade;
}
const novoCarrinho = [
    novoItem,
    ...carrinho.filter((p) => p?.slug !== novoItem.slug)
];

localStorage.setItem('carrinho', JSON.stringify(novoCarrinho))
}

//localStorage.removeItem("campo_que_deseja_remover");