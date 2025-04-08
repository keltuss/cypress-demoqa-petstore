import buttonsPage from "../../../support/pages/elements/buttonsPage";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});


describe('Buttons', () => {

    beforeEach(() => {
        buttonsPage.visit();
    })

    it('Double Click',function () {
        buttonsPage.doubleClick();
        buttonsPage.doubleClickAssertion()
    });

    it('Right Click', function (){
       buttonsPage.rightClick();
       buttonsPage.rightClickAssertion();
    });

    it('One Click', function () {
        buttonsPage.oneClick();
        buttonsPage.oneClickAssertion();
    });
})