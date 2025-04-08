import linksPage from "../../../support/pages/elements/linksPage";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Links Testing', () => {
    beforeEach(() => {
        linksPage.visit();
    });

    it('Simple Link', () => {
        linksPage.checkSimpleLink('#simpleLink', 'https://demoqa.com');
    });

    it('Dynamic Link', () => {
        linksPage.checkDynamicLink('#dynamicLink');
    });

    it('should return 201', () => {
        linksPage.testApiLink('created', 'created', 201);
    });

    it('should return 204', () => {
        linksPage.testApiLink('no-content', 'no-content', 204);
    });

    it('should return 403', () => {
        linksPage.testApiLink('forbidden', 'forbidden', 403);
    });

    it('should return 404', () => {
        linksPage.testApiLink('invalid-url', 'invalid-url', 404);
    });

    it('should return 301', () => {
        linksPage.testApiLink('moved', 'moved', 301);
    });

    it('should return 301', () => {
        linksPage.testApiLink('bad-request', 'bad-request', 400);
    });

    it('should return 301', () => {
        linksPage.testApiLink('unauthorized', 'unauthorized', 401);
    });
});