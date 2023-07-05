import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { ComicsRepository } from "../../application/repositories/comics.repository";
import { PrismaComicsRepository } from "./prisma/repositories/prisma.comics.repository";

@Module({
    imports: [],
    providers: [
        PrismaService,
        {
            provide: ComicsRepository,
            useClass: PrismaComicsRepository
        }
    ],
    exports: [
        ComicsRepository
    ]
})
export class DatabaseModule{}