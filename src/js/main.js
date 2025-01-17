import '../css/style.css';
import '../css/style-lojas.css';
import 'bootstrap';
import lojas from './objects.js';

import 'bootstrap/dist/css/bootstrap.css';

function buildLojas(loja) {
  return `
    <div class="loja col-2 my-2 text-center">
      <img src="${loja.images[0]}" class="card-img-top" alt="${loja.name}" data-id="${loja.id}">
      <div class="card-body">
        <p class="card-text">${loja.name}</p>
      </div>
    </div>`;
}


const main = document.querySelector('main');
main.innerHTML = lojas.map((loja) => buildLojas(loja)).join('');
imageSlideshow(lojas);

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
