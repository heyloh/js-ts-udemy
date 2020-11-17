function showHours(date) {
  if(date && !(date instanceof Date)) {
    throw new TypeError('Esperando instância de Date.');
  }

  if(!date) {
    date = new Date();
  }

  return date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
}

try {
  const date = new Date('01-01-1970 12:58:12');
  const hours = showHours(date);
  console.log(hours);
} catch(e) {
  // Tratar erro
} finally {
  console.log('Tenha um bom dia.');
}