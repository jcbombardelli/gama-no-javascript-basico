console.log("javascript carregado"); 

function validaCPF(cpf){ //   essa função foi criada para saber se o cpf é verdadeiro falso, 
	
	if (cpf.length != 11) {
		return false;
	}
	else {
		var numeros = cpf.substring(0,9); //a posiçao do cpf começa a partir do zero e termina na posição 8  {exemplo do cpf}  37142811854
		var digitos = cpf.substring(9); // a posiçao do restante do cpf a partir da posição 9;               {posiçao do cpf}  0123456789


		var soma = 0; // variavel de incremento
		for (var i = 10; i > 1; i--) {
			soma += numeros.charAt(10 - i) * i; // a funcao charAt me retorna a posicao daquela strig na lista
		}
		console.log(soma);

		// validação do meu primeiro digito
		var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

		if (resultado != digitos.charAt(0)) {
			return false;
		}


	return true;
	}
}


function validacao() { 

	console.log("Iniciando validação CPF");

	var cpf = document.getElementById("cpf_digitado").value; //vai pegar o cpf digitado atraves do document.getElementById("cpf_digitado").value; depois gurardar o valor dentro de uma variavel chamada cpf0
        
		var resultadoValidacao = validaCPF(cpf);     //perguntar se a validaçao do cpf é verdadeiro

		if (resultadoValidacao) {
			document.getElementById("success").style.display = "block"; //pega o elemento html que esta ocuto pelo styl e transforma em vsivel

		}
		else {
			document.getElementById("error").style.display = "block";  // retorna no html um texto que estava oculto.
		}




	}