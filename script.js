console.log('Javascript carregado');

function validaCPF(){
  var cpf = document.getElementById('cpf-digitado').value
  if(cpf.length != 11){
    return false;
  } else{
    var numeros = cpf.substring(0,9);
    var digitos = cpf.substring(9);
    var soma = 0;

    for (var i= 10; i > 1; i--){
      soma += numeros.charAt(10 - i) * i
    }
    var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

    //Validação do primeiro dígito
    if (resultado != digitos.charAt(0)){
      return false;
    }
    soma = 0;
    numeros = cpf.substring(0,10);

    for(var k = 11; k > 1; k--){
      soma += numeros.charAt(11 - k) * k;
    }

    resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

    //Validação do segundo dígito
    if (resultado != digitos.charAt(1)){
      return false;
    }

    return true;
  }
}

function validacao(){
  console.log('Iniciando validação do CPF');
  document.getElementById('success').style.display='none'
  document.getElementById('error').style.display='none'
  var cpf = document.getElementById('cpf-digitado').value;
  var resultadoValidacao = validaCPF(cpf);

  resultadoValidacao ? document.getElementById('success').style.display = 'block' : document.getElementById('error').style.display = 'block'
}

