const request = obj => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method , obj.url, true);
    xhr.send();
    xhr.addEventListener('load', () => {
      if(xhr.status >= 200 && xhr.status <300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  })
};

document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();
  
  if(tag === 'a') {
    e.preventDefault();
    loadPage(el);
  }
});

async function loadPage(el) {
  const href = el.getAttribute('href');

  const settingsObj = {
    method: 'GET',
    url: href
  };

  try {
    const response = await request(settingsObj);
    loadResult(response);
  } catch (err) {
    console.log('Error: ' + err);
  }
}

function loadResult(response) {
  const result = document.querySelector('.resultado');
  result.innerHTML = response;
}

// Fetch retorna uma promise
fetch('./assets/pages/page1.html')
  .then(response => {
    if(response.status !== 200) throw new Error('Error 404');
    return response.text(); // Retorna outra promise, sendo obrigatorio outro then
  })
  .then(response => {
    console.log(response); // Agora posso ler a resposta
  })
  .catch(err => {
    console.log('Error: ' + err);
  });