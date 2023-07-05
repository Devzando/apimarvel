import { InMemoryComicsRepository } from "../../../test/repositories/in.memory.comics.repository";
import { CharacterList } from "../entities/comics/comics.characterList";
import { CreatorList } from "../entities/comics/comics.creatorList";
import { SeriesSummary } from "../entities/comics/comics.seriesSummary";
import { StoryList } from "../entities/comics/comics.storyList";
import { TextObject } from "../entities/comics/comics.textObject";
import { RegisterComicsUseCase } from "./registerComics.use-case";


describe('Register Comics', () => {
    it('should be able to register a comics', async () => {

        const inMemoryComicsRepository = new InMemoryComicsRepository();
        const registerComicsUseCase = new RegisterComicsUseCase(inMemoryComicsRepository);

        const { comics } = await registerComicsUseCase.execute({
            digitalId: 1,
            title: 'title',
            description: 'description',
            modified: new Date(),
            isbn: 'isbn',
            issn: 'issn',
            formato: 'formato',
            pageCount: 1,
            textObjects: [new TextObject({
                comicId: "1234",
                type: 'type',
                language: 'language',
                text: 'text'
            })] ,
            resourceURI: 'resourceURI',
            series: new SeriesSummary({
                comicId: "1234",
                name: 'name',
                resourceURI: 'resourceURI'
            }),
            prices: [],
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
        expect(inMemoryComicsRepository.comics[0]).toEqual(comics);
    });
});