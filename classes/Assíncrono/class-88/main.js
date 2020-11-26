function handleGenerateRandom(min = 1, max = 3) {
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

async function execute() {
  try{
    const fase1 = await waitThere('Fase 1', handleGenerateRandom());
    console.log(fase1);
  
    const fase2 = await waitThere('Fase 2', handleGenerateRandom());
    console.log(fase2);
  
    const fase3 = await waitThere('Fase 3', handleGenerateRandom());
    console.log(fase3);

    console.log('Terminamos na: ', fase3);

  } catch (err) {
    console.log('Error: ', err);
  } 
}

/*
  Estados da Promise
  
  Pending -> Quando não usamos await ou then e tentamos acessar o retorno da 
    Promise, ela volta como pending.

  fulfilled -> Promise resolvida

  rejected -> Promise rejeitada
*/

execute();