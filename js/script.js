// MODOS CLARO E ESCURO
let modos = document.getElementById('modos')
let fundo = document.getElementsByTagName('main')[0]

function modo() {
    if (modos.textContent === 'modo escuro') {
        modos.textContent = 'modo claro'
        fundo.style.backgroundColor = '#505050'
    } else {
        modos.textContent = 'modo escuro'
        fundo.style.backgroundColor = '#fafafa'
    }
}