import Page from '../pages/page.js';
import viewPage from '../pages/viewPage.js';

const page = new Page();

describe("Checking currency changing", () => {

  beforeEach(async () => {
    await page.open();
  });

  it("Verify Default Currency Display", async () => {
    await viewPage.currencyByDefault(viewPage.usd);
  });

  it("Verify Currency Dropdown Visibility", async () => {
    await viewPage.dropDownMenu();
  });

  it("Verify Currency Selection", async () => {
    await viewPage.changeCurrency();
  });
})
