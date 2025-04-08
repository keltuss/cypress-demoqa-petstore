class radioButtonsPage {
    visit() {
        cy.visit('/radio-button');
    }

    yesButton() {
        cy.get('label[for="yesRadio"]')
            .should('be.visible')
            .and('not.be.disabled')
            .click()
    }

    yesButtonProof() {
        cy.get('span[class="text-success"]')
            .invoke('text')
            .should('equal', 'Yes')
    }

    impressiveButton() {
        cy.get('label[for="impressiveRadio"]')
            .should('be.visible')
            .and('not.be.disabled')
            .click()
    }

    impressiveButtonProof() {
        cy.get('span[class="text-success"]')
            .invoke('text')
            .should('equal', 'Impressive')
    }

    noButton() {
        cy.get('label[for="noRadio"]')
            .should('have.css', 'cursor', 'not-allowed')
    }
}

export default new radioButtonsPage();