import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, Length } from 'class-validator';
import { CharacterList } from 'src/application/entities/comics/comics.characterList';
import { ComicPrice } from 'src/application/entities/comics/comics.comicPrice';
import { CreatorList } from 'src/application/entities/comics/comics.creatorList';
import { SeriesSummary } from 'src/application/entities/comics/comics.seriesSummary';
import { StoryList } from 'src/application/entities/comics/comics.storyList';
import { TextObject } from 'src/application/entities/comics/comics.textObject';


export class UpdateComicsDto {
    @ApiProperty()
    @IsNotEmpty()
    digitalId: number;

    @ApiProperty()
    @IsNotEmpty()
    @Length(3, 50)
    title: string;

    @ApiProperty()
    @IsNotEmpty()
    @Length(3, 50)
    description: string;

    @ApiProperty()
    @IsNotEmpty()
    @Length(3, 50)
    modified: Date;

    @ApiProperty()
    @IsNotEmpty()
    @Length(3, 50)
    isbn: string;

    @ApiProperty()
    @IsNotEmpty()
    @Length(3, 50)
    issn: string;

    @ApiProperty()
    @IsNotEmpty()
    @Length(3, 50)
    formato: string;

    @ApiProperty()
    @IsNotEmpty()
    @Length(3, 50)
    pageCount: number;
    
    @ApiProperty()
    @IsNotEmpty()
    @Length(3, 50)
    resourceURI: string;

    @ApiProperty({ isArray: true, example: [{
        type: "string",
        language: "string",
        text: "string"
    }]})
    @IsNotEmpty()
    @Length(3, 50)
    textObjects: TextObject[];

    @ApiProperty({ isArray: true, example: [{
        resourceURI: "string",
        name: "string"
    }]})
    @IsNotEmpty()
    @Length(3, 50)
    series: SeriesSummary[];

    @ApiProperty({ isArray: true, example: [{
        type: "string",
        price: 0
    }]})
    @IsNotEmpty()
    @Length(3, 50)
    prices: ComicPrice[];

    @ApiProperty({ isArray: true, example: [{
        available: 0,
        returned: 0,
        collectionURI: "string",
    }]})
    @IsNotEmpty()
    @Length(3, 50)
    creators: CreatorList[];

    @ApiProperty({ isArray: true, example: [{
        available: 0,
        returned: 0,
        collectionURI: "string",
    }]})
    @IsNotEmpty()
    @Length(3, 50)
    characters: CharacterList[];

    @ApiProperty({ isArray: true, example: [{
        available: 0,
        returned: 0,
        collectionURI: "string",
    }]})
    @IsNotEmpty()
    @Length(3, 50)
    stories: StoryList[];
}