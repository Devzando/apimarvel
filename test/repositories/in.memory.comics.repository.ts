import { Comics } from "src/application/entities/comics/comics";
import { ComicsRepository } from "src/application/repositories/comics.repository";

export class InMemoryComicsRepository implements ComicsRepository {
    public comics: Comics[] = [];

    async create(comic: Comics): Promise<void> {
        this.comics.push(comic);
    }
}