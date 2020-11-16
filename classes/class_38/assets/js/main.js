function main() {
  //Retorna uma NodeList
  const paragraphs = document.querySelector('.paragraphs'); 

  //Retorna todos os ps dentro da NodeList acima
  const ps = paragraphs.querySelectorAll('p');

  //Retorna toda estilização do body
  const bodyStyles = getComputedStyle(document.body);

  //Pega da estilização do body o background color
  const backgroundColorBody = bodyStyles.backgroundColor;
  
  //Muda a cor do background e texto de todos os ps 
  for(let p of ps) {
    p.style.color = '#FFF';
    p.style.backgroundColor = backgroundColorBody;
  }
}

main();