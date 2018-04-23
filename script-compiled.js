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

//zadanie 3
function add() {
const add = (a,b,c,d) => (a+b+c+d)/4;	
console.log(add(1,3,6,6));
}
add();


//zadanie 4

function checkParams(...params) {
    const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]
    console.log(grades); 
}
checkParams();
//zadanie 5
var array = [1, 4, 'Iwona', false, 'Nowak'];
const [ , ,third, , fifth] = array;
console.log(third, fifth);