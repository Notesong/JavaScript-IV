/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
class GameObject {
    constructor(attr) {
        this.createdAt = attr.createdAt;
        this.name = attr.name;
        this.dimensions = attr.dimensions;
    }
    destroy() {
        return `${this.name} is removed from the game.`;
    }
    // battle function allows combatants to fight until they lose all hps and die.
    battle(combatant1, combatant2) {
        // loop until either combatant dies
        do {
            if (combatant1.healthPoints > 0) {
                console.log(combatant1.attack());
                console.log(combatant2.damageResult(combatant1));
            }
            if (combatant2.healthPoints > 0) {
                console.log(combatant2.attack());
                console.log(combatant1.damageResult(combatant2));
            }
        } while (combatant1.healthPoints > 0 && combatant2.healthPoints > 0);
    }
    // basic attack for anyone without a specialized attack
    attack() {
        return `${this.name} attacks with ${this.weapons.join(" and ")}.`;
    }
}


/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
// function CharacterStats(characterAttr) {
//     GameObject.call(this, characterAttr);
//     this.healthPoints = characterAttr.healthPoints;
// }
// CharacterStats.prototype = Object.create(GameObject.prototype);
// CharacterStats.prototype.takeDamage = function () {
//     return `${this.name} takes damage.`;
// };
// // calculate battle damage for the stretch goal
// CharacterStats.prototype.damageResult = function () {
//     // take 0-9 hps damage
//     let damage = Math.floor(Math.random() * 10);
//     this.healthPoints -= damage;
//     if (this.healthPoints < 1) {
//         return `${this.name} takes ${damage} damage and dies. ` + this.destroy();
//     } else {
//         return `${this.name} takes ${damage} damage. ${this.healthPoints} health remain.`;
//     }

// };

class CharacterStats extends GameObject {
    constructor(characterAttr) {
        super(characterAttr);
        this.healthPoints = characterAttr.healthPoints;
        // attack power for stretch goal
        this.attackPower = characterAttr.attackPower;
    }
    takeDamage() {
        return `${this.name} takes damage.`;
    }
    // calculate battle damage for the stretch goal
    damageResult(enemy) {
        // damage based on enemy attack power
        let damage = Math.floor(Math.random() * enemy.attackPower);
        this.healthPoints -= damage;
        // checks to see if combatant died. If not, battle continues.
        if (this.healthPoints < 1) {
            return `${this.name} takes ${damage} damage and dies. ` + this.destroy();
        } else {
            return `${this.name} takes ${damage} damage. ${this.healthPoints} health remain.`;
        }
    }
}



/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
// function Humanoid(humanoidAttr) {
//     CharacterStats.call(this, humanoidAttr);
//     this.team = humanoidAttr.team;
//     this.weapons = humanoidAttr.weapons;
//     this.language = humanoidAttr.language;
//     // stretch goal attributes
//     this.prefix = humanoidAttr.prefix;
//     this.lastName = humanoidAttr.lastName;
// }
// Humanoid.prototype = Object.create(CharacterStats.prototype);
// Humanoid.prototype.greet = function () {
//     // check if lastName has been defined and give the proper greeting
//     if (this.lastName === undefined) {
//         return `${this.name} offers a greeting in ${this.language}.`;
//     } else {
//         return `${this.name} ${this.lastName} offers a greeting in ${this.language}.`;
//     }
// }

class Humanoid extends CharacterStats {
    constructor(humanoidAttr) {
        super(humanoidAttr);
        this.team = humanoidAttr.team;
        this.weapons = humanoidAttr.weapons;
        this.language = humanoidAttr.language;
        // stretch goal attributes
        this.prefix = humanoidAttr.prefix;
        this.lastName = humanoidAttr.lastName;
    }
    greet() {
        // check if lastName has been defined and give the proper greeting
        if (this.lastName === undefined) {
            return `${this.name} offers a greeting in ${this.language}.`;
        } else {
            return `${this.name} ${this.lastName} offers a greeting in ${this.language}.`;
        }
    }
}



/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 5,
    attackPower: 3,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
        'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    attackPower: 3,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue',
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    attackPower: 3,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!


// Hero constructor and prototypes
// function Hero(heroAttr) {
//   Humanoid.call(this, heroAttr);
// }
// Hero.prototype = Object.create(Humanoid.prototype);
// Hero.prototype.attack = function() {
//   return `${this.name} draws blood with ${this.weapons}.`;
// }
// Hero.prototype.glare = function() {
//   return `${this.name} glares.`;
// }

class Hero extends Humanoid {
    constructor(heroAttr) {
        super(heroAttr);
    }
    attack() {
        return `${this.name} draws blood with ${this.weapons}.`;
    }
    glare() {
        return `${this.name} glares.`;
    }
}

// Villain constructor and prototype
// function Villain(villainAttr) {
//     Humanoid.call(this, villainAttr);
// }
// Villain.prototype = Object.create(Humanoid.prototype);
// Villain.prototype.attack = function () {
//     return `${this.name} brings death with ${this.weapons}.`;
// }

class Villain extends Humanoid {
    constructor(villainAttr) {
        super(villainAttr);
    }
    attack() {
        return `${this.name} brings death with ${this.weapons}.`;
    }
}


const hero = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 3,
        width: 3,
        height: 3,
    },
    healthPoints: 25,
    attackPower: 10,
    name: 'Sephiroth',
    prefix: 'General',
    team: 'Loveless',
    weapons: [
        'Masamune',
    ],
    language: 'Common Tongue',
});

const villain = new Villain({
    createdAt: new Date(),
    dimensions: {
        length: 3,
        width: 3,
        height: 3,
    },
    healthPoints: 25,
    attackPower: 10,
    name: 'Vincent',
    lastName: 'Valentine',
    team: 'Seventh Heaven',
    weapons: [
        'Chaos',
    ],
    language: 'Cetra',
});

// create basic game object for battles
const mainGameObject = new GameObject({});

// battle intro
console.log(`\n..........The Showdown..........\n`)
console.log(`Hero ${hero.prefix} ${hero.name}: ${hero.healthPoints} hps | Villain ${villain.name} ${villain.lastName}: ${villain.healthPoints} hps\n`);
console.log(villain.greet());
console.log(`\n${hero.prefix} ` + hero.glare() + `\n`);
// the battle itself
mainGameObject.battle(hero, villain);
// example secondary battle to demonstate battle()
console.log(`\n..........Another Battle Example..........\n`);
mainGameObject.battle(mage, swordsman);