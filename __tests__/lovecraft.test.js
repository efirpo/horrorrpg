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
  test('should add id to challenge object within game object between 1 and 3', () => {
    let game = new Game;
    let challenge = new Challenge;
    game.challenge = challenge;
    game.randomEncounter();
    expect(game.challenge.id).toBeLessThan(4)
  })
  test('should generate random number between 3-300 in randomEncounter method', () => {
    let game = new Game;
    let challenge = new Challenge;
    game.challenge = challenge;
    game.randomEncounter();
    expect(game.challenge.difficulty).toBeGreaterThanOrEqual(3);
    expect(game.challenge.difficulty).toBeLessThanOrEqual(300)
  })
  test('')
  // test('should make character gain xp and new level upon successful encounter when challenge.id =1', () => {
  //   let game = new Game;
  //   let character = new Character("Pickman", "Artist");
  //   let challenge = new Challenge;
  //   game.character = character;
  //   game.challenge = challenge;
  //   game.challenge.id = 1
  //   game.randomEncounter();
  //   console.log(game.character.xp)
  //   expect(game.character.level).toEqual(2);
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