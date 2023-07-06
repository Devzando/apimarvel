import { ListComicsDTO } from "@infra/http/dtos/comics/list.comics.dto";
import { Comics } from "../entities/comics/comics";

export abstract class ComicsRepository {
    abstract create(comics: Comics): Promise<void>;
    abstract list(): Promise<ListComicsDTO[]>;
}