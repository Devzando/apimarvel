import { Controller, Get, Body, Post } from '@nestjs/common';
import { CreateComicsDto } from '../dtos/comics/create.comics.dto';
import { RegisterComicsUseCase } from '@application/use-cases/registerComics.use-case';
import { ListComicsUseCase } from '@application/use-cases/listComics.use-case';
import { ListComicsDTO } from '../dtos/comics/list.comics.dto';

@Controller('api')
export class ComicsController {

  constructor(
    private registerComicsUserCase: RegisterComicsUseCase,
    private listComicsUserCase: ListComicsUseCase,

    ) { }

  @Post('comics')
  async create(@Body() body: CreateComicsDto) {
   await this.registerComicsUserCase.execute({
        digitalId: body.digitalId,
        title: body.title,
        description: body.description,
        modified: body.modified,
        isbn: body.isbn,
        issn: body.issn,
        formato: body.formato,
        pageCount: body.pageCount,
        resourceURI: body.resourceURI,
        textObjects: body.textObjects,
        series: body.series,
        prices: body.prices,
        creators: body.creators,
        characters: body.characters,
        stories: body.stories
    });

    return { msg: 'Comics created successfully' };
  }

  @Get('comics')
  async list(): Promise<{ comicsResponse: ListComicsDTO[]; }> {
    const { comicsResponse } = await this.listComicsUserCase.execute();

    return { comicsResponse };
  }
}
