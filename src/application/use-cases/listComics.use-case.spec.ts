import { CharacterList } from "@application/entities/comics/comics.characterList";
import { ComicPrice } from "@application/entities/comics/comics.comicPrice";
import { CreatorList } from "@application/entities/comics/comics.creatorList";
import { SeriesSummary } from "@application/entities/comics/comics.seriesSummary";
import { StoryList } from "@application/entities/comics/comics.storyList";
import { TextObject } from "@application/entities/comics/comics.textObject";
import { InMemoryComicsRepository } from "@test/repositories/in.memory.comics.repository";
import { RegisterComicsUseCase } from "./registerComics.use-case";
import { ListComicsUseCase } from "./listComics.use-case";


describe('List Comics', () => {
    it('should be able to list comics', async () => {
        const inMemoryComicsRepository = new InMemoryComicsRepository();
        const registerComicsUseCase = new RegisterComicsUseCase(inMemoryComicsRepository);
        const listComicsUseCase = new ListComicsUseCase(inMemoryComicsRepository);

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

        const comics = await listComicsUseCase.execute();

        expect(inMemoryComicsRepository.comics).toHaveLength(1);
        expect(inMemoryComicsRepository.comics[0]).toEqual(comic);
    });

    
});