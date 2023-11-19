import Page from '../pages/page.js';
import mainPage from '../pages/mainPage.js';

const page = new Page();
const indexForAccommodation = 4;
const indexForCar = 6;
const indexForTour = 8;
const indexForGuide = 10;

describe("Filmstrip element preview on accommodation, cars, tours and guides tabs", () => {

    beforeEach(async () => {
        await page.open();
    });

    it("Verify Filmstrip Element Visibility for accommodations", async () => {
        await mainPage.checkVisibility(indexForAccommodation);
    });

    it("Verify Filmstrip Element Visibility for cars", async () => {
        await mainPage.checkVisibility(indexForCar);
    });

    it("Verify Filmstrip Element Visibility for tours", async () => {
        await mainPage.checkVisibility(indexForTour);
    });

    it("Verify Filmstrip Element Visibility for guides", async () => {
        await mainPage.checkVisibility(indexForGuide);
    });

    it("Verify Filmstrip Navigation appartments", async () => {
        await mainPage.checkContextInside(mainPage.seeAllAppartments, 'in-big-center-yerevan-5');
    });

    it("Verify Filmstrip Navigation cars", async () => {
        await mainPage.checkContextInside(mainPage.seeAllCars, 'seats-2');
    });

    it("Verify Filmstrip Navigation tours", async () => {
        await mainPage.checkContextInsideTours();
    });

    it("Verify Filmstrip Content Consistency on ACCOMMODATION", async () => {
        await mainPage.verifyContext(mainPage.seeAllAppartments, mainPage.firstAccommodation);
    });

    it("Verify Filmstrip Content Consistency for CARS", async () => {
        await mainPage.verifyContext(mainPage.seeAllCars, mainPage.firstCar);
    });

    it("Verify Filmstrip Content Consistency for TOURS", async () => {
        await mainPage.verifyContext(mainPage.seeAllTours, mainPage.firstTour);
    });

    it("Verify Filmstrip slick-arrow (right and left) changed the items for accommodation", async () => {
        await page.scrollAndClick(mainPage.containerForAppartment, mainPage.slickArrowAppartments("left"));
        await mainPage.clickOnElement(mainPage.slickArrowAppartments("right"));
        expect(mainPage.slickArrowAppartments("right")).toBeDisplayed();
    });

    it("Verify Filmstrip slick-arrow(right and left) changed the items for cars", async () => {
        await page.scrollAndClick(mainPage.conteinerForCar, mainPage.slickArrowCars("left"));
        await mainPage.clickOnElement(mainPage.slickArrowCars("right"));
        expect(mainPage.slickArrowCars("left")).toBeDisplayed();
    });

    it("Verify Filmstrip slick-arrow(right and left) changed the items for tours", async () => {
        await page.scrollAndClick(mainPage.containerForTours, mainPage.slickArrowTours("left"));
        await mainPage.clickOnElement(mainPage.slickArrowTours("right"));
        expect(mainPage.slickArrowTours("right")).toBeDisplayed();
    });
});
