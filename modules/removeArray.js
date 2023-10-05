import { atualizaStorage, arrayFazer, arrayFeito } from "./atualizaStorage.js"

export function removeArrayFazer(element){
    for (let i = 0; i < arrayFazer.length; i++) {
        if (element === arrayFazer[i]){
            arrayFazer.splice(i, 1)
        }
     }
     atualizaStorage()
}

export function removeArrayFeito(element){
    for (let i = 0; i < arrayFeito.length; i++) {
        if (element === arrayFeito[i]){
            arrayFeito.splice(i, 1)
        }
    }
    atualizaStorage()
}
