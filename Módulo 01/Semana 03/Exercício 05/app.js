console.log('e05-s03-m1');

const somaTudo = (...numeros) => {
  let total = 0;

  numeros.forEach((num) => {
    total += num;
  });

  return total;
};

const resultado = somaTudo(1, 2, 3, 4);

console.log(resultado);
