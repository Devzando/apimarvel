interface TextObjectProps {
    comicId?: string;
    type?: string;
    language?: string;
    text?: string;
}

export class TextObject {
    private props: TextObjectProps;

    constructor(props: TextObjectProps) {
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

    public get language(): string | undefined {
        return this.props.language;
    }

    public set language(value: string | undefined) {
        this.props.language = value;
    }

    public get text(): string | undefined {
        return this.props.text;
    }

    public set text(value: string | undefined) {
        this.props.text = value;
    }
}