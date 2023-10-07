import { zero } from "./zeroEsquerda.js"
import { consoleRelogio } from "../main.js"

export function relogio(){
    const data = new Date()
    let seg = data.getSeconds()
    let min = data.getMinutes()
    let hora = data.getHours()

    consoleRelogio.innerHTML = `${zero(hora)}:${zero(min)}:${zero(seg)}`
}
