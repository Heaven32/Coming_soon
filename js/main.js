/*********** 1 -level **********/

const battleOne = document.querySelector('.battle_one');
let round = 0;

const firstShip = {
  healthPoints: 100,
  damage: 4,
};
const secondShip = {
  healthPoints: 40,
  damage: 15,
};

battleOne.addEventListener('click', () => {
  if ((secondShip.healthPoints > 4) && (firstShip.healthPoints > 15)) {
    round += 1;
    secondShip.healthPoints -= firstShip.damage;
    firstShip.healthPoints -= secondShip.damage;
    console.log("~Round-"+ round +" secondShip(HP) " + secondShip.healthPoints, "firstShip(HP) " + firstShip.healthPoints)
  } else if(secondShip.healthPoints < 4) {
    console.log('Победил firstShip!');
  } else if(firstShip.healthPoints < 15) {
    console.log('Победил secondShip!');
  }
});

/*********** 2 -level **********/

const battleTwo = document.querySelector('.battle_two');

const TypeOfShips = [
  destroyers = {
    healthPoints: 45,
    damage: 10,
  },
  battleships = {
    healthPoints: 100,
    damage: 4,
  },
  aircraftСarriers = {
    healthPoints: 15,
    damage: 40,
  },
  cruisers = {
    healthPoints: 60,
    damage: 8,
  },
];
const fleetOne = [TypeOfShips[0],TypeOfShips[0],TypeOfShips[0],TypeOfShips[1],TypeOfShips[1],TypeOfShips[2],TypeOfShips[2],TypeOfShips[3],TypeOfShips[3],TypeOfShips[3]];
const fleetTwo = [TypeOfShips[2],TypeOfShips[0],TypeOfShips[1],TypeOfShips[3],TypeOfShips[1],TypeOfShips[2],TypeOfShips[2],TypeOfShips[0],TypeOfShips[3],TypeOfShips[0]];

let randOne = null;
let randTwo = null;

battleTwo.addEventListener('click', () => {
  randOne = Math.floor(Math.random() * fleetOne.length);
  randTwo = Math.floor(Math.random() * fleetTwo.length);

  while((fleetOne[randOne].healthPoints > 4) && (fleetTwo[randTwo].healthPoints > 4)) {
    round += 1;
    if(fleetTwo[randTwo].healthPoints === 0 || fleetTwo[randTwo].healthPoints < 0) {
      delete fleetTwo[randTwo];
    }else if(fleetOne[randOne].healthPoints === 0 || fleetOne[randOne].healthPoints < 0) {
      delete fleetOne[randOne];
    }

    fleetOne[randOne].healthPoints -= fleetTwo[randTwo].damage;
    fleetTwo[randTwo].healthPoints -= fleetOne[randOne].damage;
      console.log("~Round-"+ round +" fleetTwo(HP) " + fleetTwo[randTwo].healthPoints,
      "fleetOne(HP) " + fleetOne[randOne].healthPoints);
  } 
});