import { randomUUID } from "node:crypto";

import { CharacterList } from "./comics.characterList";
import { ComicPrice } from "./comics.comicPrice";
import { CreatorList } from "./comics.creatorList";
import { SeriesSummary } from "./comics.seriesSummary";
import { StoryList } from "./comics.storyList";
import { TextObject } from "./comics.textObject";

export interface ComicsProps {
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

export class Comics {
    private props: ComicsProps;
    private _id: string;

    constructor(props: ComicsProps, id?: string) {
        this.props = props;
        this._id = id ?? randomUUID();
        this.props.textObjects.forEach(textObject => textObject.comicId = this._id);
        this.props.series.forEach(series => series.comicId = this._id);
        this.props.prices.forEach(price => price.comicId = this._id);
        this.props.creators.forEach(creator => creator.comicId = this._id);
        this.props.characters.forEach(character => character.comicId = this._id);
        this.props.stories.forEach(story => story.comicId = this._id);
    }

    public get id(): string {
        return this._id;
    }

    public get digitalId(): number {
        return this.props.digitalId;
    }

    public get title(): string {
        return this.props.title;
    }

    public set title(value: string) {
        this.props.title = value;
    }

    public get description(): string {
        return this.props.description;
    }

    public set description(value: string) {
        this.props.description = value;
    }

    public get modified(): Date {
        return this.props.modified;
    }

    public set modified(value: Date) {
        this.props.modified = value;
    }

    public get isbn(): string {
        return this.props.isbn;
    }

    public set isbn(value: string) {
        this.props.isbn = value;
    }

    public get issn(): string {
        return this.props.issn;
    }

    public set issn(value: string) {
        this.props.issn = value;
    }

    public get formato(): string {
        return this.props.formato;
    }

    public set formato(value: string) {
        this.props.formato = value;
    }

    public get pageCount(): number {
        return this.props.pageCount;
    }

    public set pageCount(value: number) {
        this.props.pageCount = value;
    }

    
    public get resourceURI(): string {
        return this.props.resourceURI;
    }
    
    public set resourceURI(value: string) {
        this.props.resourceURI = value;
    }

    public get textObjects(): TextObject[] {
        return this.props.textObjects;
    }

    public set textObjects(value: TextObject[]) {
        this.props.textObjects = value;
    }

    public get series(): SeriesSummary[] {
        return this.props.series;
    }

    public set series(value: SeriesSummary[]) {
        this.props.series = value;
    }

    public get prices(): ComicPrice[] {
        return this.props.prices;
    }

    public set prices(value: ComicPrice[]) {
        this.props.prices = value;
    }

    public get creators(): CreatorList[] {
        return this.props.creators;
    }

    public set creators(value: CreatorList[]) {
        this.props.creators = value;
    }

    public get characters(): CharacterList[] {
        return this.props.characters;
    }

    public set characters(value: CharacterList[]) {
        this.props.characters = value;
    }

    public get stories(): StoryList[] {
        return this.props.stories;
    }

    public set stories(value: StoryList[]) {
        this.props.stories = value;
    }
}