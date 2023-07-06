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
    textObjects: TextObject;
    resourceURI: string;
    series: SeriesSummary;
    prices: ComicPrice;
    creators: CreatorList;
    characters: CharacterList;
    stories: StoryList;
}

interface RegisterComicsReponse {
    comicsResponse: {
        id: string;
        digitalId: number;
        title: string;
        description: string;
        modified: Date;
        isbn: string;
        issn: string;
        formato: string;
        pageCount: number;
        textObjects: TextObject;
        resourceURI: string;
        series: SeriesSummary;
        prices: ComicPrice;
        creators: CreatorList;
        characters: CharacterList;
        stories: StoryList;
    }
}


@Injectable()
export class RegisterComicsUseCase {

    constructor(private comicsRepository: ComicsRepository) {}

    async execute(request: RegisterComicsRequest): Promise<RegisterComicsReponse> {
        const {
            digitalId,
            title,
            description,
            modified,
            isbn,
            issn,
            formato,
            pageCount,
            textObjects,
            resourceURI,
            series,
            prices,
            creators,
            characters,
            stories
        } = request;

        const comics = new Comics({
            digitalId,
            title,
            description,
            modified,
            isbn,
            issn,
            formato,
            pageCount,
            textObjects,
            resourceURI,
            series,
            prices,
            creators,
            characters,
            stories
        });


        await this.comicsRepository.create(comics);

        const comicsResponse = {
            id: comics.id,
            digitalId: comics.digitalId,
            title: comics.title,
            description: comics.description,
            modified: comics.modified,
            isbn: comics.isbn,
            issn: comics.issn,
            formato: comics.formato,
            pageCount: comics.pageCount,
            textObjects: comics.textObjects,
            resourceURI: comics.resourceURI,
            series: comics.series,
            prices: comics.prices,
            creators: comics.creators,
            characters: comics.characters,
            stories: comics.stories
        };

        return { comicsResponse };
    }

}