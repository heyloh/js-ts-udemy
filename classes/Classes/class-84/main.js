class ControleRemoto {
  constructor (tv) {
    this.tv = tv;
    this.volume = 0;
  }

  // Métodos de instância -> a instância os chama
  aumentarVolume() {
    this.volume += 2;
  }

  diminuirVolume() {
    this.volume -= 2;
  }

  // Métodos de classe/estáticos -> a classe os chama
  static trocarPilhas() {
    console.log('Pilhas trocadas...');
  }
}

const controle1 = new ControleRemoto('LG TV');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.diminuirVolume();

// controle1.trocarPilhas(); -> não funciona
ControleRemoto.trocarPilhas(); // estático

console.log(controle1);