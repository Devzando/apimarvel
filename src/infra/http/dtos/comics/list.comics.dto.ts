import { CharacterList } from "../../../../application/entities/comics/comics.characterList";
import { ComicPrice } from "../../../../application/entities/comics/comics.comicPrice";
import { CreatorList } from "../../../../application/entities/comics/comics.creatorList";
import { SeriesSummary } from "../../../../application/entities/comics/comics.seriesSummary";
import { StoryList } from "../../../../application/entities/comics/comics.storyList";
import { TextObject } from "../../../../application/entities/comics/comics.textObject";

export class ListComicsDTO {
    id: string;
    digitalId: number;
    title: string;
    description: string;
    modified: Date;
    isbn: string;
    issn: string;
    formato: string;
    pageCount: number;
    textObjects: {
        id: number,
        language: string,
        text: string,
        type: string
    }[];
    resourceURI: string;
    series: {
        id: number,
        comicId: string,
        resourceURI: string,
        name: string
    }[];
    prices: {
        id: number,
        comicId: string,
        type: string,
        price: number
    }[];
    creators: {
        id: number,
        comicId: string,
        available: number,
        returned: number,
        collectionURI: string

    }[];
    characters: {
        id: number,
        comicId: string,
        available: number,
        returned: number,
        collectionURI: string
    }[];
    stories: {
        id: number,
        comicId: string,
        available: number,
        returned: number,
        collectionURI: string
    }[];

}