var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

/*examples of chalk module*/
console.log( chalk.blue('This is blue text'));
console.log(chalk.blue.bgRed.bold('Hello World!') );
console.log(  chalk.cyan('I am a green line ' + chalk.magenta('with a blue substring') + ' that becomes green again!')  );

/*practice with pulling out items in an array*/
var evens = [2,4,6,8,10,12,14,16,18,20];
console.log(evens);
console.log(chalk.magenta(evens[1]));

/*distinguishing between evens and odds in an array*/
for(var i = 0; i < 10; i++){
  if(i%2 === 0){
    console.log(chalk.yellow(i));
  }else{
    console.log(chalk.cyan(i));
  }
}
for(var j = 0;j < evens.length; j++){
console.log('evens -> ' + evens[j]);
}

/*simple program prompting user for numbers to be used in array.
 *while loop continues prompting user until they hit q.
 *for loop allows us to find sum of user array.*/
var numbers = [];
var response = prompt('Enter a number or (q)uit. ');
while(response != 'q'){
  response = parseInt(response);
  numbers.push(response);
  response = prompt('Enter a number or (q)uit. ');
}

console.log(numbers);

var sum = 0;

for(var k = 0; k < numbers.length; k ++ ){
  sum = sum + numbers[k];
  /*can also be written as sum += numbers[k]*/
}
console.log('Your numbers add up to '+ sum + '.');
