/* eslint-disable no-unused-vars, no-throw-literal*/
function Pokemon(name, health, attackBonus){
    this.name = name;
    this.health = health;
    this.attackBonus = attackBonus;
};
   Pokemon.prototype.biteAttack = function(){
    return this.attackBonus + 2; 
   };

   Pokemon.prototype.isDefeated= function(){
    if(this.health >= 1){
        return false;
    }else{
        return true;
    }
   };

//    let pokemon = new Pokemon();



// class Pokemon {
//   constructor(name, health, attackBonus) {
//     this.name = name;
//     this.health = health;
//     this.attackBonus = attackBonus;
//   }

//   biteAttack() {
//     return this.attackBonus + 2;
//   }
// }

function simulateBattle(p1, p2, firstAttackerName) {
  let attacker = p1.name === firstAttackerName ? p1 : p2;
  let defender = p1.name === firstAttackerName ? p2 : p1;

  while (true) {
    defender.health -= attacker.biteAttack();
    if (defender.health <= 0) {
      return `${attacker.name} Wins!`;
    }

    [attacker, defender] = [defender, attacker];
  }
}
