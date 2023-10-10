import { relogio } from "./relogio.js";
import { dia } from "./data.js";
import { iniciaCronometro, pausaCronometro, zeraCronometro, timer } from "./cronometro.js";
import { adicionaAfazer } from "./adicionaAfazer.js";
import { arrayFazer, arrayFeito } from "./atualizaStorage.js";
import { removeArrayFazer, removeArrayFeito } from "./removeArray.js";
import { recuperaStorage } from "./recuperaStorage.js"

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

btnToggle.addEventListener('click', () => {
    document.body.classList.toggle('light')
    btnToggle.classList.toggle('active')
})

iniciar.addEventListener('click', () => {
    consoleCronometro.classList.remove('pausado')
    clearInterval(timer)
    iniciaCronometro()
})

pausar.addEventListener('click', () => {
    pausaCronometro()
})

zerar.addEventListener('click', () => {
    zeraCronometro()
})

adicionar.addEventListener('click', () => {
    if (texto.value){
        adicionaAfazer()
    }
})

texto.addEventListener('keydown', (event) => {
    if(event.key === 'Enter' && texto.value) {
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

export { 
    listaFazer,
    listaFeito,
    consoleRelogio,
    consoleCalendario,
    consoleCronometro,
    texto,
}

recuperaStorage()
relogio()
dia()
setInterval(relogio, 1000)
setInterval(dia, 60000)
