let Money = 100;
let TimesWon = 0;
let TimesLost = 0; 
let Amount = 0;
let Odd = 0;
let Even = 0; 
let Zero = 0;


let MoneyText = document.querySelector(".Money");
let TimesWonText = document.querySelector(".TimesWon");
let TimesLostText = document.querySelector(".TimesLost");

let images = ["Extra/wheel.png"];
let wheel = document.querySelectorAll("img");

function spin(){
    wheel.forEach((die) => {
        die.classList.add("shake");
    });
    setTimeout(function(){
        wheel.forEach(function(die){
            die.classList.remove("shake");
        });
        let spinOneValue = Math.floor(Math.random()*37);
        document.querySelector("#total").innerHTML = "Your roll is " + (spinOneValue);

        if(spinOneValue%2 == 0) {
            Money *= 2;
            TimesWon += 1;
            MoneyText.innerHTML = `Money: ${Money} $`; 
            TimesWonText.innerHTML = `TimesWon: ${TimesWon}`
        }
        else {
            Money *= 0.5;
            TimesLost += 1;
            MoneyText.innerHTML = `Money: ${Money} $`; 
            TimesLostText.innerHTML = `TimesLost: ${TimesLost}`
        }
    },
    3000
    );
}
spin();