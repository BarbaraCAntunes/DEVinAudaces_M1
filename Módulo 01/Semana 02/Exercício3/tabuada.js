var numero = parseInt(prompt('Informe um número:'));

if (isNaN(numero)) {
  alert('Número inválido');
} else {
  var resultado = '';
  for (var i = 0; i <= 10; i++) {
    resultado += numero + 'x' + i + '=' + numero * i + '\n';
  }
  alert(resultado);
}
