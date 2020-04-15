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
  test('should give character object stat array inside game object based on character profession', () => {
    let game = new Game;
    let character = new Character("Pickman", "Artist");
    game.character = character;
    game.createCharacter();
    expect(game.character.baseStats).toEqual([7, 4, 3, 8, 12])
  })
  test('should give character object inventory array inside game object', () => {
    let game = new Game;
    let character = new Character("Pickman", "Artist");
    game.character = character;
    game.createCharacter();
    expect(game.character.inventory).toEqual(["sketchpad", "ink"])
  })
  test('should give character object new level based upon xp', () => {
    let game = new Game;
    let character = new Character("Pickman", "Artist");
    game.character = character;
    game.character.xp += 10;
    game.levelUp();
    expect(game.character.level).toEqual(2);
  })
  test('should create new Challenge object', () => {
    let challenge = new Challenge;
    expect(challenge.reqItems).toEqual([]);
  })
  test('should add challenge object to game object', () => {
    let game = new Game;
    let challenge = new Challenge;
    game.challenge = challenge;
    expect(game.challenge.reqItems).toEqual([]);
  })



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