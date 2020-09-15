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
const firstFleetOfShips = [
  destroyersOne = {
    healthPoints: 45,
    damage: 10,
  },
  destroyersTwo = {
    healthPoints: 45,
    damage: 10,
  },
  destroyersThree = {
    healthPoints: 45,
    damage: 10,
  },
  battleshipsOne = {
    healthPoints: 100,
    damage: 4,
  },
  battleshipsTwo = {
    healthPoints: 100,
    damage: 4,
  },
  aircraftСarriersOne = {
    healthPoints: 15,
    damage: 40,
  },
  aircraftСarriersTwo = {
    healthPoints: 15,
    damage: 40,
  },
  cruisersOne = {
    healthPoints: 60,
    damage: 8,
  },
  cruisersTwo = {
    healthPoints: 60,
    damage: 8,
  },
  cruisersThree = {
    healthPoints: 60,
    damage: 8,
  },
];

const secondFleetOfShips = [
  destroyersOne = {
    healthPoints: 45,
    damage: 10,
  },
  destroyersTwo = {
    healthPoints: 45,
    damage: 10,
  },
  destroyersThree = {
    healthPoints: 45,
    damage: 10,
  },
  battleshipsOne = {
    healthPoints: 100,
    damage: 4,
  },
  battleshipsTwo = {
    healthPoints: 100,
    damage: 4,
  },
  aircraftСarriersOne = {
    healthPoints: 15,
    damage: 40,
  },
  aircraftСarriersTwo = {
    healthPoints: 15,
    damage: 40,
  },
  cruisersOne = {
    healthPoints: 60,
    damage: 8,
  },
  cruisersTwo = {
    healthPoints: 60,
    damage: 8,
  },
  cruisersThree = {
    healthPoints: 60,
    damage: 8,
  },
];

let randOne;
let randTwo;

battleTwo.addEventListener('click', () => {
  randOne = Math.floor(Math.random() * firstFleetOfShips.length);
  randTwo = Math.floor(Math.random() * secondFleetOfShips.length);
 
  while((firstFleetOfShips[randOne].healthPoints > 4) && (secondFleetOfShips[randTwo].healthPoints > 4)) {
    round += 1;
    if(secondFleetOfShips[randTwo].healthPoints === 0 || secondFleetOfShips[randTwo].healthPoints < 0) {
      delete secondFleetOfShips[randTwo];
    }else if(firstFleetOfShips[randOne].healthPoints === 0 || firstFleetOfShips[randOne].healthPoints < 0) {
      delete firstFleetOfShips[randOne];
    }
      firstFleetOfShips[randOne].healthPoints -= secondFleetOfShips[randTwo].damage;
      secondFleetOfShips[randTwo].healthPoints -= firstFleetOfShips[randOne].damage;
      console.log("~Round-"+ round +" secondFleetOfShips(HP) " + secondFleetOfShips[randTwo].healthPoints,
      "firstFleetOfShips(HP) " + firstFleetOfShips[randOne].healthPoints)
  } 
});