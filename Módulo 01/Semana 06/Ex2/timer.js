function updateTime() {
  const now = new Date();
  const dataFormatada = now.toLocaleDateString('pt-BR');
  console.log(`${hours}:${minutes}:${seconds}`);
}

setInterval(updateTime, 1000);
