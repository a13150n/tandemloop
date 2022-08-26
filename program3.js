//JAVA SCRIPT
//npm i prompt-sync

const prompt = require("prompt-sync")();
var s=1;
while(s==1){
var a;
let j=1;
var a1 = new Array()
a = parseInt(prompt("Enter a number  "));
if(a%2==0){
	a-=1
}
for (let i = 0; i < a; i++) {
	
	a1[i]=j;
	j+=2;
  }

var a2 = a1.join(', ');
console.log(a2);
j = parseInt(prompt("press enter to continue & 0 to exit "));
if(j==0){
	s=0;
}

}