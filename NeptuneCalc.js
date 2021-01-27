//Player Stats
let playerStats = {
	levels: {
		banking: 1,
		experimentation: 1,
		terraforming: 1,
		manufacturing: 1,
		weapons: 1,
		hyperspace: 1,
		scanning: 1
	},
	resources: {
		money: 500,
		ships: 60,
		planets: 6
	},
	miscInfo: {
		averagePlanetResources: 25,
    	totalScience: 1,
    	totalIndustry: 5,
    	totalEconomy: 5
	}
};
//Enemy Stats
let enemyStats = {
	levels: {
		banking: 1,
		experimentation: 1,
		terraforming: 1,
		manufacturing: 1,
		weapons: 1,
		hyperspace: 1,
		scanning: 1
	},
	resources: {
		money: 500,
		ships: 10,
		planets: 5
	},
	miscInfo: {
		averagePlanetResources: 25,
    	totalScience: 5,
    	totalIndustry: 5,
    	totalEconomy: 5
	}
};
//Calculations for Tech Levels of Player
const playerExperimentationEfficiency = (Math.floor(((playerStats.levels.experimentation+1)*72)/(playerStats.levels.experimentation*72))*100) + "%";

const playerBankingEfficiency = (Math.floor(((playerStats.levels.banking+1)*75)/(playerStats.levels.banking*75))*100) + "%";

const playerTerraformingEfficiency = Math.floor((((((playerStats.levels.terraforming+1)*5)+playerStats.miscInfo.averagePlanetResources)/((playerStats.levels.terraforming+1)+playerStats.miscInfo.averagePlanetResources))*100))+"%";

const playerManufacturingEfficiency = Math.floor(((playerStats.miscInfo.totalIndustry*(playerStats.levels.manufacturing+6))/((playerStats.miscInfo.totalIndustry)*(playerStats.levels.manufacturing+5)))*100)+"%";

const playerHyperspaceEfficiency = (Math.floor((playerStats.levels.hyperspace+4)/(playerStats.levels.hyperspace+3))*100)+"%"

const playerScanningEfficiency = (Math.floor((playerStats.levels.scanning+3)/(playerStats.levels.scanning+2))*100)+"%"

const playerWeaponsEfficiency = []

//Functions to Set Values for Player
function playerScanning(value){
	playerStats.levels.scanning = value
};
function playerHyperspace(value){
	playerStats.levels.hyperspace = value
};
function playerTerraforming(value){
	playerStats.levels.terraforming = value
};
function playerExperimentation(value){
	playerStats.levels.experimentation = value
};
function playerWeapons(value){
	playerStats.levels.weapons = value
};
function playerBanking(value){
	playerStats.levels.banking = value
};
function playerManufacturing(value){
	playerStats.levels.manufacturing = value
};
function playerMoney(value){
	playerStats.resources.money = value
};
function playerShips(value){
	playerStats.resources.ships = value
};
function playerPlanets(value){
	playerStats.resources.planets = value
};
function playerAveragePlanetResources(value){
	playerStats.miscInfo.averagePlanetResources = value
};
function playerTotalScience(value){
	playerStats.miscInfo.totalScience = value
};
function playerTotalEconomy(value){
	playerStats.miscInfo.totalEconomy = value
};
function playerTotalIndustry(value){
	playerStats.miscInfo.totalIndustry = value
};
//Calculations for Tech Levels of Enemy
const enemyExperimentationEfficiency = (Math.floor(((enemyStats.levels.experimentation+1)*72)/(enemyStats.levels.experimentation*72))*100) + "%";

const enemyBankingEfficiency = (Math.floor(((enemyStats.levels.banking+1)*75)/(enemyStats.levels.banking*75))*100) + "%";

const enemyTerraformingEfficiency = Math.floor((((((enemyStats.levels.terraforming+1)*5)+enemyStats.miscInfo.averagePlanetResources)/((enemyStats.levels.terraforming+1)+enemyStats.miscInfo.averagePlanetResources))*100))+"%";

const enemyManufacturingEfficiency = Math.floor(((enemyStats.miscInfo.totalIndustry*(enemyStats.levels.manufacturing+6))/((enemyStats.miscInfo.totalIndustry)*(enemyStats.levels.manufacturing+5)))*100)+"%";

const enemyHyperspaceEfficiency = (Math.floor((enemyStats.levels.hyperspace+4)/(enemyStats.levels.hyperspace+3))*100)+"%"

const enemyScanningEfficiency = (Math.floor((enemyStats.levels.scanning+3)/(enemyStats.levels.scanning+2))*100)+"%"

const enemyWeaponsEfficiency = "TBA"

//Functions to set values for Enemy
function enemyScanning(value){
	enemyStats.levels.scanning = value
};
function enemyHyperspace(value){
	enemyStats.levels.hyperspace = value
};
function enemyTerraforming(value){
	enemyStats.levels.terraforming = value
};
function enemyExperimentation(value){
	enemyStats.levels.experimentation = value
};
function enemyWeapons(value){
	enemyStats.levels.weapons = value
};
function enemyBanking(value){
	enemyStats.levels.banking = value
};
function enemyManufacturing(value){
	enemyStats.levels.manufacturing = value
};
function enemyMoney(value){
	enemyStats.resources.money = value
};
function enemyShips(value){
	enemyStats.resources.ships = value
};
function enemyPlanets(value){
	enemyStats.resources.planets = value
};
function enemyAveragePlanetResources(value){
	enemyStats.miscInfo.averagePlanetResources = value
};
function enemyTotalScience(value){
	enemyStats.miscInfo.totalScience = value
};
function enemyTotalEconomy(value){
	enemyStats.miscInfo.totalEconomy = value
};
function enemyTotalIndustry(value){
	enemyStats.miscInfo.totalIndustry = value
};

//Combat Calculations
const combatCalculator = (shipNumA, shipNumB, shipWeapA, shipWeapB) => {
	while (shipNumA > 0 && shipNumB > 0){
	shipNumA = shipNumA - (1 + shipWeapB)
	shipNumB = shipNumB - (shipWeapA)
	}
	if (shipNumA < 1){
		console.log(`The enemy wins with ${shipNumB} ship(s) left.`)
	}else{
		console.log(`You win with ${shipNumA} ship(s) left.`)
	}
}
combatCalculator(100, 100, 1, 1)
//Economy to Science exchange rate
const playerExchange = () => ((((playerStats.levels.banking)*75)+((playerStats.miscInfo.totalEconomy)*10))+(((playerStats.levels.experimentation)*72)+((playerStats.miscInfo.totalScience)*24)));
//Same as above but for Enemy
const enemyExchange = () => ((((enemyStats.levels.banking)*75)+((enemyStats.miscInfo.totalEconomy)*10))+(((enemyStats.levels.experimentation)*72)+((enemyStats.miscInfo.totalScience)*24)));
//Player to Enemy Economy Science Exchange
const playerEnemyCalcExchange = (playerValue) => {
	return ((playerExchange() / enemyExchange()) / playerValue)
};

console.log(playerEnemyCalcExchange(1))
playerBanking(20)
enemyExperimentation(20)
console.log(playerEnemyCalcExchange(1))

//Relative Purchasing Power of Money
const calcPurchasingPower = (resource) => {
	let baseEconomy = (1/resource)
	console.log(baseEconomy)
  }
const playerPurchasingPower = (credits) =>{
	let playerTotalUpgrades = playerStats.miscInfo.totalEconomy + playerStats.miscInfo.totalIndustry + playerStats.miscInfo.totalScience;
	let playerTerraLevel = playerStats.levels.terraforming;
	let enemyTotalUpgrades = enemyStats.miscInfo.totalEconomy + enemyStats.miscInfo.totalIndustry + enemyStats.miscInfo.totalScience;
	let enemyTerraLevel = enemyStats.levels.terraforming;
	let playerExchangeRate =  (credits/(1+(1/((playerTerraLevel*5)+25)))**(playerTotalUpgrades))
	let enemyExchangeRate =  (credits/(1+(1/((enemyTerraLevel*5)+25)))**(enemyTotalUpgrades))
	let playerToEnemy =  Math.round(credits / (playerExchangeRate / enemyExchangeRate))
	let enemyToPlayer =  Math.round(credits * (playerExchangeRate / enemyExchangeRate))
	return `${credits} of your credits is equal to ${playerToEnemy} of theirs. And ${credits} of their credits is equal to ${enemyToPlayer} of yours.`
}
console.log(playerPurchasingPower(400))
//Use the science to your economy and the exchange rate calculator to accurately estimate the cost of trading a tech. Use their science output as a indicator?
const calcCostOfTech = (techlvl) =>
scienceCostOfTech = (techlvl * 144);

//Effective Force
const calcEffectiveStrength = () => {
	let playerWeapLevel;
	let playerShipNumber;
	let playerEffectiveStrength = playerWeapLevel * playerShipNumber;
}


