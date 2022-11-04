function calcular() {
    

    nascimento = document.querySelector("#ano_nasc")
    pega_data = new Date()
    ano = pega_data.getFullYear()
    idade = ano - Number(nascimento.value)
    sexo = document.getElementsByName("veri")
    seletor = document.querySelector('#mensagem')
    img = document.querySelector('#imagg')
    mensagem2 = document.querySelector('#mensagem2')
    genero = ''
    
    if (sexo[0].checked){
        genero = 'homem'
    }else{
        genero = 'mulher'
    }

    if (genero == 'homem') {
        vogal = 'o'
    }else{
        vogal = 'a' 
    }


    if (idade > 0 && idade <= 14 ) {

        img.setAttribute( 'src',`imagens/${genero}/baby.png`)
        mensagem2.innerHTML = (`${genero} criança com ${idade} anos`)
    
    } else if (idade > 14 && idade <=18){ 
        
        img.setAttribute( 'src',`imagens/${genero}/teen.png`)
        mensagem2.innerHTML = (`${genero} adolescente com ${idade} anos`)  

    } else if (idade >=19 && idade <=50) {
        
        img.setAttribute( 'src',`imagens/${genero}/adult.png`)
        mensagem2.innerHTML = (`${genero} adult${vogal} com ${idade} anos`) 

    } else if (idade >=51 && idade <=100) {
        
        img.setAttribute( 'src',`imagens/${genero}/old.png`)
        mensagem2.innerHTML = (` ${genero} velh${vogal} com ${idade} anos`)

    } else if (idade >= 101 && idade <= 50000) {
        
        img.setAttribute( 'src',`imagens/esqueleto1.jpg`)
        mensagem2.innerHTML = (`Já deveria estar enterrado!!.`)

        esqueleto1.jpg

    }else{
       seletor.innerHTML = '[ERRO: dados invalidos!!] verifique se preencheu todos os itens corretamente e  Tente novamente.'
    }

}
