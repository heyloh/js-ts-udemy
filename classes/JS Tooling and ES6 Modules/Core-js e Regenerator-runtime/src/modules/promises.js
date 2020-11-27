function promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Promessa é promessa, irmão.');
      resolve();
    }, 2000);
  });
}

export default async function () {
  await promise();
  console.log('Promessa cumprida, irmã.');
}