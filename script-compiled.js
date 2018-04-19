//Zadanie 1
function sayHelloTo() {
	const Hello = 'Hello';
	const World = 'World';
	console.log(`${Hello} ${World}`);
};
sayHelloTo();
//zadanie 2
function Multiply() {
	const a = [2];
	const numbers = a.map( x=> {return x + 1});
	console.log(`${numbers}`);
};
Multiply();

function add() {
const add = (a,b) => a+b;
console.log(add());
}
add(1,3);