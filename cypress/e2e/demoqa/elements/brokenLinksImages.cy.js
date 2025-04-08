import brokenLinksPage from "../../../support/pages/elements/brokenLinksPage";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});


describe('Broken Links', () => {

    beforeEach(() => {
        brokenLinksPage.visit();
    })

    it('Valid Image Link',() =>{
        brokenLinksPage.validImageExpect();
        brokenLinksPage.validImageRequest();
    });

    it('Broken Image Link',() =>{
        brokenLinksPage.brokenImageExpect();
        brokenLinksPage.brokenImageRequest();
    });

    it('Valid Link',() =>{
        brokenLinksPage.validLinkGet();
        brokenLinksPage.validLinkRequest();
    });

    it('Broken Link',() =>{
        brokenLinksPage.brokenLinkGet();
        brokenLinksPage.brokenLinkRequest();
    });
})