const botao = document.getElementById('botao')

botao.addEventListener('submit',(event)=>{
    event.preventDefault()
    
    if(botao){
        alert('você tem certeza que quer excluir o produto?')
    }
})

