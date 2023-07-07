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
    static toPrisma(comic: Comics){
        const comicTextObjetc = comic.textObjects.map((textObject) => {
           return {
                id: textObject.id,
                language: textObject.language,
                text: textObject.text,
                type: textObject.type,
           }
        });

        const comicSeries = comic.series.map((series) => {
            return {
                id: series.id,
                name: series.name,
                resourceURI: series.resourceURI
            }
        });

        const comicPrices = comic.prices.map((price) => {
            return {
                id: price.id,
                price: price.price,
                type: price.type
            }
        });

        const comicCreators = comic.creators.map((creator) => {
            return {
                id: creator.id,
                available: creator.available,
                returned: creator.returned,
                collectionURI: creator.collectionURI,
            }
        });

        const comicCharacters = comic.characters.map((character) => {
            return {
                id: character.id,
                available: character.available,
                returned: character.returned,
                collectionURI: character.collectionURI,
            }
        });

        const comicStories = comic.stories.map((story) => {
            return {
                id: story.id,
                available: story.available,
                returned: story.returned,
                collectionURI: story.collectionURI,
            }
        });


        return {
            comic:{
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

            },
            textObjects: comicTextObjetc,
            series: comicSeries,
            prices: comicPrices,
            creators: comicCreators,
            characters: comicCharacters,
            stories: comicStories
        }
    }

    static toDomain(
        comics: Comic, 
        textObject: rawTextObject[], 
        series: rawSeriesSummary[],
        prices: rawComicPrice[],
        creators: rawCreatorList[],
        characters: rawCharacterList[],
        stories: rawStoryList[] 
    ): Comics{


        const mappedTextObjects = textObject.map((textObject) => {
            return new TextObject({
              comicId: textObject.comicId,
              type: textObject.type,
              language: textObject.language,
              text: textObject.text
            }, textObject.id);
          });
        
          const mappedSeries = series.map((seriesItem) => {
            return new SeriesSummary({
              comicId: seriesItem.comicId,
              resourceURI: seriesItem.resourceURI,
              name: seriesItem.name
            }, seriesItem.id);
          });
        
          const mappedPrices = prices.map((price) => {
            return new ComicPrice({
              comicId: price.comicId,
              type: price.type,
              price: price.price
            }, price.id);
          });
        
          const mappedCreators = creators.map((creator) => {
            return new CreatorList({
              comicId: creator.comicId,
              available: creator.available,
              returned: creator.returned,
              collectionURI: creator.collectionURI
            }, creator.id);
          });
        
          const mappedCharacters = characters.map((character) => {
            return new CharacterList({
              comicId: character.comicId,
              available: character.available,
              returned: character.returned,
              collectionURI: character.collectionURI
            }, character.id);
          });
        
          const mappedStories = stories.map((story) => {
            return new StoryList({
              comicId: story.comicId,
              available: story.available,
              returned: story.returned,
              collectionURI: story.collectionURI
            }, story.id);
          });

        return new Comics({
            digitalId: comics.digitalId,
            title: comics.title,
            description: comics.description,
            modified: comics.modified,
            isbn: comics.isbn,
            issn: comics.issn,
            formato: comics.formato,
            pageCount: comics.pageCount,
            resourceURI: comics.resourceURI,
            textObjects: mappedTextObjects,
            series: mappedSeries,
            prices: mappedPrices,
            creators: mappedCreators,
            characters: mappedCharacters,
            stories: mappedStories
        }, comics.id);
    }
}