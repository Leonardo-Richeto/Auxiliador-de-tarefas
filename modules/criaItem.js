export function criaItem() {    
const li = document.createElement('li')
const check = document.createElement('input')
const btnDel = document.createElement('button')
const p = document.createElement('p')

    check.classList.add('check')
    btnDel.classList.add('excluir')
    check.type = 'checkbox'
    
    li.appendChild(check)
    li.appendChild(p)
    li.appendChild(btnDel)
    
    return { li, p }
}
