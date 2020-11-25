class CPF {
  constructor(sentCpf) {
    this.cleanCpf = sentCpf.replace(/\D+/g, '');
  }

  validate() {
    if(typeof this.cleanCpf === 'undefined') return false;
    if(this.cleanCpf.length !== 11) return false;
    if(this.isSequencia()) return false;
    
    const parcialCpf = this.cleanCpf.slice(0, -2);
    const digitOne = this.createDigit(parcialCpf);
    const digitTwo = this.createDigit(parcialCpf + digitOne);

    const newCpf = parcialCpf + digitOne + digitTwo;
    
    return newCpf === this.cleanCpf;
  }

  createDigit(parcialCpf) {
    const cpfArray = Array.from(parcialCpf);

    let counter = cpfArray.length + 1;
  
    const total = cpfArray.reduce((acc, value) => {
      acc += (Number(value) * counter);
      counter -= 1;
      return acc;
    }, 0);
  
    const digit = 11 - (total % 11);
    return digit > 9 ? '0' : String(digit);
  }

  isSequencia() {
    return this.cleanCpf[0].repeat(this.cleanCpf.length) === this.cleanCpf;
  }
}

const cpf = new CPF('705.484.450-52');

if(cpf.validate()) {
  console.log('Cpf válido.');
} else {
  console.log('Cpf inválido.');
}