import { ComicsRepository } from "../repositories/comics.repository";
import { ListComicsDTO } from "../../infra/http/dtos/comics/list.comics.dto";
import { Injectable } from "@nestjs/common";

interface ListComicsReponse {
    comicsResponse: ListComicsDTO[];
}

@Injectable()
export class ListComicsUseCase {

    constructor(private comicsRepository: ComicsRepository) {}

    async execute(): Promise<ListComicsReponse> {

        const comicsResponse  = await this.comicsRepository.list();

        return { comicsResponse };

    }

}