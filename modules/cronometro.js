import { consoleCronometro } from "./main.js";
let timer
let segundos = 0

function criaSegundos(segundos){
    const tempo = new Date(segundos * 1000)
    return tempo.toLocaleTimeString('pt-br',{
        hour12: false,
        timeZone: 'UTC'
    });
}

export function iniciaCronometro(){
    timer = setInterval(()=> {
        consoleCronometro.innerHTML = criaSegundos(segundos)
        segundos++
    },1000)
}

export function pausaCronometro(){
    if(consoleCronometro.innerHTML === '00:00:00'){
        clearInterval(timer)
    }else{
        consoleCronometro.classList.add('pausado')
        clearInterval(timer)
    }
}

export function zeraCronometro(){
    consoleCronometro.classList.remove('pausado')
    consoleCronometro.innerHTML = '00:00:00'
    clearInterval(timer)
    segundos = 0
}

export { timer }
