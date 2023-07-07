import { Comics } from "@application/entities/comics/comics";
import { ComicsRepository } from "@application/repositories/comics.repository";
import { Injectable } from "@nestjs/common";


@Injectable()
export class FindByIdUseCase {
    constructor(private readonly comicsRepository: ComicsRepository) { }

    async execute(id: string): Promise<Comics | null> {
        const comics = await this.comicsRepository.findById(id);

        if(!comics) null;

        return comics;
    }
}