let carrinho = []

class ProdutoNoCarrinho {
  constructor(nome, preco, quantidade) {
    this.nome = nome
    this.preco = preco
    this.quantidade = quantidade
  }
}

window.onload = function () {

  document.getElementById("button_Add_Maca").addEventListener("click", () => {
    let quantidadeProduto = document.getElementById("input_Qtd_Maça").value
    let valorProduto = 2.5
    let nomeProduto = "Maçã"

    let adicionaProduto = {
      "nome": nomeProduto,
      "valor": valorProduto,
      "quantidade": quantidadeProduto
    }

    carrinho.push(adicionaProduto)

    console.log(carrinho);
  })

  document.getElementById("button_Add_Tomate").addEventListener("click", () => {
    let quantidadeProduto = document.getElementById("input_Qtd_Tomate").value
    let valorProduto = 2
    let nomeProduto = "Tomate"

    let adicionaProduto = {
      "nome": nomeProduto,
      "valor": valorProduto,
      "quantidade": quantidadeProduto
    }

    carrinho.push(adicionaProduto)

    console.log(carrinho);
  })

  document.getElementById("button_Add_Banana").addEventListener("click", () => {
    let quantidadeProduto = document.getElementById("input_Qtd_Banana").value
    let valorProduto = 4.39
    let nomeProduto = "Banana"

    let adicionaProduto = {
      "nome": nomeProduto,
      "valor": valorProduto,
      "quantidade": quantidadeProduto
    }

    carrinho.push(adicionaProduto)

    console.log(carrinho);
  })

  document.getElementById("button_Add_Laranja").addEventListener("click", () => {
    let quantidadeProduto = document.getElementById("input_Qtd_Laranja").value
    let valorProduto = 2.89
    let nomeProduto = "Laranja"

    let adicionaProduto = {
      "nome": nomeProduto,
      "valor": valorProduto,
      "quantidade": quantidadeProduto
    }

    carrinho.push(adicionaProduto)

    console.log(carrinho);
  })

  document.getElementById("button_Add_Kiwi").addEventListener("click", () => {
    let quantidadeProduto = document.getElementById("input_Qtd_Kiwi").value
    let valorProduto = 3.9
    let nomeProduto = "Kiwi"

    let adicionaProduto = {
      "nome": nomeProduto,
      "valor": valorProduto,
      "quantidade": quantidadeProduto
    }

    carrinho.push(adicionaProduto)

    console.log(carrinho);
  })
}