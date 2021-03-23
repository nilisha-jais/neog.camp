var readlineSync = require("readline-sync");
var chalk = require("chalk");

const username = readlineSync.question("Your name please? ");
console.log(chalk.red.bold("Hello " + username));
console.log("\nWelcome to " + chalk.underline("THE PERSONAL QUIZ ")+" by Nilisha ");

function play(ques, options, ans)
{
  console.log(chalk.yellow("\n"+ques));
  for(let i=0; i<options.length;i++)
    console.log(chalk.magenta(i+1 + ". " + options[i]));
  let guess = readlineSync.question(chalk.rgb(0,191,255)("Enter the correct option: "));

  if(guess === ans )
  {
    score++;
    console.log(chalk.green("Correct answer"));
  }
  else{
    console.log(chalk.red("Wrong answer"));
  }
}

let questions = [{
  ques: "My favourite food?",
  options: ["Burger", "Platter", "Fries", "Pizza"],
  ans: "4"
},{
  ques: "My favourite color?",
  options: ["Green", "Orange", "Pink", "Red"],
  ans: "2"
},{
  ques: "Music I love to listen?",
  options: ["English", "Dj", "Romantic", "Pop"],
  ans: "3"
},{
  ques: "Do I love cats?",
  options: ["Yes", "No","Maybe"],
  ans: "1"
},{
  ques: "Favourite fruit?",
  options: ["Cherry", "orange", "Guava", "Berries"],
  ans: "4"
},{
  ques: "I am crazy for?",
  options: ["Coding", "Treking", "Travelling", "Eating"],
  ans: "1"
},]

let highscorers = [{
  name: "Nilisa",
  score:6
},
{
  name: "User 1",
  score:5
}
]

let i=0, attempted=0, score=0;
do{
  play(questions[i].ques, questions[i].options, questions[i].ans);
  i++;
  attempted++;
  let user = readlineSync.question("Press enter key to continue or 'y' to exit...");
  if(user=="y")
    break;
}
while(i<questions.length)

console.log(chalk.inverse("Congrats! You completed the quiz.\n"))
console.log(chalk.bgRed("Final score: " + score +"/"+attempted));


if(score>=highscorers[0].score){
  console.log(chalk.rgb(255,192,203).bold("Whoa!! you got a high score"));
  console.log("To get your name added to Top Scorers list, send me a screenshot");
}

console.log(chalk.bold("\nHere are the top scorers so far:"));
for(let i=0; i<highscorers.length; i++)
{
  console.log(">" + highscorers[i].name + ": " + highscorers[i].score);  
}
