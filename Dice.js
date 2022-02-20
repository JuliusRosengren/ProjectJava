let Money = 100;
let TimesWon = 0;
let TimesLost = 0; 

let MoneyText = document.querySelector(".Money");
let TimesWonText = document.querySelector(".TimesWon")
let TimesLostText = document.querySelector(".TimesLost")


let images = ["Extra/dice-01.svg",
"Extra/dice-02.svg",
"Extra/dice-03.svg",
"Extra/dice-04.svg",
"Extra/dice-05.svg",
"Extra/dice-06.svg"];
let dice = document.querySelectorAll("img");

function roll(){
    dice.forEach((die) => {
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random()*6);
        let dieTwoValue = Math.floor(Math.random()*6);
        console.log(dieOneValue,dieTwoValue);
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#total").innerHTML = "Your roll is " + ( (dieOneValue +1) + (dieTwoValue + 1) );

          if((dieOneValue +1) + (dieTwoValue + 1) >= 6) {
              Money *= 4;
              TimesWon += 1;
              MoneyText.innerHTML = `Money: ${Money} $`; 
              TimesWonText.innerHTML = `TimesWon: ${TimesWon}`

          }
          else if ((dieOneValue +1) + (dieTwoValue + 1) <= 5) {
              Money *= 0.5;
              TimesLost += 1;
              MoneyText.innerHTML = `Money: ${Money} $`; 
              TimesLostText.innerHTML = `TimesLost: ${TimesLost}`
          }
    },
    1000
    );
}
roll();