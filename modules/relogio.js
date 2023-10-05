import { zero } from "./zeroEsquerda.js";

const data = new Date()
let htmlRelogio = '00:00:00'
let seg = data.getSeconds()
let min = data.getMinutes()
let hora = data.getHours()

export function relogio(){
        setInterval(() => {
            if(seg <= 59){
                seg++
                htmlRelogio = `${zero(hora)}:${zero(min)}:${zero(seg)}`
            }else{
                seg = 0
                min++
            }
            if(min === 59 && seg === 59) {
                hora++
                min = 0
                seg = 0
            }
        if(hora === 23 && min === 59 && seg === 59) {
               hora = 0
               min = 0
               seg = 0
        }
    }, 1000);
}

export { htmlRelogio }

relogio()
