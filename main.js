const btnToggle = document.querySelector('.toggle')
const consoleCalendario = document.querySelector('#calendario')
const consoleRelogio = document.querySelector('#relogio')
const consoleCronometro = document.querySelector('#cronometro')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
const listaFazer = document.querySelector('.fazer')
const listaFeito = document.querySelector('.feito')
const adicionar = document.querySelector('.btn-input')
let texto = document.querySelector('#input')
const data = new Date()
let timer
let diaSemanaTxt
const diaSemana = data.getDay()
const afazeres = localStorage.getItem('afazeres')
const feitos = localStorage.getItem('feitos')
const arrayFazer = []
const arrayFeito = []
let segundos = 0

const meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
]

const mesTexto = meses[data.getMonth()]

switch (diaSemana){
    case 0:
        diaSemanaTxt = 'Domingo'
        break;
    case 1:
        diaSemanaTxt = 'Segunda-feira'
        break;
    case 2:
        diaSemanaTxt = 'Terça-feira'
        break;
    case 3:
        diaSemanaTxt = 'Quarta-feira'
        break;
    case 4:
        diaSemanaTxt = 'Quinta-feira'
        break;
    case 5:
        diaSemanaTxt = 'Sexta-feira';
        break;
    case 6:
        diaSemanaTxt = 'Sábado'
        break;
    default:
        diaSemanaTxt = 'Data Inválida'
}

// Parte que faz funcionar os relógios.

function zero(num){
    return num >= 10 ? num : `0${num}`
}

function atualizaRelogios(){
    let seg = data.getSeconds()
    let min = data.getMinutes()
    let hora = data.getHours()
    setInterval(() => {
        if(seg <= 59){
            consoleRelogio.innerHTML = `${zero(hora)}:${zero(min)}:${zero(seg)}`
            seg++
        }else{
            seg = 0
            min++
        }
        if(min === 59 && seg === 59) {
            hora++
            min = 0
            seg = 0
        }
        if( hora === 23 && min === 59 && seg === 59) {
            hora = 0
            min = 0
            seg = 0
        }
    }, 1000);
    consoleCalendario.innerHTML = `${diaSemanaTxt}, ${zero(data.getDate())} de ${mesTexto} de ${data.getFullYear()}`
}

function criaSegundos(segundos){
    const tempo = new Date(segundos * 1000)
    return tempo.toLocaleTimeString('pt-br',{
        hour12: false,
        timeZone: 'UTC'
    });
}

function iniciaCronometro(){
    timer = setInterval(() => {
        consoleCronometro.innerHTML = criaSegundos(segundos)
        segundos++
    }, 1000);
}

function toggleMode() {
    document.body.classList.toggle('light')
}

// Parte que cria as listas.

function criaLi(conferidor) {
    const li = document.createElement('li')
    const check = document.createElement('input')
    const btnDel = document.createElement('button')
    const p = document.createElement('p')

    check.classList.add('check')
    btnDel.classList.add('excluir')
    check.type = 'checkbox'
    
    listaFazer.appendChild(li)
    li.classList.add('save')
    li.appendChild(check)
    li.appendChild(p)
    p.innerHTML = texto.value
    li.appendChild(btnDel)

    arrayFazer.push(li.innerText)
    texto.innerHTML = ''

    if(conferidor === true){
        if(check.checked = true){
            criaFeito(li)
            atualizaStorage()
        }
    }
    atualizaStorage()
}

function criaFeito(li) {
    listaFeito.appendChild(li) 
    arrayFeito.push(li.innerText)
    itemClicado(arrayFazer, li)
    atualizaStorage()
}

function criaFazer(li) {
    listaFazer.appendChild(li)
    arrayFazer.push(li.innerText)
    itemClicado(arrayFeito, li)
    atualizaStorage()
}

// Escutadores de evento dos botões.

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
    if(consoleCronometro.innerHTML === '00:00:00'){
        clearInterval(timer)
    }else{
        consoleCronometro.classList.add('pausado')
        clearInterval(timer)
    }
})

zerar.addEventListener('click', () => {
    consoleCronometro.classList.remove('pausado')
    clearInterval(timer)
    consoleCronometro.innerHTML = '00:00:00'
    segundos = 0
})

adicionar.addEventListener('click', () => {
    if (texto.value){
        criaLi(texto)
        texto.focus()
        texto.value = '' 
    }
})

texto.addEventListener('keydown', (event) => {
    if(event.key === 'Enter' && texto.value) {
        criaLi()
        texto.value = ''
    }
})

listaFazer.addEventListener('change', (e) => {
    criaFeito(e.target.parentElement)
})

listaFeito.addEventListener('change', (e) => {
    criaFazer(e.target.parentElement)
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('excluir')) {
        e.target.parentElement.remove()
        removeArray(e.target.parentElement.textContent)
    }
})

// Parte que manipula o localStorage.

function itemClicado(array, li){
    for (let i = 0; i<= array.length; i++) {
        if(li.innerText === array[i]) array.splice(i, 1) 
    }
}

function atualizaStorage() {
    localStorage.setItem('afazeres', JSON.stringify(arrayFazer))
    localStorage.setItem('feitos', JSON.stringify(arrayFeito))
}

function removeArray(e) {
    for (let i = 0; i < arrayFazer.length; i++) {
       if (e === arrayFazer[i]){
           arrayFazer.splice(i, 1)
       }
    }
    for (let i = 0; i < arrayFeito.length; i++) {
        if (e === arrayFeito[i]){
            arrayFeito.splice(i, 1)
        }
     }
    atualizaStorage()
}

function iniciaLista() {
    const iniciaAfazeres = JSON.parse(afazeres)
    const iniciaFeitos = JSON.parse(feitos)
    let conferidor = true

    for (let i = 0; i < iniciaAfazeres.length; i++) {
        texto.value = iniciaAfazeres[i]
        criaLi(texto)
    }
    for (let i = 0; i < iniciaFeitos.length; i++) {
        texto.value = iniciaFeitos[i]
        criaLi(conferidor)
    }
    texto.value = ''
    texto.focus()
}

function verificaLista() {
    if(arrayFazer || arrayFeito) iniciaLista()
}

verificaLista()
atualizaRelogios()
