export interface StoryListProps {
    comicId?: string;
    available?: number;
    returned?: number;
    collectionURI?: string;
}

export class StoryList {
    private props: StoryListProps;

    constructor(props: StoryListProps) {
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