//JAVA SCRIPT
//npm i prompt-sync

const prompt = require("prompt-sync")();
var a;
let j=1;
var a1 = new Array()
a = parseInt(prompt("Enter a number"));
for (let i = 0; i < a; i++) {
	
	a1[i]=j;
	j+=2;
  }

var a2 = a1.join(', ');
console.log(a2);