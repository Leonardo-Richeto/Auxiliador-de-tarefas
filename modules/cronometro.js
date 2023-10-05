let timer
let controleTimer
let segundos = 0

function criaSegundos(segundos){
    const tempo = new Date(segundos * 1000)
    return tempo.toLocaleTimeString('pt-br',{
        hour12: false,
        timeZone: 'UTC'
    });
}

export function iniciaCronometro(){
    controleTimer = setInterval(() => {
        timer = criaSegundos(segundos)
        segundos++
    }, 1000);
}

export function zeraCronometro(){
    clearInterval(controleTimer)
    segundos = 0
}

export { timer, controleTimer }
