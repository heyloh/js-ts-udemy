function sum(x, y) {
  if(typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('X e Y precisam ser números.');
  }
  return x + y;
}

try {
  console.log(sum(1,2));
  console.log(sum('1',2));
} catch(err) {
  // Executado quando há erros
  // console.log(err);
  console.log('Deu erro amigão...');
} finally {
  // Sempre será executado
  console.log('Enfim, sempre sou executado...');
}