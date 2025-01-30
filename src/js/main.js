import '../css/style.css';
import '../css/style-lojas.css';
import '../css/style-carrinho.css';
import 'bootstrap';
import {lojas,produtos,itensdocarrinho,promocoes} from './objects.js';
import 'bootstrap/dist/css/bootstrap.css';

function buildLojas(loja) {
  return `
  <div class="loja col-md-2 text-center">
  <img src="${loja.images[0]}" class="card-img-top" alt="${loja.name}" data-id="${loja.id}">
  <div class="card-body">
  <p class="card-text">${loja.name}</p>
  </div>
  </div>`;
}

function imageSlideshow(lojas) {
  setInterval(() => {
    lojas.forEach((loja) => {
      const imgElement = document.querySelector(`img[data-id="${loja.id}"]`);
      if (imgElement) {
        const currentSrc = imgElement.src.split('/').pop();
        let nextIndex = loja.images.findIndex((image) => image.includes(currentSrc)); 
        
        nextIndex = (nextIndex + 1) % loja.images.length;
        imgElement.src = loja.images[nextIndex];
      }
    });
  }, 2000);
}

const main = document.querySelector('main');
main.innerHTML = lojas.map((loja) => buildLojas(loja)).join('');
imageSlideshow(lojas);

function carregarProdutos(Produto){
  return `
  <div class="ct1 col-md-3" translate="no">
      <img src="${Produto.images}" alt="${Produto.name}" data-id="${Produto.id}">
      <div class="descricao">
        <div class="info">
          <span class="nome">${Produto.name}</span>
          <span class="preco">R$${Produto.preco}</span>
        </div>
        <span id="add" class="material-symbols-outlined" translate="no">
          add_shopping_cart
        </span>
      </div>
    </div>
  
  `
}

function carregarOfertas(oferta){
  return `
   <div class="ct1 col-md-3">
        <img src="${oferta.images}" alt="${oferta.name}" data-id="${oferta.id}">
        <div class="descricao">
          <div class="info">
            <span class="nome">${oferta.name}</span>
            <span class="preco"><p class="currentprice">${oferta.preco}</p><p class="promo">${oferta.promo}</p></span>
          </div>
          <span id="add" class="material-symbols-outlined">
            add_shopping_cart
          </span>
        </div>
      </div>
  `
}

const ofertas = document.getElementById('minhadiv1');
ofertas.innerHTML = promocoes.map((promo) => carregarOfertas(promo)).join('');
const produto = document.getElementById('minhadiv2');
produto.innerHTML = produtos.map((prod) => carregarProdutos(prod)).join('');

function abrirCarrinho(){
  const carrinho = document.getElementById('modalcarrinho');
  const cart = document.getElementById('itensdocarrinho');
  cart.innerHTML = itensdocarrinho.map((item) => carregarCarrinho(item));
  const total = document.querySelector('.pagamento .valorTotal')
  total.innerHTML = `R$${itensdocarrinho.map((item) => item.preconum).reduce((acc,preco) => acc + preco,0)}`
  carrinho.style.display = 'flex';
}
const abrir = document.querySelector('.carrinho .abrir');
abrir.addEventListener('click', abrirCarrinho);

function fecharCarrinho(){
  const carrinho = document.getElementById('modalcarrinho');
  carrinho.style.display = 'none';
}
const close = document.querySelector('.cabecalho-carrinho .close');
close.addEventListener('click', fecharCarrinho);

function adicionarAoCarrinho(click){
  if(click.target.id === 'add'){
    const idProduto = click.target.closest('.ct1').querySelector('img').getAttribute('data-id');
    const array = (produtos.filter((p) => p.id === idProduto));
    itensdocarrinho.push(array[0]);
    console.log(itensdocarrinho)
    const cart = document.getElementById('itensdocarrinho');
    cart.innerHTML = itensdocarrinho.map((item) => carregarCarrinho(item));
    const total = document.querySelector('.pagamento .valorTotal')
    total.innerHTML = `R$${itensdocarrinho.map((item) => item.preconum).reduce((acc,preco) => acc + preco,0)}`
  }
}
const produtoContainer = document.getElementById('minhadiv2');
produtoContainer.addEventListener('click',adicionarAoCarrinho);


function carregarCarrinho(item){
  return `
  <div class="content-shopp-car">
        <div class="picture col-md-4 text-center">
          <img src="${item.images}" class="card-img-top" alt="${item.name}" data-id="${item.id}">
        </div>
        <div class="card-info">
          <p class="card-text">${item.name}</p>
          <span class="qntd">
            <div class="d1">
              <button class="som">-</button><span class="nitens">0</span><button class="sub">+</button>
            </div>
            <div class="d2" translate="no">
              <span id="lixeira" class="material-symbols-outlined">delete</span> 
            </div>
          </span>
          <span class="preco">${item.preco}</span>
        </div>
      </div>
  `
}

function setQuantidade(event){
}

function isEmpty(){
  if(itensdocarrinho.length() === 0){
    return true;
  } else {return false;}
} 

function removerItem(event){
  if(event.target.id === 'lixeira'){
    const id = event.target.closest('.content-shopp-car').querySelector('img').getAttribute('data-id');
    const index = itensdocarrinho.findIndex(item => item.id != id);
    itensdocarrinho.splice(index, 1);
    const cart = document.getElementById('itensdocarrinho');
    cart.innerHTML = itensdocarrinho.map((item) => carregarCarrinho(item));
    const total = document.querySelector('.pagamento .valorTotal')
    total.innerHTML = `R$${itensdocarrinho.map((item) => item.preconum).reduce((acc,preco) => acc + preco,0)}`
  }
}
const conteudo = document.getElementById('itensdocarrinho');
conteudo.addEventListener('click',removerItem)



