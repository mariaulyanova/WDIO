import Page from '../pages/page.js';
import productPage from '../pages/productPage.js';
import reservationPage from '../pages/reservationPage.js';

const page = new Page();

describe("Reservation part functionality", () => {

  beforeEach(async () => {
    await page.open();
  });

  it("Should navigate to the  to Reservation Section for Accommodation", async () => {
    await productPage.openReservationSectionForAccommodation();
    await productPage.expectedResult();
  });

  it("Should navigate to the Cars reservation section", async () => {
    await productPage.openReservationPartForCars();
    await productPage.expectedResult();
  });

  it("Should navigate to the Tours reservation section and verify layout", async () => {
    await productPage.openReservationPartForTours();
    await productPage.expectedResult();
  });

  it("Should confirm accommodation reservation", async () => {
    await productPage.openReservationSectionForAccommodation();
    await reservationPage.filledReservationField();
    await ($("#apartment-booking")).click();
    await ($(reservationPage.expectError)).waitForDisplayed();
    await expect($(reservationPage.expectError)).toBeDisplayed();
  });

  it("Should confirm car reservation", async () => {
    await productPage.openReservationPartForCars();
    await reservationPage.filledReservationField();
    await ($("#car-booking")).click();
    await ($(reservationPage.expectError)).waitForDisplayed();
    await expect($(reservationPage.expectError)).toBeDisplayed();
  });

  it("Should confirm tour reservation", async () => {
    await productPage.openReservationPartForTours();
    await reservationPage.filledReservationField();
    await ($("#tour-booking")).click();
    await ($(reservationPage.expectError)).waitForDisplayed();
    await expect($(reservationPage.expectError)).toBeDisplayed();
  });
});
