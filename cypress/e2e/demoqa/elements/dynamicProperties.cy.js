import DynamicProperties from "../../../support/pages/elements/dynamicProperties";
import dynamicProperties from "../../../support/pages/elements/dynamicProperties";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});


describe('Dynamic properties', () => {

    beforeEach(() => {
        dynamicProperties.visit();
    })

    it('Random ID text', () => {
        dynamicProperties.randomIdTextIsVisible();
    })

    it('First button enables after 5 seconds', () => {
        dynamicProperties.firstButtonDisabled();
        dynamicProperties.firstButtonEnablesAfterFiveSeconds();
    })

    it('Second button text color changes', () => {
        dynamicProperties.secondButtonStartColorAssertion();
        dynamicProperties.secondButtonChangedColor();
    })

    it('Third button visible after 5 seconds', () => {
        dynamicProperties.thirdButtonVisibleAfterFiveSeconds();
    })







})