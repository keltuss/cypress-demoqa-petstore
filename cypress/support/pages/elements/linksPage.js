class linksPage {
    visit() {
        cy.visit('/links');
    }

    testApiLink(linkId, endpoint, expectedStatus) {
        cy.intercept('GET', `**/${endpoint}`).as(`${endpoint}Request`);

        cy.get(`#${linkId}`).click();

        cy.wait(`@${endpoint}Request`).its('response.statusCode').should('eq', expectedStatus);

        cy.get('#linkResponse').should('contain', `${expectedStatus}`);
    }

    checkSimpleLink(selector, expectedUrl, linkName) {
        cy.get(selector)
            .should('have.attr', 'href', expectedUrl)
            .and('have.attr', 'target', '_blank')
            .click();
    }

    checkDynamicLink(selector) {
        cy.get(selector).invoke('attr', 'href').then((href) => {
            cy.get(selector).invoke('removeAttr', 'target');
            cy.get(selector).click();

            cy.url().then((currentUrl) => {
                const normalizedCurrentUrl = currentUrl.endsWith('/') ? currentUrl.slice(0, -1) : currentUrl;
                const normalizedHref = href.endsWith('/') ? href.slice(0, -1) : href;

                expect(normalizedCurrentUrl).to.equal(normalizedHref);
            });
        });
    }
}

export default new linksPage();