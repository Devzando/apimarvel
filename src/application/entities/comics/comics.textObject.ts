interface TextObjectProps {
    comicId: string;
    type: string;
    language: string;
    text: string;
}

export class TextObject {
    private props: TextObjectProps;

    constructor(props: TextObjectProps) {
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

    public get language(): string {
        return this.props.language;
    }

    public set language(value: string) {
        this.props.language = value;
    }

    public get text(): string {
        return this.props.text;
    }

    public set text(value: string) {
        this.props.text = value;
    }
}