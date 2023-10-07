import { listaFazer, texto } from "../main.js";
import { criaItem } from "./criaItem.js"
import { atualizaStorage } from "./atualizaStorage.js";
import { arrayFazer } from "./atualizaStorage.js";

export function adicionaAfazer(){
    const { li, p } = criaItem()
    p.innerHTML = texto.value
    listaFazer.appendChild(li)
    arrayFazer.push(texto.value)
    atualizaStorage()
    texto.focus()
    texto.value = ''
}
