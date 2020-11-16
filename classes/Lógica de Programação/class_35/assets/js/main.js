function main() {
  const elements = [
    { tag: 'p', text: 'Era uma vez...' },
    { tag: 'div', text: 'Um mexilhão feio...' },
    { tag: 'footer', text: 'Ele era tão feio...' },
    { tag: 'section', text: 'Que todo mundo morreu.' },
  ];
  const container = document.querySelector('.container');
  const div = document.createElement('div');

  for (let i = 0; i < elements.length; i++) {
    const { tag, text } = elements[i];
    const element = document.createElement(tag);
    element.innerText = text;
    div.appendChild(element);
  }

  container.appendChild(div);
}

main();