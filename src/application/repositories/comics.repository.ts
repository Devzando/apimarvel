import { Comics } from "../entities/comics/comics";

export abstract class ComicsRepository {
    abstract create(comic: Comics): Promise<void>;
    abstract list(): Promise<Comics[]>;
    abstract findById(id: string): Promise<Comics | null>;
    abstract delete(id: string): Promise<void>;
    abstract update(comic: Comics): Promise<void>;
}