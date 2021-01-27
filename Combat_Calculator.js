//Variables used in the calculator that will be taken from the user's input on the website
let button = document.getElementById("calculateCombat");
let shiNumA = document.getElementById("attackerShips");
let shiNumB = document.getElementById("defenderShips");
let shiWeapA = document.getElementById("attackerWeapon");
let shiWeapB = document.getElementById("defenderWeapon");
let combatLog = document.getElementById("combatLog");
let combatInfo = ""
let combatInput = document.getElementsByClassName("combatInput");

//Combat Calculations, Don't forget the industry on the planet generates extra troops per hour!

const combatCalculator = (shipNumA, shipNumB, shipWeapA, shipWeapB) => {
  while (shipNumA > 0 && shipNumB > 0){
    shipNumA = shipNumA - shipWeapB - 1;
    if(shipNumA <= 0){
      shipNumB = shipNumB
    }else{
      shipNumB = shipNumB - (shipWeapA)
    }
  }
  if(shipNumA <= 0){
    if(shipNumB < 0){shipNumB = 0}
    return `The defender wins with ${shipNumB} ships left.`
  }else if(shipNumB <= 0){
    if(shipNumA < 0){shipNumA = 0}
    return `The attacker wins with ${shipNumA} ships left.`
  }
  else {
    if(shipNumA < 0){shipNumA = 0}
    return `The attacker wins with ${shipNumA} ships left.` }
}

// click Events
button.addEventListener("click", function updateInfo(event){
  event.preventDefault();
  combatLog.innerHTML = "Don't forget that the planet will generate ships per hour based on the industry and their manufacturing level!" + "</br>" + combatCalculator(parseInt(shiNumA.value), parseInt(shiNumB.value), parseInt(shiWeapA.value), parseInt(shiWeapB.value));
});
