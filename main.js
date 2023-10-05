import { htmlRelogio } from "./modules/relogio.js";
import { htmlCalendario } from "./modules/data.js";
import { iniciaCronometro, zeraCronometro, timer, controleTimer } from "./modules/cronometro.js";
import { adicionaAfazer } from "./modules/adicionaAfazer.js";
import { arrayFazer, arrayFeito } from "./modules/atualizaStorage.js";
import { removeArrayFazer, removeArrayFeito } from "./modules/removeArray.js";
//import { recuperaStorage } from "./modules/recuperaStorage.js";

const consoleCalendario = document.querySelector('#calendario')
const consoleRelogio = document.querySelector('#relogio')
const consoleCronometro = document.querySelector('#cronometro')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
const adicionar = document.querySelector('.btn-input')
const btnToggle = document.querySelector('.toggle')
const listaFazer = document.querySelector('.fazer')
const listaFeito = document.querySelector('.feito')
let texto = document.querySelector('#input')
let controleBotao

btnToggle.addEventListener('click', () => {
    document.body.classList.toggle('light')
    btnToggle.classList.toggle('active')
})

iniciar.addEventListener('click', () => {
    consoleCronometro.classList.remove('pausado')
    clearInterval(controleTimer, controleBotao)
    iniciaCronometro()
    controleBotao = setInterval(()=> {
        consoleCronometro.innerHTML = timer
    },1000)
})

pausar.addEventListener('click', () => {
    if(consoleCronometro.innerHTML === '00:00:00'){
        clearInterval(controleBotao)
    }else{
        consoleCronometro.classList.add('pausado')
        clearInterval(controleTimer, controleBotao)
    }
})

zerar.addEventListener('click', () => {
    consoleCronometro.classList.remove('pausado')
    clearInterval(controleBotao)
    zeraCronometro()
    consoleCronometro.innerHTML = '00:00:00'
})

adicionar.addEventListener('click', () => {
    if (texto.value){
        arrayFazer.push(texto.value)
        adicionaAfazer()
    }
})

texto.addEventListener('keydown', (event) => {
    if(event.key === 'Enter' && texto.value) {
        arrayFazer.push(texto.value)
        adicionaAfazer()
    }
})

listaFazer.addEventListener('change', (e) => {
    listaFeito.appendChild(e.target.parentElement)
    arrayFeito.push(e.target.parentElement.textContent)
    removeArrayFazer(e.target.parentElement.textContent)
})

listaFeito.addEventListener('change', (e) => {
    listaFazer.appendChild(e.target.parentElement)
    arrayFazer.push(e.target.parentElement.textContent)
    removeArrayFeito(e.target.parentElement.textContent)
})

listaFazer.addEventListener('click', (e) => {
    if(e.target.classList.contains('excluir')){
        e.target.parentElement.remove()
        removeArrayFazer(e.target.parentElement.textContent)
    }
})

listaFeito.addEventListener('click', (e) => {
    if(e.target.classList.contains('excluir')){
        e.target.parentElement.remove()
        removeArrayFeito(e.target.parentElement.textContent)
    }
})

setInterval(()=> {
    consoleRelogio.innerHTML = htmlRelogio
    consoleCalendario.innerHTML = htmlCalendario
}, )

export { 
    listaFazer,
    texto
}

// recuperaStorage()
// O recurso para recuperar o localStorage com o erro abaixo, ainda não identifiquei o motivo
// Failed to load resource: the server responded with a status of 404 (Not Found)
// Se chamar a funçao importada, ocorre o erro.
