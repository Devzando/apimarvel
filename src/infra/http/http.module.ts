import { Module } from "@nestjs/common";
import { ComicsController } from "./controllers/comics.controller";
import { RegisterComicsUseCase } from "../../application/use-cases/registerComics.use-case";
import { DatabaseModule } from "../database/database.module";

@Module({
    imports: [DatabaseModule],
    controllers: [ComicsController],
    providers: [RegisterComicsUseCase]
})
export class HttpModule{}