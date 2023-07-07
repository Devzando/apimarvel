import { SeriesSummary } from "@application/entities/comics/comics.seriesSummary";
import { StoryList } from "@application/entities/comics/comics.storyList";
import { ComicPrice } from "@application/entities/comics/comics.comicPrice";
import { CreatorList } from "@application/entities/comics/comics.creatorList";
import { CharacterList } from "@application/entities/comics/comics.characterList";
import { TextObject } from "@application/entities/comics/comics.textObject";
import { ApiProperty } from "@nestjs/swagger";


export class ListComicsResponse {
    @ApiProperty()
    id: string;

    @ApiProperty()
    digitalId: number;

    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    modified: Date;

    @ApiProperty()
    isbn: string;

    @ApiProperty()
    issn: string;

    @ApiProperty()
    formato: string;

    @ApiProperty()
    pageCount: number;

    @ApiProperty()
    resourceURI: string;

    @ApiProperty({ isArray: true, example: [{
        id: "string",
        type: "string",
        language: "string",
        text: "string",
        comicId: "string"
    }]})
    textObjects: TextObject[];

    @ApiProperty({ isArray: true, example: [{
        id: "string",
        resourceURI: "string",
        name: "string",
        comicId: "string"
    }]})
    series: SeriesSummary[];

    @ApiProperty({ isArray: true, example: [{
        id: "string",
        type: "string",
        price: 0,
        comicId: "string"
    }]})
    prices: ComicPrice[];

    @ApiProperty({ isArray: true, example: [{
        id: "string",
        available: 0,
        returned: 0,
        collectionURI: "string",
        comidId: "string"
    }]})
    creators: CreatorList[];

    @ApiProperty({ isArray: true, example: [{
        id: "string",
        available: 0,
        returned: 0,
        collectionURI: "string",
        comidId: "string"
    }]})
    characters: CharacterList[];

    @ApiProperty({ isArray: true, example: [{
        id: "string",
        available: 0,
        returned: 0,
        collectionURI: "string",
        comidId: "string"
    }]})
    stories: StoryList[];
}