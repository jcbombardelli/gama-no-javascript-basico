console.log("javascript carregado");


function validaCPF(cpf){
	return false;
}


function validacao(){
	console.log("Iniciando validação CPF");



	var cpf  = document.getElementById('cpf_digitado').value; /*o cpf digitado vai ser capiturado atravez do  javascript dentro do html e vai ser armazenado dentro da variavel cpf*/
	console.log(cpf) /*exibir valor do cpf*/
	
	var resultadoValidacao = validaCPF(cpf);
	
	if (resultadoValidacao) {
		document.getElementById('success').style.display = "block";
	}else{
		document.getElementById('error').style.display = "block";
	}
}