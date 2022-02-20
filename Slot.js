let Money = 100;
let TimesWon = 0;
let TimesLost = 0; 

let MoneyText = document.querySelector(".Money");
let TimesWonText = document.querySelector(".TimesWon")
let TimesLostText = document.querySelector(".TimesLost")


let images = ["Extra/Orange.png",
"Extra/Apple.png",
"Extra/Pear.png",
"Extra/Bar.png",
"Extra/Cherry.png",
"Extra/Coin.png"];
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
        let dieThreeValue = Math.floor(Math.random()*6);
        console.log(dieOneValue,dieTwoValue);
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#die-3").setAttribute("src", images[dieThreeValue]);
        
          if((dieOneValue + 1) == (dieTwoValue + 1) == (dieThreeValue + 1)) {
              document.querySelector("#total").innerHTML = "Win";
              Money *= 1000;
              TimesWon += 1;
              MoneyText.innerHTML = `Money: ${Money} $`; 
              TimesWonText.innerHTML = `TimesWon: ${TimesWon}`
          }
          else if((dieOneValue + 1) == (dieTwoValue + 1)) {
            document.querySelector("#total").innerHTML = "Semi-Win";
            Money *= 10;
            TimesWon += 1;
            MoneyText.innerHTML = `Money: ${Money} $`; 
            TimesWonText.innerHTML = `TimesWon: ${TimesWon}`
        }
        else if((dieTwoValue + 1) == (dieThreeValue + 1)) {
            document.querySelector("#total").innerHTML = "Semi-Win";
            Money *= 5;
            TimesWon += 1;
            MoneyText.innerHTML = `Money: ${Money} $`; 
            TimesWonText.innerHTML = `TimesWon: ${TimesWon}`
        }
        else if((dieOneValue + 1) == (dieThreeValue + 1)) {
            document.querySelector("#total").innerHTML = "Semi-Win";
            Money *= 5;
            TimesWon += 1;
            MoneyText.innerHTML = `Money: ${Money} $`; 
            TimesWonText.innerHTML = `TimesWon: ${TimesWon}`
        }
          else {
              document.querySelector("#total").innerHTML = "Lose";
              Money *= 0.1;
              TimesLost += 1;
              MoneyText.innerHTML = `Money: ${Money} $`; 
              TimesLostText.innerHTML = `TimesLost: ${TimesLost}` 
          }
    },
    1500
    );
}
roll();