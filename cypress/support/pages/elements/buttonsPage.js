class buttonPage {
    visit() {
        cy.visit('/buttons');
    }

    doubleClick() {
        cy.get('#doubleClickBtn')
            .should('exist')
            .and('be.visible')
            .dblclick();
    }

    doubleClickAssertion() {
            cy.get('#doubleClickMessage')
                .should('be.visible');
    }

    rightClick() {
        cy.get('#rightClickBtn')
            .should('exist')
            .and('be.visible')
            .rightclick();
    }

    rightClickAssertion() {
        cy.get('#rightClickMessage')
            .should('exist');
    }

    oneClick() {
        cy.contains('button', /^Click Me$/)
            .should('exist')
            .and('be.visible')
            .click();
    }

    oneClickAssertion() {
        cy.get('#dynamicClickMessage')
            .should('be.visible');
    }
}

export default new buttonPage();