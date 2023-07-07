import { Comics } from "@application/entities/comics/comics";
import { ComicsRepository } from "src/application/repositories/comics.repository";

export class InMemoryComicsRepository implements ComicsRepository {
    public comics: Comics[] = [];

    async create(comic: Comics): Promise<void> {
        this.comics.push(comic);
    }

    async list(): Promise<Comics[]> {
        const comics = this.comics.map(comic => {
            return comic;
        });

        return comics;
    }

    async findById(id: string): Promise<Comics | null> {
        const comic = this.comics.find(comic => comic.id === id);

        return comic || null;
    }

    async delete(id: string): Promise<void> {
        const index = this.comics.findIndex(comic => comic.id === id);

        this.comics.splice(index, 1);

        return;
    }

    async update(comicUpdate: Comics): Promise<void> {
        const index = this.comics.findIndex(comic => comic.id === comicUpdate.id);

        this.comics[index] = comicUpdate;

        return;
    }
}