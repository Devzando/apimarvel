import { StoryList } from "../comics.storyList";


describe('Comics StoryList', () => {
    it('should be able to create a comics storyList', () => {
        const storyList = new StoryList({
            comicId: "1234",
            available: 1,
            returned: 1,
            collectionURI: 'collectionURI'
        });
        expect(storyList).toBeTruthy();
    });
});