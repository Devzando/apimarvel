import { ComicPrice } from "../comics.comicPrice";


describe('Comics ComicPrice', () => {
    it('should be able to create a comics comicPrice', () => {
        const comicPrice = new ComicPrice({
            comicId: "1234",
            type: 'type',
            price: 1.0
        });
        expect(comicPrice).toBeTruthy();
    });
});