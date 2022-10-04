// guardando o container numa variavel
const caixa = document.getElementById("container")

function adicionaItem (event) {
    const novoItem = document.createElement("article");
    caixa.appendChild(novoItem)
    //adicionar classe
    novoItem.classList.add("item")
    novoItem.onclick = (event) => removeItem(event)
} 

function removeItem (event) {
    event.target.classList.remove('item')

}