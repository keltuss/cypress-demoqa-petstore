import TextBoxPage from "../../../support/pages/elements/textBoxPage";

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Text Box Testing', () => {
  beforeEach(function () {
    TextBoxPage.visit();
    cy.fixture('testData').as('data');
  })

  it('Success form filling', function () {
    TextBoxPage.fillForm(this.data.textBox.validUser);
    TextBoxPage.submitForm();
    TextBoxPage.checkOutputVisibility(true);
  });

  it('Filling with invalid email', function () {
    TextBoxPage.fillForm(this.data.textBox.invalidUser);
    TextBoxPage.submitForm();
    TextBoxPage.checkEmailFieldError();
  });

  it('Sending empty form', function () {
    TextBoxPage.fillForm();
    TextBoxPage.submitForm();
    TextBoxPage.checkOutputVisibility(false);
  })
})