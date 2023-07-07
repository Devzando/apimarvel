import { Comics } from "../comics";
import { CharacterList } from "../comics.characterList";
import { ComicPrice } from "../comics.comicPrice";
import { CreatorList } from "../comics.creatorList";
import { SeriesSummary } from "../comics.seriesSummary";
import { StoryList } from "../comics.storyList";
import { TextObject } from "../comics.textObject";


describe('comics', () => {
    it('should be able to create a comics', () => {

        const comics = new Comics({
            digitalId: 1,
            title: 'title',
            description: 'description',
            modified: new Date(),
            isbn: 'isbn',
            issn: 'issn',
            formato: 'fomato',
            pageCount: 1,
            resourceURI: 'resourceURI',
            textObjects: [new TextObject({
                type: 'type',
                language: 'language',
                text: 'text'
            })],
            series: [new SeriesSummary({
                resourceURI: 'resourceURI',
                name: 'name'
            })],
            prices: [new ComicPrice({
                type: 'type',
                price: 1.0
            })],
            creators: [new CreatorList({
                available: 1,
                returned: 1,
                collectionURI: 'collectionURI'
            })],
            characters: [new CharacterList({
                available: 1,
                returned: 1,
                collectionURI: 'collectionURI'
            })],
            stories: [new StoryList({
                available: 1,
                returned: 1,
                collectionURI: 'collectionURI'
            })]
        });
        expect(comics).toBeTruthy();
    });
}); 