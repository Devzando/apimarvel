import { Comics } from "@application/entities/comics/comics";
import { CharacterList } from "@application/entities/comics/comics.characterList";
import { ComicPrice } from "@application/entities/comics/comics.comicPrice";
import { CreatorList } from "@application/entities/comics/comics.creatorList";
import { SeriesSummary } from "@application/entities/comics/comics.seriesSummary";
import { StoryList } from "@application/entities/comics/comics.storyList";
import { TextObject } from "@application/entities/comics/comics.textObject";


export class ComicsViewModel {
    static toHttp(comic: Comics) {
        const comicTextObjetc = comic.textObjects.map((textObject) => {
            return {
                id: textObject.id,
                language: textObject.language,
                text: textObject.text,
                type: textObject.type,
                comicId: textObject.comicId
            }
        });

        const comicSeries = comic.series.map((series) => {
            return {
                id: series.id,
                name: series.name,
                resourceURI: series.resourceURI,
                comicId: series.comicId
            }
        });

        const comicPrices = comic.prices.map((price) => {
            return {
                id: price.id,
                price: price.price,
                type: price.type,
                comicId: price.comicId
            }
        });

        const comicCreators = comic.creators.map((creator) => {
            return {
                id: creator.id,
                available: creator.available,
                returned: creator.returned,
                collectionURI: creator.collectionURI,
                comicId: creator.comicId
            }
        });

        const comicCharacters = comic.characters.map((character) => {
            return {
                id: character.id,
                available: character.available,
                returned: character.returned,
                collectionURI: character.collectionURI,
                comicId: character.comicId
            }
        });

        const comicStories = comic.stories.map((story) => {
            return {
                id: story.id,
                available: story.available,
                returned: story.returned,
                collectionURI: story.collectionURI,
                comicId: story.comicId
            }
        });


        return {
            id: comic.id,
            digitalId: comic.digitalId,
            title: comic.title,
            description: comic.description,
            modified: comic.modified,
            isbn: comic.isbn,
            issn: comic.issn,
            formato: comic.formato,
            pageCount: comic.pageCount,
            resourceURI: comic.resourceURI,
            textObjects: comicTextObjetc,
            series: comicSeries,
            prices: comicPrices,
            creators: comicCreators,
            characters: comicCharacters,
            stories: comicStories
        }

    }

}