import { Comics } from "@application/entities/comics/comics";
import { ComicsRepository } from "@application/repositories/comics.repository";
import { PrismaService } from "../prisma.service";
import { Injectable } from "@nestjs/common";
import { ListComicsDTO } from "../../../http/dtos/comics/list.comics.dto";
import { PrismaComicsMapper } from "../mappers/prisma.comics.mapper";

@Injectable()
export class PrismaComicsRepository implements ComicsRepository {
    constructor(private prismaService: PrismaService) {}

    async create(comic: Comics): Promise<void> {

        const raw = PrismaComicsMapper.toPrisma(comic);

        await this.prismaService.comic.create({
            data: {
                ...raw.comic,
                textObjects: {
                    create: raw.textObjects
                },
                series: {
                    create: raw.series
                },
                prices: {
                    create: raw.prices
                },
                creators: {
                    create: raw.creators
                },
                characters: {
                    create: raw.characters
                },
                stories: {
                    create: raw.stories
                }
            }
        });
    }

    async list(): Promise<ListComicsDTO[]> {

        
        const comics = await this.prismaService.comic.findMany({

            
            include:{
                textObjects: true,
                series: true,
                prices: true,
                creators: true,
                characters: true,
                stories: true
            }
        });
;
        
        return comics;
    }
}