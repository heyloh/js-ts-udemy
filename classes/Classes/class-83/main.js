class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if(this.ligado){
      console.log(this.nome + ' já está ligado.');
      return;
    } 
    this.ligado = true;
  }

  desligar() {
    if(!this.ligado) {
      console.log(this.nome + ' já está desligado.');
      return;
    }
    this.ligado = false;
  }
}

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor) {
    super(nome);
    this.cor = cor;
  }
}

const d1 = new Smartphone('Moto G5', 'Preto');

d1.ligar();
d1.desligar();
console.log(d1);
