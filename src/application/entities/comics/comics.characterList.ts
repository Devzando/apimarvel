import { randomUUID } from "node:crypto";

export interface CharacterListProps {
    comicId?: string;
    available: number;
    returned: number;
    collectionURI: string;
}

export class CharacterList {
    private props: CharacterListProps;
    private _id: string;

    constructor(props: CharacterListProps, id?: string) {
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

    public get available(): number {
        return this.props.available;
    }

    public set available(value: number) {
        this.props.available = value;
    }

    public get returned(): number {
        return this.props.returned;
    }

    public set returned(value: number) {
        this.props.returned = value;
    }

    public get collectionURI(): string {
        return this.props.collectionURI;
    }

    public set collectionURI(value: string) {
        this.props.collectionURI = value;
    }
}