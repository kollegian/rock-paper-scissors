let playerSelection="";
let computerSelection="";
let choices=["rock", "paper", "scissors"];
let playwins=0;
let compwins=0;
let totalNumberofGames=0;
if(compwins==5){
    alert("Bummer, computer won");
    playwins=0;
    compwins=0;
    totalNumberofGames=0;
    }
if(playwins==5){
        alert("YAY I know you would win");
        playwins=0;
        compwins=0;
        totalNumberofGames=0;
    }


const newGame=document.querySelector("#new-game");
newGame.addEventListener("click", ()=>{
    playwins=0;
    compwins=0;
    totalNumberofGames=0;
});

const playRock=document.querySelector("#rock");
playRock.addEventListener("click", ()=>{
    playerSelection="rock";
    alert(playerSelection);
    computerSelection=computerplay();
    playround(playerSelection, computerSelection);});

const playPaper=document.querySelector("#paper");
const playScissors=document.querySelector("#scissors");



playPaper.addEventListener("click", ()=> {
    playerSelection="paper";
    computerSelection=computerplay();
    playround(playerSelection, computerSelection);
});

playScissors.addEventListener("click", ()=> {
    playerSelection="scissors";
    computerSelection=computerplay();
    playround(playerSelection, computerSelection);
});

const resulttotal=document.createElement("p");
resulttotal.textContent="Total number of games : "+totalNumberofGames
                        +" total number of wins: "+playwins;
document.querySelector("#result").appendChild(resulttotal);
function computerplay(){
    let a=Math.floor(Math.random()*3);
    alert(choices[a]);
    return choices[a];
}
function playround(playerSelection, computerSelection){
    totalNumberofGames++;    
    if(playerSelection==computerSelection){
        alert("draw");        
    } else if((playerSelection=="rock" && computerSelection=="scissors") || (playerSelection=="scissors" && computerSelection=="paper")
    || playerSelection=="paper" && computerSelection=="rock"){
        playwins+=1;
        alert("you win");
    } else {
        alert("compwins");
        compwins+=1; }
    resulttotal.parentNode.removeChild(resulttotal);
    
    resulttotal.textContent="Total number of games : "+totalNumberofGames
                        +" total number of wins: "+playwins;
    document.querySelector("#result").appendChild(resulttotal);
    check();
}
function check(){
    if(compwins==5){
        alert("Bummer, computer won");
        playwins=0;
        compwins=0;
        totalNumberofGames=0;
        }
    if(playwins==5){
            alert("YAY I know you would win");
            playwins=0;
            compwins=0;
            totalNumberofGames=0;
        }
}



