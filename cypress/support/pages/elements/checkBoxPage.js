class CheckBoxPage {
    visit() {
        cy.visit('/checkbox');
    }

    expandAll() {
        cy.get('button[aria-label="Expand all"]')
            .should('be.visible')
            .and('not.be.disabled')
            .click();
    }

    collapseAll() {
        cy.get('button[aria-label="Collapse all"]')
            .should('be.visible')
            .and('not.be.disabled')
            .click();
    }

    toggleFirstCheckbox() {
        cy.get('span[class="rct-checkbox"]')
            .first()
            .click();
    }

    checkFirstCheckboxChecked() {
        cy.get('span[class="rct-checkbox"]')
            .eq(0)
            .find('svg')
            .should('have.class', 'rct-icon-check');
    }

    checkFirstCheckboxUnchecked() {
        cy.get('span[class="rct-checkbox"]')
            .first()
            .find('svg')
            .should('have.class', 'rct-icon-uncheck');
    }

    toggleFirstNode() {
        cy.get('svg[class="rct-icon rct-icon-expand-close"]')
            .eq(0)
            .click();
    }

    toggleSecondNode() {
        cy.get('svg[class="rct-icon rct-icon-expand-close"]')
            .eq(0)
            .click()
    }

    checkFirstNodeOpened() {
        cy.get('svg[class="rct-icon rct-icon-expand-open"]')
            .eq(0);
    }

    checkSecondNodeOpened() {
        cy.get('svg[class="rct-icon rct-icon-expand-open"]')
            .eq(1);
    }
}

export default new CheckBoxPage();