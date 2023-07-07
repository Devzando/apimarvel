import { Comics } from "@application/entities/comics/comics";
import { ComicsRepository } from "@application/repositories/comics.repository";
import { PrismaService } from "../prisma.service";
import { Injectable } from "@nestjs/common";
import { ListComicsDTO } from "../../../http/dtos/comics/list.comics.dto";
import { PrismaComicsMapper } from "../mappers/prisma.comics.mapper";

@Injectable()
export class PrismaComicsRepository implements ComicsRepository {
    constructor(private prismaService: PrismaService) { }

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

    async list(): Promise<Comics[]> {
        const comics = await this.prismaService.comic.findMany({
            include: {
                textObjects: true,
                series: true,
                prices: true,
                creators: true,
                characters: true,
                stories: true
            }
        });


        return comics.map(comic => PrismaComicsMapper.toDomain(comic, comic.textObjects, comic.series, comic.prices, comic.creators, comic.characters, comic.stories));
    }

    async findById(id: string): Promise<Comics | null> {
        const comic = await this.prismaService.comic.findUnique({
            where: {
                id: id
            },
            include: {
                textObjects: true,
                series: true,
                prices: true,
                creators: true,
                characters: true,
                stories: true
            }
        });

        if(!comic) return null;

        return PrismaComicsMapper.toDomain(comic, comic.textObjects, comic?.series, comic.prices, comic.creators, comic.characters, comic.stories);
    }

    async delete(id: string): Promise<void> {
        await this.prismaService.comic.delete({
            where: {
                id: id
            }
        });

        return;
    }

    async update(comic: Comics): Promise<void> {
        const raw = PrismaComicsMapper.toPrisma(comic);

        await this.prismaService.comic.updateMany({
            where: {
                id: comic.id
            },
            data: {
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


        raw.textObjects.forEach(async textObject => {
            await this.prismaService.textObject.updateMany({
                where: {
                    id: textObject.id
                },
                data: {
                   type: textObject.type,
                     language: textObject.language,
                        text: textObject.text
                }
            });
        });

        raw.series.forEach(async serie => {
            await this.prismaService.seriesSummary.updateMany({
                where: {
                    id: serie.id
                },
                data: {
                    resourceURI: serie.resourceURI,
                    name: serie.name
                }
            });
        });

        raw.prices.forEach(async price => {
            await this.prismaService.comicPrice.updateMany({
                where: {
                    id: price.id
                },
                data: {
                    type: price.type,
                    price: price.price
                }
            });
        });

        raw.creators.forEach(async creator => {
            await this.prismaService.creatorList.updateMany({
                where: {
                    id: creator.id
                },
                data: {
                    available: creator.available,
                    returned: creator.returned,
                    collectionURI: creator.collectionURI,
                }
            });
        });

        raw.characters.forEach(async character => {
            await this.prismaService.characterList.updateMany({
                where: {
                    id: character.id
                },
                data: {
                    available: character.available,
                    returned: character.returned,
                    collectionURI: character.collectionURI,
                }
            });
        });

        raw.stories.forEach(async story => {
            await this.prismaService.storyList.updateMany({
                where: {
                    id: story.id
                },
                data: {
                    available: story.available,
                    returned: story.returned,
                    collectionURI: story.collectionURI,
                }
            });
        });

        return;
    }
}