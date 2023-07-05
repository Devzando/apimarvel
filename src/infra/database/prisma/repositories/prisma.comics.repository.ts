import { Comics } from "src/application/entities/comics/comics";
import { ComicsRepository } from "src/application/repositories/comics.repository";
import { PrismaService } from "../prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaComicsRepository implements ComicsRepository {
    constructor(private prismaService: PrismaService) {}

    async create(comic: Comics): Promise<void> {
        await this.prismaService.comic.create({
            data: {
                id: comic.id,
                digitalId: comic.digitalId,
                title: comic.title,
                description: comic.description,
                modified: comic.modified,
                isbn: comic.isbn,
                issn: comic.issn,
                formato: comic.formato,
                pageCount: comic.pageCount,
                resourceURI: comic.resourceURI
            }
        });

        await this.prismaService.textObject.createMany({
            data: [...comic.textObjects]
        });

        await this.prismaService.seriesSummary.create({
            data: {
                comicId: comic.id,
                name: comic.series.name,
                resourceURI: comic.series.resourceURI
            }
        });

        await this.prismaService.comicPrice.createMany({
            data: [...comic.prices]
        });

        await this.prismaService.creatorList.create({
            data: {
                comicId: comic.id,
                available: comic.creators.available,
                returned: comic.creators.returned,
                collectionURI: comic.creators.collectionURI
            }
        });

        await this.prismaService.characterList.create({
            data: {
                comicId: comic.id,
                available: comic.characters.available,
                returned: comic.characters.returned,
                collectionURI: comic.characters.collectionURI
            }
        });

        await this.prismaService.storyList.create({
            data: {
                comicId: comic.id,
                available: comic.stories.available,
                returned: comic.stories.returned,
                collectionURI: comic.stories.collectionURI
            }
        });
    }
}