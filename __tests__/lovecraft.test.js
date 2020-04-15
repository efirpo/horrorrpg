import { Game } from './../src/lovecraft.js'
import { Character } from './../src/lovecraft.js'
import { Challenge } from './../src/lovecraft.js'

describe('Game', () => {

  test('should create a new game object', () => {
    let game = new Game;
    expect(game.character).toEqual({});
  })
  test('should create new character', () => {
    let character = new Character("Pickman", "Artist");
    expect(character.name).toEqual("Pickman");
  })
  test('should add new character to game object as nested object', () => {
    let game = new Game;
    let character = new Character("Pickman", "Artist");
    game.character = character;
    expect(game.character.name).toEqual("Pickman");
  })

  //   test('should create new character', () => {
  //     let game = new Game;
  //     expect(character.name).toEqual("");
  //     expect(character.profession).toEqual("");
  //     expect(character.baseStats).toEqual([]);
  //     expect(character.inventory).toEqual([]);
  //     expect(character.level).toEqual(1);
  //     expect(character.xp).toEqual(0);
  //   });

  //   test('should create new character with a name and profession', () => {
  //     let character = new Character;
  //     character.createCharacter("Pickman", "Artist");
  //     expect(character.name).toEqual("Pickman");
  //     expect(character.profession).toEqual("Artist");
  //   });

  //   test('should create a new character with stats based on profession', () => {
  //     let character = new Character;
  //     character.createCharacter("Pickman", "Artist");
  //     expect(character.baseStats).toEqual([7, 4, 3, 8, 12]);
  //   });

  //   test('should create new character with inventory based on profession', () => {
  //     let character = new Character;
  //     character.createCharacter("Pickman", "Artist");
  //     expect(character.inventory).toEqual(["sketchpad", "ink"]);
  //   })

  //   test('should alter character.level based on character.xp', () => {
  //     let character = new Character;
  //     character.xp += 10;
  //     character.levelUp();
  //     expect(character.level).toEqual(2);
  //   })
  // })

  // describe('Challenges', () => {

  //   test('should create Challenge object', () => {
  //     let challenge = new Challenge;
  //     expect(challenge.reqItems).toEqual([]);
  //   })

  //   test('should assign an id of 1-3 to Challenge object', () => {
  //     let challenge = new Challenge;
  //     challenge.randomEncounter();
  //     expect(challenge.id).toBeLessThan(4);
  //   })
})