// lizta = []
    // lizta.push(1)
    // lizta.push(2)
    // lizta.push(9)
    
    // window.alert(lizta)
function iniciar() {
    
    nume = document.querySelector('#num')
    numero = Number(document.querySelector('#num').value)
    painel = document.querySelector('#painel')
    texto_resultados = document.querySelector('#texto_resultados')
    lizta = []

    if (isNumero(numero) && !inlista(numero,lizta)) {
        lizta.push(Number(nume.value))
        
        adiciona = document.createElement('option')
        adiciona.text = `Valor ${numero} Adicionado`
        painel.appendChild(adiciona)
        nume.value = ' '
        nume.focus()
        
    } else {
        window.alert('[ERRO]numero invalido, tente novamente!!')
        nume.value = ' '
        nume.focus()
    }
}

function isNumero(n) {
     if (n >= 1 && n <= 100) {
        return true
     } else {
        return false }
}

function inlista(n,l) {
    if (l.indexOf(n) != -1) {
        return true
    } else {
        return false
    }
}

 function mostra_result() {
    // lizta = []
    // lizta.push(1)
    // lizta.push(2)
    texto_resultados.innerHTML = `${lizta}`
//     window.alert(lizta)
//     window.alert(list.length)
//     // texto_resultados.innerHTML = ` ${list} `

//     // texto_resultados.innerHTML = `Ao todo, temos ${list.length()} números cadastrados.`
//     // texto_resultados.innerHTML = ` ${} `
//     // texto_resultados.innerHTML = ` ${} `
//     // texto_resultados.innerHTML = ` ${} `
//     // texto_resultados.innerHTML = ` ${} `
//     // texto_resultados.innerHTML = ` ${} `
}

