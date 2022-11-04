function iniciar() {
    numero = Number(document.querySelector('#escolha_num').value)
    // window.alert(numero)
    testee = document.querySelector('#teste')
    add = document.querySelector('#selecto')
    count = 1
    add.innerHTML = ''
    if (numero.length == 0){
        window.alert('preencha o campo abaixo!')
    } else {
        while (count <= 10) {
        
            resultado = document.createElement('option');
            resultado.text = `   ${numero} X ${count} = ${numero * count}  `
            add.appendChild(resultado)
            count++ }
    }
}

