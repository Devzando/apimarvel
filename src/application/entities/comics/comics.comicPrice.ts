export interface ComicPriceProps {
    comicId: string;
    type: string;
    price: number;
}

export class ComicPrice {
    private props: ComicPriceProps;

    constructor(props: ComicPriceProps) {
        this.props = props;
    }

    public get comicId(): string {
        return this.props.comicId;
    }

    public set comicId(value: string) {
        this.props.comicId = value;
    }

    public get type(): string {
        return this.props.type;
    }

    public set type(value: string) {
        this.props.type = value;
    }

    public get price(): number {
        return this.props.price;
    }

    public set price(value: number) {
        this.props.price = value;
    }
}