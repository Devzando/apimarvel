import { Controller, Get, Body, Post, Param, Delete, Put } from '@nestjs/common';
import { CreateComicsDto } from '../dtos/comics/create.comics.dto';
import { RegisterComicsUseCase } from '@application/use-cases/registerComics.use-case';
import { ListComicsUseCase } from '@application/use-cases/listComics.use-case';
import { FindByIdUseCase } from '@application/use-cases/findById.use-case';
import { ComicsViewModel } from '../view-models/comics.view-models';
import { ApiCreatedResponse, ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { MensageReturn } from '../swagger/mensageReturn';
import { ListComicsResponse } from '../swagger/listComics.response';
import { Comics } from '@application/entities/comics/comics';
import { DeleteComicUseCase } from '@application/use-cases/deleteComic.use-case';
import { UpdateComicsUseCase } from '@application/use-cases/updateComics.use-case';
import { UpdateComicsDto } from '../dtos/comics/update.comics.dto';

@ApiTags('Comics')
@Controller('api')
export class ComicsController {

  constructor(
    private registerComicsUserCase: RegisterComicsUseCase,
    private listComicsUserCase: ListComicsUseCase,
    private findByIdComicsUserCase: FindByIdUseCase,
    private deleteComicUseCase: DeleteComicUseCase,
    private updateComicUseCase: UpdateComicsUseCase

    ) { }

  @Post('comics')
  @ApiCreatedResponse({type: MensageReturn, description: 'Comics created successfully'})
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

  @ApiOkResponse({type: [ListComicsResponse], description: 'Return List of comics'})
  @Get('comics')
  async list() {
    const comics = await this.listComicsUserCase.execute();

    const raw = comics.map(ComicsViewModel.toHttp);

    return raw;
  }

  @ApiOkResponse({type: ListComicsResponse, description: 'Return comics by id'})
  @Get('comics/:id')
  async findById(@Param('id') id: string) {
    const comics = await this.findByIdComicsUserCase.execute(id);

    if(!comics) throw new Error('Comics not found');

    const raw = ComicsViewModel.toHttp(comics);

    return raw;
  }

  @ApiOkResponse({type: MensageReturn, description: 'Comics deleted successfully'})
  @Delete('comics/:id')
  async delete(@Param('id') id: string) {
    await this.deleteComicUseCase.execute(id);

    return { msg: 'Comics deleted successfully' };
  }

  @ApiOkResponse({type: MensageReturn, description: 'Comics updated successfully'})
  @Put('comics/:id')
  async update(@Param('id') id: string, @Body() body: UpdateComicsDto) {
    await this.updateComicUseCase.execute({
      id: id,
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

    return { msg: 'Comics updated successfully' };
  }
}
