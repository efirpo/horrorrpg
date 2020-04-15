import { Character } from './../src/lovecraft.js'

describe('Character', () => {

  test('should create new character', () => {
    let character = new Character;
    expect(character.name).toEqual("");
    expect(character.profession).toEqual("");
    expect(character.baseStats).toEqual([5, 5, 5, 5, 10]);
    expect(character.inventory).toEqual([]);
    expect(character.level).toEqual(1);
  })
})