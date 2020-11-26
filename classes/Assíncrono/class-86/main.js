function handleGenerateRandom(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min)
}

function waitThere(msg, time) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') {
      reject('Mensagem inválida.');
      return;
    }

    setTimeout(() => {
      resolve(msg.toUpperCase() + ' - Passei na promise');
    }, time);
  });
}

/* waitThere('Is that a Bear?', handleGenerateRandom(1, 3))
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
 */

/* 
  Promise.all -> Resolve um array de promises na ordem enviada

  Promise.race -> Retorna o valor da primeira promise resolvida do array de promises

  Promise.resolve -> Entrega promessa já resolvida

  Promise.reject -> Entrega promessa já rejeitada
*/

const promises = [
  // 'Primeiro valor',
  waitThere('Promise 1', handleGenerateRandom(1, 5)),
  waitThere('Promise 2', handleGenerateRandom(1, 5)),
  waitThere('Promise 3', handleGenerateRandom(1, 5)),
  // waitThere(1000, 1000),
  // 'Outro valor'
];

/* Promise.all(promises)
  .then(value => {
    console.log(value);
  })
  .catch(err => {
    console.log('Error: ' + err);
  }) */

/* Promise.race(promises)
  .then(value => {
    console.log(value);
  })
  .catch(err => {
    console.log('Error: ' + err);
  }) */

function downloadPage() {
  const onCache = true;
  if(onCache) {
    // return Promise.resolve('Página em cache.');
    return Promise.reject('Página em cache.');
  } else {
    return waitThere('Baixei a página.', 3000);
  }
}

downloadPage()
  .then(pageData => {
    console.log(pageData);
  })
  .catch(err => {
    console.log('Error: ' + err);
  })