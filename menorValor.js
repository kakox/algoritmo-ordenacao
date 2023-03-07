const livros = require('./lista-livros');

function menorValor(arrProdutos, posicaoInicial){

  let maisBarato = posicaoInicial;

  for(let atual = posicaoInicial; atual < arrProdutos.length; atual ++){
    if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
        maisBarato = atual
    }
}
  return maisBarato;
}

module.exports = menorValor;



// let maisCaro = 0;



// for (let atual = 0; atual < livros.length; atual++) {
//  if (livros[atual].preco > livros[maisCaro].preco) {
//    maisCaro = atual;
//  }
// }

// console.log(`O livro mais caro custa ${livros[maisCaro].preco} e o título é ${livros[maisCaro].titulo}`);