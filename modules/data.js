import { zero } from "./zeroEsquerda.js";
import { consoleCalendario } from "./main.js";

const dataHoje = new Date()
const diaSemana = dataHoje.getDay()
let diaSemanaTxt
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
const mesTexto = meses[dataHoje.getMonth()]

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

export function dia() {
    consoleCalendario.innerHTML = `${diaSemanaTxt}, ${zero(dataHoje.getDate())} de ${mesTexto} de ${dataHoje.getFullYear()}`
}
