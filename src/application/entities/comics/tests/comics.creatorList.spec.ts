import { CreatorList } from "../comics.creatorList";


describe('Comics CreatorList', () => {
    it('should be able to create a comics creatorList', () => {
        const creatorList = new CreatorList({
            comicId: "1234",
            available: 1,
            returned: 1,
            collectionURI: 'collectionURI'
        });
        expect(creatorList).toBeTruthy();
    });
});