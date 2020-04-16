// baseStat indexes
// Perception[0]
// Grit[1]
// Strength[2]
// Stealth[3]
// Sanity[4]


export class Game {

  constructor() {
    this.character = {};
    this.challenge = {};
    this.loot = ["arcane-page", "lighter", "sketchpad", "torch", "stim-pack", "hand-lens", "ink", "candle"];
    this.notInInventory = [];
    this.lootDrop = "";
  };

  createCharacter() {
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


  levelUp() {
    const xpcheck = (this.character.xp / 5)
    if (this.character.xp % 5 === 0) {
      this.character.level = xpcheck;
      for (let i = 0; i <= 3; i++) {
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
    this.challenge.encounterId = Math.ceil(Math.random() * 3);

    // encounter check id 1, stat check: stealth ([3])
    if (this.challenge.encounterId === 1) {

      if (this.challenge.stealthRoll >= this.challenge.difficulty) {
        this.character.xp += 10;
        this.levelUp();
        // alert("You have successfully avoided the dreaded Shoggoth.")
      } else if (this.challenge.stealthRoll < this.challenge.difficulty) {
        if ((this.challenge.gritRoll) < this.challenge.difficulty) {
          this.character.baseStats[4] -= 4;
        } else { this.character.baseStats[4] -= 2 }
      }

      // random encounter id 2, stat check: perception ([0])
    } else if (this.challenge.encounterId === 2) {
      if (this.challenge.perceptionRoll >= this.challenge.difficulty) {
        this.character.xp += 10;
        this.levelUp();
        // alert("You were able to view the Night-Gaunts without your mind caving in on itself.")
      } else if (this.challenge.perceptionRoll < this.challenge.difficulty) {
        if ((this.challenge.gritRoll) < this.challenge.difficulty) {
          this.character.baseStats[4] -= 4;
        } else { this.character.baseStats[4] -= 2 };
      }

      //random encounter id 3, stat check Strength ([2])
    } else if (this.challenge.encounterId === 3) {
      if (this.challenge.strengthRoll >= this.challenge.difficulty) {
        this.character.xp += 10;
        this.levelUp();
        // alert("You have successfully beaten back the Mi-Go horde.")
        // this.encounterDrop();
      } else if (this.challenge.strengthRoll < this.challenge.difficulty) {
        if (this.challenge.gritRoll < this.challenge.difficulty) {
          this.character.baseStats[4] -= 4;
        } else { this.character.baseStats[4] -= 2 };
      };
    };
  };

  encounterDrop() {
    let charInventory = this.character.inventory
    this.notInInventory = this.loot.filter(function (item) {
      return charInventory.indexOf(item) < 0;
    })
    this.lootDrop = (this.notInInventory[(Math.floor(Math.random() * this.notInInventory.length))])
    alert("You have found " + lootDrop)
  }

  lootPickUp() {
    if (this.character.inventory.length > 5) {
      alert("You must drop an item to pick " + lootDrop + " up")
    } else { this.character.inventory.push(this.lootDrop) }
    // alert(this.lootDrop + " has been added to your inventory")
  }

  itemDrop(item) {
    this.character.inventory.forEach(element => {
      if (item === element) {
        this.character.inventory.splice(this.character.inventory.indexOf(element), 1);
        this.loot.push(element);
      }
    })
  }

  puzzleEncounter() {
    if (this.challenge.puzzleId === 1) {
      if (this.character.inventory.includes("lighter", "candle")) {
        this.character.xp += 10;
        this.levelUp();
        this.challenge.puzzleId += 1
      } else { alert("You do not have the required items to solve this puzzle") }
    } else if (this.challenge.puzzleId === 2) {
      if (this.character.inventory.includes("hand-lens", "arcane-page")) {
        this.character.xp += 10;
        this.levelUp();
        this.challenge.puzzleId += 1
      } else { alert("You do not have the required items to solve this puzzle") }
    } else if (this.challenge.puzzleId === 3) {
      if (this.character.level >= 7 && this.character.inventory.includes("arcane-page", "torch", "ink", "sketchpad")) {
        this.challenge.puzzleId += 1;
        this.youWin();
      };
    };
  };

  youWin() {
    // alert("You succesfully interrupt the ritual to summon Nyarlathotep and escape the horrors of the Great Old Ones before your mind desolves into a gibbering mess of insanity.")
  }

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
    this.encounterId;
    this.puzzleId = 1;
    this.difficulty;
    this.perceptionRoll;
    this.gritRoll;
    this.strengthRoll;
    this.stealthRoll;
  };
};










