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
    battle() {
        // loop until either the hero or villian dies
        do {
            if (hero.healthPoints > 0) {
                console.log(hero.attack());
                console.log(villian.damageResult());
            }
            if (villian.healthPoints > 0) {
                console.log(villian.attack());
                console.log(hero.damageResult());
            }
        } while (hero.healthPoints > 0 && villian.healthPoints > 0);
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
    }
    takeDamage() {
        return `${this.name} takes damage.`;
    }
    // calculate battle damage for the stretch goal
    damageResult() {
        // take 0-9 hps damage
        let damage = Math.floor(Math.random() * 10);
        this.healthPoints -= damage;
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

// Villian constructor and prototype
// function Villian(villianAttr) {
//     Humanoid.call(this, villianAttr);
// }
// Villian.prototype = Object.create(Humanoid.prototype);
// Villian.prototype.attack = function () {
//     return `${this.name} brings death with ${this.weapons}.`;
// }

class Villian extends Humanoid {
    constructor(villianAttr) {
        super(villianAttr);
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
    name: 'Sephiroth',
    prefix: 'General',
    team: 'Loveless',
    weapons: [
        'Masamune',
    ],
    language: 'Common Tongue',
});

const villian = new Villian({
    createdAt: new Date(),
    dimensions: {
        length: 3,
        width: 3,
        height: 3,
    },
    healthPoints: 25,
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
console.log(`..........The Showdown..........`)
console.log(`Hero ${hero.prefix} ${hero.name}: ${hero.healthPoints} hps | Villian ${villian.name} ${villian.lastName}: ${villian.healthPoints} hps`);
console.log(villian.greet());
console.log(`${hero.prefix} ` + hero.glare());
// the battle itself
mainGameObject.battle();