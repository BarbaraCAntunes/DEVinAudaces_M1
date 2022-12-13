var idade = parseInt(prompt('Informe a sua idade:'));

if (idade >= 0 && idade <= 15) {
  alert('Você é jovem!');
} else if (idade >= 16 && idade <= 64) {
  alert('Você é adulto!');
} else if (idade >= 65) {
  alert('Você é idoso!');
} else {
  alert('Idade inválida');
}
