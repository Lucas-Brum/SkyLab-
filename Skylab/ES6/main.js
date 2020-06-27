/*Classes Parte 1*/
/*class List {
  constructor() {
    this.data = []
  }

  add(data) {
    this.data.push(data)
    console.log(this.data)
  }

}
class TodoList extends List{
  constructor(){
    super()

    this.usuario = 'Lucas'
  }
  mostraUsuario() {
    console.log(this.usuario)
  }
}

const MinhaLista = new TodoList()

document.getElementById('novotodo').onclick = function() {
  MinhaLista.add('Novo todo')
}

MinhaLista.mostraUsuario();*/
/*Classes Parte 2*/
/*class Matematica {
  static soma(a, b) {    //Metodos estaticos recebem apenas parametros para executar tarefaz
    return a + b
  }
}

console.log(Matematica.soma(1,2))*/

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

/*Const & let*/
/*const a = 1;
// a = 3 n pode fazer isso
const usuario = {nome: 'Lucas'}

usuario.nome = 'Cleiton'

console.log(usuario)

function teste(x){
  let y = 2

  if(x > 5) {
    console.log(x,y);
  }
}

//console.log(y) n pode fazer pq x n esta definido

console.log(teste(10))*/
/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
/*Operações em arrays*/

/*const arr = [1, 3, 4, 5, 8, 9]

const newArr = arr.map(function(item, index){
  return item + index;
})

console.log(newArr)

const sum = arr.reduce(function(total, next){
  return total + next
})

console.log(sum)

const filter = arr.filter(function(item){
  return item % 2 === 0
})

console.log(filter)

const find = arr.find(function(item) {
  return item === 4
})

console.log(find)*/
/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
/*Arrow Functions*/
/*const arr = [1, 3, 4, 5, 6]
let multiplicador = 2

const newArr = arr.map(item => item * multiplicador)

console.log(newArr);

const teste = () => ({ nome: 'Lucas' })

console.log(teste())*/
/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
/*Valores padrão*/
/*const soma = (a = 3, b = 6) => a + b

console.log(soma(1))
console.log(soma())*/
/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
/*Desestruturação*/
/*const usuario = {
  nome: 'Lucas',
  idade: 23,
  endereco:{
    cidade: 'São Leopoldo',
    estado: 'RS'
  },
}

const {nome,idade, endereco: {cidade}} = usuario

console.log(nome)
console.log(idade)
console.log(cidade)

function mostraNome({ nome }) {
  console.log(nome)
}

mostraNome(usuario)*/
/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
/*Operadores rest/spread*/
/*
//REST
const usuario = {
  nome: 'Lucas',
  idade: 28,
  empresa: 'Desempregado'
}

const {nome, ...rest} = usuario

console.log(nome)
console.log(rest)

const arr = [1, 2, 3, 4]

const [a, b, ...c] = arr

console.log(a)
console.log(b)
console.log(c)

function numeros(...params){
  return params
}

console.log(numeros(1,3,4,4,5,6,7))

//SPREAD
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = [...arr1, ...arr2]

console.log(arr3)

const usuario1 = {
  nome: 'Lucas',
  idade: 28,
  empresa: 'Desempregado'
}
const usuario2 = { ...usuario1, nome: 'Gabriel'}

console.log(usuario2)*/
/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
/*Template Literals*/
/*
const nome = "Lucas"
const idade = 23

console.log(`Meu nome é ${nome} e eu tenho ${idade} anos`)*/
/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
/*Object short Syntax*/
/*
const nome = 'Lucas'
const idade = 28


const usuario = {
  nome,
  idade,
  empresa: 'Desempregado'
}

console.log(usuario)*/
/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
/*DESAFIO*/
/*exercicio 1 (INCOMPLETA!!!!)*/
class usuario {

}
class Admin extends usuario {
  constructor(){
    super();
    let email;
    let senha;
  }
}