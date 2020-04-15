export class Character {

  constructor() {
    this.name = "";
    this.profession = "";
    this.baseStats = []
    this.inventory = [];
    this.level = 1;

  };
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
    } else if (this.profession = "Scholar") {
      this.baseStats = [6, 3, 4, 9, 7];
    } else if (this.profession = "Soldier") {
      this.baseStats = [6, 8, 6, 2, 8];
    }
  };


}

