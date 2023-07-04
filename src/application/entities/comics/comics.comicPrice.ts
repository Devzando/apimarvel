export interface ComicPriceProps {
    comicId?: string;
    type?: string;
    price?: number;
}

export class ComicPrice {
    private props: ComicPriceProps;

    constructor(props: ComicPriceProps) {
        this.props = props;
    }

    public get comicId(): string | undefined {
        return this.props.comicId;
    }

    public get type(): string | undefined {
        return this.props.type;
    }

    public set type(value: string | undefined) {
        this.props.type = value;
    }

    public get price(): number | undefined {
        return this.props.price;
    }

    public set price(value: number | undefined) {
        this.props.price = value;
    }
}