class brokenLinksPage {
    visit() {
        cy.visit('/broken')
    }

    validImageExpect() {
        cy.get('img[src="/images/Toolsqa.jpg"]').should('be.visible')
            .and(($img) => {
                expect($img[0].naturalWidth).to.be.greaterThan(0);
                expect($img[0].naturalHeight).to.be.greaterThan(0);
            });
    }

    validImageRequest() {
        cy.request('https://demoqa.com/images/Toolsqa.jpg')
            .its('status')
            .should('eq', 200);
    }

    brokenImageExpect() {
        cy.get('img[src="/images/Toolsqa_1.jpg"]')
            .should('be.visible')
            .and(($img) => {
                expect($img[0].naturalWidth).to.equal(0);
                expect($img[0].naturalHeight).to.equal(0);
            });
    }

    brokenImageRequest() {
        cy.request({
            url: 'https://demoqa.com/images/Toolsqa_1.jpg',
            failOnStatusCode: false,
        })
            .its('status')
            .should('eq', 200);
    }

    validLinkGet() {
        cy.contains('a', 'Valid Link')
    }

    validLinkRequest() {
        cy.request('https://demoqa.com')
            .its('status')
            .should('eq', 200);
    }

    brokenLinkGet() {
        cy.contains('a', 'Broken Link')
    }

    brokenLinkRequest() {
        cy.request({
            url: 'https://the-internet.herokuapp.com/status_codes/500',
            failOnStatusCode: false,
        })
            .its('status')
            .should('eq', 500)
    }
}

export default new brokenLinksPage();