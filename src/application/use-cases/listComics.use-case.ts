import { ComicsRepository } from "../repositories/comics.repository";
import { Injectable } from "@nestjs/common";
import { Comics } from "@application/entities/comics/comics";

@Injectable()
export class ListComicsUseCase {
    constructor(private comicsRepository: ComicsRepository) {}

    async execute(): Promise<Comics[]> {

        const comics = await this.comicsRepository.list();

        return comics;

    }

}