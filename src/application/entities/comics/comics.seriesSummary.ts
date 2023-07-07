import { randomUUID } from "node:crypto";

export interface SeriesSummaryProps {
    comicId?: string;
    resourceURI: string;
    name: string;
}

export class SeriesSummary {
    private props: SeriesSummaryProps;
    private _id: string;

    constructor(props: SeriesSummaryProps, id?: string) {
        this.props = props;
        this._id = id ?? randomUUID();
    }

    public get id(): string {
        return this._id;
    }

    public get comicId(): string | undefined {
        return this.props.comicId;
    }

    public set comicId(value: string) {
        this.props.comicId = value;
    }

    public get resourceURI(): string {
        return this.props.resourceURI;
    }

    public set resourceURI(value: string) {
        this.props.resourceURI = value;
    }

    public get name(): string {
        return this.props.name;
    }

    public set name(value: string) {
        this.props.name = value;
    }
}