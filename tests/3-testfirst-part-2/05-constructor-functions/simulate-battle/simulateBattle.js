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