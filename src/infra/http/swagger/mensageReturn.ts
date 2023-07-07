import { ApiProperty } from "@nestjs/swagger";

export class MensageReturn {
    @ApiProperty()
    msg: string;
}