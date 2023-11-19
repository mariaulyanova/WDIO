export default class Page {
    refreshButton = "div a img[src='https://irent.am/storage/settings/May2019/wFaI6ka81nZoy2S3PruX.jpg']";

    async open(url = '') {
        await browser.maximizeWindow();
        await browser.url(`https://irent.am/${url}`);
    };

    async scrollAndClick(scrollTo, clickTo) {
        await ($(scrollTo)).scrollIntoView({ block: "center", inline: "center" });
        await ($(clickTo)).click({ force: true });
    };

    async dropDownMenu(path, choosePosition) {
        await browser.$(path).moveTo();
        await $(choosePosition).click();
    };
}