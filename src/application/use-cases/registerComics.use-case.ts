import { Comics } from "../entities/comics/comics";
import { CharacterList } from "../entities/comics/comics.characterList";
import { ComicPrice } from "../entities/comics/comics.comicPrice";
import { CreatorList } from "../entities/comics/comics.creatorList";
import { SeriesSummary } from "../entities/comics/comics.seriesSummary";
import { StoryList } from "../entities/comics/comics.storyList";
import { TextObject } from "../entities/comics/comics.textObject";

interface RegisterComicsRequest {
    digitalId?: number;
    title?: string;
    description?: string;
    modified?: Date;
    isbn?: string;
    issn?: string;
    formato?: string;
    pageCount?: number;
    textObjects?: TextObject[];
    resourceURI?: string;
    series?: SeriesSummary;
    prices?: ComicPrice[];
    creators?: CreatorList;
    characters?: CharacterList;
    stories?: StoryList;
}

interface RegisterComicsReponse {
    comics: Comics;
}
export class RegisterComicsUseCase {

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

        return { comics };
    }

}