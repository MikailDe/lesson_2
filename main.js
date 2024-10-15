function printType(variable) {
  console.log(`Тип переменной: ${typeof variable}`);
}

const number = 42;
const string = 'Hello world';
const boolean = true;
const object = {
  name: 'Mikail',
  age: 21,
};
const array = [1, 2, 3, 4, 5];

printType(number);
printType(string);
printType(boolean);
printType(object);
printType(array);
