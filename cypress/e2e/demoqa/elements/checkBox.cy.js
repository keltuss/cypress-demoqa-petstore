import checkBoxPage from "../../../support/pages/elements/checkBoxPage";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Checkbox testing',() => {
    beforeEach(() => {
        checkBoxPage.visit();
    })

    it('Expand and collapse all buttons working', () => {
        checkBoxPage.expandAll();
        checkBoxPage.collapseAll();
    });

    it('Checkbox working to pick and unpick', () => {
        checkBoxPage.toggleFirstCheckbox();
        checkBoxPage.checkFirstCheckboxChecked();

        checkBoxPage.toggleFirstCheckbox();
        checkBoxPage.checkFirstCheckboxUnchecked();
    });

    it('Toggle buttons open and close', () => {
        checkBoxPage.toggleFirstNode();
        checkBoxPage.checkFirstNodeOpened();
        checkBoxPage.toggleSecondNode();
        checkBoxPage.checkSecondNodeOpened();
    });
});