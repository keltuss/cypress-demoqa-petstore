import radioButtonsPage from "../../../support/pages/elements/radioButtonsPage";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});


describe('Radio buttons testing', () => {

    beforeEach(() => {
        radioButtonsPage.visit()
    })

    it('Yes button checking', () => {
        radioButtonsPage.yesButton();
        radioButtonsPage.yesButtonProof();
    })

    it('Impressive button checking', () => {
        radioButtonsPage.impressiveButton();
        radioButtonsPage.impressiveButtonProof();
    })

        it('No button checking', () => {
        radioButtonsPage.noButton();
    })
})