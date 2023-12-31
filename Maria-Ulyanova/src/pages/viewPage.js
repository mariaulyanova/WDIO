import { expect } from 'chai';
import Page from './page.js';
import mainPage from './mainPage.js';

export default new class ViewPage extends Page {
    currencyDropDownMenu = "li.dropdown:nth-child(9)";
    usd = "USD";
    amd = "AMD";
    rub = "RUB";
    eur = "EUR";

    currentCurrency = currency => `a[href*='${currency}']`;

    async currencyByDefault(currency) {
        const defaultCurrencyText = await $(this.currentCurrency(currency)).getText();
        expect(defaultCurrencyText).to.be.eql(currency);
    };

    async dropDownMenu() {
        await $(mainPage.filmstripBlock()).scrollIntoView({ block: "center", inline: "center" });
        await browser.$(this.currencyDropDownMenu).moveTo();
        expect(await $(this.currencyDropDownMenu).isDisplayed(), 'Currency Dropdown is not visible').to.be.true;
    };

    async changeCurrency() {
        const currencyButton = await $(this.currencyDropDownMenu);

        async function selectCurrencyAndCheck(currencyOption, expectedCurrency) {
            await currencyButton.click();
            await $(currencyOption).click();
            await $(mainPage.filmstripBlock()).scrollIntoView({ block: "center", inline: "center" });

            const currencyButtonText = await currencyButton.getText();

            expect(currencyButtonText, 'Currency was not changed to the expected value').to.equal(expectedCurrency);
        }
        await selectCurrencyAndCheck(this.currentCurrency(this.amd), this.amd);
        await selectCurrencyAndCheck(this.currentCurrency(this.rub), this.rub);
        await selectCurrencyAndCheck(this.currentCurrency(this.eur), this.eur);
    };
}
