let userScore =0;
let compScore =0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const result = document.querySelector("#result");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice =()=>{
    const options= ["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}
 const drawGame =(userScore, compScore)=>{
    console.log("Game was draw");
    result.style.display="block";
    msg.style.backgroundColor= "#081b31";
    if((userScore===0 && compScore===0 )|| userScore===compScore){
        result.innerText = "No one win 😁😁";
        result.style.backgroundColor ="#081b31";
    }
    else if(userScore>compScore){
        result.innerText = "Congrats, You win.";
        result.style.backgroundColor ="green";
    }
    else{
        result.innerText = "Computer win.";
        result.style.backgroundColor ="red";
    }
    msg.innerText = "Game was draw. Play again"
 }
 const resultShow=(userScore, compScore)=>{
    if(userScore>0 || compScore>0){
        result.style.display="none";
    }
 }
 const ShowWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win!");
        msg.innerText = `You win! Your ${userChoice} beat ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lose!");
        msg.innerText = `You lose! ${compChoice} beat Your ${userChoice}`;
        msg.style.backgroundColor="Red";
    }
    resultShow(userScore, compScore);
 }
const playGame= (userChoice) =>{
   console.log("user choice = ", userChoice);
   const compChoice = genCompChoice();
   console.log("comp choice = ", compChoice);

   if(userChoice=== compChoice){
    //Draw Game
    drawGame(userScore, compScore);
   }
   else{
    let userWin= true;
    if(userChoice==="rock"){
        userWin = compChoice=== "paper"? false: true;
    }
    else if(userChoice==="paper"){
      userWin= compChoice==="scissors"? false : true;
    }else{
        userWin = compChoice==="rock"? false:true;
    }
    ShowWinner(userWin, userChoice, compChoice);
   }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})