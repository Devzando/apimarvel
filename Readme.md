# Readme da Aplicação

## Funcionamento:

Um dos aspectos mais importantes desse projeto é a intensa tentativa de se utilizar os padrões envoltos de aplicações desacopladas. Ou seja, seguir à risca os padrões do **SOLID**. Principalmente, a **Single Responsibility Principle** e **Dependency Inversion Principle**. Além disso, também se faz presente a utilização de conceitos das arquiteturas mais modernas, como **Clean Architecture** e **Domain Driven Design**.

Basicamente, possuímos, 5 endpoints:

- **Criar um quadrinho**
- **Lista todos os quadrinhos**
- **Listar um quadrinho por id**
- **Atualizar um quadrinho**
- **Deletar um quadrinho**

Cada um desses endpoints, está associado a um caso de uso, testes unitários, rotas e repositórios. Como a aplicação utiliza fortemente injeção e inversão de dependência, possui-se uma alta facilidade em implementar diferentes tipos de bancos. Nessa api, por exemplo, para os testes unitários, implementou-se um banco em memória. 

Para entender melhor, vamos análisar o fluxo por completo do endpoint de criação de um quadrinho. Mas antes de mais nada, como havia dito anteriormente, esse projeto segue conceitos das arquiteturas mais modernas. Logo, vamos entender como o design dessa aplicação foi projetado.

![Untitled](./Untitled.png)

Dentro da camada de **application**, é onde encontramos todo o core da nossa aplicação. É ali onde teremos toda a regra de negócio, que, por sua vez, estará distribuida em casos de uso, entidades e, não menos importante, seus respectivos testes unitários. É importante salientar que nessa camada não existe comunição com o mundo externo. Ou seja, tirando o decorator do nest para injeção de dependência, não encontramos acoplamento de outras tecnologias.

Já dentro da camada **infra**, encontramos a porta para o mundo externo, onde teremos os controllers, a camada de persistência, integrações com o swagger. Diferente da outra camada, a infra pode se comunicar com a application.

Bom, agora partindo para o fluxo, temos nossa classe de contrato para os métodos que a camada de persistência vai implementar.

```jsx
import { Comics } from "../entities/comics/comics";

export abstract class ComicsRepository {
    abstract create(comic: Comics): Promise<void>;
}
```

Depois temos o nosso banco em memoria.

```jsx
import { Comics } from "@application/entities/comics/comics";
import { ComicsRepository } from "src/application/repositories/comics.repository";

export class InMemoryComicsRepository implements ComicsRepository {
    public comics: Comics[] = [];

    async create(comic: Comics): Promise<void> {
        this.comics.push(comic);
    }
}
```

Logo após, o use case para a criação de um quadrinho. Percebe que existe um acoplamento nessa classe quando utilizamos o decorator **Injectable()**. Bom, nesse caso, vai do programador decidir, se vale apena perder produtividade ao deixar de utilizar alguma ferramenta em prol do desacoplamento.

```jsx
import { Injectable } from "@nestjs/common";
import { Comics } from "../entities/comics/comics";
import { CharacterList } from "../entities/comics/comics.characterList";
import { ComicPrice } from "../entities/comics/comics.comicPrice";
import { CreatorList } from "../entities/comics/comics.creatorList";
import { SeriesSummary } from "../entities/comics/comics.seriesSummary";
import { StoryList } from "../entities/comics/comics.storyList";
import { TextObject } from "../entities/comics/comics.textObject";
import { ComicsRepository } from "../repositories/comics.repository";

interface RegisterComicsRequest {
    digitalId: number;
    title: string;
    description: string;
    modified: Date;
    isbn: string;
    issn: string;
    formato: string;
    pageCount: number;
    resourceURI: string;
    textObjects: TextObject[];
    series: SeriesSummary[];
    prices: ComicPrice[];
    creators: CreatorList[];
    characters: CharacterList[];
    stories: StoryList[];
}

@Injectable()
export class RegisterComicsUseCase {

    constructor(private comicsRepository: ComicsRepository) {}

    async execute(request: RegisterComicsRequest): Promise<Comics> {
        const {
            digitalId,
            title,
            description,
            modified,
            isbn,
            issn,
            formato,
            pageCount,
            resourceURI,
            textObjects,
            series,
            prices,
            creators,
            characters,
            stories
        } = request;

        const comic = new Comics({
            digitalId,
            title,
            description,
            modified,
            isbn,
            issn,
            formato,
            pageCount,
            resourceURI,
            textObjects: textObjects.map(textObject => new TextObject(textObject)),
            series: series.map(seriesItem => new SeriesSummary(seriesItem)),
            prices: prices.map(price => new ComicPrice(price)),
            creators: creators.map(creator => new CreatorList(creator)),
            characters: characters.map(character => new CharacterList(character)),
            stories: stories.map(story => new StoryList(story))
        });

        await this.comicsRepository.create(comic);

        return comic;
    }

}
```

Ademais, o seu respectivo teste unitário.

```jsx
import { InMemoryComicsRepository } from "../../../test/repositories/in.memory.comics.repository";
import { CharacterList } from "../entities/comics/comics.characterList";
import { CreatorList } from "../entities/comics/comics.creatorList";
import { SeriesSummary } from "../entities/comics/comics.seriesSummary";
import { StoryList } from "../entities/comics/comics.storyList";
import { TextObject } from "../entities/comics/comics.textObject";
import { RegisterComicsUseCase } from "./registerComics.use-case";
import { ComicPrice } from "../entities/comics/comics.comicPrice";

describe('Register Comics', () => {
    it('should be able to register a comics', async () => {

        const inMemoryComicsRepository = new InMemoryComicsRepository();
        const registerComicsUseCase = new RegisterComicsUseCase(inMemoryComicsRepository);

        const comic = await registerComicsUseCase.execute({
            digitalId: 1,
            title: 'title',
            description: 'description',
            modified: new Date(),
            isbn: 'isbn',
            issn: 'issn',
            formato: 'formato',
            pageCount: 1,
            resourceURI: 'resourceURI',
            textObjects: [new TextObject({
                type: 'type',
                language: 'language',
                text: 'text'
            })] ,
            series: [new SeriesSummary({
                name: 'name',
                resourceURI: 'resourceURI'
            })],
            prices: [new ComicPrice({
                type: 'type',
                price: 1
            })],
            creators: [new CreatorList({
                available: 1,
                returned: 1,
                collectionURI: 'collectionURI'
            })],
            characters: [new CharacterList({
                available: 1,
                returned: 1,
                collectionURI: 'collectionURI'
            })],
            stories: [new StoryList({
                available: 1,
                returned: 1,
                collectionURI: 'collectionURI'
            })]
        });

        expect(inMemoryComicsRepository.comics).toHaveLength(1);
        expect(inMemoryComicsRepository.comics[0].id).toEqual(comic.id);
    });
});
```

Sainda da camada de application e indo agora para **infra**, temos nossa classe para persistir as informações no banco. Como podem ver, utilizei o orm **prisma**.

```jsx
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
}
```

Partindo pros ultimos momentos, o controller para receber as requisições http.

```jsx
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
}
```

É importante entender que essas injeções de dependências da maneira como está, só se faz possível por causa do conceito de **modules** do nest, como por exemplo as injeções dentro do controller, funciona por causa desse arquivo aqui.

```jsx
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
```

Bom, agora se mandarmos uma requisão http para o endpoint **http://localhost:3000/api/comics** com os requsitos necessários. teremos um quadrinho criado com sucesso.

## Outras Questões:

- Sobre o banco de dados, utilizei uma instância Mysql em nuvem, mais especificamente uma instância nos serviçoes da Azure.
- Sobre a documentão da api, utilizou-se o swagger. Para acessa-la basta colocar no navegador **http://localhost:3000/api-docs**
- Para rodar a aplicação localmente:
    - Faça o clone do repositório remoto para sua máquina:
    
    ```jsx
    git clone https://github.com/Devzando/apimarvel.git
    ```
    
- Dentro da pasta do projeto clonado, rode (**É necessário ter o node instalado**):
    
    ```jsx
    npm i
    ```
    
- Logo após, rode. Ele irá gerar um arquivo .env e uma pasta prisma com seu schema.prisma:
    
    ```jsx
    npx prisma init
    ```
    
- Dentro do .env, coloque seu link de conexão com o seu banco. Perceba que temos dosi links de conexão com o banco. O prisma precisa de dois pois, para fazer o controle das migrations, ele usa um segundo banco:
    
    ```jsx
    DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE?sslaccept=strict"
    SHADOW_DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE?sslaccept=strict"
    ```
    
- Altera o arquivo schema.prisma para adicionar a referência ao segundo banco de dados:
    
    ```jsx
    generator client {
      provider = "prisma-client-js"
    }
    
    datasource db {
      provider          = "mysql"
      url               = env("DATABASE_URL")
      shadowDatabaseUrl = env("SHADOW_DATABASE_URL")
    }
    ```
    
- Agora, dentro do arquivo schema.prisma construa as model que serão as tabelas no seu banco:
    
    ```jsx
    // This is your Prisma schema file,
    // learn more about it in the docs: https://pris.ly/d/prisma-schema
    
    generator client {
      provider = "prisma-client-js"
    }
    
    datasource db {
      provider          = "mysql"
      url               = env("DATABASE_URL")
      shadowDatabaseUrl = env("SHADOW_DATABASE_URL")
    }
    
    model Comic {
      id          String          @id
      digitalId   Int
      title       String
      description String
      modified    DateTime
      isbn        String
      issn        String
      formato     String
      pageCount   Int
      resourceURI String
      textObjects TextObject[]
      series      SeriesSummary[]
      prices      ComicPrice[]
      creators    CreatorList[]
      characters  CharacterList[]
      stories     StoryList[]
    }
    
    model TextObject {
      id       String @id
      comic    Comic  @relation(fields: [comicId], references: [id], onDelete: Cascade)
      comicId  String
      type     String
      language String
      text     String
    }
    
    model StoryList {
      id            String @id
      comic         Comic  @relation(fields: [comicId], references: [id], onDelete: Cascade)
      comicId       String
      available     Int
      returned      Int
      collectionURI String
    }
    
    model SeriesSummary {
      id          String @id
      comic       Comic  @relation(fields: [comicId], references: [id], onDelete: Cascade)
      comicId     String
      resourceURI String
      name        String
    }
    
    model CreatorList {
      id            String @id
      comic         Comic  @relation(fields: [comicId], references: [id], onDelete: Cascade)
      comicId       String
      available     Int
      returned      Int
      collectionURI String
    }
    
    model ComicPrice {
      id      String @id
      comic   Comic  @relation(fields: [comicId], references: [id], onDelete: Cascade)
      comicId String
      type    String
      price   Float
    }
    
    model CharacterList {
      id            String @id
      comic         Comic  @relation(fields: [comicId], references: [id], onDelete: Cascade)
      comicId       String
      available     Int
      returned      Int
      collectionURI String
    }
    ```
    
- Agora rode. Ele vai gerar uma migration pra você, dê um nome a ela e pressione enter:
    
    ```jsx
    npm run migration:create
    ```
    
- E, por fim, rode:
    
    ```jsx
    npm run migration:generate
    ```
    
- Agora você pode desfrutar da aplicação a vontade.

## Deploy da aplicação:

Para o deploy, Criamos um arquivo Dockerfile para nos ajudar na construção da imagem do projeto:

```jsx
FROM node:18
 
WORKDIR /app
 
COPY package.json package-lock.json ./
 
RUN npm ci

RUN npm i jest
RUN npm i ts-node
 
COPY . .
 
ARG PRISMA_DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}
ENV SHADOW_DATABASE_URL=${SHADOW_DATABASE_URL}
 
RUN npx prisma generate

RUN npm run build

COPY . .

CMD npm run migration:generate && npm run start
```

Em seguida, temos a criação do arquivo .yml para nos ajudar com a atumotização do push da imagem para um registry (Usei o Registry Container da azure).

```jsx
name: Build, Deploy and Test

on:
  push:
    branches:
      - main

env:
  REGISTRY: apimarvelcontainer.azurecr.io
  IMAGE_NAME: apimarvel
  TAG: latest
  DATABASE_URL: ${{ secrets.PRISMA_DATABASE_URL }}
  SHADOW_DATABASE_URL: ${{ secrets.PRISMA_SHADOW_DATABASE_URL }}

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Build Docker image
        run: docker build -t ${{ env.IMAGE_NAME }} .

      - name: Run Tests
        run:  docker run ${{ env.IMAGE_NAME }} sh -c 'npm run test'

  build-deploy:
    runs-on: ubuntu-latest
    needs: test

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Build Docker image
        run: docker build -t ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ env.TAG }} .

      - name: Login to Azure Container Registry
        uses: azure/docker-login@v1
        with:
          login-server: ${{ env.REGISTRY }}
          username: ${{ secrets.REGISTRY_USERNAME }}
          password: ${{ secrets.REGISTRY_PASSWORD }}

      - name: Push Docker image
        run: docker push ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ env.TAG }}

```

É importante entender que direto fazemos uso das variáveis de ambiente, nesse caso, usamos os Secrets do github. Por fim, se fez uso de um web app service, que vai ficar se comunicando com registry e verificando caso exista alguma nova versão da imagem. Quando tiver, ele vai subir um contêiner baseando nessa nova versão da imagem do registry. O serviço web app também é da Azure.

Bom, é isso: Aqui uma imagem de como fica a pipiline no processo de deploy dessa aplicação. Perceba que o deploy da aplicação só inicia quando todos os testes são executados com sucesso.

![Untitled](./Untitled1.png)