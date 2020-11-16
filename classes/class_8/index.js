const name = "Lohana";
const surname = "Torres";
const age = 19;
const weight = 70;
const height = 1.78;
let imc = weight / (height * height);
let birthyear = 2020 - age;

console.log(`${name} ${surname} tem ${age} anos, nasceu em ${birthyear}, pesa ${weight} kg, tem ${height} m de altura
 e seu IMC é de ${imc}.`);