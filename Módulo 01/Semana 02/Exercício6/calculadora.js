const operacao = prompt(
  'Qual tipo de cálculo você deseja fazer? \n Digite "+" para adição, "-" para subtração, "*" para multiplicação ou "/" para divisão.'
);
const primeiroValor = parseFloat(prompt('Informe o primeiro valor que deseja calcular:'));
const segundoValor = parseFloat(prompt('Informe o segundo valor que deseja calcular:'));

switch (operacao) {
  case '+':
    alert('O resultado do seu cálculo é: ' + (primeiroValor + segundoValor));
    break;
  case '-':
    alert('O resultado do cálculo é: ' + (primeiroValor - segundoValor));
    break;
  case '*':
    alert('O resultado do seu cálculo é: ' + primeiroValor * segundoValor);
    break;
  case '/':
    alert('O resultado do seu cálculo é: ' + primeiroValor / segundoValor);
    break;
  default:
    alert('Digite uma operação válida');
    break;
}
