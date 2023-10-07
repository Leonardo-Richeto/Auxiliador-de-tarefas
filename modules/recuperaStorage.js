import { criaItem } from "./criaItem.js";
import { listaFazer, listaFeito } from "../main.js";
import { arrayFazer, arrayFeito } from "./atualizaStorage.js";

export function recuperaStorage(){
    const recuperaAfazeres = localStorage.getItem('afazeres')
    const recuperaFeitos = localStorage.getItem('feitos')
    const iniciaAfazeres = JSON.parse(recuperaAfazeres)
    const iniciaFeitos = JSON.parse(recuperaFeitos)

    for (let i = 0; i< iniciaAfazeres.length; i++) {
        let elemento
        const { li, p } = criaItem()
        elemento = iniciaAfazeres[i]
        arrayFazer.push(elemento)
        p.innerHTML = elemento
        listaFazer.appendChild(li)
    }
        
    for (let i = 0; i< iniciaFeitos.length; i++) {
        let elemento
        const { li, p, check } = criaItem()
        elemento = iniciaFeitos[i]
        arrayFeito.push(elemento)
        p.innerHTML = elemento
        check.checked = true
        listaFeito.appendChild(li)
    }
}
