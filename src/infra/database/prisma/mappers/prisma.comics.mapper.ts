import { 
    Comic, 
    TextObject as rawTextObject, 
    SeriesSummary as rawSeriesSummary, 
    CharacterList as rawCharacterList, 
    StoryList as rawStoryList, 
    ComicPrice as rawComicPrice, 
    CreatorList as rawCreatorList 
} from "@prisma/client";
import { Comics } from "@application/entities/comics/comics";
import { ListComicsDTO } from "@infra/http/dtos/comics/list.comics.dto";
import { TextObject } from "@application/entities/comics/comics.textObject";
import { SeriesSummary } from "@application/entities/comics/comics.seriesSummary";
import { CharacterList } from "@application/entities/comics/comics.characterList";
import { ComicPrice } from "@application/entities/comics/comics.comicPrice";
import { CreatorList } from "@application/entities/comics/comics.creatorList";
import { StoryList } from "@application/entities/comics/comics.storyList";


export class PrismaComicsMapper {
    static toPrisma(comics: Comics){
        return {
            comic:{
                id: comics.id,
                digitalId: comics.digitalId,
                title: comics.title,
                description: comics.description,
                modified: comics.modified,
                isbn: comics.isbn,
                issn: comics.issn,
                formato: comics.formato,
                pageCount: comics.pageCount,
                resourceURI: comics.resourceURI

            },
            textObjects: {
                type: comics.textObjects.type,
                language: comics.textObjects.language,
                text: comics.textObjects.text
            },
            series: {
                name: comics.series.name,
                resourceURI: comics.series.resourceURI
            },
            prices: {
                type: comics.prices.type,
                price: comics.prices.price
            },
            creators: {
                available: comics.creators.available,
                returned: comics.creators.returned,
                collectionURI: comics.creators.collectionURI
            },
            characters: {
                available: comics.characters.available,
                returned: comics.characters.returned,
                collectionURI: comics.characters.collectionURI
            },
            stories: {
                available: comics.stories.available,
                returned: comics.stories.returned,
                collectionURI: comics.stories.collectionURI
            }
        }
    }

    // static toDomain(
    //     comics: Comic, 
    //     textObject: rawTextObject[], 
    //     series: rawSeriesSummary[],
    //     prices: rawComicPrice[],
    //     creators: rawCreatorList[],
    //     characters: rawCharacterList[],
    //     stories: rawStoryList[] 
    // ): Comics{


    //     const mappedTextObjects = textObject.map((textObject) => {
    //         return new TextObject({
    //           comicId: textObject.comicId,
    //           type: textObject.type,
    //           language: textObject.language,
    //           text: textObject.text
    //         });
    //       });
        
    //       const mappedSeries = series.map((seriesItem) => {
    //         return new SeriesSummary({
    //           comicId: seriesItem.comicId,
    //           resourceURI: seriesItem.resourceURI,
    //           name: seriesItem.name
    //         });
    //       });
        
    //       const mappedPrices = prices.map((price) => {
    //         return new ComicPrice({
    //           comicId: price.comicId,
    //           type: price.type,
    //           price: price.price
    //         });
    //       });
        
    //       const mappedCreators = creators.map((creator) => {
    //         return new CreatorList({
    //           comicId: creator.comicId,
    //           available: creator.available,
    //           returned: creator.returned,
    //           collectionURI: creator.collectionURI
    //         });
    //       });
        
    //       const mappedCharacters = characters.map((character) => {
    //         return new CharacterList({
    //           comicId: character.comicId,
    //           available: character.available,
    //           returned: character.returned,
    //           collectionURI: character.collectionURI
    //         });
    //       });
        
    //       const mappedStories = stories.map((story) => {
    //         return new StoryList({
    //           comicId: story.comicId,
    //           available: story.available,
    //           returned: story.returned,
    //           collectionURI: story.collectionURI
    //         });
    //       });

    //     return new Comics({
    //         digitalId: comics.digitalId,
    //         title: comics.title,
    //         description: comics.description,
    //         modified: comics.modified,
    //         isbn: comics.isbn,
    //         issn: comics.issn,
    //         formato: comics.formato,
    //         pageCount: comics.pageCount,
    //         resourceURI: comics.resourceURI,
    //         textObjects: mappedTextObjects,
    //         series: mappedSeries,
    //         prices: mappedPrices,
    //         creators: mappedCreators,
    //         characters: mappedCharacters,
    //         stories: mappedStories
    //     }, comics.id);
    // }
}