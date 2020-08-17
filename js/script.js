class Carrinho {
  constructor() {
    this.itensNoCarrinho = []
  }

  adicionaProduto (produto, qtd){
    let total = produto.preco * qtd

    if (this.itensNoCarrinho.length > 0){
      let item = this.itensNoCarrinho.find(item => item.id === produto.id)
      if (item) {
        item.qtd += qtd
        total = item.preco * item.qtd
        item.total = total
        atualizaProdutoCarrinho(item)
      } else {
        criaProdutoCarrinho(produto, qtd, total)
        this.itensNoCarrinho.push({...produto, qtd, total})
        // this.itensNoCarrinho.push({

        //   // Da linha 22 até a 25 = ...produto
        //   id: produto.id,
        //   nome: produto.nome,
        //   preco: produto.preco,
        //   img: produto.img,
        //   qtd,
        //   total
        // })
      }
    } else { 
      criaProdutoCarrinho(produto, qtd, total)
      this.itensNoCarrinho.push({...produto, qtd, total})
    }
  }

  get listaProdutos (){
    console.log(this.itensNoCarrinho);
  }

  get totalCarrinho (){
    return this.itensNoCarrinho.map(item => item.total).reduce((total, valor, index, arr) => {
      return valor + total
    })    
  }
}

let carrinho = new Carrinho()

function atualizaTotal () {
  let totalEl = document.querySelector("#cash_Setores h2")
  totalEl.textContent = carrinho.totalCarrinho.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}

function addEvent (produtos) {
  let botoes = document.querySelectorAll(".button_Add");
  botoes.forEach(botao => {
    botao.addEventListener("click", () => {
      let id = parseInt(botao.getAttribute("data-id"))
      let produto = buscaProduto(id, produtos);
      let quantidade = parseInt(pegaQtd(produto.id))

      if (quantidade > 0){
        carrinho.adicionaProduto(produto, quantidade);
        atualizaTotal()
        carrinho.listaProdutos
        console.log(carrinho.totalCarrinho);
      } else {
        console.log("Preecha a quantidade do(a)" + produto.nome);
      }

    })
  })
}

function buscaProduto (id, produtos) {
  return produtos.find(produto => {
    return produto.id === id
  })
}

function pegaQtd (produtoId) {
  let campo = document.querySelector(`#produto${produtoId} .input_Qtd`);
  return campo.value
}

function criaCard (produto) {
  let cards = document.getElementById("listaProdutos")
  cards.innerHTML += `<div class="card" id="produto${produto.id}" style="width: 18rem;">
  <img src="${produto.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${produto.nome}</h5>
    <p class="card-preço">${produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
    <div class="card-quantidade">
      <p>QUANTIDADE:</p>
      <div class="input"><input type="number" class="input_Qtd"></div>  
    </div>
    <div class="botao">
      <button class="button_Add" data-id="${produto.id}">Adicionar ao carrinho!</button>       
    </div>
  </div>
</div>`
}

function criaProdutoCarrinho (produto, quantidade, total) {
  let tabela = document.getElementById("lista_Carrinho")
  tabela.innerHTML += `<tr id="produto_Carrinho_${produto.id}">
  <td><img src="${produto.img}" alt="" class="img_Carrinho"></td>
  <td>${produto.nome}</td>
  <td class="quantidade_Carrinho">${quantidade}</td>
  <td>${produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
  <td class="total_Carrinho">${total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
</tr>`
}

function atualizaProdutoCarrinho (produto) {
 let elemento = document.getElementById(`produto_Carrinho_${produto.id}`)
 let quantidadeEl = elemento.querySelector('.quantidade_Carrinho')
 let totalEl = elemento.querySelector('.total_Carrinho')

 quantidadeEl.textContent = produto.qtd
 totalEl.textContent = produto.total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}

window.onload = function () {
  
}