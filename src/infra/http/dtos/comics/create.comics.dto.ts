import { IsNotEmpty, IsUUID, Length } from 'class-validator';
import { CharacterList } from 'src/application/entities/comics/comics.characterList';
import { ComicPrice } from 'src/application/entities/comics/comics.comicPrice';
import { CreatorList } from 'src/application/entities/comics/comics.creatorList';
import { SeriesSummary } from 'src/application/entities/comics/comics.seriesSummary';
import { StoryList } from 'src/application/entities/comics/comics.storyList';
import { TextObject } from 'src/application/entities/comics/comics.textObject';


export class CreateComicsDto {
    @IsUUID()
    id: string;

    @IsNotEmpty()
    digitalId: number;

    @IsNotEmpty()
    @Length(3, 50)
    title: string;

    @IsNotEmpty()
    @Length(3, 50)
    description: string;

    @IsNotEmpty()
    @Length(3, 50)
    modified: Date;

    @IsNotEmpty()
    @Length(3, 50)
    isbn: string;

    @IsNotEmpty()
    @Length(3, 50)
    issn: string;

    @IsNotEmpty()
    @Length(3, 50)
    formato: string;

    @IsNotEmpty()
    @Length(3, 50)
    pageCount: number;

    @IsNotEmpty()
    @Length(3, 50)
    textObjects: TextObject;

    @IsNotEmpty()
    @Length(3, 50)
    resourceURI: string;

    @IsNotEmpty()
    @Length(3, 50)
    series: SeriesSummary;

    @IsNotEmpty()
    @Length(3, 50)
    prices: ComicPrice;

    @IsNotEmpty()
    @Length(3, 50)
    creators: CreatorList;

    @IsNotEmpty()
    @Length(3, 50)
    characters: CharacterList;

    @IsNotEmpty()
    @Length(3, 50)
    stories: StoryList;
}