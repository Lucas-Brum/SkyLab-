"use strict";

var usuario = {
  nome: 'Lucas'
};
usuario.nome = 'josias';
console.log(usuario);

function teste(x) {
  let y = 2;

  if(x > 5) {
    console.log(x, y) 
  }
}

teste(10)