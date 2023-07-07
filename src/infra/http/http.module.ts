import { Module } from "@nestjs/common";
import { ComicsController } from "./controllers/comics.controller";
import { RegisterComicsUseCase } from "../../application/use-cases/registerComics.use-case";
import { DatabaseModule } from "../database/database.module";
import { ListComicsUseCase } from "@application/use-cases/listComics.use-case";
import { FindByIdUseCase } from "@application/use-cases/findById.use-case";
import { DeleteComicUseCase } from "@application/use-cases/deleteComic.use-case";
import { UpdateComicsUseCase } from "@application/use-cases/updateComics.use-case";

@Module({
    imports: [DatabaseModule],
    controllers: [ComicsController],
    providers: [
        RegisterComicsUseCase,
        ListComicsUseCase,
        FindByIdUseCase,
        DeleteComicUseCase,
        UpdateComicsUseCase
    ]
})
export class HttpModule{}