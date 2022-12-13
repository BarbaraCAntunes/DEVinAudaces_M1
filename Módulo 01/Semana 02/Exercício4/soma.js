var soma = 0;

do {
  var numero = parseInt(prompt('Informe um número'));
  if (isNaN(numero) || numero === -1) {
    continue;
  }
  soma += numero;
} while (numero !== -1);

alert(soma);
