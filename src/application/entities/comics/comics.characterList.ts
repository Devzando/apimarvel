export interface CharacterListProps {
    comicId: string;
    available: number;
    returned: number;
    collectionURI: string;
}

export class CharacterList {
    private props: CharacterListProps;

    constructor(props: CharacterListProps) {
        this.props = props;
    }

    public get comicId(): string {
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