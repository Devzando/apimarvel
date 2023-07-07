import { InMemoryComicsRepository } from "@test/repositories/in.memory.comics.repository";
import { FindByIdUseCase } from "./findById.use-case";
import { RegisterComicsUseCase } from "./registerComics.use-case";
import { CharacterList } from "@application/entities/comics/comics.characterList";
import { ComicPrice } from "@application/entities/comics/comics.comicPrice";
import { CreatorList } from "@application/entities/comics/comics.creatorList";
import { SeriesSummary } from "@application/entities/comics/comics.seriesSummary";
import { StoryList } from "@application/entities/comics/comics.storyList";
import { TextObject } from "@application/entities/comics/comics.textObject";
import { DeleteComicUseCase } from "./deleteComic.use-case";

describe('Find By Id Comics', () => {
    it('should be able to delete comics', async () => {
        const inMemoryComicsRepository = new InMemoryComicsRepository();
        const registerComicsUseCase = new RegisterComicsUseCase(inMemoryComicsRepository);
        const findByIdUseCase = new FindByIdUseCase(inMemoryComicsRepository);
        const deleteComicUseCase = new DeleteComicUseCase(inMemoryComicsRepository);

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
            })],
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

        await deleteComicUseCase.execute(comic.id);
        const comicById = await findByIdUseCase.execute(comic.id);

        expect(comicById?.id).toBe(undefined);
    });

});