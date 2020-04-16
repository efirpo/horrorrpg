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
      for (let i = 0; i <= ((this.character.baseStats.length) - 1); i++) {
        this.character.baseStats[i] += 1
      }
    }
  }

  assignRolls() {
    this.challenge.difficulty = (Math.ceil(Math.random() * 100) * 3);
    this.challenge.stealthRoll = (this.character.baseStats[3] * (Math.ceil(Math.random() * 100)))
    this.challenge.perceptionRoll = (this.character.baseStats[0] * (Math.ceil(Math.random() * 100)))
    this.challenge.strengthRoll = (this.character.baseStats[2] * (Math.ceil(Math.random() * 100)))
    this.challenge.gritRoll = (this.character.baseStats[1] * (Math.ceil(Math.random() * 100)))
  }

  randomEncounter() {
    this.challenge.id = Math.ceil(Math.random() * 3);

    // encounter check id 1, stat check: stealth ([3])
    if (this.challenge.id === 1) {

      if (this.challenge.stealthRoll >= this.challenge.difficulty) {
        this.character.xp += 10;
        this.levelUp();
      } else if (this.challenge.stealthRoll < this.challenge.difficulty) {
        if ((this.challenge.gritRoll) < this.challenge.difficulty) {
          this.character.baseStats[4] -= 4;
        } else { this.character.baseStats[4] -= 2 }
      }
      // random encounter id 2, stat check: perception ([0])
    } else if (this.challenge.id === 2) {
      if (this.challenge.perceptionRoll >= this.challenge.difficulty) {
        this.character.xp += 10;
        this.levelUp();
      } else if (this.challenge.perceptionRoll < this.challenge.difficulty) {
        if ((this.challenge.gritRoll) < this.challenge.difficulty) {
          this.character.baseStats[4] -= 4;
        } else { this.character.baseStats[4] -= 2 };
      }
      //random encounter id 3, stat check Strength ([2])
    } else if (this.challenge.id === 3) {
      if (this.challenge.strengthRoll >= this.challenge.difficulty) {
        this.character.xp += 10;
        this.levelUp();
      } else if (this.challenge.strengthRoll < this.challenge.difficulty) {
        if (this.challenge.gritRoll < this.challenge.difficulty) {
          this.character.baseStats[4] -= 4;
        } else { this.character.baseStats[4] -= 2 };
      };
    };
  };
};


// puzzleEncounter() {

// };


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
    this.perceptionRoll;
    this.gritRoll;
    this.strengthRoll;
    this.stealthRoll;
  };
};










