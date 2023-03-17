function sleep(valor) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      resolve(valor);
    }, 3000);
  });
}

sleep('teste').then((res) => console.log(res));
