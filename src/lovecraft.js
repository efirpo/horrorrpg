export class Character {

  constructor() {
    this.name = "";
    this.profession = "";
    this.baseStats = []
    this.inventory = [];
    this.level = 1;
    this.xp = 0;

  };
  // stat indexes
  // Perception[0]
  // Grit[1]
  // Strength[2]
  // Stealth[3]
  // Sanity[4]


  createCharacter(name, profession) {
    this.name = name;
    this.profession = profession;
    if (this.profession = "Artist") {
      this.baseStats = [7, 4, 3, 8, 12];
      this.inventory.push("sketchpad", "ink")
    } else if (this.profession = "Detective") {
      this.baseStats = [7, 6, 3, 6, 11];
      this.inventory.push("hand-lens", "lighter")
    } else if (this.profession = "Scholar") {
      this.baseStats = [6, 3, 4, 9, 7];
      this.inventory.push("arcane-page", "candle")
    } else if (this.profession = "Soldier") {
      this.baseStats = [6, 8, 6, 2, 8];
      this.inventory.push("stim-pack", "torch")
    }
  };

  levelUp() {
    let xpcheck = (this.xp / 5)
    if (this.xp % 5 === 0) {
      this.level = xpcheck
    }
  }
}

export class Challenge {

  constructor() {
    this.id;
    this.reqItems = []

  }

  randomEncounter() {
    // let encounterChance = Math.ceil(Math.random() * 3);
    // if (encounterChance === 1) {
    //   this.id = 1
    // } else if (encounterChance === 2) {
    //   this.id = 2;
    // } else if (encounterChance === 3) {
    //   this.id = 3;
    // }
  }

}

