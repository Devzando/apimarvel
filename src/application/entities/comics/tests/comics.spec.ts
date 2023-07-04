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
            textObjects: [new TextObject({
                comicId: "1234",
                type: 'type',
                language: 'language',
                text: 'text'
            })],
            resourceURI: 'resourceURI',
            series: new SeriesSummary({
                comicId: '1234',
                resourceURI: 'resourceURI',
                name: 'name'
            }),
            prices: [new ComicPrice({
                comicId: '1234',
                type: 'type',
                price: 1.0
            })],
            creators: new CreatorList({
                comicId: '1234',
                available: 1,
                returned: 1,
                collectionURI: 'collectionURI'
            }),
            characters: new CharacterList({
                comicId: '1234',
                available: 1,
                returned: 1,
                collectionURI: 'collectionURI'
            }),
            stories: new StoryList({
                comicId: '1234',
                available: 1,
                returned: 1,
                collectionURI: 'collectionURI'
            })
        });
        expect(comics).toBeTruthy();
    });
}); 