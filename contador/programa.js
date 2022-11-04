
function ativacao() {
    inici = document.querySelector('#inicial')
    inicio = Number(inici.value)
    fi = document.querySelector('#final')
    fim = Number(fi.value)
    intervalo = document.querySelector('#intervalo')
    passo = Number(intervalo.value)
    mostrador = document.querySelector('#mostra_result')

    if (inicio == 0 || fim == 0) {
        window.alert("[ERRO] preencha todos os campos e tente novamente!.")
        window.location.reload()
    }else{
        if (passo == 0){
            passo = 1
            window.alert('o valor digitado [0] não é valido para passo. O numero 0 foi substituido por 1.')
        }
            mostrador.innerHTML = ''
        if (inicio < fim) {
            for (i = inicio; i <= fim; i += passo) {
                mostrador.innerHTML += `${i} &#x1F449 `}
            
            mostrador.innerHTML += ` &#x1F6A9 `
        }else{
            for (i = inicio; i >= fim; i -= passo) {
                mostrador.innerHTML += `${i} &#x1F449 `}
            mostrador.innerHTML += ` &#x1F6A9 `    
        }
    }
}