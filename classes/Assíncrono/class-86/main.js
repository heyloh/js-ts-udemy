function handleGenerateRandom(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min)
}

function waitThere(msg, time) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') {
      reject('Mensagem inválida.');
    }

    setTimeout(() => {
      resolve(msg);
    }, time);
  });
}

waitThere('Is that a Bear?', handleGenerateRandom(1, 3))
  .then(response => {
    console.log(response);
    return waitThere(`Oh, it's a potato!`, handleGenerateRandom(1, 3));
  })
  .then(response => {
    console.log(response);
    return waitThere(123, handleGenerateRandom(1, 3));
  })
  .then(response => {
    console.log(response);
    return waitThere(`Damn, I need new glasses...`, handleGenerateRandom(1, 3));
  })
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log('Error: ' + err);
  });