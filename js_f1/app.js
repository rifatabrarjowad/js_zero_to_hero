//recive value using alart 


var age = prompt("tell me your name :")

console.log(age);



//recive value using nodejs funtion

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
  });