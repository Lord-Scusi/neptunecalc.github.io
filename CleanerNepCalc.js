//Class for the players, extend for each new player, includes functions
class Players{
    constructor(){
    this._levels = {
        banking: 1,
        experimentation: 1,
        terraforming: 1,
        manufacturing: 1,
		weapons: 1,
		hyperspace: 1,
		scanning: 1
    }
    this._resources = {
        money: 500,
		ships: 60,
        planets: 6,
        carriers: 1
    }
    this._miscInfo = {
        averagePlanetResources: 25,
    	totalScience: 10,
    	totalIndustry: 5,
        totalEconomy: 5,
        warpGates: 0
    }
}
    get banking() {
        return this._levels.banking;
    }
    set banking(num) {
        if (typeof num === "number"){
            this._levels.banking = num;
        }
    }
    get experimentation() {
        return this._levels.experimentation;
    }
    set experimentation(num) {
        if (typeof num === "number"){
            this._levels.experimentation = num;
        }
    }
    get terraforming() {
        return this._levels.terraforming;
    }
    set terraforming(num) {
        if (typeof num === "number"){
            this._levels.terraforming = num;
        }
    }
    get manufacturing() {
        return this._levels.manufacturing;
    }
    set manufacturing(num) {
        if (typeof num === "number"){
            this._levels.manufacturing = num;
        }
    }
    get weapons() {
        return this._levels.weapons;
    }
    set weapons(num) {
        if (typeof num === "number"){
            this._levels.weapons = num;
        }
    }
    get hyperspace() {
        return this._levels.hyperspace;
    }
    set hyperspace(num) {
        if (typeof num === "number"){
            this._levels.hyperspace = num;
        }
    }
    get scanning() {
        return this._levels.scanning;
    }
    set scanning(num) {
        if (typeof num === "number"){
            this._levels.scanning = num;
        }
    }
    get money() {
        return this._resources.money;
    }
    set money(num) {
        if (typeof num === "number"){
            this._levels.money = num;
        }
    }
    get ships() {
        return this._resources.ships;
    }
    set ships(num) {
        if (typeof num === "number"){
            this._resources.ships = num;
        }
    }
    get planets() {
        return this._resources.planets;
    }
    set planets(num) {
        if (typeof num === "number"){
            this._resources.planets = num;
        }
    }
    get carriers() {
        return this._resources.carriers;
    }
    set carriers(num) {
        if (typeof num === "number"){
            this._resources.carriers = num;
        }
    }
    get averagePlanet_resources(){
        return this._miscInfo.averagePlanetResources;
    }
    set averagePlanet_resources(num){
        if (typeof num === "number"){
            this._miscInfo.averagePlanetResources = num;
        }
    }
    get totalEconomy(){
        return this._miscInfo.totalEconomy;
    }
    set totalEconomy(num){
        if (typeof num === "number"){
            this._miscInfo.totalEconomy = num;
        }
    }
    get totalIndustry(){
        return this._miscInfo.totalIndustry;
    }
    set totalIndustry(num){
        if (typeof num === "number"){
            this._miscInfo.totalIndustry = num;
        }
    }
    get totalScience(){
        return this._miscInfo.totalScience;
    }
    set totalScience(num){
        if (typeof num === "number"){
            this._miscInfo.totalScience = num;
        }
    }
    get warpGates(){
        return this._miscInfo.warpGates;
    }
    set warpGates(num){
        if (typeof num === "number"){
            this._miscInfo.warpGates = num;
        }
    }
   levelEfficiency(){
    let experimentationEfficiency = (((this.experimentation + 1) * 72) / (this.experimentation * 72) * 100).toFixed(3);
    let bankingEfficiency = (((this.banking + 1) * 75) / (this.banking * 75) * 100).toFixed(3);
    let terraformingEfficiency = ((((this.terraforming + 1) * 5) + this.averagePlanet_resources) / (((this.terraforming + 1) * 5) + this.averagePlanet_resources) * 100).toFixed(3);
    let manufacturingEfficiency = ((this.totalIndustry * (this.manufacturing + 6)) / ((this.totalIndustry) * (this.manufacturing + 5)) * 100).toFixed(3);
    let hyperspaceEfficiency = ((this.hyperspace + 4) / (this.hyperspace + 3) * 100).toFixed(3);
    let scanningEfficiency = ((this.scanning + 3) / (this.scanning + 2) * 100).toFixed(3);
    let weaponsEfficiency = (((this.weapons + 1) * this.ships) / (this.weapons * this.ships) * 100).toFixed(3);
       return `Here are the efficiency levels for the next level of each technology.
       <br/>
       Experimentation ${experimentationEfficiency}%
       <br/>
       Banking ${bankingEfficiency}%
       <br/>
       Terraforming ${terraformingEfficiency}%
       <br/>
       Manufacturing ${manufacturingEfficiency}%
       <br/>
       Hyperspace ${hyperspaceEfficiency}% Anything over level 4 is usually excessive.
       <br/>
       Scanning ${scanningEfficiency}% Anything over level 4 is usually excessive.
       <br/>
       Weapons ${weaponsEfficiency}%`
   }
   calcWorthOfEmpire(){
    let scienceSpent = 0
    let industrySpent = 0
    let economySpent = 0
    let techSpent = 144*(this.banking+this.experimentation+this.hyperspace+this.manufacturing+this.scanning+this.weapons+this.terraforming)
    for(let i = 0; i <= this.totalScience; i++){
        scienceSpent = scienceSpent + (((4000)/(((this.terraforming*5)+25)))*i)
        }
    for(let i = 0; i <= this.totalIndustry; i++){
        industrySpent = industrySpent + (((1000)/(((this.terraforming*5)+25)))*i)
        }
    for(let i = 0; i <= this.totalEconomy; i++){
        economySpent = economySpent + (((500)/(((this.terraforming*5)+25)))*i)
        }
    return scienceSpent+industrySpent+economySpent+techSpent;
        }
}
const player = new Players();
const enemy = new Players();

//Grabs the inputs from the HTML file and assigns them to the class object variables for the functions to run
let calculateTradeCost = document.getElementById("calculateTradeCost");
let calculateStrength = document.getElementById("calculateStrength");
let calculateEfficiency = document.getElementById("calculateEfficiency");
let infoLog = document.getElementById("infoLog");
let techTradeCostLog = document.getElementById("techTradeCostLog");
let tradeTechLevel = document.getElementById("tradeTechLevel");
let receiverTechLevel = document.getElementById("receiverTechLevel");
let currencyLog = document.getElementById("currencyLog");
let playerBankingLevel = document.getElementById("playerBankingLevel");
let enemyBankingLevel = document.getElementById("enemyBankingLevel");
let playerExperimentationLevel = document.getElementById("playerExperimentationLevel");
let enemyExperimentationLevel = document.getElementById("enemyExperimentationLevel");
let playerTerraformingLevel = document.getElementById("playerTerraformingLevel");
let enemyTerraformingLevel = document.getElementById("enemyTerraformingLevel");
let playerManufacturingLevel = document.getElementById("playerManufacturingLevel");
let enemyManufacturingLevel = document.getElementById("enemyManufacturingLevel");
let playerWeaponsLevel = document.getElementById("playerWeaponsLevel");
let enemyWeaponsLevel = document.getElementById("enemyWeaponsLevel");
let playerHyperspaceLevel = document.getElementById("playerHyperspaceLevel");
let enemyHyperspaceLevel = document.getElementById("enemyHyperspaceLevel");
let playerScanningLevel = document.getElementById("playerScanningLevel");
let enemyScanningLevel = document.getElementById("enemyScanningLevel");
let playerTotalMoney = document.getElementById("playerTotalMoney");
let enemyTotalMoney = document.getElementById("enemyTotalMoney");
let playerTotalShips = document.getElementById("playerTotalShips");
let enemyTotalShips = document.getElementById("enemyTotalShips");
let playerTotalCarriers = document.getElementById("playerTotalCarriers");
let enemyTotalCarriers = document.getElementById("enemyTotalCarriers");
let playerTotalPlanets = document.getElementById("playerTotalPlanets")
let playerTotalScience = document.getElementById("playerTotalScience");
let playerTotalEconomy = document.getElementById("playerTotalEconomy");
let playerTotalIndustry = document.getElementById("playerTotalIndustry");
let enemyTotalScience = document.getElementById("enemyTotalScience");
let enemyTotalEconomy = document.getElementById("enemyTotalEconomy");
let enemyTotalIndustry = document.getElementById("enemyTotalIndustry");
let playerWarpgates = document.getElementById("playerWarpgates");
let enemyWarpgates = document.getElementById("enemyWarpgates");
let creditValue = document.getElementById("creditValue");


//Compare the economy of two players.
const compareCreditWorth = (credits) => {
    player.totalEconomy = parseInt(playerTotalEconomy.value);
    player.totalIndustry = parseInt(playerTotalIndustry.value);
    player.totalScience = parseInt(playerTotalScience.value);
    enemy.totalEconomy = parseInt(enemyTotalEconomy.value);
    enemy.totalIndustry = parseInt(enemyTotalIndustry.value);
    enemy.totalScience = parseInt(enemyTotalScience.value);
    console.log(player.totalScience)
    let playerUpgrades = player.totalEconomy + player.totalIndustry + player.totalScience
    let enemyUpgrades = enemy.totalEconomy + enemy.totalIndustry + enemy.totalScience
    let playerPurchasingPower = credits*(1+(playerUpgrades/player.planets));
    let enemyPurchasingPower = credits*(1+(enemyUpgrades/enemy.planets));
    let enemyToPlayer =  (credits / (playerPurchasingPower / enemyPurchasingPower)).toFixed(2);
    let playerToEnemy =  (credits * (playerPurchasingPower / enemyPurchasingPower)).toFixed(2);
    return `${credits} of your Alpha credits is equal to ${playerToEnemy} of their Beta credits. And ${credits} of their Beta credits is equal to ${enemyToPlayer} of your Alpha credits.`;
}
//Combat Calculations, Don't forget the industry on the planet generates extra troops per hour!
// Combat Calculator noved to Combat_Calculator.js file

//Calculate the cost of a technology trade.
const calcPriceForTech = (techLevel, previousTechLevel) => {
    let scienceCost = (techLevel - previousTechLevel) * 144;
    let enemyToPlayer = scienceCost*((techLevel)/2);
    return `The fair trade value is ${enemyToPlayer.toFixed(0)} credits, excluding the trading fees.`
}
//Compare Empire Worth
const compareEmpireWorth = () => {
    let percentage = (player.calcWorthOfEmpire()/enemy.calcWorthOfEmpire())*100
    return `Your empire is worth ${percentage.toFixed(2)}% as much as your enemy.`
}
//Calculate your effective strength against the enemy.
    //Compares the vallues
const showStrength = () => {
    player.totalIndustry= parseInt(playerTotalIndustry.value);
    player.manufacturing= parseInt(playerManufacturingLevel.value);
    enemy.totalIndustry= parseInt(enemyTotalIndustry.value);
    enemy.manufacturing= parseInt(enemyManufacturingLevel.value);
    player.carriers= parseInt(playerTotalCarriers.value);
    player.warpGates= parseInt(playerWarpgates.value);
    enemy.carriers= parseInt(enemyTotalCarriers.value);
    enemy.warpGates= parseInt(enemyWarpgates.value);
    player.ships= parseInt(playerTotalShips.value);
    player.weapons= parseInt(playerWeaponsLevel.value);
    enemy.ships= parseInt(enemyTotalShips.value);
    enemy.weapons= parseInt(enemyWeaponsLevel.value);
    let playerProductionRate = player.totalIndustry*(player.manufacturing+5);
    let enemyProductionRate = enemy.totalIndustry*(enemy.manufacturing+5);
    let playerCarriers = player.carriers+((player.warpGates-1)*3);
    let enemyCarriers = enemy.carriers+((enemy.warpGates-1)*3);
    let playerArmyStrength = (player.ships * player.weapons);
    let enemyArmyStrength = (enemy.ships * enemy.weapons);
    return `You produce ${playerProductionRate} ships per hour, the enemy produces ${enemyProductionRate}. Your effective army strength is ${playerArmyStrength}, the enemy's is ${enemyArmyStrength}. You have ${playerCarriers} effective carriers, the enemy has ${enemyCarriers}.`
};
    //Gives a percentage of the values, 100% means same
const compareStrength = () => {
    player.totalIndustry= parseInt(playerTotalIndustry.value);
    player.manufacturing= parseInt(playerManufacturingLevel.value);
    enemy.totalIndustry= parseInt(enemyTotalIndustry.value);
    enemy.manufacturing= parseInt(enemyManufacturingLevel.value);
    player.carriers= parseInt(playerTotalCarriers.value);
    player.warpGates= parseInt(playerWarpgates.value);
    enemy.carriers= parseInt(enemyTotalCarriers.value);
    enemy.warpGates= parseInt(enemyWarpgates.value);
    player.ships= parseInt(playerTotalShips.value);
    player.weapons= parseInt(playerWeaponsLevel.value);
    enemy.ships= parseInt(enemyTotalShips.value);
    enemy.weapons= parseInt(enemyWeaponsLevel.value);
    let calcProductionRate = (((player.totalIndustry*(player.manufacturing+5))/(enemy.totalIndustry*(enemy.manufacturing+5)))*100).toFixed(2);
    let calcCarriers = (((player.carriers+player.warpGates)/(enemy.carriers+enemy.warpGates))*100).toFixed(2);
    let calcArmyStrength =(((player.ships * player.weapons)/(enemy.ships * enemy.weapons))*100).toFixed(2);
    return `You produce ships at ${calcProductionRate}% the rate of the enemy. Your army is ${calcArmyStrength}% as strong as the enemy. You have ${calcCarriers}% the effective amount of enemy carriers.`
};

//Shows the % efficiency of all the levels
/*
The original levels efficiency, deprecated in favour of real efficiency

const myLevelEfficiency = () => {
    player.experimentation = parseInt(playerExperimentationLevel.value);
    player.banking = parseInt(playerBankingLevel.value);
    player.terraforming = parseInt(playerTerraformingLevel.value);
    player.averagePlanet_resources = 25;
    player.totalIndustry = parseInt(playerTotalIndustry.value);
    player.manufacturing = parseInt(playerManufacturingLevel.value);
    player.hyperspace = parseInt(playerHyperspaceLevel.value);
    player.scanning = parseInt(playerScanningLevel.value);
    player.weapons = parseInt(playerWeaponsLevel.value);
    player.ships = parseInt(playerTotalShips.value);

    let experimentationEfficiency = (((player.experimentation + 1) * 72) / (player.experimentation * 72) * 100).toFixed(2);
    let bankingEfficiency = (((player.banking + 1) * 75) / (player.banking * 75) * 100).toFixed(3);
    let terraformingEfficiency = ((((player.terraforming + 1) * 5) + 25) / (((player.terraforming) * 5) + 25) * 100).toFixed(2);
    let manufacturingEfficiency = ((player.totalIndustry * (player.manufacturing + 6)) / ((player.totalIndustry) * (player.manufacturing + 5)) * 100).toFixed(2);
    let hyperspaceEfficiency = ((player.hyperspace + 4) / (player.hyperspace + 3) * 100).toFixed(2);
    let scanningEfficiency = ((player.scanning + 3) / (player.scanning + 2) * 100).toFixed(2);
    let weaponsEfficiency = (((player.weapons + 1) * player.ships) / (player.weapons * player.ships) * 100).toFixed(2);
       return `Here are the efficiency levels for the next level of each technology.
       <br/>
       Experimentation ${experimentationEfficiency}%
       <br/>
       Banking ${bankingEfficiency}%
       <br/>
       Terraforming ${terraformingEfficiency}%
       <br/>
       Manufacturing ${manufacturingEfficiency}%
       <br/>
       Hyperspace ${hyperspaceEfficiency}% Anything over level 4 is usually excessive.
       <br/>
       Scanning ${scanningEfficiency}% Anything over level 4 is usually excessive.
       <br/>
       Weapons ${weaponsEfficiency}%` 
}
*/

//Updated efficiency calculator, shows real values and time taken
const myLevelEfficiency = () => {
    player.experimentation = parseInt(playerExperimentationLevel.value);
    player.banking = parseInt(playerBankingLevel.value);
    player.terraforming = parseInt(playerTerraformingLevel.value);
    player.averagePlanet_resources = 25;
    player.totalIndustry = parseInt(playerTotalIndustry.value);
    player.manufacturing = parseInt(playerManufacturingLevel.value);
    player.hyperspace = parseInt(playerHyperspaceLevel.value);
    player.scanning = parseInt(playerScanningLevel.value);
    player.weapons = parseInt(playerWeaponsLevel.value);
    player.ships = parseInt(playerTotalShips.value);
    player.totalScience = parseInt(playerTotalScience.value);
    let experimentationEfficiency = (((player.experimentation + 1) * 72) - (player.experimentation * 72)).toFixed(0);
    let experimentationTime = (((player.experimentation + 1)*144)/((player.totalScience))).toFixed(0);
    let bankingEfficiency = (((player.banking + 1) * 75) - (player.banking * 75)).toFixed(0);
    let bankingTime = (((player.banking + 1)*144)/((player.totalScience))).toFixed(0);
    let terraformingEfficiency = (((((player.terraforming + 1) * 5) + 25) / (((player.terraforming) * 5) + 25))*10).toFixed(0);
    let terraformingTime = (((player.terraforming + 1)*144)/((player.totalScience))).toFixed(0);
    let manufacturingEfficiency = ((player.totalIndustry * (player.manufacturing + 6)) - ((player.totalIndustry) * (player.manufacturing + 5))).toFixed(0);
    let manufacturingTime = (((player.manufacturing + 1)*144)/((player.totalScience))).toFixed(0);
    let hyperspaceEfficiency = ((player.hyperspace + 4) - (player.hyperspace + 3)).toFixed(0);
    let hyperspaceTime = (((player.hyperspace + 1)*144)/((player.totalScience))).toFixed(0);
    let scanningEfficiency = ((player.scanning + 3) - (player.scanning + 2)).toFixed(0);
    let scanningTime = (((player.scanning + 1)*144) / ((player.totalScience))).toFixed(0);
    let weaponsEfficiency = (((player.weapons + 1) * player.ships) - (player.weapons * player.ships)).toFixed(0);
    let weaponsTime = (((player.weapons + 1)*144)/((player.totalScience))).toFixed(0);
    return `Here are the gains and time cost for the next level of each technology.
    <br/>
    Experimentation: You gain an additional ${experimentationEfficiency} science points every cycle and it will take ${experimentationTime} hours.
    <br/>
    Banking: You gain an additional ${bankingEfficiency} credits every cycle and it will take ${bankingTime} hours.
    <br/>
    Terraforming: The cost of your upgrades decrease by ${terraformingEfficiency}% and it will take ${terraformingTime} hours.
    <br/>
    Manufacturing: You will produce ${manufacturingEfficiency} extra ships per hour and it will take ${manufacturingTime} hours.
    <br/>
    Hyperspace: You will move an additional ${hyperspaceEfficiency} light year per jump and it will take ${hyperspaceTime} hours.    
    <br/>
    Scanning: You can see an additional ${scanningEfficiency} light year and it will take ${scanningTime} hours.
    <br/>
    Anything over level 4 Hyperspace and Scanning is usually excessive.
    <br/>
    Weapons: Your army will increase in power by ${weaponsEfficiency} and it will take ${weaponsTime} hours.
    <br/>`
}

//Click event to trigger the functions on button press
calculateTradeCost.addEventListener("click", findTradeValue = (event) => {
    event.preventDefault();
    let inputDialogTrade = document.getElementsByClassName("inputDialogTrade");
    techTradeCostLog.innerHTML = calcPriceForTech(parseInt(tradeTechLevel.value), parseInt(receiverTechLevel.value))  
});
calculateCurrency.addEventListener("click", findCurrencyValue = (event) => {
    event.preventDefault();
    currencyLog.innerHTML = compareCreditWorth(creditValue.value);
});
calculateStrength.addEventListener("click", findStrength = (event) =>{
    event.preventDefault();
    infoLog.innerHTML = showStrength() + "<br/>"+ compareStrength();
});
calculateEfficiency.addEventListener("click", findEfficiency = (event) =>{
    event.preventDefault();
    infoLog.innerHTML = myLevelEfficiency();
})






