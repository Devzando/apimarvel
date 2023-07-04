export interface SeriesSummaryProps {
    comicId?: string;
    resourceURI?: string;
    name?: string;
}

export class SeriesSummary {
    private props: SeriesSummaryProps;

    constructor(props: SeriesSummaryProps) {
        this.props = props;
    }

    public get comicId(): string | undefined {
        return this.props.comicId;
    }

    public get resourceURI(): string | undefined {
        return this.props.resourceURI;
    }

    public set resourceURI(value: string | undefined) {
        this.props.resourceURI = value;
    }

    public get name(): string | undefined {
        return this.props.name;
    }

    public set name(value: string | undefined) {
        this.props.name = value;
    }
}