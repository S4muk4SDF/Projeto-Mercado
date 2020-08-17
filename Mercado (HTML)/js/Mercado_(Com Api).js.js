const axios = require('axios')
const rs = require('readline-sync')
let url = `http://localhost:3000/`

class User{
  constructor(){
    this.nome = 'Samuel'
    this.saldo = 50
  }
}

function setTime (tempo){
  setTimeout(() => {
    
  }, tempo);
}

function comprarProduto(url) {

  let opcao;

  axios.get(url)
    .then(respostaDaApi => {

      let listarProdutos = respostaDaApi.data

      console.log(listarProdutos)
      console.log('Digite o código do produto, ou digite 0 para sair');
      opcao = rs.questionInt('')

        while (opcao !== 0) {

          selecionarProduto(url, opcao)

          console.log('\nDeseja continuar a compra?');
          console.log('[1] - Sim');
          console.log('[2] - Não');
          opcao = rs.questionInt('')

            if (opcao === 1){
              console.log(listarProdutos);
              opcao = rs.questionInt('Digite o código do produto: ');
            } else if (opcao === 2){
               break
            } else {
              console.log('Comando inválido!');
            }
        }
      })

      setTimeout (() => {
        if (opcao !== 0) {
          somaValorProdutos() 
        } else {
  
        }
      }, 1000)
}

function novoProduto() {
  
  console.log('\nSetores disponíveis para criação de produtos:\n');
  console.log('[1] - Carnes');
  console.log('[2] - Frutas');
  console.log('[3] - Higiene');
  
  let escolhaSetor = rs.questionInt('Escolha o setor que deseja: ')
  
  if (escolhaSetor === 1){
    url = url + 'carnes'

  } else if (escolhaSetor === 2){
    url = url + 'frutas'

  } else if (escolhaSetor === 3){
    url = url + 'higiene'

  } else {
    console.log('Código inválido!');
  }

  let nome = rs.question('Digite o nome do produto: ')
  let preco = rs.question('Digite o preço do produto: ')
  let categoria = rs.question('Digite a categoria do produto: ')
  let peso = rs.question('Digite o peso do produto: ')
  
    axios.post(url, {
      "nome": nome,
      "preco": preco,
      "categoria_id": categoria,
      "peso": peso
    })
    .then(respostaDaApi => {
      console.log(respostaDaApi.data)
    })
    .catch(err =>{
      console.log(err);
    })
}

function atualizarProduto() {

  console.log('\nSetores disponíveis para alteração de produtos:\n');
  console.log('[1] - Carnes');
  console.log('[2] - Frutas');
  console.log('[3] - Higiene');
  
  let escolhaSetor = rs.questionInt('Escolha o setor que deseja: ')
  
  if (escolhaSetor === 1){
    url = url + 'carnes'

  } else if (escolhaSetor === 2){
    url = url + 'frutas'

  } else if (escolhaSetor === 3){
    url = url + 'higiene'

  } else {
    console.log('Código inválido!');
  }

  let id = rs.questionInt('Digite o ID do item que deseja alterar: ')
  
  console.log(`\nDIGITE AS NOVAS INFORMAÇÕES DO PRODUTO ${id}\n`);

  let nome = rs.question('Digite o nome do produto: ')
  let preco = rs.question('Digite o preço do produto: ')
  let peso = rs.question('Digite o peso do produto: ')
  let categoria = rs.question('Digite a categoria do produto: ')

  url = `${url}/${id}`
  axios.put(url, {
    "nome": nome,
    "preco": preco,
    "peso": peso,
    "categoria_id": categoria,
  })
    .then(respostaDaApi => {
      console.log(respostaDaApi.data)
    })
}

function atualizarPropriedadeProduto() {
  
  console.log('\nSetores disponíveis para alteração de produtos:\n');
  console.log('[1] - Carnes');
  console.log('[2] - Frutas');
  console.log('[3] - Higiene');
  
  let escolhaSetor = rs.questionInt('Escolha o setor que deseja: ')
  
  if (escolhaSetor === 1){
    url = url + 'carnes'

  } else if (escolhaSetor === 2){
    url = url + 'frutas'

  } else if (escolhaSetor === 3){
    url = url + 'higiene'

  } else {
    console.log('Código inválido!');
  }

  let id = rs.questionInt('Digite o ID do item que deseja alterar: ')

  console.log('\nDigite 1 para alterar o nome.');
  console.log('Digite 2 para alterar o preço.');
  console.log('Digite 3 para alterar o peso.');
  console.log('Digite 4 para alterar o categoria.');

  let alteracao = rs.questionInt('')

  let nome
  let preco
  let peso
  let categoria

  if (alteracao === 1){

    nome = rs.question('Digite o nome do produto: ')

  } else if (alteracao === 2){

    preco = rs.question('Digite o preço do produto: ')

  } else if (alteracao === 3){

    peso = rs.question('Digite o peso do produto: ')

  } else if (alteracao === 4){

    categoria = rs.question('Digite a categoria do produto: ')

  } else {
    console.log('Comando Inválido!');
  }
  
  url = `${url}/${id}`
  axios.patch(url, {

    "nome": nome,
    "preco": preco,
    "peso": peso,
    "categoria_id": categoria,
  })
    .then(respostaDaApi => {
      console.log(respostaDaApi.data)
    })
}

function deletarProduto() {

  console.log('\nSetores disponíveis para a exclusão de produtos:\n');
  console.log('[1] - Carnes');
  console.log('[2] - Frutas');
  console.log('[3] - Higiene');
  console.log('[4] - Carrinho');
  
  let escolhaSetor = rs.questionInt('Escolha o setor que deseja: ')
  
  if (escolhaSetor === 1){
    url = url + 'carnes'

  } else if (escolhaSetor === 2){
    url = url + 'frutas'

  } else if (escolhaSetor === 3){
    url = url + 'higiene'

  } else if (escolhaSetor === 4){
    url = url + 'carrinho'
  } else {
    console.log('Código inválido!');
  }
  
  let idProduto = rs.questionInt('Digite o ID do item que deseja deletar: ')

  url = `${url}/${idProduto}`
  
  console.log('Tem certeza que deseja deletar este item?')
  console.log('1 - Sim');
  console.log('2 - Não');
  let yesOrNo = rs.questionInt('')

    if (yesOrNo === 1){
      axios.delete(url)
        .then(respostaDaApi => {
          console.log("Deletando...")
          setTime(3000)
        })
        .catch(err => {
          console.log(err);
        })
    } else if (yesOrNo === 2){
      console.log('Cancelando execução...');
      setTime()
    } else {
      console.log('Comando inválido');
    }
}

function adicionaNoCarrinho(produto) {

  url = `http://localhost:3000/carrinho`
  axios.post(url, {
    "nome": produto.nome,
    "preco": produto.preco,
    "categoria_id": produto.categoria,
    "peso": produto.peso
  })
  .then(res => {
    console.log(`\n${produto.nome} adicionado ao carrinho!`);
  })
  .catch(err => {
    console.log(err);
  })
}

function verCarrinho() {

  url = `${url}carrinho`
  
  axios.get(url)
    .then(res => {
      console.log(res.data);
      setTime(1500)
    })
    .catch(err => {
      console.log(err);
    })

    axios.get(url)
    .then(res => {
  
      let valorTotal = 0
      let quantidadeProdutos = res.data.length 
  
      for (let i = 0; i < quantidadeProdutos; i++){
  
        let valorAtual = res.data[i].preco
        valorTotal = valorTotal + valorAtual
        
      }
      
      console.log(`Valor total da compra: R$${valorTotal}`);
    })
    .catch(err => {
      console.log(err);
    })
}

function finalizarCompra() {
  url = `${url}carrinho`
  
  axios.get(url)
    .then(res => {
      console.log(res.data);
      setTime(1500)
    })
    .catch(err => {
      console.log(err);
    })

    let valorTotal = 0

    axios.get(url)
    .then(res => {
  
      let quantidadeProdutos = res.data.length 
  
      for (let i = 0; i < quantidadeProdutos; i++){
  
        let valorAtual = res.data[i].preco
        valorTotal = valorTotal + valorAtual
        
      }
      console.log(`Valor total da compra: R$${valorTotal}`);
    })
    .catch(err => {
      console.log(err);
    })
       
    
    setTimeout (() => {
      
      let troco = user.saldo - valorTotal
      let valorRestando  = valorTotal - user.saldo

      console.log('\nDeseja que o carrinho de compras seja entregue na sua casa?(OBS: Custo da entrega: R$5,00)\n');
      console.log('[1] - Sim');
      console.log('[2] - Não');
      let opcao = rs.questionInt('Opção: ')

      if (opcao === 1){

        valorTotal = valorTotal + 5
        console.log(`\nNovo valor total da compra: R$${valorTotal}\n`);

        let perguntaCep = rs.question('Digite seu CEP: ')
        let perguntaNumeroCasa = rs.questionInt('Digite o número da sua casa: ')
        let cepUsuario = `https://api.postmon.com.br/v1/cep/${perguntaCep}`

         if (valorTotal < user.saldo){
            entregaCarrinho(cepUsuario, perguntaNumeroCasa, troco)
         } else {
            console.log('Saldo insuficiente!');
            console.log(`Valor que ficou faltando: R$${valorRestando.toFixed(2)}`);
         }

        
    } else if (opcao === 2){

      if (valorTotal < user.saldo){
        console.log('\nPagamento realizado');
        console.log(`Seu troco: R$${troco.toFixed(2)}`);
     } else {
        console.log('Saldo insuficiente!');
        console.log(`Valor que ficou faltando: R$${valorRestando.toFixed(2)}`);
     }

    } else {
      console.log('Comando inválido!');
    }
  
  }, 5000)

}

function selecionarProduto(url, idProduto) {

  url = `${url}/${idProduto}`

  axios.get(url)
    .then(respostaDaApi => {
      console.log(respostaDaApi.data);
      adicionaNoCarrinho(respostaDaApi.data)
    })
    .catch(err =>{
      console.log(err);
    })    
}

function somaValorProdutos() {

  setTimeout(() => {
    url = 'http://localhost:3000/carrinho'
  
    axios.get(url)
    .then(res => {
  
      let valorTotal = 0
      let quantidadeProdutos = res.data.length 
  
      for (let i = 0; i < quantidadeProdutos; i++){
  
        let valorAtual = res.data[i].preco
        valorTotal = valorTotal + valorAtual
        
      }
      
      console.log(`Valor total da compra: R$${valorTotal}`);
    })
    .catch(err => {
      console.log(err);
    })
  }, 5000)
}

function acaoUsuario (){

    console.log(`\nBem vindo ao MarketByte ${user.nome}!`);

    console.log('\nDigite 1 para comprar algum produtos.');
    console.log('Digite 2 para criar um produto.');
    console.log('Digite 3 para atualizar um produto.');
    console.log('Digite 4 para atualizar uma propriedade do produto.');
    console.log('Digite 5 para deletar algum produto.');
    console.log('Digite 6 para ver o seu carrinho de compras.');
    console.log('Digite 7 para finalizar sua compra.');

    let opcao = rs.questionInt('\nDigite o que deseja fazer: ')
    
    if (opcao === 1){

      console.log('\nSetores:\n');
      console.log('[1] - Carnes');
      console.log('[2] - Frutas');
      console.log('[3] - Higiene');

      let acaoSetor = rs.questionInt('\nEscolha o setor que deseja: ')

        if (acaoSetor === 1){

          url = url + 'carnes'

        } else if (acaoSetor === 2){

          url = url + 'frutas'

        } else if (acaoSetor === 3){

          url = url + 'higiene'

        } else {

          console.log('Comando inválido!');

        }

        comprarProduto(url)

    } else if (opcao === 2){

      novoProduto()
    
    } else if (opcao === 3){
      
      atualizarProduto()

    } else if (opcao === 4){
      
      atualizarPropriedadeProduto()

    } else if (opcao === 5){

      deletarProduto()

    } else if (opcao === 6){

      verCarrinho()

    } else if (opcao === 7){

      finalizarCompra()
      
    }else {
      console.log('Comando inválido!');
    }

}

function entregaCarrinho(cep, numero, troco){
  setTimeout (() => {

    axios.get(cep)
      .then(res =>{
        console.log(`\nSeu troco: R$${troco.toFixed(2)}`);
        console.log(`Carrinho entregue na: ${res.data.logradouro}, ${numero}`);   
      })
      .catch(err => {
        console.log(err);
      })

  }, 5000)

}

let user = new User()

acaoUsuario()
