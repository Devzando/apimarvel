import { Comics } from "../entities/comics/comics";

export abstract class ComicsRepository {
    abstract create(comics: Comics): Promise<void>;
}