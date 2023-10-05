const arrayFazer = []
const arrayFeito = []

export function atualizaStorage() {
    localStorage.setItem('afazeres', JSON.stringify(arrayFazer))
    localStorage.setItem('feitos', JSON.stringify(arrayFeito))
}

export {
    arrayFazer,
    arrayFeito
}
