console.log("javascript carregado"); 

function validaCPF(cpf){ //   essa função ffoi criada para saber se o cpf é verdadeiro falso, 
	return false; // esse resultado esta sendo manipulado só para retornar  o resultado da funcao da lianha 14
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