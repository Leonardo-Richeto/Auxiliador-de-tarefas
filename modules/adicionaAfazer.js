import { listaFazer, texto } from "../main.js";
import { criaItem } from "./criaItem.js"
import { atualizaStorage } from "./atualizaStorage.js";

export function adicionaAfazer(){
    const { li, p } = criaItem()
    p.innerHTML = texto.value
    listaFazer.appendChild(li)
    atualizaStorage()
    texto.focus()
    texto.value = ''
}
