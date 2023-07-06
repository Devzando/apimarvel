import { Comics } from "@application/entities/comics/comics";
import { ComicsRepository } from "src/application/repositories/comics.repository";
import { ListComicsDTO } from "@infra/http/dtos/comics/list.comics.dto";

export class InMemoryComicsRepository implements ComicsRepository {
    public comics: Comics[] = [];
    public listComics: ListComicsDTO[] = [];

    async create(comic: Comics): Promise<void> {
        this.comics.push(comic);
    }

    async list(): Promise<ListComicsDTO[]> {
        const comicsResponse = this.listComics.map(comic => {
            return comic;
        });

        return comicsResponse;
    }
}