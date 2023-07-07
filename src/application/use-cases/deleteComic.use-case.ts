import { ComicsRepository } from "@application/repositories/comics.repository";
import { Injectable } from "@nestjs/common";


@Injectable()
export class DeleteComicUseCase {
    constructor(private readonly comicsRepository: ComicsRepository) { }

    async execute(id: string): Promise<void> {
        await this.comicsRepository.delete(id);
    }
}