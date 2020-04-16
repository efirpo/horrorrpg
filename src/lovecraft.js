export class Game {

  constructor() {
    this.character = {}
    this.challenge = {}
  };

  createCharacter(name, profession) {
    this.character.name = name;
    this.character.profession = profession;
    if (this.character.profession = "Artist") {
      this.character.baseStats = [7, 4, 3, 8, 12];
      this.character.inventory.push("sketchpad", "ink");
    } else if (this.characterprofession = "Detective") {
      this.character.baseStats = [7, 6, 3, 6, 11];
      this.character.inventory.push("hand-lens", "lighter");
    } else if (this.character.profession = "Scholar") {
      this.character.baseStats = [6, 3, 4, 9, 7];
      this.character.inventory.push("arcane-page", "candle");
    } else if (this.character.profession = "Soldier") {
      this.character.baseStats = [6, 8, 6, 2, 8];
      this.character.inventory.push("stim-pack", "torch");
    }
  };

  // stat indexes
  // Perception[0]
  // Grit[1]
  // Strength[2]
  // Stealth[3]
  // Sanity[4]

  levelUp() {
    const xpcheck = (this.character.xp / 5)
    if (this.character.xp % 5 === 0) {
      this.character.level = xpcheck;
    }
  }

  randomEncounter() {
    let encounterChance = Math.ceil(Math.random() * 3);
    this.challenge.id = encounterChance;

    // encounter check id 1, stat check: stealth ([3])
    if (this.challenge.id === 1 || this.challenge.id === 2 || this.challenge.id === 3) {
      let difficulty = (Math.ceil(Math.random() * 100) * 3);
      // let characterRoll = (this.character.baseStats[3] * (Math.ceil(Math.random() * 100)))
      {
        this.challenge.difficulty = difficulty
      }
      //   if (characterRoll >= difficulty) {
      //     this.character.xp += 10;
      //     this.levelUp();
      //   } else if (characterRoll < difficulty) {
      //     if ((this.character.baseStats[1] * (Math.ceil(Math.random() * 100))) < difficulty) {
      //       this.character.baseStats[4] -= 4;
      //     } else { this.character.baseStats[4] -= 2 }
      //   }
      //   // random encounter id 2, stat check: perception ([0])
      // } else if (this.challenge.id === 2) {
      //   let difficulty = (Math.ceil(Math.random() * 100) * 3);
      //   let characterRoll = (this.character.baseStats[0] * (Math.ceil(Math.random() * 100)))
      //   if (characterRoll >= difficulty) {
      //     this.character.xp += 10;
      //     this.levelUp();
      //   } else if (characterRoll < difficulty) {
      //     if ((this.character.baseStats[1] * (Math.ceil(Math.random() * 100))) < difficulty) {
      //       this.character.baseStats[4] -= 4;
      //     } else { this.character.baseStats[4] -= 2 }
      //   }
      //   //random encounter id 3, stat check Strength ([2])
      // } else if (this.challenge.id === 3) {
      //   let difficulty = (Math.ceil(Math.random() * 100) * 3);
      //   let characterRoll = (this.character.baseStats[2] * (Math.ceil(Math.random() * 100)))
      //   if (characterRoll >= difficulty) {
      //     this.character.xp += 10;
      //     this.levelUp();
      //   } else if (characterRoll < difficulty) {
      //     if ((this.character.baseStats[1] * (Math.ceil(Math.random() * 100))) < difficulty) {
      //       this.character.baseStats[4] -= 4;
      //     } else { this.character.baseStats[4] -= 2 }
      //   }
      // }
    }

    // if (encounterChance === 1) {
    //   this.challenge.id = 1
    // } else if (encounterChance === 2) {
    //   this.challenge.id = 2;
    // } else if (encounterChance === 3) {
    //   this.challenge.id = 3;


    // if (this.challenge.id === 1){
    //    let winRating = 3 * random Number(1-100)
    //    let characterRoll = this.character.baseStats[3] * random number(1-100)
    //    if ( characterRoll >= winRating) {
    //      this.character.xp +=7
    //      this.levelUp();
    //    }
    // }

  };
};

export class Character {
  constructor(name, profession) {
    this.name = name;
    this.profession = profession;
    this.baseStats = [];
    this.inventory = [];
    this.level = 1;
    this.xp = 0;
  };


};

export class Challenge {
  constructor() {
    this.id;
    this.reqItems = [];
    this.difficulty;
  };
};










