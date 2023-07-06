import { CharacterList } from "@application/entities/comics/comics.characterList";
import { ComicPrice } from "@application/entities/comics/comics.comicPrice";
import { CreatorList } from "@application/entities/comics/comics.creatorList";
import { SeriesSummary } from "@application/entities/comics/comics.seriesSummary";
import { StoryList } from "@application/entities/comics/comics.storyList";
import { TextObject } from "@application/entities/comics/comics.textObject";
import { InMemoryComicsRepository } from "@test/repositories/in.memory.comics.repository";
import { RegisterComicsUseCase } from "./registerComics.use-case";


describe('List Comics', () => {
    it('should be able to list comics', async () => {
        const inMemoryComicsRepository = new InMemoryComicsRepository();
        const registerComicsUseCase = new RegisterComicsUseCase(inMemoryComicsRepository);

        const { comicsResponse } = await registerComicsUseCase.execute({
            digitalId: 1,
            title: 'title',
            description: 'description',
            modified: new Date(),
            isbn: 'isbn',
            issn: 'issn',
            formato: 'formato',
            pageCount: 1,
            textObjects: new TextObject({
                comicId: "1234",
                type: 'type',
                language: 'language',
                text: 'text'
            }) ,
            resourceURI: 'resourceURI',
            series: new SeriesSummary({
                comicId: "1234",
                name: 'name',
                resourceURI: 'resourceURI'
            }),
            prices: new ComicPrice({
                comicId: "1234",
                type: 'type',
                price: 1
            }),
            creators: new CreatorList({
                comicId: "1234",
                available: 1,
                returned: 1,
                collectionURI: 'collectionURI'
            }),
            characters: new CharacterList({
                comicId: "1234",
                available: 1,
                returned: 1,
                collectionURI: 'collectionURI'
            }),
            stories: new StoryList({
                comicId: "1234",
                available: 1,
                returned: 1,
                collectionURI: 'collectionURI'
            })
        });

        expect(inMemoryComicsRepository.comics).toHaveLength(1);
        expect(inMemoryComicsRepository.comics[0].id).toEqual(comicsResponse.id);
    });

    
});