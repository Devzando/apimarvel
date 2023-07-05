import { Controller, Get, Body, Post } from '@nestjs/common';
import { CreateComicsDto } from '../dtos/comics/create.comics.dto';
import { RegisterComicsUseCase } from 'src/application/use-cases/registerComics.use-case';

@Controller()
export class ComicsController {

  constructor(private registerComicsUserCase: RegisterComicsUseCase) { }

  @Post('api/comics')
  async create(@Body() body: CreateComicsDto) {
    const { comicsResponse } = await this.registerComicsUserCase.execute({
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

    return { comicsResponse };
  }
}
