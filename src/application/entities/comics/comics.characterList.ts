export interface CharacterListProps {
    comicId?: string;
    available?: number;
    returned?: number;
    collectionURI?: string;
}

export class CharacterList {
    private props: CharacterListProps;

    constructor(props: CharacterListProps) {
        this.props = props;
    }

    public get comicId(): string | undefined {
        return this.props.comicId;
    }

    public get available(): number | undefined {
        return this.props.available;
    }

    public set available(value: number | undefined) {
        this.props.available = value;
    }

    public get returned(): number | undefined {
        return this.props.returned;
    }

    public set returned(value: number | undefined) {
        this.props.returned = value;
    }

    public get collectionURI(): string | undefined {
        return this.props.collectionURI;
    }

    public set collectionURI(value: string | undefined) {
        this.props.collectionURI = value;
    }
}