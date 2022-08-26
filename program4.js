//JAVA SCRIPT
//npm i prompt-sync

const prompt = require("prompt-sync")();
var a1 = new Array()
l = parseInt(prompt("Enter the list length  "));
for (let i = 0; i < l; i++) {
	a1[i]=parseInt(prompt("Enter the list element "))
}
var dict = {}

for (let i = 1; i < 9; i++) {
	let k=0;
	for (let j = 0; j < l; j++) {
		if(a1[j]%i==0){
			k++;
		}
	}
	dict[i] = k
}

console.log(dict);
