//Confirmar conexão entre o .html e .js
console.log("JavaScript Carregado")

function validaCPF(cpf){
    console.log("CPF Length " + cpf.length)

    if(cpf.length != 11){
        //length mostra quantos caracteres tem na string

        return false

    } else { //se tiver 11 caracteres, verificar a validade do cpf
        var numeros = cpf.substring(0,9) 
            //substring percorre todo texto
            //desde caractere 0 até 9
        var digitos = cpf.substring(9)
            //substring percorre todo texto
            //a patir do caractere 9
            //captura os ultimos dois numeros, digito validador
        console.log('Números ' + numeros)
        console.log('Dígitos ' + digitos)
                //percorrer o texto de trás pra frente
                //ao tratar uma string como posições de uma lista..
                //nós conseguimos manipular ela


        //validação do meu primeiro digito
        var soma = 0

            for(var i=10;i>1;i--){
                soma += numeros.charAt(10-i)*i
                    // charAT() função que busca cada..
                    // posição da lista da string 
                    // e retorna a posição da string na lista
            }
            console.log('Soma primeiro digito ' + soma)
            
            var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
                //operador ternário teste ? verdadeiro : falso
                //é possível misturar operadores aritméticos..
                //e relacionais para simplificar

            if(resultado != digitos.charAt(0)){
                return false
            }
            console.log(digitos.toString().charAt(0) + ' é a primeira posição da var digitos')


        //validação do segundo digito
        soma = 0
        numeros = cpf.substring(0,10)

            for(var k=11;k>1;k--){
                soma += numeros.charAt(11-k)*k
            }
            console.log('Soma segundo digito ' + soma)

            resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)

            if(resultado != digitos.charAt(1)){
                return false
            }
            console.log(digitos.toString().charAt(1) + ' é a segunda posição da var digitos')

            return true
    }
}

function validacao(){
    console.log("Iniciando Validação do CPF")

    document.getElementById("success").style.display = 'none'
    document.getElementById("error").style.display = 'none'
        //sempre que executar a função validacao()
        //será ocultada as mensagens de alerta
        //para evitar monstrar as mensagens erroneamente

    var cpf = document.getElementById("cpf_digitado").value
        //Ensinar o .js a capturar elementos de dentro do .html
        //cpf recebe o valor do cpf digitado

    var resultadoValidacao = validaCPF(cpf)

    if (resultadoValidacao){
            // Alterando diretamente nos alertas no html
        document.getElementById('success').style.display = 'block'
            //se validar que o cpf é verdadeiro 
            //mostra o alerta id=success
    } else {
        document.getElementById('error').style.display = 'block'
            //se não validar o cpf
            //mostra o alerta id=error
    }
} 


