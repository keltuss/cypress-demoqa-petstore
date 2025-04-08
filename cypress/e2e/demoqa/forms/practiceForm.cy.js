import practiceForm from "../../../support/pages/practiceForm/practiceForm";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Practice form', () => {

    beforeEach( function() {
        cy.fixture('testData').as('data');
        practiceForm.visit();
    });

    it('Full Filling Form With Valid Data', function () {
        const user = this.data.practiceForm.validFillTextFields;
        practiceForm.fillTextFields(user.firstName, user.lastName, user.email, user.mobile, user.address);
        practiceForm.selectGender();
        practiceForm.selectDateOfBirth();
        practiceForm.selectSubjects();
        practiceForm.selectHobbies();
        practiceForm.uploadFile();
        practiceForm.selectStateAndCity();
        practiceForm.submitForm();
        practiceForm.successFormAssertion();
    });

        it('Empty form', function ()  {
            const user = this.data.practiceForm.invalidFillTextFields;
            practiceForm.fillTextFields(user.firstName, user.lastName, user.email, user.mobile, user.address);
            practiceForm.submitForm();
            practiceForm.invalidFormAssertion();
    });
});