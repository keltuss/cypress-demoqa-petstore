import BasePageDemoQa from "../../basePage/basePageDemoQa";

class TextBoxPage extends BasePageDemoQa {

    constructor() {
        super();
        this.pageUrl = '/text-box';
    }

    visit() {
        super.visit(this.pageUrl);
    }



    fillForm({ name, email, currentAddress, permanentAddress } = {}) {
        const fields = {
            '#userName': name,
            '#userEmail': email,
            '#currentAddress': currentAddress,
            '#permanentAddress': permanentAddress
        };

        Object.entries(fields).forEach(([selector, value]) => {
            if (value !== undefined) this.type(selector, value);
        });
    }

    submitForm() {
        this.clickElement('#submit');
    }

    checkOutputVisibility(visible = true) {
        cy.get('#output')
            .should(visible ? 'be.visible' : 'not.be.visible');
    }

    checkEmailFieldError() {
        cy.get('#userEmail')
            .should('have.class', 'field-error');
    }
}

export default new TextBoxPage();