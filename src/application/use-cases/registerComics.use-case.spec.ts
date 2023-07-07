

import { InMemoryComicsRepository } from "../../../test/repositories/in.memory.comics.repository";
import { CharacterList } from "../entities/comics/comics.characterList";
import { CreatorList } from "../entities/comics/comics.creatorList";
import { SeriesSummary } from "../entities/comics/comics.seriesSummary";
import { StoryList } from "../entities/comics/comics.storyList";
import { TextObject } from "../entities/comics/comics.textObject";
import { RegisterComicsUseCase } from "./registerComics.use-case";
import { ComicPrice } from "../entities/comics/comics.comicPrice";


describe('Register Comics', () => {
    it('should be able to register a comics', async () => {

        const inMemoryComicsRepository = new InMemoryComicsRepository();
        const registerComicsUseCase = new RegisterComicsUseCase(inMemoryComicsRepository);

        const comic = await registerComicsUseCase.execute({
            digitalId: 1,
            title: 'title',
            description: 'description',
            modified: new Date(),
            isbn: 'isbn',
            issn: 'issn',
            formato: 'formato',
            pageCount: 1,
            resourceURI: 'resourceURI',
            textObjects: [new TextObject({
                type: 'type',
                language: 'language',
                text: 'text'
            })] ,
            series: [new SeriesSummary({
                name: 'name',
                resourceURI: 'resourceURI'
            })],
            prices: [new ComicPrice({
                type: 'type',
                price: 1
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

        expect(inMemoryComicsRepository.comics).toHaveLength(1);
        expect(inMemoryComicsRepository.comics[0].id).toEqual(comic.id);
    });
});