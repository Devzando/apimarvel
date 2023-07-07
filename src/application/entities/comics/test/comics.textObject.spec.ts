import { TextObject } from "../comics.textObject";


describe('Comics TextObject', () => {
    it('should be able to create a comics textObject', () => {
        const textObject = [new TextObject({
            type: 'type',
            language: 'language',
            text: 'text'
        })];
        expect(textObject).toBeTruthy();
    });
});