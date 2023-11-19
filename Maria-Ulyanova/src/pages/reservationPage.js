import Page from "./page.js";
import { testingData } from '../resources/testingData.js';

export default new class ReservationPage extends Page {
    agreeButton = "div.terms-content input.check-box";
    bookButton = "#disableBtn";
    firstNameInputField = "input[name='first_name']";
    lastNameInputField = "input[name='last_name']";
    phoneInputField = "input[name='phone']";
    emailInputField = "input[name='email']";
    ageField = "#age";
    ageFieldWithData = "#age option[value='24']";
    nationalityField = "#nationality";
    nationalityFieldWithDat = "#nationality option[value='Aruba']";
    expectError = "div.notfound-404";

    async filledReservationField() {
        await ($(this.agreeButton)).click();
        await $(this.bookButton).scrollIntoView({ block: "center", inline: "center" });
        await $(this.bookButton).click({ force: true });
        await browser.pause(5000);
        await ($(this.firstNameInputField)).waitForDisplayed();
        await ($(this.firstNameInputField)).setValue(testingData.data.firstName);
        await ($(this.lastNameInputField)).setValue(testingData.data.lastName);
        await ($(this.phoneInputField)).setValue(testingData.data.phoneNumber);
        await ($(this.emailInputField)).setValue(testingData.data.email);
        await ($(this.ageField)).click();
        await ($(this.ageFieldWithData)).click();
        await ($(this.nationalityField)).click();
        await ($(this.nationalityFieldWithDat)).click();
    };
}