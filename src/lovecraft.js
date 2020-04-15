export class Character {

  constructor() {
    this.name = "";
    this.profession = "";
    this.baseStats = [5, 5, 5, 5, 10]
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
  };
}
//   // Detective - [+2, +1, -2, +1, +1]
//   // Scholar - [+1, -2, -1, +4, -3]
//   // Artist - [+2, -1, -2, +3, +2]
//   // Soldier - [+1, +3, +1, -3, -2]
