import { listaFazer, listaFeito } from "../main"
import { criaItem } from "./criaItem"

const recuperaAfazeres = localStorage.getItem('afazeres')
const recuperaFeitos = localStorage.getItem('feitos')

const iniciaAfazeres = JSON.parse(recuperaAfazeres)
const iniciaFeitos = JSON.parse(recuperaFeitos)

export function recuperaStorage(){
    if(recuperaAfazeres || recuperaFeitos){
        let elemento
        const { li, p } = criaItem()
        
        for (let i = 0; i< iniciaAfazeres.length; i++) {
            elemento = iniciaAfazeres[i]
            p.innerHTML = elemento
            listaFazer.appendChild(li)
        }
        
        for (let i = 0; i< iniciaFeitos.length; i++) {
            elemento = iniciaFeitos[i]
            p.innerHTML = elemento
            listaFeito.appendChild(li) 
        }
    }
}
