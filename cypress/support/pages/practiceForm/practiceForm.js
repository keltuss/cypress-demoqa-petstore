class practiceForm {
    visit() {
        cy.visit('/automation-practice-form')
    }

    fillTextFields(name, lastName, email, mobile, currentAddress) {

            if (name) cy.get('#firstName')
                .click()
                .clear().
                type(name);
            if (lastName) cy.get('#lastName')
                .click()
                .clear()
                .type(lastName);
            if (email) cy.get('#userEmail')
                .click()
                .clear()
                .type(email);
            if (mobile) cy.get('#userNumber')
                .click()
                .clear()
                .type(mobile);
            if (currentAddress) cy.get('#currentAddress')
                .click()
                .clear()
                .type(currentAddress);
    }

    selectGender() {
        cy.get('label[for="gender-radio-1"]')
            .click();
    }

    selectDateOfBirth() {
        cy.get('#dateOfBirthInput')
            .click()

        cy.get('select[class="react-datepicker__year-select"]')
            .select('2000')

        cy.get('select[class="react-datepicker__month-select"]')
            .select('January')

        cy.get('.react-datepicker__day')
            .not('.react-datepicker__day--outside-month')
            .contains('1')
            .click()

        cy.get('#dateOfBirthInput')
            .should('have.value', '01 Jan 2000');
    }

    selectSubjects() {
        cy.get('div[class="subjects-auto-complete__input"]')
            .click()
            .type('Math{enter}')
            .type('English{enter}');
    }

    selectHobbies() {
        cy.get('label[for="hobbies-checkbox-1"]')
            .should('be.visible')
            .click()
        cy.get('label[for="hobbies-checkbox-2"]')
            .should('be.visible')
            .click()
    }

    uploadFile() {
        const fileName = 'test-image.png';
        cy.get('#uploadPicture')
            .should('be.visible');
        cy.get('#uploadPicture')
            .attachFile(fileName);
    }

    selectStateAndCity() {
        cy.get('div[id="state"]')
            .should('be.visible')
            .type('NCR{enter}');
        cy.get('div[id="city"]')
            .should('be.visible')
            .type('Delhi{enter}');
    }

    submitForm() {
        cy.get('#submit')
            .should('be.visible')
            .click();
    }

    successFormAssertion() {
        cy.get('#closeLargeModal')
            .should('be.visible')
            .click();
    }

    invalidFormAssertion() {
        cy.get('#closeLargeModal')
            .should('not.exist')
    }
}

export default new practiceForm();