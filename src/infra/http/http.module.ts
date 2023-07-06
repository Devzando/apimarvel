import { Module } from "@nestjs/common";
import { ComicsController } from "./controllers/comics.controller";
import { RegisterComicsUseCase } from "../../application/use-cases/registerComics.use-case";
import { DatabaseModule } from "../database/database.module";
import { ListComicsUseCase } from "@application/use-cases/listComics.use-case";

@Module({
    imports: [DatabaseModule],
    controllers: [ComicsController],
    providers: [
        RegisterComicsUseCase,
        ListComicsUseCase
    ]
})
export class HttpModule{}