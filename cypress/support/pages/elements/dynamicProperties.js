class dynamicProperties {
    visit() {
        cy.visit('/dynamic-properties')
    }

    randomIdTextIsVisible() {
        cy.contains('p', 'This text has random Id')
            .should('be.visible')
    }

    firstButtonDisabled() {
        cy.get('#enableAfter')
            .should('be.disabled')
    }

    firstButtonEnablesAfterFiveSeconds() {
        cy.get('#enableAfter', {timeout: 6000})
            .should('not.be.disabled')
            .and('be.enabled')
            .and('be.visible');
    }

    secondButtonStartColorAssertion() {
        cy.get('#colorChange')
            .should('have.css', 'color', 'rgb(255, 255, 255)')
    }

    secondButtonChangedColor() {
        cy.get('#colorChange', {timeout: 6000})
            .should('have.css', 'color', 'rgb(220, 53, 69)')
            .and('not.have.css', 'color', 'rgb(255, 255, 255)')
    }

    thirdButtonVisibleAfterFiveSeconds() {
        cy.clock();
        cy.tick(6000);
        cy.get('#visibleAfter')
            .should('be.enabled')
            .and('be.visible')
    }
}

export default new dynamicProperties();