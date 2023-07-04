import { SeriesSummary } from "../comics.seriesSummary";


describe('Comics SeriesSummary', () => {
    it('should be able to create a comics seriesSummary', () => {
        const seriesSummary = new SeriesSummary({
            comicId: "1234",
            name: 'name',
            resourceURI: 'resourceURI'
        });
        expect(seriesSummary).toBeTruthy();
    });
});