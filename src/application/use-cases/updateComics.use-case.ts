import { Comics } from "@application/entities/comics/comics";
import { CharacterList } from "@application/entities/comics/comics.characterList";
import { ComicPrice } from "@application/entities/comics/comics.comicPrice";
import { CreatorList } from "@application/entities/comics/comics.creatorList";
import { SeriesSummary } from "@application/entities/comics/comics.seriesSummary";
import { StoryList } from "@application/entities/comics/comics.storyList";
import { TextObject } from "@application/entities/comics/comics.textObject";
import { ComicsRepository } from "@application/repositories/comics.repository";
import { Injectable } from "@nestjs/common";

interface UpdateComicsRequest {
    id: string;
    digitalId: number;
    title: string;
    description: string;
    modified: Date;
    isbn: string;
    issn: string;
    formato: string;
    pageCount: number;
    resourceURI: string;
    textObjects: TextObject[];
    series: SeriesSummary[];
    prices: ComicPrice[];
    creators: CreatorList[];
    characters: CharacterList[];
    stories: StoryList[];
}


@Injectable()
export class UpdateComicsUseCase {
    constructor(private readonly comicsRepository: ComicsRepository) { }

    async execute(request: UpdateComicsRequest) {

        const {
            digitalId,
            title,
            description,
            modified,
            isbn,
            issn,
            formato,
            pageCount,
            resourceURI,
            textObjects,
            series,
            prices,
            creators,
            characters,
            stories
        } = request;

        const comic = new Comics({
            digitalId,
            title,
            description,
            modified,
            isbn,
            issn,
            formato,
            pageCount,
            resourceURI,
            textObjects: textObjects.map(textObject => new TextObject(textObject, textObject.id)),
            series: series.map(seriesItem => new SeriesSummary(seriesItem, seriesItem.id)),
            prices: prices.map(price => new ComicPrice(price, price.id)),
            creators: creators.map(creator => new CreatorList(creator, creator.id)),
            characters: characters.map(character => new CharacterList(character, character.id)),
            stories: stories.map(story => new StoryList(story, story.id))
        }, request.id);



        await this.comicsRepository.update(comic);

        return;
    }
}