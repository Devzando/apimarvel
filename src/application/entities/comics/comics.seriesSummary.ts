export interface SeriesSummaryProps {
    comicId: string;
    resourceURI: string;
    name: string;
}

export class SeriesSummary {
    private props: SeriesSummaryProps;

    constructor(props: SeriesSummaryProps) {
        this.props = props;
    }

    public get comicId(): string {
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