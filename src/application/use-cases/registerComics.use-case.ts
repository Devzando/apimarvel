import { Injectable } from "@nestjs/common";
import { Comics } from "../entities/comics/comics";
import { CharacterList } from "../entities/comics/comics.characterList";
import { ComicPrice } from "../entities/comics/comics.comicPrice";
import { CreatorList } from "../entities/comics/comics.creatorList";
import { SeriesSummary } from "../entities/comics/comics.seriesSummary";
import { StoryList } from "../entities/comics/comics.storyList";
import { TextObject } from "../entities/comics/comics.textObject";
import { ComicsRepository } from "../repositories/comics.repository";

interface RegisterComicsRequest {
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
export class RegisterComicsUseCase {

    constructor(private comicsRepository: ComicsRepository) {}

    async execute(request: RegisterComicsRequest): Promise<Comics> {
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
            textObjects: textObjects.map(textObject => new TextObject(textObject)),
            series: series.map(seriesItem => new SeriesSummary(seriesItem)),
            prices: prices.map(price => new ComicPrice(price)),
            creators: creators.map(creator => new CreatorList(creator)),
            characters: characters.map(character => new CharacterList(character)),
            stories: stories.map(story => new StoryList(story))
        });

        await this.comicsRepository.create(comic);

        return comic;
    }

}