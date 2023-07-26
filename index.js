const cities = ["Москва", "Токио", "Анкара", "Сеул"];
const temperatures = [];

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const div = document.querySelector('.main');
const result = document.createElement('ul');
const max = document.getElementById('max');
const min = document.getElementById('min');

div.append(result);


function enterAvalue() {
  for (let i = 0; i < cities.length; i++) {
    let temperature = window.prompt(`Введите температуру в городе ${cities[i]}`);
    temperatures.push(Number(temperature));
  }
  console.log(temperatures);
}


function show() {
  for (let i = 0; i < cities.length; i++) {      //&& i < temperatures.length
    const li = document.createElement('li');
    li.textContent = (`В городе ${cities[i]} температура воздуха ${temperatures[i]} - °С`);
    result.append(li);
  }
  let maxTemperature = Math.max.apply(Math, temperatures);
  let minTemperature = Math.min.apply(Math, temperatures);
  max.textContent = (`Максимальная температура - ${maxTemperature} °С`);
  min.textContent = (`Минимальная температура - ${minTemperature} °С`)
  result.appendChild(li);
}


button1.addEventListener('click', enterAvalue);
button2.addEventListener('click', show);

/* Варианты создания одного массива из двух других

let array = [];

function show() {
  for (let i = 0; i < cities.length && i < temperatures.length; i++) {
    array[i] = [cities[i], temperatures[i]];
  }
  console.log(array);
}

function show() {
  array = cities.map((item, i) => [item, [temperatures[i]]]);          
  console.log(array);                                                        
}
*/