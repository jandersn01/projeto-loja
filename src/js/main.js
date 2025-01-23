import '../css/style.css';
import '../css/style-lojas.css';
import '../css/style-carrinho.css';
import 'bootstrap';
import {lojas,produtos,itensdocarrinho} from './objects.js';
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
  <div class="ct1 col-md-3">
      <img src="${Produto.images}" alt="${Produto.name}" data-id="${Produto.id}">
      <div class="descricao">
        <div class="info">
          <span class="nome">${Produto.name}</span>
          <span class="preco">R$${Produto.preco}</span>
        </div>
        <span id="add" class="material-symbols-outlined">
          add_shopping_cart
        </span>
      </div>
    </div>
  
  `
}

const produto = document.getElementById('minhadiv2');
produto.innerHTML = produtos.map((prod) => carregarProdutos(prod)).join('');

function abrirCarrinho(){
  const carrinho = document.getElementById('modalcarrinho');
  carrinho.style.display = 'flex';
}
const abrir = document.querySelector('.carrinho .abrir');
abrir.addEventListener('click', abrirCarrinho);

function fecharCarrinho(){
  const carrinho = document.getElementById('modalcarrinho');
  carrinho.style.display = 'none';
}
const close = document.querySelector('.conteudo .close');
close.addEventListener('click', fecharCarrinho);

function adicionarAoCarrinho(click){
  if(click.target.id === 'add'){
    const idProduto = click.target.closest('.ct1').querySelector('img').getAttribute('data-id');
    const array = (produtos.filter((p) => p.id === idProduto));
    itensdocarrinho.push(array[0]);
    console.log(itensdocarrinho)
  }
}

const produtoContainer = document.getElementById('minhadiv2');
produtoContainer.addEventListener('click',adicionarAoCarrinho);

function carregarCarrinho(lista){
  return `
  <div class="loja col-md-2 text-center">
  <img src="${lista.images}" class="card-img-top" alt="${lista.name}" data-id="${lista.id}">
  <div class="card-body">
  <p class="card-text">${lista.name}</p>
  </div>
  </div>;
  `
}

const cart = document.getElementById('itensdocarrinho');
cart.innerHTML = itensdocarrinho.map((item) => carregarCarrinho(item));


