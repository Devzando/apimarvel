import { CharacterList } from "../comics.characterList";


describe('Comics CharacterList', () => {
    it('should be able to create a comics characterList', () => {
        const characterList = [new CharacterList({
            available: 1,
            returned: 1,
            collectionURI: 'collectionURI'
        })];
        expect(characterList).toBeTruthy();
    });
});