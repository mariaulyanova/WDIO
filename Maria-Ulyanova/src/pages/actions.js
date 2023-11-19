export default new class Actions {

    async clickButton(path) {
        await $(path).scrollIntoView();
        await $(path).waitForClickable();
        await $(path).click({force : true});
    }; 

    async clickRefreshButton() {
        const refreshButton = "div a img[src='https://irent.am/storage/settings/May2019/wFaI6ka81nZoy2S3PruX.jpg']";
        await $(refreshButton).scrollIntoView();
        await $(refreshButton).waitForClickable();
        await $(refreshButton).click({force : true});
    };

    async inputValue(path, text) {
        await $(path).waitForDisplayed();
        await $(path).setValue(text);
    };

    async expectedResult() {
        const expectedPartOfPage = ".additional-info";
        await expect($(expectedPartOfPage)).toBeDisplayed();
    };

    async dropDownMenu(path, choosePosition) {
        await browser.$(path).moveTo();
        await $(choosePosition).click();
    };

    async visibleOFFilmstrips () {
        await ($("div#apartments > h4")).scrollIntoView({ block: "center", inline: "center" });
        expect($("section#cars:nth-child(4)")).toBeDisplayed();
  
        await ($("section#cars:nth-child(6)")).scrollIntoView({ block: "center", inline: "center" });
        expect($("section#cars:nth-child(6)")).toBeDisplayed();
  
        await ($("#tours > h4")).scrollIntoView({ block: "center", inline: "center" });
        expect($("#cars:nth-child(8)")).toBeDisplayed();
  
        await ($("#guides > h4")).scrollIntoView({ block: "center", inline: "center" });
        expect($("#cars:nth-child(10)")).toBeDisplayed(); 
    };

    async scrollAndClick(scrollTo, clickTo) {
        await ($(scrollTo)).scrollIntoView({ block: "center", inline: "center" });
        await ($(clickTo)).click();
    };
}