import Page from "./page.js";

const page = new Page();

export default new class ProductPage extends Page {
    navigationBar = "div#myNavbar";
    accommodationDropDown = "#myNavbar > ul > li:nth-child(2) > a";
    carDropDown = "#myNavbar > ul > li:nth-child(3) > a";
    toursDropDownMenu = "#myNavbar > ul > li:nth-child(4) > a";
    accommodationInYerevan = "a[href='https://irent.am/apartments/type/all/location/yerevan']";
    carCheckClass = "a[href*='economy']";
    bookNowInaccommodation = "div.apartment-info~a[href*='53']";
    bookNowInCar = "div.car-info a[href*='29'].book-btn";
    bookNowTour = "div.tour-info~a[href*='stonehenge-34']";
    checkInDate = "input#check-in-time";
    checkOutDate = "input#check-out-time";
    pickUpField = "#pick-up-location";
    dropOffField = "#drop-off-location";
    insertAdult = "select#adults option[value='2']";
    insertChild = "select#children option[value='5']";
    expectedPartOfPage = ".additional-info";
    pickUpFromYerevan = "#pick-up-location option[value='Yerevan Office']";
    dropOffYerevanAirport = "#drop-off-location option[value='Yerevan Airport']";
    dailyTours = "a[href*='daily-tours']";
    tourFieldForAdult = "#tour-adults";
    tourFieldForAdultWithData = "#tour-adults option[value='6']";
    tourFieldForCholdrenWithData = "#tour-children option[value='10']";

    async openReservationSectionForAccommodation() {

        await page.dropDownMenu(this.accommodationDropDown, this.accommodationInYerevan);
        await ($(this.bookNowInaccommodation)).click();
        await ($(this.checkInDate)).click();
        await ($(this.checkOutDate)).click();
        await ($(this.insertAdult)).click();
        await ($(this.insertAdult)).click();
        await ($(this.insertChild)).click();
    };

    async expectedResult() {
        await expect($(this.expectedPartOfPage)).toBeDisplayed();
    };

    async openReservationPartForCars() {
        await page.dropDownMenu(this.carDropDown, this.carCheckClass);
        await ($(this.bookNowInCar)).click();
        await ($(this.pickUpField)).click();
        await ($(this.pickUpFromYerevan)).click();
        await ($(this.dropOffField)).click();
        await ($(this.dropOffYerevanAirport)).click();
    };

    async openReservationPartForTours() {
        await page.dropDownMenu(this.toursDropDownMenu, this.dailyTours);
        await ($(this.bookNowTour)).click();
        await ($(this.tourFieldForAdult)).click();
        await ($(this.tourFieldForAdultWithData)).click();
        await ($(this.tourFieldForCholdrenWithData)).click();
    };
}