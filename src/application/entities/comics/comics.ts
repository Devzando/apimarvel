import { randomUUID } from "node:crypto";

import { CharacterList } from "./comics.characterList";
import { ComicPrice } from "./comics.comicPrice";
import { CreatorList } from "./comics.creatorList";
import { SeriesSummary } from "./comics.seriesSummary";
import { StoryList } from "./comics.storyList";
import { TextObject } from "./comics.textObject";

export interface ComicsProps {
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

export class Comics {
    private props: ComicsProps;
    private _id?: string;

    constructor(props: ComicsProps) {
        this.props = props;
        this._id = randomUUID();
    }

    public get id(): string | undefined {
        return this._id;
    }

    public get digitalId(): number | undefined {
        return this.props.digitalId;
    }

    public get title(): string | undefined {
        return this.props.title;
    }

    public set title(value: string | undefined) {
        this.props.title = value;
    }

    public get description(): string | undefined {
        return this.props.description;
    }

    public set description(value: string | undefined) {
        this.props.description = value;
    }

    public get modified(): Date | undefined {
        return this.props.modified;
    }

    public set modified(value: Date | undefined) {
        this.props.modified = value;
    }

    public get isbn(): string | undefined {
        return this.props.isbn;
    }

    public set isbn(value: string | undefined) {
        this.props.isbn = value;
    }

    public get issn(): string | undefined {
        return this.props.issn;
    }

    public set issn(value: string | undefined) {
        this.props.issn = value;
    }

    public get formato(): string | undefined {
        return this.props.formato;
    }

    public set formato(value: string | undefined) {
        this.props.formato = value;
    }

    public get pageCount(): number | undefined {
        return this.props.pageCount;
    }

    public set pageCount(value: number | undefined) {
        this.props.pageCount = value;
    }

    public get textObjects(): TextObject[] | undefined {
        return this.props.textObjects;
    }

    public set textObjects(value: TextObject[] | undefined) {
        this.props.textObjects = value;
    }

    public get resourceURI(): string | undefined {
        return this.props.resourceURI;
    }

    public set resourceURI(value: string | undefined) {
        this.props.resourceURI = value;
    }

    public get series(): SeriesSummary | undefined {
        return this.props.series;
    }

    public set series(value: SeriesSummary | undefined) {
        this.props.series = value;
    }

    public get prices(): ComicPrice[] | undefined {
        return this.props.prices;
    }

    public set prices(value: ComicPrice[] | undefined) {
        this.props.prices = value;
    }

    public get creators(): CreatorList | undefined {
        return this.props.creators;
    }

    public set creators(value: CreatorList | undefined) {
        this.props.creators = value;
    }

    public get characters(): CharacterList | undefined {
        return this.props.characters;
    }

    public set characters(value: CharacterList | undefined) {
        this.props.characters = value;
    }

    public get stories(): StoryList | undefined {
        return this.props.stories;
    }

    public set stories(value: StoryList | undefined) {
        this.props.stories = value;
    }
}