class BasePageDemoQa {
    visit(path) {
        cy.visit(path);
    }

    clickElement(selector, text) {
        const element = text ? cy.contains(selector, text) : cy.get(selector);
        element
            .should('be.visible')
            .click();
    }

    type(selector, text) {
        cy.get(selector)
            .should('be.visible')
            .clear()
            .type(text);
    }

    shouldBeVisible(selector, text = null) {
        if (text) {
            cy.get(selector)
                .contains(text)
                .should('be.visible');
        }
        else
        {
            cy.get(selector)
                .should('be.visible');
        }
    }

    shouldContainText(selector, text) {
        cy.get(selector)
            .should('be.visible')
            .and('contain', text);
    }

    shouldBeVisibleWithText(selector, text) {
        cy.get(selector)
            .should('be.visible').and('contain', text);
    }
}

export default BasePageDemoQa;