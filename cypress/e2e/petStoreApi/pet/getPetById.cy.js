import { petData } from "../../../support/apiData/petData";

describe('GET /pet/{petId}', () => {

    it('should return the pet by ID', () => {
        cy.request({
            method: 'GET',
            url: `https://petstore.swagger.io/v2/pet/${petData.id}`
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id', petData.id);
        });
    });

    it('should return 404 for non-existent pet ID', () => {
        const nonExistentId = 999999999;

        cy.request({
            method: 'GET',
            url: `https://petstore.swagger.io/v2/pet/${nonExistentId}`,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404);
            expect(response.body.message).to.include('Pet not found');
        });
    });
});