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

// NÚMEROS
let resp = document.getElementById('resposta')
let teclado = document.getElementById('teclado')
let p = document.getElementsByTagName('p')[0]

teclado.addEventListener('click', function (event) {
    if (event.target.tagName !== 'BUTTON') return
    
    let valor = event.target.textContent
    let ultimo = resp.textContent.slice(-1)
    let operadores = ['+', '-', 'x', '÷']
    let antigo = resp.textContent 
    
    if (valor === '⌫') {
        resp.textContent = resp.textContent.slice(0, -1)
        return
    }
    if (valor === 'C') {
        resp.textContent = ' '
        return
    }

    if (valor === '=') {
        try {
            let conta = resp.textContent
                .replace(/x/g, '*')
                .replace(/÷/g, '/')

            resp.textContent = eval(conta)
        } catch {
            resp.textContent = 'Erro'
        }
        return
    }

    if (operadores.includes(valor) && operadores.includes(ultimo)) {
        return
    }

    if (p.scrollWidth > resp.clientWidth) {
            resp.textContent = antigo
    }
    else {
        resp.textContent += valor
    }
})