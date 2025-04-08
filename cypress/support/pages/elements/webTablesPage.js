class webTablesPage {
    visit() {
        cy.visit('/webtables')
    }

    searchByName() {
        cy.get('#searchBox')
            .click()
            .clear()
            .type('Cierra')
        cy.contains('div.rt-td', 'Cierra').eq(0)
    }

        searchBySurname() {
        cy.get('#searchBox')
            .click()
            .clear()
            .type('Vega')
        cy.contains('div.rt-td', 'Vega')
            .eq(0)
    }

        searchByAge() {
        cy.get('#searchBox')
            .click()
            .clear()
            .type('39')
        cy.contains('div.rt-td', '39')
            .eq(0)
    }

        searchByEmail() {
        cy.get('#searchBox')
            .click()
            .clear()
            .type('cierra@example.com')
        cy.contains('div.rt-td', 'cierra@example.com')
            .eq(0)
    }

        searchBySalary() {
        cy.get('#searchBox')
            .click()
            .clear()
            .type('10000')
        cy.contains('div.rt-td', '10000')
            .eq(0)
    }

        searchByDepartment() {
        cy.get('#searchBox')
            .click()
            .clear()
            .type('Insurance')
        cy.contains('div.rt-td', 'Insurance')
            .eq(0)
    }

        clickAddButton() {
        cy.get('#addNewRecordButton')
            .should('be.visible')
            .click()
        }

        addingPerson(name, lastName, email, age, salary, department) {
            {
                if (name) cy.get('input[id="firstName"]')
                    .click()
                    .clear().
                    type(name);
                if (lastName) cy.get('input[id="lastName"]')
                    .click()
                    .clear()
                    .type(lastName);
                if (email) cy.get('input[id="userEmail"]')
                    .click()
                    .clear()
                    .type(email);
                if (age) cy.get('input[id="age"]')
                    .click()
                    .clear()
                    .type(age);
                if (salary) cy.get('input[id="salary"]')
                    .click()
                    .clear()
                    .type(salary)
                if (department) cy.get('input[id="department"]')
                    .click()
                    .clear()
                    .type(department)
            }
        }

        formForAddingDisappeared() {
        cy.get('div[class="modal-content"]').should('not.be.visible')
        }

        wrongEmailValidity () {
            cy.get('input[id="userEmail"]')
                .then(($input) => {expect($input[0].checkValidity()).to.be.false;});
        }

        wrongSalaryValidity () {
            cy.get('input[id="salary"]')
                .then(($input) => {expect($input[0].checkValidity()).to.be.false;});
        }

        clickSubmitButton() {
        cy.get('button[id="submit"]')
            .should('be.visible')
            .click()
        }

        editingData() {
            cy.get('#edit-record-1')
                .click()
            cy.get('input[id="firstName"]')
                .dblclick()
                .clear()
                .type('Victoria')
            cy.get('button[id="submit"]')
                .click()
            cy.get('#searchBox')
                .click()
                .type('Victoria')
            cy.contains('div.rt-td', 'Victoria')
                .eq(0)
        }

        deletingPeopleFromTable() {
            cy.get('#delete-record-1')
                .click()
            cy.contains('td', 'Cierra')
                .should('not.exist')
        }

        selectingRows() {
            cy.get('select[aria-label="rows per page"]')
                .select('5')
                .select('10')
                .select('20')
                .select('25')
                .select('50')
                .select('100')
        }
}

export default new webTablesPage();