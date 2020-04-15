import { Character } from './../src/lovecraft.js'

describe('Character', () => {

  test('should create new character', () => {
    let character = new Character;
    expect(character.name).toEqual("");
    expect(character.profession).toEqual("");
    expect(character.baseStats).toEqual([]);
    expect(character.inventory).toEqual([]);
    expect(character.level).toEqual(1);
  });

  test('should create new character with a name and profession', () => {
    let character = new Character;
    character.createCharacter("Pickman", "Artist");
    expect(character.name).toEqual("Pickman");
    expect(character.profession).toEqual("Artist");
  });

  test('should create a new character with name, profession, and stats based on profession', () => {
    let character = new Character;
    character.createCharacter("Pickman", "Artist");
    expect(character.baseStats).toEqual([7, 4, 3, 8, 12]);
  });

  test('should create new character with inventory based on profession', () => {
    let character = new Character;
    character.createCharacter("Pickman", "Artist");
    expect(character.inventory).toEqual(["sketchpad", "ink"]);
  })
})