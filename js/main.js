/*********** 1 -level **********/

const btn = document.querySelector('.btn');
let round = 0;

const firstShip = {
  healthPoints: 100,
  damage: 4,
};
const secondShip = {
  healthPoints: 40,
  damage: 15,
};

btn.addEventListener('click', () => {
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